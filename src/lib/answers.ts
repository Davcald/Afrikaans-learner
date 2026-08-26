export type Verdict = "exact" | "diacritics" | "typo" | "wrong";

export interface AnswerCheck {
  verdict: Verdict;
  /** The accepted answer the input was closest to (for feedback display). */
  expected: string;
}

/** NFC, lowercase, trim, collapse whitespace, strip punctuation (keeps hyphens + apostrophes — 'n matters). */
export function normalizeAnswer(s: string): string {
  return s
    .normalize("NFC")
    .toLowerCase()
    .replace(/[.,!?;:"()«»…“”]/g, "")
    .replace(/[’‘`]/g, "'")
    .replace(/\s+/g, " ")
    .trim();
}

export function stripDiacritics(s: string): string {
  return s.normalize("NFD").replace(/\p{M}/gu, "");
}

/** Damerau-Levenshtein (optimal string alignment) distance. */
export function editDistance(a: string, b: string): number {
  const m = a.length;
  const n = b.length;
  if (m === 0) return n;
  if (n === 0) return m;
  const d: number[][] = Array.from({ length: m + 1 }, (_, i) =>
    Array.from({ length: n + 1 }, (_, j) => (i === 0 ? j : j === 0 ? i : 0)),
  );
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      const cost = a[i - 1] === b[j - 1] ? 0 : 1;
      d[i][j] = Math.min(
        d[i - 1][j] + 1,
        d[i][j - 1] + 1,
        d[i - 1][j - 1] + cost,
      );
      if (
        i > 1 &&
        j > 1 &&
        a[i - 1] === b[j - 2] &&
        a[i - 2] === b[j - 1]
      ) {
        d[i][j] = Math.min(d[i][j], d[i - 2][j - 2] + 1);
      }
    }
  }
  return d[m][n];
}

function typoBudget(len: number): number {
  if (len >= 10) return 2;
  if (len >= 5) return 1;
  return 0;
}

/**
 * Grade a typed answer against the accepted forms.
 *  - exact: matches after normalization
 *  - diacritics: matches once accents are ignored ("se" for "sê") — counts
 *    as correct with a warning
 *  - typo: within a small edit distance — counts as correct, suggest Hard
 *  - wrong: everything else
 */
export function checkAnswer(input: string, accepted: string[]): AnswerCheck {
  const normInput = normalizeAnswer(input);
  const forms = accepted.map((a) => ({ raw: a, norm: normalizeAnswer(a) }));
  if (forms.length === 0) return { verdict: "wrong", expected: "" };

  for (const f of forms) {
    if (normInput === f.norm) return { verdict: "exact", expected: f.raw };
  }
  const strippedInput = stripDiacritics(normInput);
  for (const f of forms) {
    if (strippedInput === stripDiacritics(f.norm)) {
      return { verdict: "diacritics", expected: f.raw };
    }
  }
  let best: { dist: number; raw: string } | null = null;
  for (const f of forms) {
    const dist = editDistance(strippedInput, stripDiacritics(f.norm));
    if (!best || dist < best.dist) best = { dist, raw: f.raw };
  }
  if (best && best.dist <= typoBudget(normalizeAnswer(best.raw).length)) {
    return { verdict: "typo", expected: best.raw };
  }
  return { verdict: "wrong", expected: forms[0].raw };
}
