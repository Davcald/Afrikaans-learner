// Deterministic mapping content → reviewable cards. Card ids derive from the
// stable content ids (see src/content/types.ts) and are the FSRS state keys:
//   vocab  u03-v012 → u03-v012-rec | u03-v012-prod | u03-v012-cloze
//   phrase u03-p04  → u03-p04-rec  | u03-p04-prod
//   cloze  u03-c05  → u03-c05-cloze
import { clozeById, phraseById, vocabById } from "@/content/registry";
import type { ClozeExercise, Phrase, Unit, VocabItem } from "@/content/types";

export type CardKind =
  | "vocab-rec"
  | "vocab-prod"
  | "vocab-cloze"
  | "phrase-rec"
  | "phrase-prod"
  | "cloze";

export interface CardDef {
  cardId: string;
  kind: CardKind;
  itemId: string;
  unitId: string;
}

export interface ResolvedCardDef extends CardDef {
  vocab?: VocabItem;
  phrase?: Phrase;
  cloze?: ClozeExercise;
}

/** Case-insensitive first-occurrence blank of the headword in its example. */
export function vocabClozeText(
  item: VocabItem,
): { textAf: string; answer: string } | null {
  const form = item.clozeForm ?? item.af;
  const idx = item.exampleAf.toLowerCase().indexOf(form.toLowerCase());
  if (idx === -1) return null;
  const answer = item.exampleAf.slice(idx, idx + form.length);
  return {
    textAf: `${item.exampleAf.slice(0, idx)}{{${answer}}}${item.exampleAf.slice(idx + form.length)}`,
    answer,
  };
}

function vocabDefs(unitId: string, v: VocabItem): CardDef[] {
  const defs: CardDef[] = [
    { cardId: `${v.id}-rec`, kind: "vocab-rec", itemId: v.id, unitId },
    { cardId: `${v.id}-prod`, kind: "vocab-prod", itemId: v.id, unitId },
  ];
  if (vocabClozeText(v)) {
    defs.push({
      cardId: `${v.id}-cloze`,
      kind: "vocab-cloze",
      itemId: v.id,
      unitId,
    });
  }
  return defs;
}

export function unitCardDefs(unit: Unit): CardDef[] {
  const defs: CardDef[] = [];
  for (const v of unit.vocab) defs.push(...vocabDefs(unit.id, v));
  for (const p of unit.phrases) {
    defs.push(
      { cardId: `${p.id}-rec`, kind: "phrase-rec", itemId: p.id, unitId: unit.id },
      { cardId: `${p.id}-prod`, kind: "phrase-prod", itemId: p.id, unitId: unit.id },
    );
  }
  for (const c of unit.cloze) {
    defs.push({ cardId: `${c.id}-cloze`, kind: "cloze", itemId: c.id, unitId: unit.id });
  }
  return defs;
}

/** Recognition cards only, in introduction order (vocab first, then phrases). */
export function unitRecDefs(unit: Unit): CardDef[] {
  return unitCardDefs(unit).filter(
    (d) => d.kind === "vocab-rec" || d.kind === "phrase-rec",
  );
}

const CARD_ID_RE = /^(u\d{2}-([vpc])\d+)-(rec|prod|cloze)$/;

/** Resolve a cardId to its content, or null if it doesn't exist. */
export function cardDefById(cardId: string): ResolvedCardDef | null {
  const m = CARD_ID_RE.exec(cardId);
  if (!m) return null;
  const [, itemId, type, suffix] = m;

  if (type === "v") {
    const ref = vocabById(itemId);
    if (!ref) return null;
    if (suffix === "cloze" && !vocabClozeText(ref.item)) return null;
    return {
      cardId,
      kind: `vocab-${suffix}` as CardKind,
      itemId,
      unitId: ref.unitId,
      vocab: ref.item,
    };
  }
  if (type === "p") {
    if (suffix === "cloze") return null;
    const ref = phraseById(itemId);
    if (!ref) return null;
    return {
      cardId,
      kind: `phrase-${suffix}` as CardKind,
      itemId,
      unitId: ref.unitId,
      phrase: ref.item,
    };
  }
  if (suffix !== "cloze") return null;
  const ref = clozeById(itemId);
  if (!ref) return null;
  return { cardId, kind: "cloze", itemId, unitId: ref.unitId, cloze: ref.item };
}

