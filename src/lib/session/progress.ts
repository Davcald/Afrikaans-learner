import "server-only";

import type { Unit } from "@/content/types";
import { units } from "@/content/registry";
import { unitRecDefs } from "@/lib/srs/cardDefs";
import type { unitProgress } from "@/db/schema";

type ProgressRow = typeof unitProgress.$inferSelect;

export interface UnitStatus {
  unit: Unit;
  totalRec: number;
  introducedRec: number;
  grammarDone: boolean;
  readerDone: boolean;
  /** ≥80% of recognition cards introduced + grammar read (or force-completed). */
  complete: boolean;
  unlocked: boolean;
}

const COMPLETE_THRESHOLD = 0.8;

export function computeUnitStatuses(
  introducedCardIds: ReadonlySet<string>,
  progressRows: ProgressRow[],
): UnitStatus[] {
  const progressByUnit = new Map(progressRows.map((r) => [r.unitId, r]));
  const statuses: UnitStatus[] = [];
  let previousComplete = true;

  for (const unit of units) {
    const recs = unitRecDefs(unit);
    const introducedRec = recs.filter((d) =>
      introducedCardIds.has(d.cardId),
    ).length;
    const row = progressByUnit.get(unit.id);
    const grammarDone = Boolean(row?.grammarDoneAt);
    const readerDone = Boolean(row?.readerDoneAt);
    const complete =
      Boolean(row?.completedAt) ||
      (recs.length > 0 &&
        introducedRec / recs.length >= COMPLETE_THRESHOLD &&
        grammarDone);
    const unlocked = previousComplete;
    statuses.push({
      unit,
      totalRec: recs.length,
      introducedRec,
      grammarDone,
      readerDone,
      complete,
      unlocked,
    });
    previousComplete = complete;
  }
  return statuses;
}

/** The unit the user is currently working through (first unlocked, incomplete). */
export function activeUnitStatus(statuses: UnitStatus[]): UnitStatus {
  return (
    statuses.find((s) => s.unlocked && !s.complete) ??
    statuses[statuses.length - 1]
  );
}
