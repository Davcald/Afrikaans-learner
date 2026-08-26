import "server-only";

import { and, eq, gte, sql } from "drizzle-orm";
import { TOTAL_VOCAB_COUNT } from "@/content";
import { db } from "@/db";
import { cards, reviewLogs, userSettings, xpEvents } from "@/db/schema";
import { localDateString } from "@/lib/dates";
import { levelForXp, rankForLevel, xpForLevel } from "@/lib/gamification";
import { State } from "@/lib/srs/scheduler";

export interface TrajectoryPoint {
  day: number; // days since start
  actual: number; // cumulative words introduced
}

export interface DashboardStats {
  displayName: string;
  wordsKnown: number; // vocab whose -rec card graduated to Review/Relearning
  wordsLearning: number; // introduced but still in (re)learning steps
  wordsMature: number; // interval >= 21 days
  totalWords: number;
  retention: number | null; // last 30 days, review-state cards only
  dueNow: number;
  totalXp: number;
  level: number;
  rank: string;
  levelProgress: number; // 0..1 within current level
  daysSinceStart: number;
  trajectory: TrajectoryPoint[];
  targetWordsByNow: number;
}

const PLAN_DAYS = 112; // 16 weeks

const VOCAB_REC_RE = /^u\d{2}-v\d+-rec$/;

export async function dashboardStats(
  userId: string,
  displayName: string,
): Promise<DashboardStats> {
  const now = new Date();
  const monthAgo = new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000);

  const [cardRows, [settings], [xpRow], retentionRows, introRows] =
    await Promise.all([
      db()
        .select({
          cardId: cards.cardId,
          state: cards.state,
          scheduledDays: cards.scheduledDays,
          due: cards.due,
        })
        .from(cards)
        .where(eq(cards.userId, userId)),
      db()
        .select()
        .from(userSettings)
        .where(eq(userSettings.userId, userId))
        .limit(1),
      db()
        .select({ total: sql<number>`coalesce(sum(${xpEvents.amount}), 0)` })
        .from(xpEvents)
        .where(eq(xpEvents.userId, userId)),
      db()
        .select({
          rating: reviewLogs.rating,
          n: sql<number>`count(*)`,
        })
        .from(reviewLogs)
        .where(
          and(
            eq(reviewLogs.userId, userId),
            eq(reviewLogs.state, State.Review),
            gte(reviewLogs.review, monthAgo),
          ),
        )
        .groupBy(reviewLogs.rating),
      // First-ever review of each vocab recognition card = the word's introduction day.
      db()
        .select({
          cardId: reviewLogs.cardId,
          first: sql<string>`min(${reviewLogs.review})`,
        })
        .from(reviewLogs)
        .where(
          and(
            eq(reviewLogs.userId, userId),
            sql`${reviewLogs.cardId} like 'u%-rec'`,
          ),
        )
        .groupBy(reviewLogs.cardId),
    ]);

  const vocabRec = cardRows.filter((r) => VOCAB_REC_RE.test(r.cardId));
  const wordsKnown = vocabRec.filter(
    (r) => r.state === State.Review || r.state === State.Relearning,
  ).length;
  const wordsLearning = vocabRec.length - wordsKnown;
  const wordsMature = vocabRec.filter(
    (r) => r.state === State.Review && r.scheduledDays >= 21,
  ).length;
  const dueNow = cardRows.filter((r) => r.due.getTime() <= now.getTime()).length;

  let retention: number | null = null;
  const totalReviews = retentionRows.reduce((n, r) => n + Number(r.n), 0);
  if (totalReviews >= 10) {
    const again = retentionRows
      .filter((r) => r.rating === 1)
      .reduce((n, r) => n + Number(r.n), 0);
    retention = 1 - again / totalReviews;
  }

  const totalXp = Number(xpRow?.total ?? 0);
  const level = levelForXp(totalXp);
  const levelStart = xpForLevel(level);
  const levelEnd = xpForLevel(level + 1);
  const levelProgress = Math.min(
    1,
    (totalXp - levelStart) / Math.max(1, levelEnd - levelStart),
  );

  const timezone = settings?.timezone ?? "UTC";
  const startedAt = settings?.startedAt ?? now;
  const startDay = localDateString(startedAt, timezone);
  const today = localDateString(now, timezone);
  const daysSinceStart = Math.max(
    0,
    Math.round(
      (Date.parse(today) - Date.parse(startDay)) / (24 * 60 * 60 * 1000),
    ),
  );

  // Cumulative words introduced per day since start (vocab -rec first reviews).
  const introDays = introRows
    .filter((r) => VOCAB_REC_RE.test(r.cardId))
    .map((r) =>
      Math.max(
        0,
        Math.round(
          (Date.parse(localDateString(new Date(r.first), timezone)) -
            Date.parse(startDay)) /
            (24 * 60 * 60 * 1000),
        ),
      ),
    )
    .sort((a, b) => a - b);
  const horizon = Math.min(Math.max(daysSinceStart, 1), PLAN_DAYS);
  const trajectory: TrajectoryPoint[] = [];
  let cumulative = 0;
  let idx = 0;
  for (let day = 0; day <= horizon; day++) {
    while (idx < introDays.length && introDays[idx] <= day) {
      cumulative++;
      idx++;
    }
    trajectory.push({ day, actual: cumulative });
  }

  const targetWordsByNow = Math.round(
    (Math.min(daysSinceStart, PLAN_DAYS) / PLAN_DAYS) * TOTAL_VOCAB_COUNT,
  );

  return {
    displayName,
    wordsKnown,
    wordsLearning,
    wordsMature,
    totalWords: TOTAL_VOCAB_COUNT,
    retention,
    dueNow,
    totalXp,
    level,
    rank: rankForLevel(level),
    levelProgress,
    daysSinceStart,
    trajectory,
    targetWordsByNow,
  };
}

export { PLAN_DAYS };
