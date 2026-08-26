"use server";

import { redirect } from "next/navigation";
import { z } from "zod";
import { eq } from "drizzle-orm";
import { db } from "@/db";
import { unitProgress, users, userSettings } from "@/db/schema";
import { requireUserId } from "@/lib/auth/guards";

const GOAL_CHOICES = [5, 10, 15, 20, 30] as const;
const NEW_CARD_CHOICES = [5, 10, 15, 20] as const;

const onboardingSchema = z.object({
  dailyGoalMinutes: z.coerce
    .number()
    .refine((n) => GOAL_CHOICES.includes(n as (typeof GOAL_CHOICES)[number])),
  dailyNewCards: z.coerce
    .number()
    .refine((n) =>
      NEW_CARD_CHOICES.includes(n as (typeof NEW_CARD_CHOICES)[number]),
    ),
  fastStart: z.coerce.boolean(),
});

export async function completeOnboarding(formData: FormData): Promise<void> {
  const userId = await requireUserId();
  const parsed = onboardingSchema.safeParse({
    dailyGoalMinutes: formData.get("dailyGoalMinutes") ?? 15,
    dailyNewCards: formData.get("dailyNewCards") ?? 10,
    fastStart: formData.get("fastStart"),
  });
  const data = parsed.success
    ? parsed.data
    : { dailyGoalMinutes: 15, dailyNewCards: 10, fastStart: false };

  const now = new Date();
  await db()
    .update(userSettings)
    .set({
      dailyGoalMinutes: data.dailyGoalMinutes,
      dailyNewCards: data.dailyNewCards,
      onboardedAt: now,
      startedAt: now,
    })
    .where(eq(userSettings.userId, userId));

  if (data.fastStart) {
    // "I know the basics" — skip the first two units entirely.
    await db()
      .insert(unitProgress)
      .values(
        ["u01", "u02"].map((unitId) => ({
          userId,
          unitId,
          grammarDoneAt: now,
          readerDoneAt: now,
          completedAt: now,
        })),
      )
      .onConflictDoNothing();
  }

  redirect("/");
}

const settingsSchema = z.object({
  displayName: z.string().trim().min(1).max(20),
  dailyGoalMinutes: z.coerce.number().int().min(5).max(120),
  dailyNewCards: z.coerce.number().int().min(0).max(50),
  timezone: z.string().max(64),
  ttsRate: z.coerce.number().min(0.5).max(1.5),
});

export type SettingsFormState = { error?: string; saved?: boolean };

export async function updateSettings(
  _prev: SettingsFormState,
  formData: FormData,
): Promise<SettingsFormState> {
  const userId = await requireUserId();
  const parsed = settingsSchema.safeParse({
    displayName: formData.get("displayName"),
    dailyGoalMinutes: formData.get("dailyGoalMinutes"),
    dailyNewCards: formData.get("dailyNewCards"),
    timezone: formData.get("timezone"),
    ttsRate: formData.get("ttsRate") ?? 1,
  });
  if (!parsed.success) {
    return { error: "Check the values and try again" };
  }
  let timezone = parsed.data.timezone;
  try {
    new Intl.DateTimeFormat("en", { timeZone: timezone });
  } catch {
    timezone = "UTC";
  }

  await db()
    .update(users)
    .set({ displayName: parsed.data.displayName })
    .where(eq(users.id, userId));
  await db()
    .update(userSettings)
    .set({
      dailyGoalMinutes: parsed.data.dailyGoalMinutes,
      dailyNewCards: parsed.data.dailyNewCards,
      timezone,
      ttsRate: parsed.data.ttsRate,
    })
    .where(eq(userSettings.userId, userId));

  return { saved: true };
}
