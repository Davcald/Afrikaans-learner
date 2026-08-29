import "server-only";

import { sql } from "drizzle-orm";
import { db } from "./index";

// Idempotent DDL mirroring src/db/schema.ts, so a fresh database provisions
// itself on first signup — no local `db:push` required. Keep in sync with
// schema.ts; additive changes go in both places (drizzle-kit push remains
// the richer dev-time path).
const DDL = [
  `CREATE TABLE IF NOT EXISTS "users" (
    "id" text PRIMARY KEY,
    "email" text NOT NULL UNIQUE,
    "password_hash" text NOT NULL,
    "display_name" text NOT NULL,
    "created_at" timestamptz NOT NULL DEFAULT now()
  )`,
  `CREATE TABLE IF NOT EXISTS "user_settings" (
    "user_id" text PRIMARY KEY REFERENCES "users"("id") ON DELETE CASCADE,
    "daily_goal_minutes" integer NOT NULL DEFAULT 15,
    "daily_new_cards" integer NOT NULL DEFAULT 10,
    "timezone" text NOT NULL DEFAULT 'UTC',
    "tts_rate" real NOT NULL DEFAULT 1,
    "current_streak" integer NOT NULL DEFAULT 0,
    "longest_streak" integer NOT NULL DEFAULT 0,
    "last_active_date" text,
    "started_at" timestamptz NOT NULL DEFAULT now(),
    "onboarded_at" timestamptz
  )`,
  `CREATE TABLE IF NOT EXISTS "cards" (
    "user_id" text NOT NULL REFERENCES "users"("id") ON DELETE CASCADE,
    "card_id" text NOT NULL,
    "due" timestamptz NOT NULL,
    "stability" double precision NOT NULL,
    "difficulty" double precision NOT NULL,
    "elapsed_days" double precision NOT NULL,
    "scheduled_days" double precision NOT NULL,
    "learning_steps" integer NOT NULL,
    "reps" integer NOT NULL,
    "lapses" integer NOT NULL,
    "state" smallint NOT NULL,
    "last_review" timestamptz,
    PRIMARY KEY ("user_id", "card_id")
  )`,
  `CREATE INDEX IF NOT EXISTS "cards_user_due_idx" ON "cards" ("user_id", "due")`,
  `CREATE INDEX IF NOT EXISTS "cards_user_state_idx" ON "cards" ("user_id", "state")`,
  `CREATE TABLE IF NOT EXISTS "review_logs" (
    "id" bigint GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "user_id" text NOT NULL REFERENCES "users"("id") ON DELETE CASCADE,
    "card_id" text NOT NULL,
    "rating" smallint NOT NULL,
    "state" smallint NOT NULL,
    "due" timestamptz NOT NULL,
    "stability" double precision NOT NULL,
    "difficulty" double precision NOT NULL,
    "elapsed_days" double precision NOT NULL,
    "last_elapsed_days" double precision NOT NULL,
    "scheduled_days" double precision NOT NULL,
    "learning_steps" integer NOT NULL,
    "review" timestamptz NOT NULL,
    "duration_ms" integer NOT NULL DEFAULT 0
  )`,
  `CREATE INDEX IF NOT EXISTS "review_logs_user_review_idx" ON "review_logs" ("user_id", "review")`,
  `CREATE TABLE IF NOT EXISTS "unit_progress" (
    "user_id" text NOT NULL REFERENCES "users"("id") ON DELETE CASCADE,
    "unit_id" text NOT NULL,
    "started_at" timestamptz NOT NULL DEFAULT now(),
    "grammar_done_at" timestamptz,
    "reader_done_at" timestamptz,
    "completed_at" timestamptz,
    PRIMARY KEY ("user_id", "unit_id")
  )`,
  `CREATE TABLE IF NOT EXISTS "xp_events" (
    "id" bigint GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "user_id" text NOT NULL REFERENCES "users"("id") ON DELETE CASCADE,
    "amount" integer NOT NULL,
    "kind" text NOT NULL,
    "ref_id" text,
    "created_at" timestamptz NOT NULL DEFAULT now()
  )`,
  `CREATE INDEX IF NOT EXISTS "xp_events_user_created_idx" ON "xp_events" ("user_id", "created_at")`,
  `CREATE INDEX IF NOT EXISTS "xp_events_created_idx" ON "xp_events" ("created_at")`,
  `CREATE TABLE IF NOT EXISTS "daily_activity" (
    "user_id" text NOT NULL REFERENCES "users"("id") ON DELETE CASCADE,
    "local_date" text NOT NULL,
    "xp" integer NOT NULL DEFAULT 0,
    "reviews" integer NOT NULL DEFAULT 0,
    "new_cards" integer NOT NULL DEFAULT 0,
    "minutes" real NOT NULL DEFAULT 0,
    "goal_met" boolean NOT NULL DEFAULT false,
    PRIMARY KEY ("user_id", "local_date")
  )`,
];

let ensured: Promise<void> | null = null;

/** Create any missing tables (memoized per server instance). */
export function ensureSchema(): Promise<void> {
  if (!ensured) {
    ensured = (async () => {
      for (const statement of DDL) {
        await db().execute(sql.raw(statement));
      }
    })().catch((err) => {
      ensured = null; // allow retry on the next request
      throw err;
    });
  }
  return ensured;
}
