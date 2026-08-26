import Link from "next/link";
import { notFound } from "next/navigation";
import { and, eq } from "drizzle-orm";
import { unitById } from "@/content";
import { db, isDbConfigured } from "@/db";
import { cards, unitProgress } from "@/db/schema";
import MarkdownLite from "@/components/MarkdownLite";
import SetupNotice from "@/components/SetupNotice";
import VocabList from "@/components/VocabList";
import { requireUserId } from "@/lib/auth/guards";

export default async function UnitPage({
  params,
}: {
  params: Promise<{ unitId: string }>;
}) {
  const userId = await requireUserId();
  const { unitId } = await params;
  const unit = unitById(unitId);
  if (!unit) notFound();
  if (!isDbConfigured()) return <SetupNotice />;

  const [cardRows, [progress]] = await Promise.all([
    db()
      .select({ cardId: cards.cardId })
      .from(cards)
      .where(eq(cards.userId, userId)),
    db()
      .select()
      .from(unitProgress)
      .where(
        and(eq(unitProgress.userId, userId), eq(unitProgress.unitId, unitId)),
      )
      .limit(1),
  ]);
  const introduced = new Set(cardRows.map((r) => r.cardId));

  const vocabRows = unit.vocab.map((v) => ({
    af: v.af,
    en: v.en,
    pron: v.pron,
    exampleAf: v.exampleAf,
    exampleEn: v.exampleEn,
    known: introduced.has(`${v.id}-rec`),
  }));

  return (
    <div className="space-y-5">
      <header className="pt-2">
        <Link href="/library" className="text-sm font-semibold text-gold">
          ← All units
        </Link>
        <h1 className="mt-2 text-2xl font-black text-ink">{unit.title}</h1>
        <p className="italic text-gold-bright">{unit.titleAf}</p>
        <p className="mt-1 text-sm text-muted">{unit.description}</p>
      </header>

      <Link
        href={`/reader/${unit.id}`}
        className="block rounded-2xl border border-gold/40 bg-gold/10 p-4 active:scale-[0.99]"
      >
        <p className="font-bold text-gold">
          📖 Read: {unit.dialogue.title}
          {progress?.readerDoneAt && <span className="ml-2 text-leaf">✓</span>}
        </p>
        <p className="mt-0.5 text-sm text-muted">
          {unit.dialogue.titleEn} — tap any word for its meaning
        </p>
      </Link>

      <details className="group rounded-2xl border border-border bg-surface">
        <summary className="cursor-pointer list-none p-4">
          <span className="flex items-center justify-between font-bold text-ink">
            <span>
              ✏️ Grammar: {unit.grammar.title}
              {progress?.grammarDoneAt && (
                <span className="ml-2 text-leaf">✓</span>
              )}
            </span>
            <span className="text-faint transition group-open:rotate-180">▾</span>
          </span>
        </summary>
        <div className="border-t border-border p-4">
          <MarkdownLite text={unit.grammar.body} />
          <div className="mt-4 space-y-2">
            {unit.grammar.examples.map((ex, i) => (
              <div key={i} className="rounded-xl bg-raised p-3">
                <p className="text-[15px] font-semibold text-ink">{ex.af}</p>
                <p className="text-sm text-muted">{ex.en}</p>
              </div>
            ))}
          </div>
        </div>
      </details>

      <section>
        <h2 className="mb-2 font-bold text-ink">
          Words <span className="text-sm text-muted">({unit.vocab.length})</span>
        </h2>
        <VocabList rows={vocabRows} />
      </section>

      <section className="pb-2">
        <h2 className="mb-2 font-bold text-ink">
          Phrases <span className="text-sm text-muted">({unit.phrases.length})</span>
        </h2>
        <ul className="divide-y divide-border overflow-hidden rounded-2xl border border-border bg-surface">
          {unit.phrases.map((p) => (
            <li key={p.id} className="p-3">
              <p className="font-semibold text-ink">{p.af}</p>
              <p className="text-sm text-muted">{p.en}</p>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
