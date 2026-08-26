import "server-only";

import { and, eq } from "drizzle-orm";
import { db } from "@/db";
import { dailyActivity, userSettings, xpEvents } from "@/db/schema";
import { addDays, localDateString } from "@/lib/dates";
import { STREAK_MILESTONES, XP } from "@/lib/gamification";

export interface ActivityDelta {
  xp: number;
  kind: string;
  refId?: string;
  reviews?: number;
  newCards?: number;
  durationMs?: number;
}

export interface ActivityResult {
  streak: number;
  xpAwarded: number; // including any bonuses triggered by this action
  xpToday: number;
  minutesToday: number;
  goalMinutes: number;
  goalMet: boolean;
  bonuses: { kind: string; amount: number }[];
}

/**
 * Record one learning action: XP event(s), the daily activity rollup, and the
 * (timezone-correct) streak. Streak counts any activity; the daily-goal bonus
 * fires once when today's minutes cross the user's goal.
 */
export async function recordActivity(
  userId: string,
  delta: ActivityDelta,
): Promise<ActivityResult> {
  const now = new Date();
  const [settings] = await db()
    .select()
    .from(userSettings)
    .where(eq(userSettings.userId, userId))
    .limit(1);
  const timezone = settings?.timezone ?? "UTC";
  const goalMinutes = settings?.dailyGoalMinutes ?? 15;
  const today = localDateString(now, timezone);
  const yesterday = addDays(today, -1);

  // Streak: first activity of a new local day either extends or resets it.
  let streak = settings?.currentStreak ?? 0;
  const bonuses: { kind: string; amount: number }[] = [];
  const isNewDay = settings?.lastActiveDate !== today;
  if (isNewDay) {
    streak = settings?.lastActiveDate === yesterday ? streak + 1 : 1;
    const milestone = STREAK_MILESTONES[streak];
    if (milestone) bonuses.push({ kind: `streak_${streak}`, amount: milestone });
  }

  const [todayRow] = await db()
    .select()
    .from(dailyActivity)
    .where(
      and(eq(dailyActivity.userId, userId), eq(dailyActivity.localDate, today)),
    )
    .limit(1);

  const minutesDelta = Math.min(Math.max(delta.durationMs ?? 0, 0), 120000) / 60000;
  const minutesToday = (todayRow?.minutes ?? 0) + minutesDelta;
  const goalJustMet = !todayRow?.goalMet && minutesToday >= goalMinutes;
  if (goalJustMet) bonuses.push({ kind: "goal_bonus", amount: XP.goalBonus });

  const bonusXp = bonuses.reduce((n, b) => n + b.amount, 0);
  const xpAwarded = delta.xp + bonusXp;
  const xpToday = (todayRow?.xp ?? 0) + xpAwarded;
  const goalMet = (todayRow?.goalMet ?? false) || goalJustMet;

  await db().batch([
    db()
      .insert(xpEvents)
      .values([
        { userId, amount: delta.xp, kind: delta.kind, refId: delta.refId },
        ...bonuses.map((b) => ({ userId, amount: b.amount, kind: b.kind })),
      ]),
    db()
      .insert(dailyActivity)
      .values({
        userId,
        localDate: today,
        xp: xpToday,
        reviews: (todayRow?.reviews ?? 0) + (delta.reviews ?? 0),
        newCards: (todayRow?.newCards ?? 0) + (delta.newCards ?? 0),
        minutes: minutesToday,
        goalMet,
      })
      .onConflictDoUpdate({
        target: [dailyActivity.userId, dailyActivity.localDate],
        set: {
          xp: xpToday,
          reviews: (todayRow?.reviews ?? 0) + (delta.reviews ?? 0),
          newCards: (todayRow?.newCards ?? 0) + (delta.newCards ?? 0),
          minutes: minutesToday,
          goalMet,
        },
      }),
    db()
      .update(userSettings)
      .set({
        currentStreak: streak,
        longestStreak: Math.max(settings?.longestStreak ?? 0, streak),
        lastActiveDate: today,
      })
      .where(eq(userSettings.userId, userId)),
  ]);

  return {
    streak,
    xpAwarded,
    xpToday,
    minutesToday,
    goalMinutes,
    goalMet,
    bonuses,
  };
}
