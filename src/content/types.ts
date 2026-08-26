export type Pos =
  | "n"
  | "v"
  | "adj"
  | "adv"
  | "prep"
  | "pron"
  | "conj"
  | "interj"
  | "num"
  | "phrase";

/**
 * ID STABILITY CONTRACT
 * ---------------------
 * Every content id ("u03-v012", "u03-p04", "u03-c05", …) is the key under
 * which per-user FSRS scheduling state is stored. IDs are APPEND-ONLY:
 *  - never renumber or reuse an id
 *  - to remove an item, delete it (its number stays retired)
 *  - a material change to `af`/`en` is a NEW item with a new id
 * File order can change freely; ids are what matter.
 */
export interface VocabItem {
  id: string; // "u03-v012"
  af: string;
  en: string;
  /** Extra accepted English answers (recognition typing / leniency). */
  altEn?: string[];
  /** Extra accepted Afrikaans answers for EN→AF production. */
  altAf?: string[];
  /** Example sentence — must contain `af` (or `clozeForm`) verbatim. */
  exampleAf: string;
  exampleEn: string;
  pos: Pos;
  /** Plain pronunciation hint, e.g. "GHOO-yuh (g like Scottish 'loch')". */
  pron?: string;
  /** Inflected form appearing in exampleAf when it differs from `af`. */
  clozeForm?: string;
}

export interface Phrase {
  id: string; // "u03-p04"
  af: string;
  en: string;
  altAf?: string[];
}

export interface GrammarExample {
  af: string;
  en: string;
}

export interface ClozeExercise {
  id: string; // "u03-c05"
  /** Sentence with exactly one {{answer}} gap, e.g. "Ek {{het}} gister gewerk." */
  textAf: string;
  answer: string;
  /** Wrong options shown in choice mode (2–3). */
  distractors: string[];
  /** English translation of the complete sentence. */
  en: string;
}

export interface GrammarLesson {
  id: string; // "u03-g01"
  title: string;
  /**
   * Markdown-lite body: blank-line paragraphs, `- ` bullets, **bold**,
   * *italics*. Rendered by a tiny in-app renderer (no markdown dep).
   */
  body: string;
  examples: GrammarExample[];
}

export interface DialogueLine {
  speaker: string;
  af: string;
  en: string;
  /**
   * Glosses for words in `af` that are NOT covered by (a) this unit's or an
   * earlier unit's vocab/phrases or (b) the global function-word glossary.
   * Keys are lowercased, punctuation-stripped tokens.
   */
  glosses?: Record<string, string>;
}

export interface ComprehensionQuestion {
  q: string;
  options: string[];
  correct: number; // index into options
}

export interface Dialogue {
  id: string; // "u03-d01"
  title: string; // Afrikaans title
  titleEn: string;
  lines: DialogueLine[];
  questions: ComprehensionQuestion[];
}

export interface Unit {
  id: string; // "u01"
  title: string;
  titleAf: string;
  week: number; // 1–16
  cefr: "A1" | "A2" | "B1";
  description: string;
  vocab: VocabItem[];
  phrases: Phrase[];
  grammar: GrammarLesson;
  cloze: ClozeExercise[];
  dialogue: Dialogue;
}
