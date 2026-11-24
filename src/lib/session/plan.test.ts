// Simulates a learner working through the course day by day, to check the
// promises the app makes: every new word is taught before it is asked, the
// daily word target is really delivered, and reviews never run away.
import { strict as assert } from "node:assert";
import { test } from "node:test";
import { createEmptyCard } from "ts-fsrs";
import { fsrsCardToRowValues, rowToFsrsCard, type CardRow } from "../srs/mapping";
import { SCHEDULER, type Grade } from "../srs/scheduler";
import { units } from "../../content/registry";
import { buildPlan, type PlanInput } from "./assemble";
import type { ExerciseItem, SessionPlan } from "./types";

const DAY = 24 * 60 * 60 * 1000;

function seeded(seed: number): () => number {
  let a = seed;
  return () => {
    a = (a * 1664525 + 1013904223) >>> 0;
    return a / 4294967296;
  };
}

interface Sim {
  rows: Map<string, CardRow>;
  recentNew: { cardId: string; review: Date }[];
  progress: PlanInput["progressRows"];
}

function plan(sim: Sim, now: Date, reviewsToday: number, extraNew = 0): SessionPlan {
  return buildPlan({
    userId: "sim",
    now,
    timezone: "UTC",
    newTarget: 10,
    goalMinutes: 10,
    streak: 0,
    cardRows: [...sim.rows.values()],
    progressRows: sim.progress,
    recentNew: sim.recentNew,
    today: { reviews: reviewsToday, xp: 0, minutes: 0 },
    extraNew,
  });
}

/** Play one round; returns the number of graded answers. */
function play(sim: Sim, p: SessionPlan, now: Date, accuracy: number, rand: () => number): number {
  let graded = 0;
  for (const item of p.items) {
    if (item.kind === "grammar" || item.kind === "reader") {
      let row = sim.progress.find((r) => r.unitId === item.unitId);
      if (!row) {
        row = {
          userId: "sim",
          unitId: item.unitId,
          startedAt: now,
          grammarDoneAt: null,
          readerDoneAt: null,
          completedAt: null,
        };
        sim.progress.push(row);
      }
      if (item.kind === "grammar") row.grammarDoneAt = now;
      else row.readerDoneAt = now;
      continue;
    }
    if (!("cardId" in item)) continue;
    const existing = sim.rows.get(item.cardId);
    const rating: Grade = rand() < accuracy ? 3 : 1;
    const { card } = SCHEDULER.next(
      existing ? rowToFsrsCard(existing) : createEmptyCard(now),
      now,
      rating,
    );
    if (!existing) sim.recentNew.push({ cardId: item.cardId, review: now });
    sim.rows.set(item.cardId, {
      userId: "sim",
      cardId: item.cardId,
      ...fsrsCardToRowValues(card),
    });
    graded++;
  }
  return graded;
}

function taughtBeforeAsked(items: ExerciseItem[]): void {
  const taught = new Set<string>();
  for (const item of items) {
    if (item.kind === "intro") taught.add(item.af);
    if (item.kind === "choice" && item.isNew && item.cardId.endsWith("-rec")) {
      assert.ok(taught.has(item.af), `asked before taught: ${item.af}`);
    }
    if (item.kind === "drill" && item.id.startsWith("dr-re")) {
      assert.ok(taught.has(item.af), `drilled before taught: ${item.af}`);
    }
  }
}

test("first ever round: five words, each shown, then recalled three times", () => {
  const sim: Sim = { rows: new Map(), recentNew: [], progress: [] };
  const p = plan(sim, new Date("2026-01-01T08:00:00Z"), 0);
  const intros = p.items.filter((i) => i.kind === "intro");
  assert.equal(intros.length, 5);
  assert.equal(p.meta.newCount, 5);
  assert.equal(p.items[0].kind, "intro");
  taughtBeforeAsked(p.items);
  for (const intro of intros) {
    if (intro.kind !== "intro") continue;
    const recalls = p.items.filter(
      (i) => (i.kind === "choice" || i.kind === "drill") && i.af === intro.af,
    );
    assert.equal(recalls.length, 3, `three recalls of ${intro.af}`);
  }
  // nothing on day one asks the learner to type
  assert.ok(!p.items.some((i) => i.kind === "type" || (i.kind === "cloze" && !i.options)));
  assert.equal(p.meta.moreNewAvailable, true);
});

