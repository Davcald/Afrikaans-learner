import "server-only";

import { and, eq } from "drizzle-orm";
import { createEmptyCard } from "ts-fsrs";
import { units } from "@/content";
import type { Unit, VocabItem } from "@/content/types";
import { db } from "@/db";
import { cards, dailyActivity, unitProgress, userSettings } from "@/db/schema";
import { localDateString } from "@/lib/dates";
import {
  cardDefById,
  eligibleNewDefs,
  vocabClozeText,
  type ResolvedCardDef,
} from "@/lib/srs/cardDefs";
import { rowToFsrsCard } from "@/lib/srs/mapping";
import { previewIntervals } from "@/lib/srs/scheduler";
import { activeUnitStatus, computeUnitStatuses } from "./progress";
import { buildReader } from "./reader";
import type {
  ChoiceItem,
  ClozeItem,
  ExerciseItem,
  FlashcardItem,
  IntervalPreview,
  ListeningItem,
  SessionPlan,
  TypeItem,
  WordBankItem,
} from "./types";

const DUE_CAP = 60;
const GRAMMAR_GATE = 0.6; // grammar lesson appears at 60% of unit vocab introduced
const GRAMMAR_CLOZE_INTRO_CAP = 4;

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

// --- item builders --------------------------------------------------------

function vocabExample(v: VocabItem) {
  return { af: v.exampleAf, en: v.exampleEn };
}

function buildFlashcard(
  def: ResolvedCardDef,
  intervals: IntervalPreview,
  isNew: boolean,
): FlashcardItem {
  if (def.vocab) {
    return {
      kind: "flashcard",
      cardId: def.cardId,
      front: def.vocab.af,
      back: def.vocab.en,
      pron: def.vocab.pron,
      example: vocabExample(def.vocab),
      ttsText: def.vocab.af,
      intervals,
      isNew,
    };
  }
  return {
    kind: "flashcard",
    cardId: def.cardId,
    front: def.phrase!.af,
    back: def.phrase!.en,
    ttsText: def.phrase!.af,
    intervals,
    isNew,
  };
}

function buildChoice(
  def: ResolvedCardDef,
  unit: Unit,
  intervals: IntervalPreview,
  rand: () => number,
): ChoiceItem {
  const v = def.vocab!;
  const pool = unit.vocab.filter((x) => x.id !== v.id && x.en !== v.en);
  const samePos = pool.filter((x) => x.pos === v.pos);
  const distractorSource = samePos.length >= 3 ? samePos : pool;
  const distractors = shuffled(distractorSource, rand)
    .slice(0, 3)
    .map((x) => x.en);
  const options = shuffled([v.en, ...distractors], rand);
  return {
    kind: "choice",
    cardId: def.cardId,
    prompt: v.af,
    options,
    correct: options.indexOf(v.en),
    pron: v.pron,
    example: vocabExample(v),
    ttsText: v.af,
    intervals,
    isNew: true,
  };
}

function buildType(
  def: ResolvedCardDef,
  intervals: IntervalPreview,
  isNew: boolean,
): TypeItem {
  if (def.vocab) {
    const v = def.vocab;
    return {
      kind: "type",
      cardId: def.cardId,
      promptEn: v.en,
      answerAf: v.af,
      accepted: [v.af, ...(v.altAf ?? [])],
      pron: v.pron,
      example: vocabExample(v),
      ttsText: v.af,
      intervals,
      isNew,
    };
  }
  const p = def.phrase!;
  return {
    kind: "type",
    cardId: def.cardId,
    promptEn: p.en,
    answerAf: p.af,
    accepted: [p.af, ...(p.altAf ?? [])],
    ttsText: p.af,
    intervals,
    isNew,
  };
}

