import { notFound } from "next/navigation";
import { and, eq } from "drizzle-orm";
import { unitById } from "@/content";
import { db, isDbConfigured } from "@/db";
import { unitProgress } from "@/db/schema";
import ReaderPage from "@/components/ReaderPage";
import SetupNotice from "@/components/SetupNotice";
import { requireUserId } from "@/lib/auth/guards";
import { buildReader } from "@/lib/session/reader";

export default async function ReaderRoute({
  params,
}: {
  params: Promise<{ unitId: string }>;
}) {
  const userId = await requireUserId();
  const { unitId } = await params;
  const unit = unitById(unitId);
  if (!unit) notFound();
  if (!isDbConfigured()) return <SetupNotice />;

  const [progress] = await db()
    .select()
    .from(unitProgress)
    .where(
      and(eq(unitProgress.userId, userId), eq(unitProgress.unitId, unitId)),
    )
    .limit(1);

  const item = buildReader(unit, Boolean(progress?.readerDoneAt));
  return <ReaderPage item={item} />;
}
