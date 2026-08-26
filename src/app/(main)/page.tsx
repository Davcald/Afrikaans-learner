import { redirect } from "next/navigation";
import { eq } from "drizzle-orm";
import { db, isDbConfigured } from "@/db";
import { userSettings } from "@/db/schema";
import { requireUserId } from "@/lib/auth/guards";
import SetupNotice from "@/components/SetupNotice";

export default async function DashboardPage() {
  const userId = await requireUserId();
  if (!isDbConfigured()) return <SetupNotice />;

  const settings = await db()
    .select()
    .from(userSettings)
    .where(eq(userSettings.userId, userId))
    .limit(1);
  if (!settings[0]?.onboardedAt) redirect("/onboarding");

  return <p className="text-muted">Dashboard coming up…</p>;
}
