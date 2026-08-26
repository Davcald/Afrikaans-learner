import type { Metadata } from "next";
import Link from "next/link";
import { desc, eq, gte, sql } from "drizzle-orm";
import { db, isDbConfigured } from "@/db";
import { users, xpEvents } from "@/db/schema";
import SetupNotice from "@/components/SetupNotice";
import { requireUserId } from "@/lib/auth/guards";

export const metadata: Metadata = { title: "Leaderboard — Vlot" };

const MEDALS = ["🥇", "🥈", "🥉"];

export default async function LeaderboardPage({
  searchParams,
}: {
  searchParams: Promise<{ range?: string }>;
}) {
  const userId = await requireUserId();
  if (!isDbConfigured()) return <SetupNotice />;
  const { range } = await searchParams;
  const allTime = range === "all";

  const xpSum = sql<number>`sum(${xpEvents.amount})`;
  const weekStart = sql`date_trunc('week', now())`;
  const baseQuery = db()
    .select({
      userId: xpEvents.userId,
      name: users.displayName,
      xp: xpSum,
    })
    .from(xpEvents)
    .innerJoin(users, eq(users.id, xpEvents.userId))
    .groupBy(xpEvents.userId, users.displayName)
    .orderBy(desc(xpSum))
    .limit(50);

  const rows = allTime
    ? await baseQuery
    : await baseQuery.where(gte(xpEvents.createdAt, weekStart));

  const myIndex = rows.findIndex((r) => r.userId === userId);

  return (
    <div className="space-y-4">
      <header className="pt-2">
        <h1 className="text-2xl font-black text-ink">Leaderboard</h1>
        <p className="mt-1 text-sm text-muted">
          A little friendly pressure keeps everyone showing up.
        </p>
      </header>

      <div className="flex gap-2">
        <Link
          href="/leaderboard"
          className={`rounded-full px-4 py-2 text-sm font-bold ${
            !allTime ? "bg-gold text-bg" : "border border-border bg-surface text-muted"
          }`}
        >
          This week
        </Link>
        <Link
          href="/leaderboard?range=all"
          className={`rounded-full px-4 py-2 text-sm font-bold ${
            allTime ? "bg-gold text-bg" : "border border-border bg-surface text-muted"
          }`}
        >
          All time
        </Link>
      </div>

      {rows.length === 0 ? (
        <p className="rounded-2xl border border-border bg-surface p-6 text-center text-sm text-muted">
          No XP yet {allTime ? "" : "this week"} — do a session and claim the
          top spot!
        </p>
      ) : (
        <ul className="divide-y divide-border overflow-hidden rounded-2xl border border-border bg-surface">
          {rows.map((row, i) => {
            const mine = row.userId === userId;
            return (
              <li
                key={row.userId}
                className={`flex items-center gap-3 p-3.5 ${mine ? "bg-gold/10" : ""}`}
              >
                <span className="w-8 text-center text-lg font-black text-muted">
                  {MEDALS[i] ?? i + 1}
                </span>
                <span
                  className={`flex-1 truncate font-bold ${mine ? "text-gold" : "text-ink"}`}
                >
                  {row.name}
                  {mine && <span className="ml-1.5 text-xs">(you)</span>}
                </span>
                <span className="font-black text-gold">
                  {Number(row.xp).toLocaleString()} XP
                </span>
              </li>
            );
          })}
        </ul>
      )}

      {myIndex === -1 && rows.length > 0 && (
        <p className="text-center text-xs text-faint">
          Do a session {allTime ? "" : "this week "}to appear on the board.
        </p>
      )}
    </div>
  );
}
