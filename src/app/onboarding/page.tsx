import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { eq } from "drizzle-orm";
import { db, isDbConfigured } from "@/db";
import { userSettings } from "@/db/schema";
import { requireUserId } from "@/lib/auth/guards";
import { completeOnboarding } from "@/app/actions/settings";

export const metadata: Metadata = { title: "Welcome — Vlot" };

function PillGroup({
  name,
  choices,
  defaultValue,
  unit,
}: {
  name: string;
  choices: number[];
  defaultValue: number;
  unit: string;
}) {
  return (
    <div className="flex flex-wrap gap-2">
      {choices.map((c) => (
        <label key={c} className="cursor-pointer">
          <input
            type="radio"
            name={name}
            value={c}
            defaultChecked={c === defaultValue}
            className="peer sr-only"
          />
          <span className="block rounded-full border border-border bg-surface px-4 py-2 text-sm font-semibold text-muted peer-checked:border-gold peer-checked:bg-gold peer-checked:text-bg">
            {c} {unit}
          </span>
        </label>
      ))}
    </div>
  );
}

export default async function OnboardingPage() {
  const userId = await requireUserId();
  if (isDbConfigured()) {
    const settings = await db()
      .select({ onboardedAt: userSettings.onboardedAt })
      .from(userSettings)
      .where(eq(userSettings.userId, userId))
      .limit(1);
    if (settings[0]?.onboardedAt) redirect("/");
  }

  return (
    <main className="mx-auto flex min-h-dvh w-full max-w-md flex-col justify-center px-6 py-10">
      <h1 className="text-3xl font-black text-ink">
        Welkom! <span className="text-gold">Let&apos;s set your pace.</span>
      </h1>
      <p className="mt-3 text-sm leading-relaxed text-muted">
        Research is unambiguous: <strong className="text-ink">daily consistency beats cramming</strong>.
        Afrikaans is one of the easiest languages for English speakers — a
        focused daily habit gets you conversational in about 16 weeks.
      </p>

      <form action={completeOnboarding} className="mt-8 flex flex-col gap-7">
        <div>
          <p className="mb-2 font-bold text-ink">Daily goal</p>
          <p className="mb-3 text-xs text-muted">
            20–30 min/day is the sweet spot for a 4-month push.
          </p>
          <PillGroup
            name="dailyGoalMinutes"
            choices={[5, 10, 15, 20, 30]}
            defaultValue={20}
            unit="min"
          />
        </div>

        <div>
          <p className="mb-2 font-bold text-ink">New words per day</p>
          <p className="mb-3 text-xs text-muted">
            10/day ≈ 1,000+ words in 4 months once reviews settle in.
          </p>
          <PillGroup
            name="dailyNewCards"
            choices={[5, 10, 15, 20]}
            defaultValue={10}
            unit="new"
          />
        </div>

        <label className="flex items-start gap-3 rounded-xl border border-border bg-surface p-4">
          <input
            type="checkbox"
            name="fastStart"
            value="1"
            className="mt-1 h-5 w-5 accent-gold"
          />
          <span>
            <span className="font-semibold text-ink">
              I already know the basics
            </span>
            <span className="mt-0.5 block text-xs text-muted">
              Skip greetings &amp; family (units 1–2) and start at unit 3.
            </span>
          </span>
        </label>

        <button
          type="submit"
          className="rounded-xl bg-gold px-4 py-3.5 text-base font-bold text-bg transition active:scale-[0.98]"
        >
          Start learning
        </button>
      </form>
    </main>
  );
}
