import { strict as assert } from "node:assert";
import { test } from "node:test";
import { checkAnswer, editDistance, normalizeAnswer } from "./answers";

test("normalizeAnswer strips case, punctuation, extra spaces", () => {
  assert.equal(normalizeAnswer("  Hoe  gaan dit? "), "hoe gaan dit");
  assert.equal(normalizeAnswer("Dankie!"), "dankie");
  assert.equal(normalizeAnswer("’n boek"), "'n boek"); // curly → straight apostrophe
});

test("exact match", () => {
  assert.equal(checkAnswer("dankie", ["dankie"]).verdict, "exact");
  assert.equal(checkAnswer("Baie dankie!", ["baie dankie"]).verdict, "exact");
});

test("alt answers accepted", () => {
  assert.equal(checkAnswer("thanks", ["thank you", "thanks"]).verdict, "exact");
});

test("diacritics-insensitive match flagged", () => {
  const r = checkAnswer("se", ["sê"]);
  assert.equal(r.verdict, "diacritics");
  assert.equal(r.expected, "sê");
  assert.equal(checkAnswer("more", ["môre"]).verdict, "diacritics");
});

test("small typos pass for longer words only", () => {
  assert.equal(checkAnswer("verstan", ["verstaan"]).verdict, "typo");
  assert.equal(checkAnswer("ju", ["jy"]).verdict, "wrong"); // short word: no budget
  assert.equal(checkAnswer("goeiemroe", ["goeiemôre"]).verdict, "typo"); // transposition
});

test("wrong answers rejected", () => {
  assert.equal(checkAnswer("huis", ["vrou"]).verdict, "wrong");
  assert.equal(checkAnswer("", ["vrou"]).verdict, "wrong");
});

test("editDistance handles transpositions", () => {
  assert.equal(editDistance("ab", "ba"), 1);
  assert.equal(editDistance("hallo", "hallo"), 0);
  assert.equal(editDistance("kat", "kar"), 1);
});