function buildCloze(
  def: ResolvedCardDef,
  intervals: IntervalPreview,
  isNew: boolean,
  rand: () => number,
  choiceMode: boolean,
): ClozeItem | null {
  if (def.vocab) {
    const cloze = vocabClozeText(def.vocab);
    if (!cloze) return null;
    return {
      kind: "cloze",
      cardId: def.cardId,
      textAf: cloze.textAf,
      answer: cloze.answer,
      accepted: [cloze.answer],
      en: def.vocab.exampleEn,
      ttsText: def.vocab.exampleAf,
      intervals,
      isNew,
    };
  }
  const c = def.cloze!;
  return {
    kind: "cloze",
    cardId: def.cardId,
    textAf: c.textAf,
    answer: c.answer,
    accepted: [c.answer],
    en: c.en,
    options: choiceMode
      ? shuffled([c.answer, ...c.distractors], rand)
      : undefined,
    ttsText: c.textAf.replace(/\{\{(.+?)\}\}/, "$1"),
    intervals,
    isNew,
  };
}

function itemForDef(
  def: ResolvedCardDef,
  unit: Unit,
  intervals: IntervalPreview,
  isNew: boolean,
  rand: () => number,
): ExerciseItem | null {
  switch (def.kind) {
    case "vocab-rec":
      return isNew
        ? buildChoice(def, unit, intervals, rand)
        : buildFlashcard(def, intervals, isNew);
    case "phrase-rec":
      return buildFlashcard(def, intervals, isNew);
    case "vocab-prod":
    case "phrase-prod":
      return buildType(def, intervals, isNew);
    case "vocab-cloze":
      return buildCloze(def, intervals, isNew, rand, false);
    case "cloze":
      return buildCloze(def, intervals, isNew, rand, isNew);
  }
}

