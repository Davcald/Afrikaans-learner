import { fsrs, generatorParameters, Rating, State } from "ts-fsrs";
import type { Card, Grade } from "ts-fsrs";

// One shared FSRS scheduler. 0.9 target retention is the evidence-backed
// default; fuzz spreads due dates so reviews don't clump.
export const SCHEDULER = fsrs(
  generatorParameters({ request_retention: 0.9, enable_fuzz: true }),
);

export { Rating, State };
export type { Card, Grade };

const DAY_MS = 24 * 60 * 60 * 1000;

/** Compact human label for a future due date, e.g. "10m", "3d", "2mo". */
export function intervalLabel(from: Date, due: Date): string {
  const ms = due.getTime() - from.getTime();
  if (ms < 60 * 60 * 1000) return `${Math.max(1, Math.round(ms / 60000))}m`;
  if (ms < DAY_MS) return `${Math.round(ms / (60 * 60 * 1000))}h`;
  const days = Math.round(ms / DAY_MS);
  if (days < 30) return `${days}d`;
  if (days < 365) return `${Math.round(days / 30)}mo`;
  return `${(days / 365).toFixed(1)}y`;
}

/** Predicted interval labels for each grade button (Again/Hard/Good/Easy). */
export function previewIntervals(
  card: Card,
  now: Date,
): Record<1 | 2 | 3 | 4, string> {
  const preview = SCHEDULER.repeat(card, now);
  return {
    1: intervalLabel(now, preview[Rating.Again].card.due),
    2: intervalLabel(now, preview[Rating.Hard].card.due),
    3: intervalLabel(now, preview[Rating.Good].card.due),
    4: intervalLabel(now, preview[Rating.Easy].card.due),
  };
}
