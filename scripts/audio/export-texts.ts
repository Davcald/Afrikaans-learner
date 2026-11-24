/**
 * Prints every Afrikaans string the app can speak, as JSON on stdout:
 *   [{ "key": "<audioKey>", "text": "...", "kind": "word" | "sentence" }]
 * Consumed by scripts/audio/generate.py.
 */
import { units } from "../../src/content/registry";
import { audioKey, normalizeForAudio } from "../../src/lib/speech/audioKey";

const out = new Map<string, { key: string; text: string; kind: string }>();
function add(text: string, kind: "word" | "sentence") {
  const t = normalizeForAudio(text);
  if (!t) return;
  const key = audioKey(t);
  if (!out.has(key)) out.set(key, { key, text: t, kind });
}

for (const u of units) {
  for (const v of u.vocab) {
    add(v.af, "word");
    add(v.exampleAf, "sentence");
  }
  for (const p of u.phrases) add(p.af, "sentence");
  for (const c of u.cloze) add(c.textAf.replace(/\{\{(.+?)\}\}/, "$1"), "sentence");
  for (const e of u.grammar.examples) add(e.af, "sentence");
  for (const l of u.dialogue.lines) add(l.af, "sentence");
}
process.stdout.write(JSON.stringify([...out.values()]));
