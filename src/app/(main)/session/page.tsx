import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { eq } from "drizzle-orm";
import { db, isDbConfigured } from "@/db";
import { userSettings } from "@/db/schema";
import SetupNotice from "@/components/SetupNotice";
import SessionPlayer from "@/components/session/SessionPlayer";
import { requireUserId } from "@/lib/auth/guards";
import { assembleSession } from "@/lib/session/assemble";

export const metadata: Metadata = { title: "Session — Vlot" };

export default async function SessionPage() {
  const userId = await requireUserId();
  if (!isDbConfigured()) return <SetupNotice />;

  const [settings] = await db()
    .select({ onboardedAt: userSettings.onboardedAt })
    .from(userSettings)
    .where(eq(userSettings.userId, userId))
    .limit(1);
  if (!settings?.onboardedAt) redirect("/onboarding");

  const plan = await assembleSession(userId);
  return <SessionPlayer plan={plan} />;
}
