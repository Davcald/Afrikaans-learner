"use server";

import { and, eq } from "drizzle-orm";
import { createEmptyCard } from "ts-fsrs";
import { db } from "@/db";
import { cards, reviewLogs, unitProgress } from "@/db/schema";
import { unitById } from "@/content/registry";
import { recordActivity, type ActivityResult } from "@/lib/activity";
import { requireUserId } from "@/lib/auth/guards";
import { XP } from "@/lib/gamification";
import { cardDefById } from "@/lib/srs/cardDefs";
import { fsrsCardToRowValues, rowToFsrsCard } from "@/lib/srs/mapping";
import { intervalLabel, SCHEDULER, type Grade } from "@/lib/srs/scheduler";

export interface GradeResult extends ActivityResult {
  nextDue: string; // compact label, e.g. "10m", "3d"
  wasNew: boolean;
}

const MAX_DURATION_MS = 120000;

export async function gradeCard(
  cardId: string,
  rating: number,
  durationMs: number,
): Promise<GradeResult> {
  const userId = await requireUserId();
  if (![1, 2, 3, 4].includes(rating)) throw new Error("Invalid rating");
  const def = cardDefById(cardId);
  if (!def) throw new Error(`Unknown card: ${cardId}`);
  const duration = Math.min(Math.max(Math.floor(durationMs) || 0, 0), MAX_DURATION_MS);

  const now = new Date();
  const [row] = await db()
    .select()
    .from(cards)
    .where(and(eq(cards.userId, userId), eq(cards.cardId, cardId)))
    .limit(1);
  const wasNew = !row;
  const current = row ? rowToFsrsCard(row) : createEmptyCard(now);
  const { card: next, log } = SCHEDULER.next(current, now, rating as Grade);
  const values = fsrsCardToRowValues(next);

  await db().batch([
    db()
      .insert(cards)
      .values({ userId, cardId, ...values })
      .onConflictDoUpdate({
        target: [cards.userId, cards.cardId],
        set: values,
      }),
    db().insert(reviewLogs).values({
      userId,
      cardId,
      rating: log.rating,
      state: log.state,
      due: log.due,
      stability: log.stability,
      difficulty: log.difficulty,
      elapsedDays: log.elapsed_days,
      lastElapsedDays: log.last_elapsed_days,
      scheduledDays: log.scheduled_days,
      learningSteps: log.learning_steps,
      review: log.review,
      durationMs: duration,
    }),
  ]);

  const activity = await recordActivity(userId, {
    xp: XP.review[rating as Grade] + (wasNew ? XP.newCard : 0),
    kind: wasNew ? "new_card" : "review",
    refId: cardId,
    reviews: 1,
    newCards: wasNew ? 1 : 0,
    durationMs: duration,
  });

  return { ...activity, nextDue: intervalLabel(now, next.due), wasNew };
}

async function completeUnitStep(
  step: "grammar" | "reader",
  unitId: string,
  durationMs: number,
): Promise<ActivityResult> {
  const userId = await requireUserId();
  if (!unitById(unitId)) throw new Error(`Unknown unit: ${unitId}`);
  const duration = Math.min(Math.max(Math.floor(durationMs) || 0, 0), MAX_DURATION_MS * 5);

  const now = new Date();
  const [existing] = await db()
    .select()
    .from(unitProgress)
    .where(
      and(eq(unitProgress.userId, userId), eq(unitProgress.unitId, unitId)),
    )
    .limit(1);
  const already =
    step === "grammar" ? existing?.grammarDoneAt : existing?.readerDoneAt;

  const set =
    step === "grammar" ? { grammarDoneAt: now } : { readerDoneAt: now };
  await db()
    .insert(unitProgress)
    .values({ userId, unitId, ...set })
    .onConflictDoUpdate({
      target: [unitProgress.userId, unitProgress.unitId],
      set,
    });

  // XP only the first time; repeat completions still count minutes.
  return recordActivity(userId, {
    xp: already ? 0 : XP[step],
    kind: step,
    refId: unitId,
    durationMs: duration,
  });
}

export async function completeGrammar(
  unitId: string,
  durationMs: number,
): Promise<ActivityResult> {
  return completeUnitStep("grammar", unitId, durationMs);
}

export async function completeReader(
  unitId: string,
  durationMs: number,
): Promise<ActivityResult> {
  return completeUnitStep("reader", unitId, durationMs);
}

export async function completeShadow(
  unitId: string,
  durationMs: number,
): Promise<ActivityResult> {
  const userId = await requireUserId();
  if (!unitById(unitId)) throw new Error(`Unknown unit: ${unitId}`);
  return recordActivity(userId, {
    xp: XP.shadow,
    kind: "shadow",
    refId: unitId,
    durationMs: Math.min(Math.max(Math.floor(durationMs) || 0, 0), MAX_DURATION_MS * 5),
  });
}

/** Non-FSRS practice drills (word bank, listening). Small XP, minutes count. */
export async function logPractice(
  kind: "wordbank" | "listening",
  refId: string,
  correct: boolean,
  durationMs: number,
): Promise<ActivityResult> {
  const userId = await requireUserId();
  if (!["wordbank", "listening"].includes(kind)) throw new Error("Bad kind");
  return recordActivity(userId, {
    xp: correct ? 2 : 1,
    kind,
    refId: refId.slice(0, 64),
    durationMs: Math.min(Math.max(Math.floor(durationMs) || 0, 0), MAX_DURATION_MS),
  });
}