test("60 simulated days: target met daily, load stays bounded, typing arrives late", () => {
  const sim: Sim = { rows: new Map(), recentNew: [], progress: [] };
  const rand = seeded(42);
  const start = new Date("2026-01-01T08:00:00Z").getTime();
  const perDay: { words: number; graded: number; rounds: number }[] = [];
  let firstTyping = -1;

  for (let day = 0; day < 60; day++) {
    let graded = 0;
    let rounds = 0;
    let words = 0;
    // A learner who does every round the app offers, at ~85% accuracy.
    for (; rounds < 12; rounds++) {
      const now = new Date(start + day * DAY + rounds * 20 * 60 * 1000);
      const p = plan(sim, now, graded);
      taughtBeforeAsked(p.items);
      if (firstTyping < 0 && p.items.some((i) => i.kind === "type" && !i.tileSet)) {
        firstTyping = day;
      }
      words += p.meta.newCount;
      graded += play(sim, p, now, 0.85, rand);
      if (p.meta.dueRemaining === 0 && !p.meta.moreNewAvailable) {
        rounds++;
        break;
      }
    }
    sim.recentNew = sim.recentNew.filter(
      (r) => r.review.getTime() > start + (day - 1) * DAY,
    );
    perDay.push({ words, graded, rounds });
  }

  const totalWords = [...sim.rows.keys()].filter((id) => id.endsWith("-rec")).length;
  const peak = Math.max(...perDay.map((d) => d.graded));
  const lastWeek = perDay.slice(-7);
  const avgLate = lastWeek.reduce((n, d) => n + d.graded, 0) / 7;
  console.log(
    `60 days → ${totalWords} words met, ${sim.rows.size} cards; ` +
      `peak ${peak} answers/day, last-week avg ${avgLate.toFixed(0)}/day, ` +
      `first free-typing on day ${firstTyping + 1}`,
  );
  console.log(
    "words/day by week:",
    [0, 1, 2, 3, 4, 5, 6, 7].map((w) =>
      (perDay.slice(w * 7, w * 7 + 7).reduce((n, d) => n + d.words, 0) / 7).toFixed(1),
    ).join(" "),
  );

  assert.ok(perDay.slice(0, 7).every((d) => d.words === 10), "10 words/day in week one");
  assert.ok(totalWords >= 400, `expected ≥400 words in 60 days, got ${totalWords}`);
  assert.ok(firstTyping >= 3, "no free typing in the first days");
  assert.ok(peak < 400, `runaway review load: ${peak}`);
});

test("a big backlog pauses new words", () => {
  const sim: Sim = { rows: new Map(), recentNew: [], progress: [] };
  const rand = seeded(7);
  const t0 = new Date("2026-01-01T08:00:00Z").getTime();
  for (let day = 0; day < 6; day++) {
    for (let r = 0; r < 3; r++) {
      const now = new Date(t0 + day * DAY + r * 20 * 60 * 1000);
      play(sim, plan(sim, now, r), now, 1, rand);
    }
  }
  assert.ok(sim.rows.size > 60, `only ${sim.rows.size} cards`);
  sim.recentNew = [];
  const later = plan(sim, new Date(t0 + 60 * DAY), 0);
  assert.equal(later.meta.newOnHold, true);
  assert.equal(later.meta.newCount, 0);
  assert.equal(later.meta.dueCount, 20);
  assert.ok(later.meta.dueRemaining > 20);
  assert.ok(!later.items.some((i) => i.kind === "intro"));
});

test("listening questions offer sentence meanings that include the right one", () => {
  const sim: Sim = { rows: new Map(), recentNew: [], progress: [] };
  const rand = seeded(3);
  const t0 = new Date("2026-01-01T08:00:00Z").getTime();
  let checked = 0;
  for (let day = 0; day < 20; day++) {
    for (let r = 0; r < 3; r++) {
      const now = new Date(t0 + day * DAY + r * 20 * 60 * 1000);
      const p = plan(sim, now, r);
      for (const item of p.items) {
        if (item.kind !== "listening") continue;
        checked++;
        const right = item.options[item.correct];
        assert.ok(right, "correct option exists");
        assert.equal(new Set(item.options).size, item.options.length, "no duplicate options");
        // the right answer translates the very sentence that is played
        const v = units.flatMap((u) => u.vocab).find((x) => x.exampleAf === item.ttsText);
        assert.ok(v && v.exampleEn === right, `wrong answer for "${item.ttsText}": ${right}`);
      }
      play(sim, p, now, 0.9, rand);
    }
  }
  assert.ok(checked > 5, `only ${checked} listening items seen`);
});
