import "server-only";

import { and, eq, gte } from "drizzle-orm";
import { createEmptyCard } from "ts-fsrs";
import { units } from "@/content";

import { hookFor } from "@/content/hooks";
import type { Phrase, Unit, VocabItem } from "@/content/types";
import { db } from "@/db";
import {
  cards,
  dailyActivity,
  reviewLogs,
  unitProgress,
  userSettings,
} from "@/db/schema";
import { localDateString } from "@/lib/dates";
import {
  cardDefById,
  deepenDefs,
  isRetired,
  newWordDefs,
  vocabClozeText,
  type CardDef,
  type ResolvedCardDef,
} from "@/lib/srs/cardDefs";
import { rowToFsrsCard, type CardRow } from "@/lib/srs/mapping";
import { previewIntervals, State } from "@/lib/srs/scheduler";
import { activeUnitStatus, computeUnitStatuses } from "./progress";
import { buildReader } from "./reader";
import type {
  ChoiceItem,
  ClozeItem,
  DrillItem,
  ExerciseItem,
  FlashcardItem,
  HookInfo,
  IntervalPreview,
  IntroItem,
  ListeningItem,
  SessionPlan,
  TileSet,
  TypeItem,
  WordBankItem,
} from "./types";

// A session is one short ROUND, not the whole day's work in one sitting:
// small batches keep working memory free and every round ends on a win.
const REVIEW_CAP = 20; // reviews per round
const NEW_PER_ROUND = 5; // brand-new words per round
const DEEPEN_PER_ROUND = 6; // follow-up cards (say it / use it) per round
// With this many reviews waiting, nothing new is added: piling new words on
// top of a backlog is how spaced repetition buries people.
const BACKLOG_HOLD = 40;
const MATURE_STABILITY_DAYS = 4;
const TYPE_MAX_LEN = 18;
const GRAMMAR_GATE = 0.6; // grammar lesson appears at 60% of unit vocab introduced
const GRAMMAR_CLOZE_INTRO_CAP = 4;
const BONUS_DRILLS = 10;

// --- deterministic per-user-per-day shuffle -------------------------------

function hashSeed(s: string): number {
  let h = 1779033703 ^ s.length;
  for (let i = 0; i < s.length; i++) {
    h = Math.imul(h ^ s.charCodeAt(i), 3432918353);
    h = (h << 13) | (h >>> 19);
  }
  return h >>> 0;
}

