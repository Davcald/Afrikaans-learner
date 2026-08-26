/**
 * Content integrity checker — run with `npm run content:check`.
 * Fails (exit 1) on structural errors that would break exercises or the
 * reader. See src/content/types.ts for the ID stability contract.
 */
import { units } from "../src/content/registry";
import {
  buildGlossaryUpTo,
  mergedDialogueGlosses,
  resolveGloss,
  tokenizeLine,
} from "../src/content/glossary-util";

const errors: string[] = [];
const warnings: string[] = [];
const seenIds = new Set<string>();

function uniqueId(id: string, where: string) {
  if (seenIds.has(id)) errors.push(`${where}: duplicate id "${id}"`);
  seenIds.add(id);
}

function requireIdPrefix(id: string, unitId: string, where: string) {
  if (!id.startsWith(`${unitId}-`)) {
    errors.push(`${where}: id "${id}" must start with "${unitId}-"`);
  }
}

for (const unit of units) {
  const where = `unit ${unit.id}`;
  if (!/^u\d{2}$/.test(unit.id)) errors.push(`${where}: bad unit id format`);
  uniqueId(unit.id, where);
  if (unit.week < 1 || unit.week > 16) {
    errors.push(`${where}: week ${unit.week} out of range 1–16`);
  }

  for (const v of unit.vocab) {
    const vw = `${where} vocab ${v.id}`;
    uniqueId(v.id, vw);
    requireIdPrefix(v.id, unit.id, vw);
    if (!v.af || !v.en || !v.exampleAf || !v.exampleEn) {
      errors.push(`${vw}: empty field`);
    }
    const needle = (v.clozeForm ?? v.af).toLowerCase();
    if (!v.exampleAf.toLowerCase().includes(needle)) {
      errors.push(
        `${vw}: exampleAf does not contain "${v.clozeForm ?? v.af}" — add clozeForm`,
      );
    }
  }

  for (const p of unit.phrases) {
    const pw = `${where} phrase ${p.id}`;
    uniqueId(p.id, pw);
    requireIdPrefix(p.id, unit.id, pw);
    if (!p.af || !p.en) errors.push(`${pw}: empty field`);
  }

  uniqueId(unit.grammar.id, `${where} grammar`);
  requireIdPrefix(unit.grammar.id, unit.id, `${where} grammar`);
  if (!unit.grammar.title || !unit.grammar.body) {
    errors.push(`${where} grammar: empty title/body`);
  }
  if (unit.grammar.examples.length === 0) {
    warnings.push(`${where} grammar: no examples`);
  }

  for (const c of unit.cloze) {
    const cw = `${where} cloze ${c.id}`;
    uniqueId(c.id, cw);
    requireIdPrefix(c.id, unit.id, cw);
    const gaps = [...c.textAf.matchAll(/\{\{(.+?)\}\}/g)];
    if (gaps.length !== 1) {
      errors.push(`${cw}: expected exactly one {{gap}}, found ${gaps.length}`);
    } else if (gaps[0][1] !== c.answer) {
      errors.push(`${cw}: gap "${gaps[0][1]}" !== answer "${c.answer}"`);
    }
    if (c.distractors.length < 2) warnings.push(`${cw}: fewer than 2 distractors`);
    if (c.distractors.includes(c.answer)) {
      errors.push(`${cw}: answer appears in distractors`);
    }
    if (!c.en) errors.push(`${cw}: missing en translation`);
  }

  const dw = `${where} dialogue ${unit.dialogue.id}`;
  uniqueId(unit.dialogue.id, dw);
  requireIdPrefix(unit.dialogue.id, unit.id, dw);
  if (unit.dialogue.lines.length < 4) warnings.push(`${dw}: fewer than 4 lines`);
  const glossary = buildGlossaryUpTo(units, unit.id);
  const dialogueGlosses = mergedDialogueGlosses(unit.dialogue);
  for (const [i, line] of unit.dialogue.lines.entries()) {
    if (!line.af || !line.en || !line.speaker) {
      errors.push(`${dw} line ${i + 1}: empty field`);
    }
    for (const token of tokenizeLine(line.af)) {
      if (resolveGloss(token, dialogueGlosses, glossary) === null) {
        const clean = token.toLowerCase().replace(/[.,!?;:"()«»…“”]/g, "");
        if (clean && !/\d/.test(clean)) {
          errors.push(
            `${dw} line ${i + 1}: no gloss for "${token}" — add to line glosses`,
          );
        }
      }
    }
  }
  for (const [i, q] of unit.dialogue.questions.entries()) {
    if (q.correct < 0 || q.correct >= q.options.length) {
      errors.push(`${dw} question ${i + 1}: correct index out of range`);
    }
  }
}

const totalVocab = units.reduce((n, u) => n + u.vocab.length, 0);
const totalPhrases = units.reduce((n, u) => n + u.phrases.length, 0);
const totalCloze = units.reduce((n, u) => n + u.cloze.length, 0);
console.log(
  `Checked ${units.length} units: ${totalVocab} vocab, ${totalPhrases} phrases, ${totalCloze} cloze exercises.`,
);
for (const w of warnings) console.warn(`WARN  ${w}`);
for (const e of errors) console.error(`ERROR ${e}`);
if (errors.length > 0) {
  console.error(`\n${errors.length} error(s).`);
  process.exit(1);
}
console.log("Content OK ✔");
