import Link from "next/link";
import { redirect } from "next/navigation";
import { and, eq } from "drizzle-orm";
import { db, isDbConfigured } from "@/db";
import { dailyActivity, users, userSettings } from "@/db/schema";
import GoalRing from "@/components/GoalRing";
import SetupNotice from "@/components/SetupNotice";
import TrajectoryChart from "@/components/TrajectoryChart";
import { requireUserId } from "@/lib/auth/guards";
import { localDateString } from "@/lib/dates";
import { dashboardStats, PLAN_DAYS } from "@/lib/stats";

function greeting(now: Date, timezone: string): string {
  let hour = now.getUTCHours();
  try {
    hour = Number(
      new Intl.DateTimeFormat("en", {
        timeZone: timezone,
        hour: "numeric",
        hour12: false,
      }).format(now),
    );
  } catch {
    // fall back to UTC hour
  }
  if (hour < 12) return "Goeiemôre"; // good morning
  if (hour < 18) return "Goeiemiddag"; // good afternoon
  return "Goeienaand"; // good evening
}

export default async function DashboardPage() {
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
  if (!settings?.onboardedAt) redirect("/onboarding");

  const now = new Date();
  const today = localDateString(now, settings.timezone);
  const [[todayRow], stats] = await Promise.all([
    db()
      .select()
      .from(dailyActivity)
      .where(
        and(
          eq(dailyActivity.userId, userId),
          eq(dailyActivity.localDate, today),
        ),
      )
      .limit(1),
    dashboardStats(userId, user?.displayName ?? "friend"),
  ]);

  const streakActiveToday = settings.lastActiveDate === today;
  const onPace = stats.wordsKnown + stats.wordsLearning >= stats.targetWordsByNow;
  const week = Math.min(16, Math.floor(stats.daysSinceStart / 7) + 1);

  return (
    <div className="space-y-5">
      <header className="flex items-start justify-between pt-2">
        <div>
          <h1 className="text-2xl font-black text-ink">
            {greeting(now, settings.timezone)},{" "}
            <span className="text-gold">{stats.displayName}</span>
          </h1>
          <p className="mt-1 text-sm text-muted">
            Week {week} of 16 · Level {stats.level} ·{" "}
            <span className="font-semibold text-gold-bright">{stats.rank}</span>
          </p>
        </div>
      </header>

      <section className="flex items-center gap-5 rounded-2xl border border-border bg-surface p-4">
        <GoalRing
          minutes={todayRow?.minutes ?? 0}
          goal={settings.dailyGoalMinutes}
        />
        <div className="flex-1">
          <p className="text-4xl font-black text-flame">
            🔥 {settings.currentStreak}
            <span className="ml-1 text-base font-bold text-muted">
              day{settings.currentStreak === 1 ? "" : "s"}
            </span>
          </p>
          <p className="mt-1 text-xs leading-relaxed text-muted">
            {streakActiveToday
              ? "Today counts — streak safe."
              : "Do today's session to keep the streak alive."}
          </p>
          <p className="mt-2 text-xs font-semibold text-gold">
            +{todayRow?.xp ?? 0} XP today
          </p>
        </div>
      </section>

      <Link
        href="/session"
        className="block rounded-2xl bg-gold p-5 text-bg transition active:scale-[0.99]"
      >
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xl font-black">Start today&apos;s session</p>
            <p className="mt-0.5 text-sm font-semibold opacity-80">
              {stats.dueNow} review{stats.dueNow === 1 ? "" : "s"} due · new
              words waiting
            </p>
          </div>
          <span className="text-3xl">→</span>
        </div>
      </Link>

      <section className="grid grid-cols-3 gap-2.5">
        <div className="rounded-xl border border-border bg-surface p-3 text-center">
          <p className="text-2xl font-black text-leaf">{stats.wordsKnown}</p>
          <p className="text-[11px] text-muted">words known</p>
        </div>
        <div className="rounded-xl border border-border bg-surface p-3 text-center">
          <p className="text-2xl font-black text-sky">{stats.wordsLearning}</p>
          <p className="text-[11px] text-muted">in learning</p>
        </div>
        <div className="rounded-xl border border-border bg-surface p-3 text-center">
          <p className="text-2xl font-black text-gold">
            {stats.retention !== null
              ? `${Math.round(stats.retention * 100)}%`
              : "—"}
          </p>
          <p className="text-[11px] text-muted">retention</p>
        </div>
      </section>

      <section className="rounded-2xl border border-border bg-surface p-4">
        <div className="flex items-baseline justify-between">
          <h2 className="font-bold text-ink">Your 16-week trajectory</h2>
          <span
            className={`text-xs font-bold ${onPace ? "text-leaf" : "text-flame"}`}
          >
            {onPace ? "On pace ✓" : "Push a little harder"}
          </span>
        </div>
        <p className="mt-0.5 text-xs text-muted">
          {stats.wordsKnown + stats.wordsLearning} of {stats.totalWords} words
          started · target by now: {stats.targetWordsByNow}
        </p>
        <div className="mt-3">
          <TrajectoryChart
            trajectory={stats.trajectory}
            totalWords={stats.totalWords}
            planDays={PLAN_DAYS}
          />
        </div>
        <p className="mt-1 text-[10px] text-faint">
          Dotted line = 16-week plan · gold = you
        </p>
      </section>

      <p className="pb-2 text-center text-[11px] leading-relaxed text-faint">
        Reviews scheduled by FSRS (the algorithm behind modern Anki) ·
        {stats.wordsMature > 0 && ` ${stats.wordsMature} words in long-term memory · `}
        built on spaced repetition, retrieval practice &amp; comprehensible
        input
      </p>
    </div>
  );
}