/** The slice of a stored card the introduction rules need. */
export interface CardSnapshot {
  /** ts-fsrs State: 0 New, 1 Learning, 2 Review, 3 Relearning. */
  state: number;
  stability: number;
  reps: number;
}

const STATE_REVIEW = 2;
/** A production card this stable (days) has earned its in-a-sentence card. */
export const CLOZE_UNLOCK_STABILITY = 7;
const PHRASE_EVERY = 5;

/**
 * Brand-new words (recognition cards) not yet introduced, in teaching order:
 * the unit's vocab in file order with one phrase woven in after every few
 * words, so useful chunks arrive alongside the words instead of in a lump at
 * the end. This is what the daily "new words" budget counts.
 */
export function newWordDefs(
  unit: Unit,
  introduced: ReadonlySet<string>,
): CardDef[] {
  const out: CardDef[] = [];
  let phraseIdx = 0;
  const pushPhrase = () => {
    const p = unit.phrases[phraseIdx++];
    if (p) {
      out.push({ cardId: `${p.id}-rec`, kind: "phrase-rec", itemId: p.id, unitId: unit.id });
    }
  };
  unit.vocab.forEach((v, i) => {
    out.push({ cardId: `${v.id}-rec`, kind: "vocab-rec", itemId: v.id, unitId: unit.id });
    if ((i + 1) % PHRASE_EVERY === 0) pushPhrase();
  });
  while (phraseIdx < unit.phrases.length) pushPhrase();
  return out.filter((d) => !introduced.has(d.cardId));
}

/**
 * Follow-up cards that deepen words already met. They never use up the
 * new-word budget; each unlocks only once the step before it has stuck:
 *  - production (say it in Afrikaans): the recognition card has graduated
 *    to day-scale review
 *  - vocab cloze (use it in a sentence): the production card is stable
 *  - grammar cloze: the unit's grammar lesson has been read
 */
export function deepenDefs(
  unit: Unit,
  cards: ReadonlyMap<string, CardSnapshot>,
  grammarDone: boolean,
): CardDef[] {
  const out: CardDef[] = [];
  for (const def of unitCardDefs(unit)) {
    if (cards.has(def.cardId)) continue;
    switch (def.kind) {
      case "vocab-prod":
      case "phrase-prod": {
        const rec = cards.get(`${def.itemId}-rec`);
        if (rec && rec.state === STATE_REVIEW) out.push(def);
        break;
      }
      case "vocab-cloze": {
        const prod = cards.get(`${def.itemId}-prod`);
        if (
          prod &&
          prod.state === STATE_REVIEW &&
          prod.stability >= CLOZE_UNLOCK_STABILITY
        ) {
          out.push(def);
        }
        break;
      }
      case "cloze":
        if (grammarDone) out.push(def);
        break;
      default:
        break;
    }
  }
  return out;
}

/**
 * Once a learner can reliably PRODUCE a word, recognising it is a given, so
 * its recognition card stops coming up. This roughly halves long-run review
 * load without dropping anything the learner still needs to practise.
 */
export function isRetired(
  row: { cardId: string },
  rowById: ReadonlyMap<string, { state: number; stability: number }>,
): boolean {
  if (!row.cardId.endsWith("-rec")) return false;
  const prod = rowById.get(`${row.cardId.slice(0, -4)}-prod`);
  return Boolean(
    prod &&
      prod.state === STATE_REVIEW &&
      prod.stability >= CLOZE_UNLOCK_STABILITY,
  );
}
