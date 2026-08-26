import type { Metadata } from "next";
import { eq } from "drizzle-orm";
import { db, isDbConfigured } from "@/db";
import { users, userSettings } from "@/db/schema";
import SettingsForm from "@/components/SettingsForm";
import SetupNotice from "@/components/SetupNotice";
import { logout } from "@/app/actions/auth";
import { requireUserId } from "@/lib/auth/guards";

export const metadata: Metadata = { title: "Settings — Vlot" };

export default async function SettingsPage() {
  const userId = await requireUserId();
  if (!isDbConfigured()) return <SetupNotice />;

  const [[user], [settings]] = await Promise.all([
    db().select().from(users).where(eq(users.id, userId)).limit(1),
    db()
      .select()
      .from(userSettings)
      .where(eq(userSettings.userId, userId))
      .limit(1),
  ]);

  return (
    <div className="space-y-6">
      <header className="pt-2">
        <h1 className="text-2xl font-black text-ink">Settings</h1>
        <p className="mt-1 text-sm text-muted">{user?.email}</p>
      </header>

      <SettingsForm
        initial={{
          displayName: user?.displayName ?? "",
          dailyGoalMinutes: settings?.dailyGoalMinutes ?? 15,
          dailyNewCards: settings?.dailyNewCards ?? 10,
          timezone: settings?.timezone ?? "UTC",
        }}
      />

      <section className="rounded-2xl border border-border bg-surface p-4 text-sm leading-relaxed text-muted">
        <h2 className="mb-2 font-bold text-ink">How Vlot works</h2>
        <p>
          Every word becomes three cards — recognise it, produce it, use it in
          a sentence — scheduled by <strong className="text-ink">FSRS</strong>,
          the state-of-the-art spaced-repetition algorithm. Sessions interleave
          reviews with new words, grammar bites, dialogue reading
          (comprehensible input) and shadowing, because that combination is
          what the research says actually builds fluency. Show up daily — 20
          honest minutes beats a weekend binge, every time.
        </p>
      </section>

      <form action={logout} className="pb-2">
        <button
          type="submit"
          className="w-full rounded-xl border border-danger/40 bg-danger/10 px-4 py-3.5 font-bold text-danger active:scale-[0.98]"
        >
          Log out
        </button>
      </form>
    </div>
  );
}
