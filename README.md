# Vlot — learn Afrikaans the way the research says works

**Live at: https://vlot-afrikaans.vercel.app**

**Vlot** (Afrikaans for *fluent*) is a mobile-first web app that gets you from
zero to confident Afrikaans across 40 units and about 2,000 words. It is multi-user: everyone
signs up with email + password and gets their own progress, streaks, and a
spot on the shared leaderboard.

## Built for people who think they're bad at languages

Most language apps quietly assume a good memory and a tolerance for failing.
Vlot assumes neither.

| What the research says | What Vlot does |
|---|---|
| **Teach before you test.** Guessing at words you've never seen is discouraging and slow | Every new word is first *shown* — sound, meaning, example — and only then asked |
| **Keyword mnemonics and cognates** are the most reliable boost for weaker learners | most words carry a memory hook: "free word" (same as English), "you half-know this" (hond → hound), or a sound-alike picture |
| **Successive relearning**: recall a new item ~3 times, spaced out, in the first sitting | New words come two at a time and are recalled three times in the round, with other cards in between; a miss brings the word back a few cards later |
| **Fade support gradually** (recognise → assemble → produce) | Multiple choice first, then spelling from letter tiles, and free typing only once a word has stuck for days — with a first-letter hint if you're stuck |
| **Small batches** protect working memory | A session is a ~5-minute round: 5 new words, up to 20 reviews. "Keep going" starts the next one |
| **Review pile-ups kill motivation** | New words pause automatically while more than 40 reviews are waiting, and a word's recognition card retires once you can produce it |
| **Spaced repetition (FSRS)** | Every card is scheduled per-user by [ts-fsrs](https://github.com/open-spaced-repetition/ts-fsrs) |
| **Hearing the word matters** | Audio plays when a word is taught. Devices with no Afrikaans voice (iPhones) fall back to a Dutch voice rather than silence |
| **Comprehensible input, output, shadowing** | Each unit still ends in a tap-to-gloss dialogue, with sentence building and listen-and-repeat along the way |

"New words per day" means words: at the default 10 a day you reach 1,000
words in about 3 months and finish the full 40-unit course in about 7
(`npm test` runs a 60-day simulated learner that checks the pacing).

### Listening

- **Listen tab** — a hands-free loop of sentences built only from words you
  have met: hear it, a beat to think, see the words and the English, hear it
  again slower.
- **Dictation** — in every round: hear a sentence, rebuild it from word tiles.
- **Recorded audio** — the app plays `public/audio/<key>.mp3` when a clip
  exists and falls back to the device voice when it doesn't. Generate clips
  for the whole course with:

  ```bash
  npx tsx scripts/audio/export-texts.ts > /tmp/texts.json
  # natural neural voices; fits inside Azure's free monthly allowance
  AZURE_SPEECH_KEY=… AZURE_SPEECH_REGION=… \
    python3 scripts/audio/generate.py /tmp/texts.json --provider azure
  # or fully free and offline (robotic) — see CREDITS.md for the licence
  python3 scripts/audio/generate.py /tmp/texts.json --provider mimic3 --model-dir <dir>
  ```

See `CREDITS.md` for licences that matter if you sell access.

Afrikaans is FSI Category I — the easiest class of language for English
speakers (no grammatical gender, no verb conjugation). 20–30 focused minutes
a day is a realistic path to solid conversational ability within a few months.

## Stack

Next.js 15 (App Router) · TypeScript · Tailwind v4 · Drizzle ORM ·
Neon Postgres · ts-fsrs · jose + bcryptjs (self-contained email/password
auth) · installable PWA. Course content lives in the repo as typed data
(`src/content/units/`) — only per-user state hits the database.

## Run it locally

```bash
npm install
cp .env.example .env.local   # set DATABASE_URL (free tier at https://console.neon.tech)
npm run dev                  # tables are created automatically on first signup
```

## Deploy (Vercel + Neon, ~2 minutes, one step)

1. In the Vercel project: **Storage → Create Database → Neon** (free plan) —
   this injects `DATABASE_URL` automatically. Then redeploy (or just push).

That's the only required step. The app creates its own tables on the first
signup, and sessions are signed with `AUTH_SECRET` if you set one, otherwise
with a key derived from `DATABASE_URL` (fine for a private group; set a real
`AUTH_SECRET` — `openssl rand -base64 32` — if you ever rotate or share the
database credentials).

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
