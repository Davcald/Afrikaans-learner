import { GLOBAL_GLOSSES, PROPER_NOUNS } from "./glosses";
import type { Dialogue, Unit } from "./types";

/** Lowercase and strip surrounding punctuation, keeping apostrophes ('n) and hyphens. */
export function normalizeToken(raw: string): string {
  return raw.toLowerCase().replace(/[.,!?;:"()«»…“”]/g, "");
}

export function tokenizeLine(af: string): string[] {
  return af.split(/\s+/).filter(Boolean);
}

/**
 * Glossary of every word taught up to and including `unitId`
 * (vocab af + clozeForm + altAf → en). Earlier-unit words count as known —
 * that is what makes each dialogue i+1 comprehensible input.
 */
export function buildGlossaryUpTo(
  units: Unit[],
  unitId: string,
): Map<string, string> {
  const map = new Map<string, string>();
  for (const u of units) {
    for (const v of u.vocab) {
      map.set(normalizeToken(v.af), v.en);
      if (v.clozeForm) {
        const key = normalizeToken(v.clozeForm);
        if (!map.has(key)) map.set(key, v.en);
      }
      for (const alt of v.altAf ?? []) {
        const key = normalizeToken(alt);
        if (!map.has(key)) map.set(key, v.en);
      }
    }
    if (u.id === unitId) break;
  }
  return map;
}

/** All per-line glosses of a dialogue merged — a word glossed once is known for the whole dialogue. */
export function mergedDialogueGlosses(
  dialogue: Pick<Dialogue, "lines">,
): Record<string, string> {
  const merged: Record<string, string> = {};
  for (const line of dialogue.lines) Object.assign(merged, line.glosses ?? {});
  return merged;
}

/** Resolve the gloss for one tapped/validated token. Returns null if unknown. */
export function resolveGloss(
  rawToken: string,
  lineGlosses: Record<string, string>,
  glossary: Map<string, string>,
): string | null {
  const token = normalizeToken(rawToken);
  if (!token || /\d/.test(token)) return null;

  const lookup = (t: string): string | null =>
    lineGlosses[t] ??
    glossary.get(t) ??
    GLOBAL_GLOSSES[t] ??
    PROPER_NOUNS[t] ??
    null;

  const direct = lookup(token);
  if (direct) return direct;

  // Compounds like "twee-uur": resolvable if every part resolves.
  if (token.includes("-")) {
    const parts = token.split("-").filter(Boolean);
    const glosses = parts.map(lookup);
    if (glosses.every((g) => g !== null)) return glosses.join(" + ");
  }
  return null;
}
