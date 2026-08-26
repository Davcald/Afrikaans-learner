# Vlot — learn Afrikaans the way the research says works

**Vlot** (Afrikaans for *fluent*) is a mobile-first web app that gets you from
zero to conversational Afrikaans in a 16-week arc. It is multi-user: everyone
signs up with email + password and gets their own progress, streaks, and a
spot on the shared leaderboard.

## Why it works — the science baked in

| Research finding | What Vlot does |
|---|---|
| **Spaced repetition (FSRS)** — the modern algorithm behind Anki, ~20–30% fewer reviews than SM-2 for the same retention | Every word becomes up to 3 cards (recognise → produce → use in a sentence), each scheduled per-user by [ts-fsrs](https://github.com/open-spaced-repetition/ts-fsrs) |
| **Retrieval practice beats re-reading; production beats recognition** | Typed EN→AF answers with an Afrikaans diacritic keyboard and typo-tolerant grading — not just multiple choice |
| **Comprehensible input (i+1)** | Every unit ends in a dialogue built from words you already know — tap any word for its meaning |
| **Output practice** | Word-bank sentence building and translation drills |
| **Shadowing** improves fluency and pronunciation | Listen-and-repeat-along screens with slow/normal speed (uses your device's Afrikaans voice; best on Android Chrome/Edge) |
| **High-frequency vocabulary first** | ~1,000 words + 200 phrases across 20 thematic units, highest-value words first |
| **Consistency beats cramming** | Daily goal ring, timezone-correct streaks, XP, levels and a weekly leaderboard |
| **Interleaving beats blocking** | One daily session mixes reviews, new words, a grammar bite, reading, listening and speaking |
| **Grammar drills alone don't build fluency** | Grammar arrives as short "bites" you immediately use in cloze and sentence exercises |

Afrikaans is FSI Category I — the easiest class of language for English
speakers (no grammatical gender, no verb conjugation). 20–30 focused minutes
a day for 16 weeks is a realistic path to solid conversational ability.

## Stack

Next.js 15 (App Router) · TypeScript · Tailwind v4 · Drizzle ORM ·
Neon Postgres · ts-fsrs · jose + bcryptjs (self-contained email/password
auth) · installable PWA. Course content lives in the repo as typed data
(`src/content/units/`) — only per-user state hits the database.

## Run it locally

```bash
npm install
cp .env.example .env.local   # then fill in:
#   DATABASE_URL  — any Postgres (free tier at https://console.neon.tech works great)
#   AUTH_SECRET   — openssl rand -base64 32
npm run db:push              # creates the tables
npm run dev
```

## Deploy (Vercel + Neon, ~3 minutes)

1. Import this repo into Vercel.
2. Add the **Neon** integration from the Vercel Marketplace (free plan) —
   it injects `DATABASE_URL` automatically. Or create a database at
   console.neon.tech and set `DATABASE_URL` yourself.
3. Set `AUTH_SECRET` (Project → Settings → Environment Variables):
   any long random string, e.g. `openssl rand -base64 32`.
4. Locally: `npx vercel env pull .env.local && npm run db:push` to create the
   tables, then redeploy.

Note: Neon's free tier autosuspends when idle — the first request after a
quiet period takes ~half a second longer.

## Useful commands

```bash
npm run typecheck      # strict TS
npm run test           # answer-checker + card-gating unit tests
npm run content:check  # course-content integrity validator
npm run db:studio      # browse your database
```

## Content honesty

The Afrikaans course content is machine-authored and structurally validated
(`npm run content:check`), sticking to high-frequency vocabulary and
textbook sentence patterns. Every sentence carries an English gloss so slips
are easy to spot; corrections are one-line PRs, and stable content IDs mean
edits never lose anyone's review history (see `src/content/types.ts`).
