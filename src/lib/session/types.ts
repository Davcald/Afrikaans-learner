// Session payload types — shared by the (server) session assembler and the
// (client) player. Pure types only: the client must never import content.

export type IntervalPreview = Record<1 | 2 | 3 | 4, string>;

interface GradedBase {
  cardId: string;
  intervals: IntervalPreview;
  isNew: boolean;
}

/** A memory hook shown when a word is taught and again after a miss. */
export interface HookInfo {
  kind: "same" | "cognate" | "mnemonic";
  text: string;
}

/**
 * Teaching card: the first time a word or phrase appears it is SHOWN, with
 * its sound, meaning and a memory hook, before anything is asked about it.
 */
export interface IntroItem {
  kind: "intro";
  id: string;
  af: string;
  en: string;
  isPhrase: boolean;
  pron?: string;
  hook?: HookInfo;
  emoji?: string;
  example?: { af: string; en: string };
  ttsText: string;
}

/** Self-graded recognition card (AF front → EN back). */
export interface FlashcardItem extends GradedBase {
  kind: "flashcard";
  front: string; // Afrikaans
  back: string; // English
  pron?: string;
  hook?: HookInfo;
  example?: { af: string; en: string };
  ttsText?: string;
}

interface ChoiceBody {
  /** "af-en": see Afrikaans, pick the meaning. "en-af": pick the Afrikaans. */
  direction: "af-en" | "en-af";
  prompt: string;
  options: string[];
  correct: number;
  /** The Afrikaans / English pair, shown in full once answered. */
  af: string;
  en: string;
  pron?: string;
  hook?: HookInfo;
  example?: { af: string; en: string };
  ttsText?: string;
}

/** Multiple choice on a scheduled card (auto-graded: right→Good, wrong→Again). */
export interface ChoiceItem extends GradedBase, ChoiceBody {
  kind: "choice";
}

/**
 * Extra multiple-choice retrieval that is NOT scheduled: the same-session
 * repeats that take a brand-new word to "got it three times".
 */
export interface DrillItem extends ChoiceBody {
  kind: "drill";
  id: string;
}

/** Letter (single word) or word (phrase) tiles to assemble the answer. */
export interface TileSet {
  /** Shuffled tiles, including a couple of decoys. */
  tiles: string[];
  /** The tiles that spell the answer, in order. */
  solution: string[];
  joiner: "" | " ";
}

/** Production: EN prompt → produce the Afrikaans (tiles first, typing later). */
export interface TypeItem extends GradedBase {
  kind: "type";
  promptEn: string;
  answerAf: string;
  accepted: string[];
  /** Present → assemble from tiles instead of typing (younger cards). */
  tileSet?: TileSet;
  pron?: string;
  hook?: HookInfo;
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
  /** Present (and no options) → assemble the missing word from tiles. */
  tileSet?: TileSet;
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

/** Dictation: hear a sentence, rebuild it from word tiles (practice, not FSRS). */
export interface DictationItem {
  kind: "dictation";
  id: string;
  ttsText: string;
  en: string;
  tileSet: TileSet;
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
  | IntroItem
  | DrillItem
  | FlashcardItem
  | ChoiceItem
  | TypeItem
  | ClozeItem
  | WordBankItem
  | ListeningItem
  | DictationItem
  | GrammarItem
  | ReaderItem
  | ShadowItem;

export interface SessionPlan {
  items: ExerciseItem[];
  meta: {
    /** Reviews in this round / still waiting after it. */
    dueCount: number;
    dueRemaining: number;
    /** Brand-new words taught this round. */
    newCount: number;
    /** New words learned today before this round, and the daily target. */
    newToday: number;
    newTarget: number;
    /** More new words are available right now (daily target not yet hit). */
    moreNewAvailable: boolean;
    /** New words paused because too many reviews are waiting. */
    newOnHold: boolean;
    unitId: string;
    unitTitle: string;
    streak: number;
    xpToday: number;
    goalMinutes: number;
    minutesToday: number;
  };
}
