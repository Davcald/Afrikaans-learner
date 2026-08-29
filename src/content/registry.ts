// Content registry WITHOUT the server-only guard, so node scripts
// (validator, tests) can import it. App code must import "@/content"
// (index.ts), which re-exports this behind `import "server-only"`.
import type { ClozeExercise, Phrase, Unit, VocabItem } from "./types";
import { unit as u01 } from "./units/u01-greetings";
import { unit as u02 } from "./units/u02-family";
import { unit as u03 } from "./units/u03-numbers-time";
import { unit as u07 } from "./units/u07-town-directions";
import { unit as u08 } from "./units/u08-shopping";

export const units: Unit[] = [u01, u02, u03, u07, u08].sort(
  (a, b) => a.week - b.week || a.id.localeCompare(b.id),
);

const unitMap = new Map(units.map((u) => [u.id, u]));

export function unitById(id: string): Unit | undefined {
  return unitMap.get(id);
}

export interface VocabRef {
  item: VocabItem;
  unitId: string;
}

const vocabMap = new Map<string, VocabRef>();
const phraseMap = new Map<string, { item: Phrase; unitId: string }>();
const clozeMap = new Map<string, { item: ClozeExercise; unitId: string }>();
for (const u of units) {
  for (const v of u.vocab) vocabMap.set(v.id, { item: v, unitId: u.id });
  for (const p of u.phrases) phraseMap.set(p.id, { item: p, unitId: u.id });
  for (const c of u.cloze) clozeMap.set(c.id, { item: c, unitId: u.id });
}

export function vocabById(id: string): VocabRef | undefined {
  return vocabMap.get(id);
}

export function phraseById(id: string) {
  return phraseMap.get(id);
}

export function clozeById(id: string) {
  return clozeMap.get(id);
}

/** Total learnable words across all units (used for the 16-week trajectory). */
export const TOTAL_VOCAB_COUNT = vocabMap.size;
export const TOTAL_WEEKS = 16;