function mulberry32(seed: number): () => number {
  let a = seed;
  return () => {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function shuffled<T>(arr: T[], rand: () => number): T[] {
  const out = [...arr];
  for (let i = out.length - 1; i > 0; i--) {
    const j = Math.floor(rand() * (i + 1));
    [out[i], out[j]] = [out[j], out[i]];
  }
  return out;
}

// --- how hard to make a card ------------------------------------------------

/**
 * Support fades as a card proves itself: brand-new cards are multiple
 * choice, young cards are assembled from tiles, and only cards that have
 * stuck for days ask for free typing.
 */
type Level = "new" | "young" | "mature";

function levelOf(row: CardRow | undefined): Level {
  if (!row) return "new";
  return row.state === State.Review && row.stability >= MATURE_STABILITY_DAYS
    ? "mature"
    : "young";
}

// --- item builders --------------------------------------------------------

function vocabExample(v: VocabItem) {
  return { af: v.exampleAf, en: v.exampleEn };
}

function hookInfo(v: VocabItem | undefined): HookInfo | undefined {
  const h = v && hookFor(v.id);
  return h ? { kind: h.kind, text: h.hook } : undefined;
}

function pickDistinct(pool: string[], exclude: string[], n: number, rand: () => number): string[] {
  const seen = new Set(exclude.map((x) => x.toLowerCase()));
  const out: string[] = [];
  for (const cand of shuffled(pool, rand)) {
    const key = cand.toLowerCase();
    if (seen.has(key)) continue;
    seen.add(key);
    out.push(cand);
    if (out.length === n) break;
  }
  return out;
}

type ChoiceBody = Omit<ChoiceItem, "kind" | "cardId" | "intervals" | "isNew">;

function choiceBody(
  def: ResolvedCardDef,
  unit: Unit,
  direction: "af-en" | "en-af",
  rand: () => number,
): ChoiceBody {
  const side = (x: VocabItem | Phrase) => (direction === "af-en" ? x.en : x.af);
  if (def.vocab) {
    const v = def.vocab;
    const others = unit.vocab.filter(
      (x) => x.id !== v.id && x.en !== v.en && x.af !== v.af,
    );
    const samePos = others.filter((x) => x.pos === v.pos);
    const pool = samePos.length >= 3 ? samePos : others;
    const options = shuffled(
      [side(v), ...pickDistinct(pool.map(side), [side(v)], 3, rand)],
      rand,
    );
    return {
      direction,
      prompt: direction === "af-en" ? v.af : v.en,
      options,
      correct: options.indexOf(side(v)),
      af: v.af,
      en: v.en,
      pron: v.pron,
      hook: hookInfo(v),
      example: vocabExample(v),
      ttsText: v.af,
    };
  }
  const p = def.phrase!;
  const pool = unit.phrases.filter((x) => x.id !== p.id).map(side);
  const options = shuffled(
    [side(p), ...pickDistinct(pool, [side(p)], 3, rand)],
    rand,
  );
  return {
    direction,
    prompt: direction === "af-en" ? p.af : p.en,
    options,
    correct: options.indexOf(side(p)),
    af: p.af,
    en: p.en,
    ttsText: p.af,
  };
}

function buildIntro(def: ResolvedCardDef): IntroItem {
  if (def.vocab) {
    const v = def.vocab;
    return {
      kind: "intro",
      id: `intro-${v.id}`,
      af: v.af,
      en: v.en,
      isPhrase: false,
      pron: v.pron,
      hook: hookInfo(v),
      emoji: hookFor(v.id)?.emoji,
      example: vocabExample(v),
      ttsText: v.af,
    };
  }
  const p = def.phrase!;
  return {
    kind: "intro",
    id: `intro-${p.id}`,
    af: p.af,
    en: p.en,
    isPhrase: true,
    ttsText: p.af,
  };
}

function buildDrill(
  def: ResolvedCardDef,
  unit: Unit,
  direction: "af-en" | "en-af",
  tag: string,
  rand: () => number,
): DrillItem {
  return {
    kind: "drill",
    id: `dr-${tag}-${def.itemId}`,
    ...choiceBody(def, unit, direction, rand),
  };
}

function buildFlashcard(
  def: ResolvedCardDef,
  intervals: IntervalPreview,
): FlashcardItem {
  if (def.vocab) {
    return {
      kind: "flashcard",
      cardId: def.cardId,
      front: def.vocab.af,
      back: def.vocab.en,
      pron: def.vocab.pron,
      hook: hookInfo(def.vocab),
      example: vocabExample(def.vocab),
      ttsText: def.vocab.af,
      intervals,
      isNew: false,
    };
  }
  return {
    kind: "flashcard",
    cardId: def.cardId,
    front: def.phrase!.af,
    back: def.phrase!.en,
    ttsText: def.phrase!.af,
    intervals,
    isNew: false,
  };
}

function buildChoice(
  def: ResolvedCardDef,
  unit: Unit,
  direction: "af-en" | "en-af",
  intervals: IntervalPreview,
  isNew: boolean,
  rand: () => number,
): ChoiceItem {
  return {
    kind: "choice",
    cardId: def.cardId,
    ...choiceBody(def, unit, direction, rand),
    intervals,
    isNew,
  };
}

const DECOY_LETTERS = "aeiouklmnrst".split("");

/** Tiles for an answer, or null when it is too short to be worth spelling. */
function buildTileSet(
  answer: string,
  unit: Unit,
  rand: () => number,
): TileSet | null {
  const clean = answer.normalize("NFC").trim();
  if (/\s/.test(clean)) {
    // Punctuation is dropped so a trailing "." can't give the order away.
    const solution = clean
      .split(/\s+/)
      .map((t) => t.replace(/[.,!?;:]/g, ""))
      .filter(Boolean);
    const decoys = pickDistinct(
      unit.vocab.map((v) => v.af).filter((w) => !/\s/.test(w)),
      solution,
      2,
      rand,
    );
    return { tiles: shuffled([...solution, ...decoys], rand), solution, joiner: " " };
  }
  const solution = Array.from(clean.toLowerCase());
  if (solution.length < 3) return null;
  const decoys = pickDistinct(DECOY_LETTERS, solution, 2, rand);
  return { tiles: shuffled([...solution, ...decoys], rand), solution, joiner: "" };
}

/** EN → AF production, with support matched to how well the card is known. */
function buildProduce(
  def: ResolvedCardDef,
  unit: Unit,
  level: Level,
  intervals: IntervalPreview,
  rand: () => number,
): ExerciseItem {
  const isNew = level === "new";
  const answer = def.vocab ? def.vocab.af : def.phrase!.af;
  const tileSet = buildTileSet(answer, unit, rand);
  const typeable = answer.length <= TYPE_MAX_LEN;
  const wantsTyping = level === "mature" && typeable;
  if (isNew || (!wantsTyping && !tileSet)) {
    return buildChoice(def, unit, "en-af", intervals, isNew, rand);
  }
  const base = def.vocab
    ? {
        promptEn: def.vocab.en,
        answerAf: def.vocab.af,
        accepted: [def.vocab.af, ...(def.vocab.altAf ?? [])],
        pron: def.vocab.pron,
        hook: hookInfo(def.vocab),
        example: vocabExample(def.vocab),
        ttsText: def.vocab.af,
      }
    : {
        promptEn: def.phrase!.en,
        answerAf: def.phrase!.af,
        accepted: [def.phrase!.af, ...(def.phrase!.altAf ?? [])],
        ttsText: def.phrase!.af,
      };
  const item: TypeItem = {
    kind: "type",
    cardId: def.cardId,
    ...base,
    tileSet: wantsTyping ? undefined : (tileSet ?? undefined),
    intervals,
    isNew,
  };
  return item;
}

function matchCase(word: string, like: string): string {
  const first = like.charAt(0);
  return first !== first.toLowerCase()
    ? word.charAt(0).toUpperCase() + word.slice(1)
    : word;
}

function buildCloze(
  def: ResolvedCardDef,
  unit: Unit,
  level: Level,
  intervals: IntervalPreview,
  rand: () => number,
): ClozeItem | null {
  const isNew = level === "new";
  if (def.vocab) {
    const v = def.vocab;
    const cloze = vocabClozeText(v);
    if (!cloze) return null;
    const tileSet = buildTileSet(cloze.answer, unit, rand);
    const typeable = cloze.answer.length <= TYPE_MAX_LEN;
    const wantsTyping = level === "mature" && typeable;
    let options: string[] | undefined;
    if (isNew || (!wantsTyping && !tileSet)) {
      const others = unit.vocab.filter((x) => x.id !== v.id);
      const samePos = others.filter((x) => x.pos === v.pos);
      const pool = (samePos.length >= 3 ? samePos : others).map((x) =>
        matchCase(x.clozeForm ?? x.af, cloze.answer),
      );
      options = shuffled(
        [cloze.answer, ...pickDistinct(pool, [cloze.answer], 3, rand)],
        rand,
      );
    }
    return {
      kind: "cloze",
      cardId: def.cardId,
      textAf: cloze.textAf,
      answer: cloze.answer,
      accepted: [cloze.answer],
      en: v.exampleEn,
      options,
      tileSet: options || wantsTyping ? undefined : (tileSet ?? undefined),
      ttsText: v.exampleAf,
      intervals,
      isNew,
    };
  }
  // Grammar exercise: the hand-written distractors ARE the lesson, so it
  // stays multiple choice until the card is mature.
  const c = def.cloze!;
  return {
    kind: "cloze",
    cardId: def.cardId,
    textAf: c.textAf,
    answer: c.answer,
    accepted: [c.answer],
    en: c.en,
    options:
      level === "mature"
        ? undefined
        : shuffled([c.answer, ...c.distractors], rand),
    ttsText: c.textAf.replace(/\{\{(.+?)\}\}/, "$1"),
    intervals,
    isNew,
  };
}

function itemForDef(
  def: ResolvedCardDef,
  unit: Unit,
  level: Level,
  intervals: IntervalPreview,
  rand: () => number,
): ExerciseItem | null {
  switch (def.kind) {
    case "vocab-rec":
    case "phrase-rec":
      return level === "mature"
        ? buildFlashcard(def, intervals)
        : buildChoice(def, unit, "af-en", intervals, level === "new", rand);
    case "vocab-prod":
    case "phrase-prod":
      return buildProduce(def, unit, level, intervals, rand);
    case "vocab-cloze":
    case "cloze":
      return buildCloze(def, unit, level, intervals, rand);
  }
}

/** Sentence building — only from sentences whose headword is already known. */
function buildWordBanks(
  unit: Unit,
  introduced: ReadonlySet<string>,
  rand: () => number,
): WordBankItem[] {
  const sources = unit.vocab
    .filter((v) => introduced.has(`${v.id}-rec`))
    .map((v) => ({ v, tokens: v.exampleAf.split(/\s+/) }))
    .filter(({ tokens }) => tokens.length >= 4 && tokens.length <= 9);
  const picked = shuffled(sources, rand).slice(0, 1);
  return picked.map(({ v, tokens }) => {
    const distractors = shuffled(
      unit.vocab.filter((x) => !v.exampleAf.toLowerCase().includes(x.af.toLowerCase())),
      rand,
    )
      .slice(0, 2)
      .map((x) => x.af);
    return {
      kind: "wordbank" as const,
      id: `wb-${v.id}`,
      en: v.exampleEn,
      tokens,
      shuffled: shuffled([...tokens, ...distractors], rand),
      ttsText: v.exampleAf,
    };
  });
}

function buildListening(
  unit: Unit,
  introduced: ReadonlySet<string>,
  rand: () => number,
): ListeningItem[] {
  const known = unit.vocab.filter((v) => introduced.has(`${v.id}-rec`));
  if (known.length < 4) return [];
  const picked = shuffled(known, rand).slice(0, 1);
  return picked.map((v) => {
    const distractors = shuffled(
      known.filter((x) => x.id !== v.id && x.en !== v.en),
      rand,
    )
      .slice(0, 3)
      .map((x) => x.en);
    const options = shuffled([v.en, ...distractors], rand);
    return {
      kind: "listening" as const,
      id: `ls-${v.id}`,
      ttsText: v.exampleAf,
      answerAf: v.exampleAf,
      options,
      correct: options.indexOf(v.en),
    };
  });
}

// --- ordering ---------------------------------------------------------------

function take<T>(arr: T[], n: number): T[] {
  return arr.splice(0, n);
}

function insertAtFraction(
  arr: ExerciseItem[],
  item: ExerciseItem,
  fraction: number,
): void {
  const pos = Math.min(arr.length, Math.round(arr.length * fraction));
  arr.splice(pos, 0, item);
}

/**
 * Teach-then-test, to three correct recalls in one sitting:
 *   show A, show B → ask A, ask B (scheduled) → a few other cards →
 *   ask A, B the other way round → … → quick recap of every new word.
 * Reviews fill the gaps, so each recall of a new word happens after a
 * slightly longer delay than the one before.
 */
function weave(
  warmup: ExerciseItem[],
  filler: ExerciseItem[],
  lessons: { intro: IntroItem; ask: ExerciseItem; reverse: DrillItem; recap: DrillItem }[],
  rand: () => number,
): ExerciseItem[] {
  const out: ExerciseItem[] = [...warmup];
  const rest = [...filler];
  let pendingReverse: DrillItem[] = [];
  for (let i = 0; i < lessons.length; i += 2) {
    const pair = lessons.slice(i, i + 2);
    out.push(...pair.map((l) => l.intro), ...pair.map((l) => l.ask));
    out.push(...take(rest, 2));
    out.push(...pendingReverse);
    pendingReverse = pair.map((l) => l.reverse);
    out.push(...take(rest, 1));
  }
  out.push(...take(rest, 2), ...pendingReverse, ...rest);
  if (lessons.length > 0) {
    out.push(...shuffled(lessons.map((l) => l.recap), rand));
  }
  return out;
}

// --- main -----------------------------------------------------------------

export interface SessionOptions {
  /** Extra new words on top of today's target ("teach me more"). */
  extraNew?: number;
}

/** Everything the planner needs, already loaded — no I/O past this point. */
export interface PlanInput {
  userId: string;
  now: Date;
  timezone: string;
  /** Daily target of brand-new words. */
  newTarget: number;
  goalMinutes: number;
  streak: number;
  cardRows: CardRow[];
  progressRows: (typeof unitProgress.$inferSelect)[];
  /** Cards first seen in roughly the last day (to count today's new words). */
  recentNew: { cardId: string; review: Date }[];
  today: { reviews: number; xp: number; minutes: number } | null;
  extraNew?: number;
}

export async function assembleSession(
  userId: string,
  options: SessionOptions = {},
): Promise<SessionPlan> {
  const now = new Date();
  const [settingsRows, cardRows, progressRows, recentNew] = await Promise.all([
    db().select().from(userSettings).where(eq(userSettings.userId, userId)).limit(1),
    db().select().from(cards).where(eq(cards.userId, userId)),
    db().select().from(unitProgress).where(eq(unitProgress.userId, userId)),
    db()
      .select({ cardId: reviewLogs.cardId, review: reviewLogs.review })
      .from(reviewLogs)
      .where(
        and(
          eq(reviewLogs.userId, userId),
          eq(reviewLogs.state, State.New),
          gte(reviewLogs.review, new Date(now.getTime() - 36 * 60 * 60 * 1000)),
        ),
      ),
  ]);
  const settings = settingsRows[0];
  const timezone = settings?.timezone ?? "UTC";
  const [todayRow] = await db()
    .select()
    .from(dailyActivity)
    .where(
      and(
        eq(dailyActivity.userId, userId),
        eq(dailyActivity.localDate, localDateString(now, timezone)),
      ),
    )
    .limit(1);
  return buildPlan({
    userId,
    now,
    timezone,
    newTarget: settings?.dailyNewCards ?? 10,
    goalMinutes: settings?.dailyGoalMinutes ?? 15,
    streak: settings?.currentStreak ?? 0,
    cardRows,
    progressRows,
    recentNew,
    today: todayRow ?? null,
    extraNew: options.extraNew,
  });
}

/** Pure planner: decide what one round contains and in what order. */
export function buildPlan(input: PlanInput): SessionPlan {
  const { userId, now, timezone, cardRows, progressRows, recentNew } = input;
  const today = localDateString(now, timezone);
  const todayRow = input.today;
  const rowById = new Map(cardRows.map((r) => [r.cardId, r]));
  const introduced = new Set(rowById.keys());
  const rand = mulberry32(hashSeed(`${userId}:${today}:${cardRows.length}`));
  const statuses = computeUnitStatuses(introduced, progressRows);
  const active = activeUnitStatus(statuses);
  const unit = active.unit;
  const unitOf = (def: CardDef) =>
    units.find((u) => u.id === def.unitId) ?? unit;

  // 1) Due reviews — oldest first, one round's worth
  const allDue = cardRows
    .filter((r) => r.due.getTime() <= now.getTime() && !isRetired(r, rowById))
    .sort((a, b) => a.due.getTime() - b.due.getTime());
  const dueRows = allDue.slice(0, REVIEW_CAP);
  const reviewItems: ExerciseItem[] = [];
  for (const row of dueRows) {
    const def = cardDefById(row.cardId);
    if (!def) continue; // orphaned id after a content edit — ignore
    const intervals = previewIntervals(rowToFsrsCard(row), now);
    const item = itemForDef(def, unitOf(def), levelOf(row), intervals, rand);
    if (item) reviewItems.push(item);
  }

  // Units the learner has actually worked in (plus the current one):
  // leftovers from earlier units are still taught and still deepen.
  const workedUnits = statuses.filter(
    (s) => s.unlocked && (s.introducedRec > 0 || s.unit.id === unit.id),
  );
  const onHold = allDue.length > BACKLOG_HOLD;
  const emptyIntervals = previewIntervals(createEmptyCard(now), now);

  // 2) Brand-new words: taught, then asked, within today's target
  const newToday = recentNew.filter(
    (r) =>
      r.cardId.endsWith("-rec") &&
      localDateString(r.review, timezone) === today,
  ).length;
  const newTarget = input.newTarget;
  const extra = Math.min(Math.max(input.extraNew ?? 0, 0), 20);
  const budget = onHold ? 0 : Math.max(0, newTarget + extra - newToday);
  const freshDefs = workedUnits.flatMap((s) => newWordDefs(s.unit, introduced));
  const lessonDefs = freshDefs.slice(0, Math.min(budget, NEW_PER_ROUND));
  const lessons = lessonDefs.flatMap((def) => {
    const resolved = cardDefById(def.cardId);
    if (!resolved) return [];
    const u = unitOf(def);
    return [
      {
        intro: buildIntro(resolved),
        ask: buildChoice(resolved, u, "af-en", emptyIntervals, true, rand),
        reverse: buildDrill(resolved, u, "en-af", "rev", rand),
        recap: buildDrill(resolved, u, "af-en", "recap", rand),
      },
    ];
  });

  // 3) Deepening cards for words already met (not counted as new words)
  const snapshots = new Map(
    cardRows.map((r) => [
      r.cardId,
      { state: r.state, stability: r.stability, reps: r.reps },
    ]),
  );
  const deepenItems: ExerciseItem[] = [];
  if (!onHold) {
    const defs = workedUnits
      .flatMap((s) => deepenDefs(s.unit, snapshots, s.grammarDone))
      .slice(0, DEEPEN_PER_ROUND);
    for (const def of defs) {
      const resolved = cardDefById(def.cardId);
      if (!resolved) continue;
      const item = itemForDef(resolved, unitOf(def), "new", emptyIntervals, rand);
      if (item) deepenItems.push(item);
    }
  }

  // 4) Order: easy wins first, then lessons woven through the reviews
  const itemsOut = weave(
    reviewItems.slice(0, 3),
    shuffled([...reviewItems.slice(3), ...deepenItems], rand),
    lessons,
    rand,
  );

  // 5) Grammar lesson (+ its first cloze exercises in choice mode)
  const introducedRecShare =
    active.totalRec > 0 ? active.introducedRec / active.totalRec : 0;
  const includeGrammar =
    !active.grammarDone && introducedRecShare >= GRAMMAR_GATE;
  if (includeGrammar) {
    const grammarPack: ExerciseItem[] = [
      {
        kind: "grammar",
        unitId: unit.id,
        title: unit.grammar.title,
        body: unit.grammar.body,
        examples: unit.grammar.examples,
        alreadyDone: false,
      },
    ];
    for (const def of unit.cloze.slice(0, GRAMMAR_CLOZE_INTRO_CAP)) {
      const resolved = cardDefById(`${def.id}-cloze`);
      if (!resolved || introduced.has(resolved.cardId)) continue;
      const item = buildCloze(resolved, unit, "new", emptyIntervals, rand);
      if (item) grammarPack.push(item);
    }
    const pos = Math.min(itemsOut.length, Math.round(itemsOut.length * 0.4));
    itemsOut.splice(pos, 0, ...grammarPack);
  }

  // 6) Reader once grammar is done
  if (active.grammarDone && !active.readerDone) {
    insertAtFraction(itemsOut, buildReader(unit, false), 0.7);
  }

  // 7) Nothing scheduled? Offer unscheduled practice on the shakiest words
  //    instead of an empty session — it can't disturb the review calendar.
  const graded = reviewItems.length + lessons.length + deepenItems.length;
  if (graded === 0) {
    const weakest = cardRows
      .filter((r) => r.cardId.endsWith("-rec"))
      .sort((a, b) => a.stability - b.stability)
      .slice(0, BONUS_DRILLS);
    for (const row of shuffled(weakest, rand)) {
      const def = cardDefById(row.cardId);
      if (!def) continue;
      itemsOut.push(
        buildDrill(def, unitOf(def), rand() < 0.5 ? "en-af" : "af-en", "bonus", rand),
      );
    }
  }

  // 8) One listening and one sentence-building drill in the back half
  const listening = buildListening(unit, introduced, rand);
  if (listening[0]) insertAtFraction(itemsOut, listening[0], 0.6);
  const wordBanks = buildWordBanks(unit, introduced, rand);
  if (wordBanks[0]) insertAtFraction(itemsOut, wordBanks[0], 0.8);

  // 9) Shadowing closes the first round of the day (player skips it if the
  //    device has no voice)
  const firstRoundToday = (todayRow?.reviews ?? 0) === 0;
  if (firstRoundToday && unit.phrases.length >= 3) {
    const start = Math.floor(rand() * unit.phrases.length);
    const phrases = [0, 1, 2].map((i) => {
      const p = unit.phrases[(start + i) % unit.phrases.length];
      return { af: p.af, en: p.en };
    });
    itemsOut.push({ kind: "shadow", unitId: unit.id, phrases });
  }

  return {
    items: itemsOut,
    meta: {
      dueCount: dueRows.length,
      dueRemaining: allDue.length - dueRows.length,
      newCount: lessons.length,
      newToday,
      newTarget,
      moreNewAvailable:
        !onHold &&
        freshDefs.length > lessons.length &&
        newToday + lessons.length < newTarget + extra,
      newOnHold: onHold && freshDefs.length > 0,
      unitId: unit.id,
      unitTitle: unit.title,
      streak: input.streak,
      xpToday: todayRow?.xp ?? 0,
      goalMinutes: input.goalMinutes,
      minutesToday: todayRow?.minutes ?? 0,
    },
  };
}
