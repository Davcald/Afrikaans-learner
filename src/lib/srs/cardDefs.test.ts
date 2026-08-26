import { strict as assert } from "node:assert";
import { test } from "node:test";
import { units } from "../../content/registry";
import {
  cardDefById,
  eligibleNewDefs,
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

test("introduction gating: prod unlocks after rec, cloze after prod", () => {
  const none = eligibleNewDefs(u01, new Set());
  assert.ok(none.every((d) => d.kind === "vocab-rec" || d.kind === "phrase-rec"));

  const withRec = eligibleNewDefs(u01, new Set(["u01-v001-rec"]));
  assert.ok(withRec.some((d) => d.cardId === "u01-v001-prod"));
  assert.ok(!withRec.some((d) => d.cardId === "u01-v001-cloze"));
  // children come before brand-new recs
  assert.equal(withRec[0].cardId, "u01-v001-prod");

  const withProd = eligibleNewDefs(
    u01,
    new Set(["u01-v001-rec", "u01-v001-prod"]),
  );
  assert.equal(withProd[0].cardId, "u01-v001-cloze");
});

test("rec defs preserve vocab order then phrases", () => {
  const recs = unitRecDefs(u01);
  assert.equal(recs[0].cardId, "u01-v001-rec");
  const firstPhrase = recs.findIndex((d) => d.kind === "phrase-rec");
  assert.ok(firstPhrase > 0);
  assert.ok(recs.slice(firstPhrase).every((d) => d.kind === "phrase-rec"));
});
