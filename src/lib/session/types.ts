// Session payload types — shared by the (server) session assembler and the
// (client) player. Pure types only: the client must never import content.

export type IntervalPreview = Record<1 | 2 | 3 | 4, string>;

interface GradedBase {
  cardId: string;
  intervals: IntervalPreview;
  isNew: boolean;
}

/** Self-graded recognition card (AF front → EN back). */
export interface FlashcardItem extends GradedBase {
  kind: "flashcard";
  front: string; // Afrikaans
  back: string; // English
  pron?: string;
  example?: { af: string; en: string };
  ttsText?: string;
}

/** First-exposure multiple choice (auto-graded: right→Good, wrong→Again). */
export interface ChoiceItem extends GradedBase {
  kind: "choice";
  prompt: string; // Afrikaans word
  options: string[]; // English meanings
  correct: number;
  pron?: string;
  example?: { af: string; en: string };
  ttsText?: string;
}

/** Typed production: EN prompt → type the Afrikaans. */
export interface TypeItem extends GradedBase {
  kind: "type";
  promptEn: string;
  answerAf: string;
  accepted: string[];
  pron?: string;
  example?: { af: string; en: string };
  ttsText?: string;
}

/** Cloze: fill the gap (typed, or choice on first exposure of grammar cards). */
export interface ClozeItem extends GradedBase {
  kind: "cloze";
  textAf: string; // contains {{answer}}
  answer: string;
  accepted: string[];
  en: string;
  options?: string[]; // present → choice mode (includes answer, shuffled)
  ttsText?: string;
}

/** Word-bank sentence arrange (practice drill, not FSRS-scheduled). */
export interface WordBankItem {
  kind: "wordbank";
  id: string;
  en: string;
  tokens: string[]; // correct sentence tokens, in order
  shuffled: string[]; // tokens + distractors, shuffled
  ttsText?: string;
}

/** Listening drill: hear Afrikaans, pick the meaning (practice, not FSRS). */
export interface ListeningItem {
  kind: "listening";
  id: string;
  ttsText: string;
  answerAf: string;
  options: string[]; // English meanings
  correct: number;
}

export interface GrammarItem {
  kind: "grammar";
  unitId: string;
  title: string;
  body: string;
  examples: { af: string; en: string }[];
  alreadyDone: boolean;
}

export interface ReaderToken {
  t: string;
  g?: string; // gloss, when resolvable
}

export interface ReaderLine {
  speaker: string;
  af: string;
  en: string;
  tokens: ReaderToken[];
}

export interface ReaderItem {
  kind: "reader";
  unitId: string;
  title: string;
  titleEn: string;
  lines: ReaderLine[];
  questions: { q: string; options: string[]; correct: number }[];
  alreadyDone: boolean;
}

export interface ShadowItem {
  kind: "shadow";
  unitId: string;
  phrases: { af: string; en: string; pron?: string }[];
}

export type ExerciseItem =
  | FlashcardItem
  | ChoiceItem
  | TypeItem
  | ClozeItem
  | WordBankItem
  | ListeningItem
  | GrammarItem
  | ReaderItem
  | ShadowItem;

export interface SessionPlan {
  items: ExerciseItem[];
  meta: {
    dueCount: number;
    newCount: number;
    unitId: string;
    unitTitle: string;
    streak: number;
    xpToday: number;
    goalMinutes: number;
    minutesToday: number;
  };
}
