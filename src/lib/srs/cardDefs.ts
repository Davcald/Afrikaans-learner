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

/**
 * New cards eligible for introduction, in order. Words deepen before the
 * unit broadens: a word's production card (unlocked once its recognition
 * card has been graded) and its cloze card (once production has been
 * graded) come before brand-new recognition cards. `introduced` is the set
 * of cardIds that already have a DB row (rows are created on first grade).
 */
export function eligibleNewDefs(
  unit: Unit,
  introduced: ReadonlySet<string>,
): CardDef[] {
  const children: CardDef[] = [];
  const fresh: CardDef[] = [];
  for (const def of unitCardDefs(unit)) {
    if (introduced.has(def.cardId)) continue;
    switch (def.kind) {
      case "vocab-rec":
      case "phrase-rec":
        fresh.push(def);
        break;
      case "vocab-prod":
      case "phrase-prod":
        if (introduced.has(`${def.itemId}-rec`)) children.push(def);
        break;
      case "vocab-cloze":
        if (introduced.has(`${def.itemId}-prod`)) children.push(def);
        break;
      case "cloze":
        // Grammar cloze cards unlock with the grammar lesson, handled by
        // the session engine (they need the lesson context first).
        break;
    }
  }
  return [...children, ...fresh];
}

/** Grammar-exercise cloze cards for a unit, introduced after the lesson is read. */
export function grammarClozeDefs(
  unit: Unit,
  introduced: ReadonlySet<string>,
): CardDef[] {
  return unitCardDefs(unit).filter(
    (d) => d.kind === "cloze" && !introduced.has(d.cardId),
  );
}
