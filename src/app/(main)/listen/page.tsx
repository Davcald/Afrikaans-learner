import type { Metadata } from "next";
import Link from "next/link";
import { eq } from "drizzle-orm";
import { units } from "@/content";
import { db, isDbConfigured } from "@/db";
import { cards, unitProgress } from "@/db/schema";
import ListenPlayer from "@/components/ListenPlayer";
import SetupNotice from "@/components/SetupNotice";
import { requireUserId } from "@/lib/auth/guards";

export const metadata: Metadata = { title: "Listen — Vlot" };
export const dynamic = "force-dynamic";

const PLAYLIST_LENGTH = 30;

/**
 * Listening practice built only from sentences the learner can already
 * mostly understand: examples and phrases for words they have met, plus
 * lines from dialogues they have read.
 */
export default async function ListenPage() {
  const userId = await requireUserId();
  if (!isDbConfigured()) return <SetupNotice />;

  const [cardRows, progressRows] = await Promise.all([
    db().select({ cardId: cards.cardId }).from(cards).where(eq(cards.userId, userId)),
    db().select().from(unitProgress).where(eq(unitProgress.userId, userId)),
  ]);
  const met = new Set(cardRows.map((r) => r.cardId));
  const read = new Set(
    progressRows.filter((r) => r.readerDoneAt).map((r) => r.unitId),
  );

  const pool: { af: string; en: string }[] = [];
  for (const u of units) {
    for (const v of u.vocab) {
      if (met.has(`${v.id}-rec`)) pool.push({ af: v.exampleAf, en: v.exampleEn });
    }
    for (const p of u.phrases) {
      if (met.has(`${p.id}-rec`)) pool.push({ af: p.af, en: p.en });
    }
    if (read.has(u.id)) {
      for (const l of u.dialogue.lines) pool.push({ af: l.af, en: l.en });
    }
  }
  for (let i = pool.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [pool[i], pool[j]] = [pool[j], pool[i]];
  }
  const playlist = pool.slice(0, PLAYLIST_LENGTH);

  return (
    <div className="space-y-4">
      <header className="pt-2">
        <h1 className="text-2xl font-black text-ink">Listen</h1>
        <p className="mt-1 text-sm leading-relaxed text-muted">
          Sentences made from words you&apos;ve already met. Press play, put
          the phone down, and just listen — while walking, cooking, driving.
        </p>
      </header>
      {playlist.length < 5 ? (
        <div className="rounded-2xl border border-border bg-surface p-5 text-center">
          <p className="text-sm text-muted">
            Learn your first few words and this fills up with sentences you
            can understand.
          </p>
          <Link
            href="/session"
            className="mt-4 inline-block rounded-xl bg-gold px-5 py-3 font-bold text-bg"
          >
            Start a round
          </Link>
        </div>
      ) : (
        <ListenPlayer playlist={playlist} poolSize={pool.length} />
      )}
    </div>
  );
}
