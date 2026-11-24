/**
 * A memory hook for one vocab item — the thing that makes a new word stick
 * the first time you see it.
 *  - "same":     spelled (almost) identically to English with the same
 *                meaning — a free word.
 *  - "cognate":  a recognisable relative of an English word (hond → hound).
 *  - "mnemonic": a sound-alike picture linking the sound to the meaning.
 * Keyed by vocab id. Words with no honest hook simply have no entry.
 */
export interface WordHook {
  kind: "same" | "cognate" | "mnemonic";
  /** One short sentence, shown under the word when it is taught. */
  hook: string;
  /** A single emoji picturing the meaning (concrete words only). */
  emoji?: string;
}

export type HookMap = Record<string, WordHook>;
