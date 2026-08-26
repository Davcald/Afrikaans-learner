import type { Metadata } from "next";
import Link from "next/link";
import { eq } from "drizzle-orm";
import { db, isDbConfigured } from "@/db";
import { cards, unitProgress } from "@/db/schema";
import SetupNotice from "@/components/SetupNotice";
import { requireUserId } from "@/lib/auth/guards";
import { computeUnitStatuses } from "@/lib/session/progress";

export const metadata: Metadata = { title: "Units — Vlot" };

export default async function LibraryPage() {
  const userId = await requireUserId();
  if (!isDbConfigured()) return <SetupNotice />;

  const [cardRows, progressRows] = await Promise.all([
    db()
      .select({ cardId: cards.cardId })
      .from(cards)
      .where(eq(cards.userId, userId)),
    db().select().from(unitProgress).where(eq(unitProgress.userId, userId)),
  ]);
  const statuses = computeUnitStatuses(
    new Set(cardRows.map((r) => r.cardId)),
    progressRows,
  );

  return (
    <div className="space-y-4">
      <header className="pt-2">
        <h1 className="text-2xl font-black text-ink">Course units</h1>
        <p className="mt-1 text-sm text-muted">
          16 weeks, beginner to conversational. Units unlock as you learn.
        </p>
      </header>

      <div className="space-y-2.5">
        {statuses.map((s) => {
          const pct =
            s.totalRec > 0
              ? Math.round((s.introducedRec / s.totalRec) * 100)
              : 0;
          const inner = (
            <div
              className={`rounded-2xl border p-4 transition ${
                s.unlocked
                  ? "border-border bg-surface active:scale-[0.99]"
                  : "border-border/50 bg-surface/50 opacity-60"
              }`}
            >
              <div className="flex items-center justify-between gap-3">
                <div className="min-w-0">
                  <p className="truncate font-bold text-ink">
                    {s.unit.id.replace("u", "")}. {s.unit.title}
                  </p>
                  <p className="truncate text-sm italic text-gold-bright">
                    {s.unit.titleAf}
                  </p>
                  <p className="mt-0.5 text-xs text-muted">
                    Week {s.unit.week} · {s.unit.cefr} ·{" "}
                    {s.unit.vocab.length} words
                  </p>
                </div>
                <div className="shrink-0 text-right">
                  {s.complete ? (
                    <span className="text-2xl text-leaf">✓</span>
                  ) : s.unlocked ? (
                    <span className="text-sm font-black text-gold">{pct}%</span>
                  ) : (
                    <span className="text-xl">🔒</span>
                  )}
                </div>
              </div>
              <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-raised">
                <div
                  className={`h-full rounded-full ${s.complete ? "bg-leaf" : "bg-gold"}`}
                  style={{ width: `${pct}%` }}
                />
              </div>
            </div>
          );
          return s.unlocked ? (
            <Link key={s.unit.id} href={`/library/${s.unit.id}`} className="block">
              {inner}
            </Link>
          ) : (
            <div key={s.unit.id}>{inner}</div>
          );
        })}
      </div>
    </div>
  );
}
