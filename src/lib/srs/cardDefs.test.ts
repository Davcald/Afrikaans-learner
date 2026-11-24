import { strict as assert } from "node:assert";
import { test } from "node:test";
import { units } from "../../content/registry";
import {
  cardDefById,
  deepenDefs,
  newWordDefs,
  unitCardDefs,
  unitRecDefs,
  vocabClozeText,
} from "./cardDefs";

const u01 = units.find((u) => u.id === "u01")!;

test("every unit card def resolves back via cardDefById", () => {
  for (const unit of units) {
    for (const def of unitCardDefs(unit)) {
      const resolved = cardDefById(def.cardId);
      assert.ok(resolved, `unresolvable: ${def.cardId}`);
      assert.equal(resolved.kind, def.kind);
      assert.equal(resolved.unitId, unit.id);
    }
  }
});

test("unknown / malformed ids resolve to null", () => {
  assert.equal(cardDefById("u99-v001-rec"), null);
  assert.equal(cardDefById("u01-v001-bogus"), null);
  assert.equal(cardDefById("u01-p01-cloze"), null);
  assert.equal(cardDefById("droptable"), null);
});

test("vocab cloze blanks the headword, preserving case", () => {
  const v = u01.vocab.find((x) => x.id === "u01-v002")!; // goeiemôre
  const cloze = vocabClozeText(v)!;
  assert.ok(cloze.textAf.includes("{{Goeiemôre}}"));
  assert.equal(cloze.answer, "Goeiemôre");
});

test("new words: only recognition cards, phrases woven in, introduced skipped", () => {
  const all = newWordDefs(u01, new Set());
  assert.ok(all.every((d) => d.kind === "vocab-rec" || d.kind === "phrase-rec"));
  assert.equal(all.length, u01.vocab.length + u01.phrases.length);
  assert.equal(all[0].cardId, "u01-v001-rec");
  assert.equal(all[5].kind, "phrase-rec"); // first phrase after five words
  const rest = newWordDefs(u01, new Set(["u01-v001-rec"]));
  assert.equal(rest[0].cardId, "u01-v002-rec");
});

test("deepening: prod waits for a graduated rec, cloze for a stable prod", () => {
  const learning = { state: 1, stability: 0.5, reps: 1 };
  const review = { state: 2, stability: 3, reps: 2 };
  const stable = { state: 2, stability: 12, reps: 4 };

  assert.equal(deepenDefs(u01, new Map(), false).length, 0);
  assert.equal(
    deepenDefs(u01, new Map([["u01-v001-rec", learning]]), false).length,
    0,
  );
  const afterRec = deepenDefs(u01, new Map([["u01-v001-rec", review]]), false);
  assert.deepEqual(afterRec.map((d) => d.cardId), ["u01-v001-prod"]);

  const youngProd = new Map([
    ["u01-v001-rec", stable],
    ["u01-v001-prod", review],
  ]);
  assert.equal(deepenDefs(u01, youngProd, false).length, 0);
  const stableProd = new Map([
    ["u01-v001-rec", stable],
    ["u01-v001-prod", stable],
  ]);
  assert.deepEqual(
    deepenDefs(u01, stableProd, false).map((d) => d.cardId),
    ["u01-v001-cloze"],
  );

  const grammar = deepenDefs(u01, new Map(), true);
  assert.ok(grammar.length > 0 && grammar.every((d) => d.kind === "cloze"));
});

test("rec defs preserve vocab order then phrases", () => {
  const recs = unitRecDefs(u01);
  assert.equal(recs[0].cardId, "u01-v001-rec");
  const firstPhrase = recs.findIndex((d) => d.kind === "phrase-rec");
  assert.ok(firstPhrase > 0);
  assert.ok(recs.slice(firstPhrase).every((d) => d.kind === "phrase-rec"));
});
