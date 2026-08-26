import {
  bigint,
  boolean,
  doublePrecision,
  index,
  integer,
  pgTable,
  primaryKey,
  real,
  smallint,
  text,
  timestamp,
} from "drizzle-orm/pg-core";

export const users = pgTable("users", {
  id: text("id").primaryKey(),
  email: text("email").notNull().unique(),
  passwordHash: text("password_hash").notNull(),
  displayName: text("display_name").notNull(),
  createdAt: timestamp("created_at", { withTimezone: true })
    .notNull()
    .defaultNow(),
});

export const userSettings = pgTable("user_settings", {
  userId: text("user_id")
    .primaryKey()
    .references(() => users.id, { onDelete: "cascade" }),
  dailyGoalMinutes: integer("daily_goal_minutes").notNull().default(15),
  dailyNewCards: integer("daily_new_cards").notNull().default(10),
  timezone: text("timezone").notNull().default("UTC"),
  ttsRate: real("tts_rate").notNull().default(1),
  currentStreak: integer("current_streak").notNull().default(0),
  longestStreak: integer("longest_streak").notNull().default(0),
  // User-local calendar date "YYYY-MM-DD" of the last day with activity.
  lastActiveDate: text("last_active_date"),
  startedAt: timestamp("started_at", { withTimezone: true })
    .notNull()
    .defaultNow(),
  onboardedAt: timestamp("onboarded_at", { withTimezone: true }),
});

// One row per (user, content card). FSRS state mirrors ts-fsrs Card fields.
// Rows are created lazily the first time a card is introduced.
export const cards = pgTable(
  "cards",
  {
    userId: text("user_id")
      .notNull()
      .references(() => users.id, { onDelete: "cascade" }),
    cardId: text("card_id").notNull(),
    due: timestamp("due", { withTimezone: true }).notNull(),
    stability: doublePrecision("stability").notNull(),
    difficulty: doublePrecision("difficulty").notNull(),
    elapsedDays: doublePrecision("elapsed_days").notNull(),
    scheduledDays: doublePrecision("scheduled_days").notNull(),
    learningSteps: integer("learning_steps").notNull(),
    reps: integer("reps").notNull(),
    lapses: integer("lapses").notNull(),
    state: smallint("state").notNull(),
    lastReview: timestamp("last_review", { withTimezone: true }),
  },
  (t) => [
    primaryKey({ columns: [t.userId, t.cardId] }),
    index("cards_user_due_idx").on(t.userId, t.due),
    index("cards_user_state_idx").on(t.userId, t.state),
  ],
);

export const reviewLogs = pgTable(
  "review_logs",
  {
    id: bigint("id", { mode: "number" })
      .generatedAlwaysAsIdentity()
      .primaryKey(),
    userId: text("user_id")
      .notNull()
      .references(() => users.id, { onDelete: "cascade" }),
    cardId: text("card_id").notNull(),
    rating: smallint("rating").notNull(),
    state: smallint("state").notNull(),
    due: timestamp("due", { withTimezone: true }).notNull(),
    stability: doublePrecision("stability").notNull(),
    difficulty: doublePrecision("difficulty").notNull(),
    elapsedDays: doublePrecision("elapsed_days").notNull(),
    lastElapsedDays: doublePrecision("last_elapsed_days").notNull(),
    scheduledDays: doublePrecision("scheduled_days").notNull(),
    learningSteps: integer("learning_steps").notNull(),
    review: timestamp("review", { withTimezone: true }).notNull(),
    durationMs: integer("duration_ms").notNull().default(0),
  },
  (t) => [index("review_logs_user_review_idx").on(t.userId, t.review)],
);

export const unitProgress = pgTable(
  "unit_progress",
  {
    userId: text("user_id")
      .notNull()
      .references(() => users.id, { onDelete: "cascade" }),
    unitId: text("unit_id").notNull(),
    startedAt: timestamp("started_at", { withTimezone: true })
      .notNull()
      .defaultNow(),
    grammarDoneAt: timestamp("grammar_done_at", { withTimezone: true }),
    readerDoneAt: timestamp("reader_done_at", { withTimezone: true }),
    completedAt: timestamp("completed_at", { withTimezone: true }),
  },
  (t) => [primaryKey({ columns: [t.userId, t.unitId] })],
);

export const xpEvents = pgTable(
  "xp_events",
  {
    id: bigint("id", { mode: "number" })
      .generatedAlwaysAsIdentity()
      .primaryKey(),
    userId: text("user_id")
      .notNull()
      .references(() => users.id, { onDelete: "cascade" }),
    amount: integer("amount").notNull(),
    kind: text("kind").notNull(),
    refId: text("ref_id"),
    createdAt: timestamp("created_at", { withTimezone: true })
      .notNull()
      .defaultNow(),
  },
  (t) => [
    index("xp_events_user_created_idx").on(t.userId, t.createdAt),
    index("xp_events_created_idx").on(t.createdAt),
  ],
);

export const dailyActivity = pgTable(
  "daily_activity",
  {
    userId: text("user_id")
      .notNull()
      .references(() => users.id, { onDelete: "cascade" }),
    // User-local calendar date "YYYY-MM-DD".
    localDate: text("local_date").notNull(),
    xp: integer("xp").notNull().default(0),
    reviews: integer("reviews").notNull().default(0),
    newCards: integer("new_cards").notNull().default(0),
    minutes: real("minutes").notNull().default(0),
    goalMet: boolean("goal_met").notNull().default(false),
  },
  (t) => [primaryKey({ columns: [t.userId, t.localDate] })],
);