function buildWordBanks(
  unit: Unit,
  newVocab: VocabItem[],
  rand: () => number,
): WordBankItem[] {
  const sources = (newVocab.length > 0 ? newVocab : unit.vocab)
    .map((v) => ({ v, tokens: v.exampleAf.split(/\s+/) }))
    .filter(({ tokens }) => tokens.length >= 4 && tokens.length <= 9);
  const picked = shuffled(sources, rand).slice(0, 2);
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
  const picked = shuffled(known, rand).slice(0, 2);
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

// --- interleaving ---------------------------------------------------------

function kindOf(item: ExerciseItem): string {
  return item.kind;
}

/** Weave new items evenly among reviews, then fix same-kind adjacency. */
function interleave(
  reviews: ExerciseItem[],
  fresh: ExerciseItem[],
  rand: () => number,
): ExerciseItem[] {
  const base = shuffled(reviews, rand);
  const out: ExerciseItem[] = [...base];
  if (fresh.length > 0) {
    const step = (out.length + fresh.length) / fresh.length;
    fresh.forEach((item, i) => {
      const pos = Math.min(out.length, Math.round((i + 0.5) * step));
      out.splice(pos, 0, item);
    });
  }
  // one swap pass to avoid same-kind neighbours where possible
  for (let i = 1; i < out.length; i++) {
    if (kindOf(out[i]) === kindOf(out[i - 1])) {
      const j = out.findIndex(
        (cand, k) =>
          k > i &&
          kindOf(cand) !== kindOf(out[i - 1]) &&
          (k + 1 >= out.length || kindOf(out[k + 1]) !== kindOf(out[i])) &&
          (k - 1 < 0 || kindOf(out[k - 1]) !== kindOf(out[i])),
      );
      if (j > i) [out[i], out[j]] = [out[j], out[i]];
    }
  }
  return out;
}

function insertAtFraction(
  arr: ExerciseItem[],
  item: ExerciseItem,
  fraction: number,
): void {
  const pos = Math.min(arr.length, Math.round(arr.length * fraction));
  arr.splice(pos, 0, item);
}

// --- main -----------------------------------------------------------------

export async function assembleSession(userId: string): Promise<SessionPlan> {
  const now = new Date();
  const [settingsRows, cardRows, progressRows] = await Promise.all([
    db().select().from(userSettings).where(eq(userSettings.userId, userId)).limit(1),
    db().select().from(cards).where(eq(cards.userId, userId)),
    db().select().from(unitProgress).where(eq(unitProgress.userId, userId)),
  ]);
  const settings = settingsRows[0];
  const timezone = settings?.timezone ?? "UTC";
  const today = localDateString(now, timezone);
  const [todayRow] = await db()
    .select()
    .from(dailyActivity)
    .where(
      and(eq(dailyActivity.userId, userId), eq(dailyActivity.localDate, today)),
    )
    .limit(1);

  const rand = mulberry32(hashSeed(`${userId}:${today}`));
  const introduced = new Set(cardRows.map((r) => r.cardId));
  const statuses = computeUnitStatuses(introduced, progressRows);
  const active = activeUnitStatus(statuses);
  const unit = active.unit;

  // 1) Due reviews
  const dueRows = cardRows
    .filter((r) => r.due.getTime() <= now.getTime())
    .sort((a, b) => a.due.getTime() - b.due.getTime())
    .slice(0, DUE_CAP);
  const reviewItems: ExerciseItem[] = [];
  for (const row of dueRows) {
    const def = cardDefById(row.cardId);
    if (!def) continue; // orphaned id after a content edit — ignore
    const intervals = previewIntervals(rowToFsrsCard(row), now);
    const item = itemForDef(
      def,
      units.find((u) => u.id === def.unitId) ?? unit,
      intervals,
      false,
      rand,
    );
    if (item) reviewItems.push(item);
  }

  // 2) New cards within today's budget
  const dailyNewCards = settings?.dailyNewCards ?? 10;
  const budget = Math.max(0, dailyNewCards - (todayRow?.newCards ?? 0));
  const newDefs = active.unlocked
    ? eligibleNewDefs(unit, introduced, active.grammarDone).slice(0, budget)
    : [];
  const emptyIntervals = previewIntervals(createEmptyCard(now), now);
  const newItems: ExerciseItem[] = [];
  const newVocabItems: VocabItem[] = [];
  for (const def of newDefs) {
    const resolved = cardDefById(def.cardId);
    if (!resolved) continue;
    const item = itemForDef(resolved, unit, emptyIntervals, true, rand);
    if (item) {
      newItems.push(item);
      if (resolved.kind === "vocab-prod" && resolved.vocab) {
        newVocabItems.push(resolved.vocab);
      }
    }
  }

  // 3) Interleave the graded core
  const head = reviewItems.slice(0, 3); // start with a few easy wins
  const queue = interleave(reviewItems.slice(3), newItems, rand);
  const itemsOut: ExerciseItem[] = [...head, ...queue];

  // 4) Grammar lesson (+ its first cloze exercises in choice mode)
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
      const item = buildCloze(resolved, emptyIntervals, true, rand, true);
      if (item) grammarPack.push(item);
    }
    const pos = Math.min(itemsOut.length, Math.round(itemsOut.length * 0.4));
    itemsOut.splice(pos, 0, ...grammarPack);
  }

  // 5) Reader once grammar is done
  if (active.grammarDone && !active.readerDone) {
    insertAtFraction(itemsOut, buildReader(unit, false), 0.7);
  }

  // 6) Practice drills in the back half
  const listening = buildListening(unit, introduced, rand);
  if (listening[0]) insertAtFraction(itemsOut, listening[0], 0.45);
  if (listening[1]) insertAtFraction(itemsOut, listening[1], 0.75);
  const wordBanks = buildWordBanks(unit, newVocabItems, rand);
  if (wordBanks[0]) insertAtFraction(itemsOut, wordBanks[0], 0.55);
  if (wordBanks[1]) insertAtFraction(itemsOut, wordBanks[1], 0.85);

  // 7) Shadowing near the end (player skips it if the device has no TTS)
  if (unit.phrases.length >= 3) {
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
      newCount: newDefs.length,
      unitId: unit.id,
      unitTitle: unit.title,
      streak: settings?.currentStreak ?? 0,
      xpToday: todayRow?.xp ?? 0,
      goalMinutes: settings?.dailyGoalMinutes ?? 15,
      minutesToday: todayRow?.minutes ?? 0,
    },
  };
}
