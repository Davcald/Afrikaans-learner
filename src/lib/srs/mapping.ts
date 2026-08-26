import type { Card } from "ts-fsrs";
import type { cards } from "@/db/schema";

export type CardRow = typeof cards.$inferSelect;
export type CardRowValues = Omit<CardRow, "userId" | "cardId">;

// The single place ts-fsrs Card <-> DB row conversion happens.
export function rowToFsrsCard(row: CardRow): Card {
  return {
    due: row.due,
    stability: row.stability,
    difficulty: row.difficulty,
    elapsed_days: row.elapsedDays,
    scheduled_days: row.scheduledDays,
    learning_steps: row.learningSteps,
    reps: row.reps,
    lapses: row.lapses,
    state: row.state,
    last_review: row.lastReview ?? undefined,
  };
}

export function fsrsCardToRowValues(card: Card): CardRowValues {
  return {
    due: card.due,
    stability: card.stability,
    difficulty: card.difficulty,
    elapsedDays: card.elapsed_days,
    scheduledDays: card.scheduled_days,
    learningSteps: card.learning_steps,
    reps: card.reps,
    lapses: card.lapses,
    state: card.state,
    lastReview: card.last_review ?? null,
  };
}
