// Key for a pre-recorded clip: a stable hash of the exact Afrikaans text.
// scripts/audio/generate.py implements the same function — keep them in step.

export function normalizeForAudio(text: string): string {
  return text.normalize("NFC").replace(/\s+/g, " ").trim();
}

/** cyrb53 over UTF-16 code units, as 14 hex digits. */
export function audioKey(text: string): string {
  const s = normalizeForAudio(text);
  let h1 = 0xdeadbeef;
  let h2 = 0x41c6ce57;
  for (let i = 0; i < s.length; i++) {
    const ch = s.charCodeAt(i);
    h1 = Math.imul(h1 ^ ch, 2654435761);
    h2 = Math.imul(h2 ^ ch, 1597334677);
  }
  h1 = Math.imul(h1 ^ (h1 >>> 16), 2246822507) ^ Math.imul(h2 ^ (h2 >>> 13), 3266489909);
  h2 = Math.imul(h2 ^ (h2 >>> 16), 2246822507) ^ Math.imul(h1 ^ (h1 >>> 13), 3266489909);
  const n = 4294967296 * (2097151 & h2) + (h1 >>> 0);
  return n.toString(16).padStart(14, "0");
}
