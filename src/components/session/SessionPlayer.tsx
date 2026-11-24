"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";
import {
  completeGrammar,
  completeReader,
  completeShadow,
  gradeCard,
  logPractice,
  type PracticeKind,
} from "@/app/actions/review";
import type { ExerciseItem, SessionPlan } from "@/lib/session/types";
import { useTts } from "@/lib/speech/useTts";
import Choice from "./Choice";
import ClozeChoice from "./ClozeChoice";
import Flashcard from "./Flashcard";
import Intro from "./Intro";
import TilesAnswer from "./TilesAnswer";
import GrammarLessonView from "./GrammarLessonView";
import Listening from "./Listening";
import ReaderView from "./ReaderView";
import ShadowView from "./ShadowView";
import TypeAnswer from "./TypeAnswer";
import WordBank from "./WordBank";

interface QueueEntry {
  item: ExerciseItem;
  /** How many times this item has already come back after a miss. */
  attempt: number;
}

/** A missed item returns after this many others, up to MAX_RETRIES times. */
const RETRY_GAP = 3;
const MAX_RETRIES = 2;
const MORE_WORDS_STEP = 5;

interface Toast {
  id: number;
  text: string;
}

function isSpeechOnly(item: ExerciseItem): boolean {
  return item.kind === "listening" || item.kind === "shadow";
}

export default function SessionPlayer({
  plan,
  extraNew = 0,
}: {
  plan: SessionPlan;
  /** Extra new words already requested today on top of the daily target. */
  extraNew?: number;
}) {
  const router = useRouter();
  const tts = useTts();
  const [phase, setPhase] = useState<"intro" | "playing" | "done">("intro");
  const [queue, setQueue] = useState<QueueEntry[]>([]);
  const [idx, setIdx] = useState(0);
  const [sessionXp, setSessionXp] = useState(0);
  const [streak, setStreak] = useState(plan.meta.streak);
  const [goalMet, setGoalMet] = useState(
    plan.meta.minutesToday >= plan.meta.goalMinutes,
  );
  const [toasts, setToasts] = useState<Toast[]>([]);
  const startRef = useRef(Date.now());
  const toastId = useRef(0);

  const finished =
    phase === "done" || (phase === "playing" && idx >= queue.length);

  useEffect(() => {
    if (finished && phase !== "done") {
      setPhase("done");
      router.refresh();
    }
  }, [finished, phase, router]);

  const pushToast = useCallback((text: string) => {
    const id = ++toastId.current;
    setToasts((t) => [...t, { id, text }]);
    setTimeout(() => setToasts((t) => t.filter((x) => x.id !== id)), 1600);
  }, []);

  const applyResult = useCallback(
    (res: {
      xpAwarded: number;
      streak: number;
      goalMet: boolean;
      bonuses: { kind: string; amount: number }[];
    }) => {
      setSessionXp((x) => x + res.xpAwarded);
      setStreak(res.streak);
      if (res.xpAwarded > 0) pushToast(`+${res.xpAwarded} XP`);
      for (const b of res.bonuses) {
        if (b.kind === "goal_bonus") pushToast(`🎯 Daily goal met! +${b.amount}`);
        else if (b.kind.startsWith("streak_"))
          pushToast(`🔥 ${b.kind.split("_")[1]}-day streak! +${b.amount}`);
      }
      if (res.goalMet) setGoalMet(true);
    },
    [pushToast],
  );

  const start = () => {
    const filtered = plan.items.filter(
      (item) => tts.available || !isSpeechOnly(item),
    );
    setQueue(filtered.map((item) => ({ item, attempt: 0 })));
    setIdx(0);
    startRef.current = Date.now();
    if (filtered.length === 0) setPhase("done");
    else setPhase("playing");
  };

  const advance = useCallback(() => {
    startRef.current = Date.now();
    setIdx((i) => {
      const next = i + 1;
      return next;
    });
  }, []);

  const duration = () => Date.now() - startRef.current;

  /** Bring a missed item back a few cards later, until it is answered right. */
  const retryLater = (entry: QueueEntry) => {
    if (entry.attempt >= MAX_RETRIES) return;
    setQueue((q) => {
      const copy = [...q];
      copy.splice(Math.min(q.length, idx + 1 + RETRY_GAP), 0, {
        item: entry.item,
        attempt: entry.attempt + 1,
      });
      return copy;
    });
  };

  const handleGrade = (entry: QueueEntry, rating: 1 | 2 | 3 | 4) => {
    const item = entry.item;
    if (!("cardId" in item)) return;
    const d = duration();
    if (rating === 1) retryLater(entry);
    advance();
    gradeCard(item.cardId, rating, d)
      .then(applyResult)
      .catch(() => pushToast("⚠ Couldn't save"));
  };

  const handlePractice = (
    entry: QueueEntry,
    kind: PracticeKind,
    id: string,
    correct: boolean,
  ) => {
    const d = duration();
    if (!correct && kind === "drill") retryLater(entry);
    advance();
    logPractice(kind, id, correct, d)
      .then(applyResult)
      .catch(() => pushToast("⚠ Couldn't save"));
  };

  const handleUnitStep = (
    fn: (unitId: string, durationMs: number) => Promise<Parameters<typeof applyResult>[0]>,
    unitId: string,
  ) => {
    const d = duration();
    advance();
    fn(unitId, d)
      .then(applyResult)
      .catch(() => pushToast("⚠ Couldn't save"));
  };

  // ---------- intro ----------
  if (phase === "intro") {
    const speechItems = plan.items.filter(isSpeechOnly).length;
    return (
      <div className="flex min-h-[70dvh] flex-col justify-center text-center">
        <p className="text-5xl">🌍</p>
        <h1 className="mt-4 text-3xl font-black text-ink">
          {plan.meta.newToday > 0 || plan.meta.minutesToday > 0
            ? "Next round"
            : "Today\u2019s first round"}
        </h1>
        <p className="mt-2 text-sm text-muted">
          Unit: <span className="font-semibold text-ink">{plan.meta.unitTitle}</span>
        </p>
        <div className="mx-auto mt-6 flex gap-3">
          <div className="rounded-xl border border-border bg-surface px-5 py-3">
            <p className="text-2xl font-black text-gold">{plan.meta.dueCount}</p>
            <p className="text-xs text-muted">reviews due</p>
          </div>
          <div className="rounded-xl border border-border bg-surface px-5 py-3">
            <p className="text-2xl font-black text-leaf">{plan.meta.newCount}</p>
            <p className="text-xs text-muted">new words</p>
          </div>
          <div className="rounded-xl border border-border bg-surface px-5 py-3">
            <p className="text-2xl font-black text-flame">{streak}</p>
            <p className="text-xs text-muted">day streak</p>
          </div>
        </div>
        <p className="mx-auto mt-4 max-w-xs text-sm leading-relaxed text-muted">
          {plan.meta.newOnHold
            ? "No new words this round — let\u2019s clear your reviews first so nothing piles up."
            : plan.meta.newCount > 0
              ? "A few minutes. New words are shown to you first, then asked — you can\u2019t fail a word you haven\u2019t been taught."
              : "A short round to keep what you know fresh."}
        </p>
        {tts.ready && tts.available && tts.approximate && (
          <p className="mx-auto mt-3 max-w-xs text-xs text-faint">
            This device has no Afrikaans voice, so a Dutch one reads the
            words — close, but not perfect. Trust the pronunciation hints.
          </p>
        )}
        {tts.ready && !tts.available && speechItems > 0 && (
          <p className="mx-auto mt-4 max-w-xs text-xs text-faint">
            No Afrikaans or Dutch voice on this device — listening &amp;
            shadowing are skipped. On Android Chrome you get the full
            experience.
          </p>
        )}
        <div className="mx-auto mt-8 w-full max-w-xs">
          <button
            type="button"
            onClick={start}
            disabled={!tts.ready}
            className="w-full rounded-2xl bg-gold px-6 py-4 text-lg font-black text-bg transition active:scale-[0.98] disabled:opacity-60"
          >
            {tts.ready ? "Start" : "Warming up…"}
          </button>
        </div>
      </div>
    );
  }

  // ---------- done ----------
  const hasMore = plan.meta.dueRemaining > 0 || plan.meta.moreNewAvailable;
  const nextRound = (extra: number) => {
    const q = new URLSearchParams({ r: String(Date.now()) });
    if (extra > 0) q.set("extra", String(extra));
    router.push(`/session?${q}`);
  };
  if (finished) {
    return (
      <div className="flex min-h-[70dvh] flex-col justify-center text-center">
        <p className="text-5xl">🎉</p>
        <h1 className="mt-4 text-3xl font-black text-ink">
          Klaar! <span className="text-gold">Well done.</span>
        </h1>
        <div className="mx-auto mt-6 flex gap-3">
          <div className="rounded-xl border border-border bg-surface px-5 py-3">
            <p className="text-2xl font-black text-gold">+{sessionXp}</p>
            <p className="text-xs text-muted">XP earned</p>
          </div>
          <div className="rounded-xl border border-border bg-surface px-5 py-3">
            <p className="text-2xl font-black text-flame">🔥 {streak}</p>
            <p className="text-xs text-muted">day streak</p>
          </div>
        </div>
        {plan.meta.newCount > 0 && (
          <p className="mt-4 text-sm font-semibold text-ink">
            {plan.meta.newCount} new word{plan.meta.newCount === 1 ? "" : "s"}{" "}
            learned — {plan.meta.newToday + plan.meta.newCount} today.
          </p>
        )}
        {goalMet && (
          <p className="mt-2 text-sm font-semibold text-leaf">
            🎯 Daily goal reached — consistency is the whole game.
          </p>
        )}
        <div className="mx-auto mt-8 flex w-full max-w-xs flex-col gap-2">
          {hasMore ? (
            <>
              <button
                type="button"
                onClick={() => nextRound(extraNew)}
                className="w-full rounded-2xl bg-gold px-6 py-4 text-lg font-black text-bg active:scale-[0.98]"
              >
                Keep going
              </button>
              <p className="text-xs text-muted">
                {plan.meta.dueRemaining > 0 &&
                  `${plan.meta.dueRemaining} review${plan.meta.dueRemaining === 1 ? "" : "s"} waiting`}
                {plan.meta.dueRemaining > 0 && plan.meta.moreNewAvailable && " · "}
                {plan.meta.moreNewAvailable && "more new words ready"}
              </p>
              <Link href="/" className="mt-1 py-2 text-sm font-semibold text-muted">
                Done for now
              </Link>
            </>
          ) : (
            <>
              <Link
                href="/"
                className="w-full rounded-2xl bg-gold px-6 py-4 text-lg font-black text-bg active:scale-[0.98]"
              >
                Back home
              </Link>
              {!plan.meta.newOnHold && (
                <button
                  type="button"
                  onClick={() => nextRound(extraNew + MORE_WORDS_STEP)}
                  className="py-2 text-sm font-semibold text-sky"
                >
                  Feeling good? Learn {MORE_WORDS_STEP} more words
                </button>
              )}
            </>
          )}
        </div>
      </div>
    );
  }

  // ---------- playing ----------
  const entry = queue[idx];
  const item = entry.item;
  const progress = queue.length > 0 ? idx / queue.length : 0;

  return (
    <div className="flex min-h-[calc(100dvh-8.5rem)] flex-col">
      <div className="mb-4 flex items-center gap-3">
        <Link href="/" aria-label="Exit session" className="text-faint">
          <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
            <path d="m6 6 12 12M18 6 6 18" />
          </svg>
        </Link>
        <div className="h-2.5 flex-1 overflow-hidden rounded-full bg-surface">
          <div
            className="h-full rounded-full bg-gold transition-all duration-300"
            style={{ width: `${Math.max(4, progress * 100)}%` }}
          />
        </div>
        <span className="text-sm font-bold text-flame">🔥 {streak}</span>
      </div>

      <div className="relative flex-1">
        <div key={`${idx}-${entry.attempt}-${"cardId" in item ? item.cardId : item.kind}`} className="animate-pop-in flex min-h-full flex-col">
          {item.kind === "intro" && (
            <Intro
              item={item}
              tts={tts}
              onDone={() => handlePractice(entry, "intro", item.id, true)}
            />
          )}
          {item.kind === "drill" && (
            <Choice
              item={item}
              tts={tts}
              onResult={(ok) => handlePractice(entry, "drill", item.id, ok)}
            />
          )}
          {item.kind === "flashcard" && (
            <Flashcard item={item} tts={tts} onGrade={(r) => handleGrade(entry, r)} />
          )}
          {item.kind === "choice" && (
            <Choice
              item={item}
              tts={tts}
              onResult={(ok) => handleGrade(entry, ok ? 3 : 1)}
            />
          )}
          {item.kind === "type" &&
            (item.tileSet ? (
              <TilesAnswer
                item={item}
                tts={tts}
                onResult={(ok) => handleGrade(entry, ok ? 3 : 1)}
              />
            ) : (
              <TypeAnswer item={item} tts={tts} onGrade={(r) => handleGrade(entry, r)} />
            ))}
          {item.kind === "cloze" &&
            (item.options ? (
              <ClozeChoice
                item={item}
                tts={tts}
                onResult={(ok) => handleGrade(entry, ok ? 3 : 1)}
              />
            ) : item.tileSet ? (
              <TilesAnswer
                item={item}
                tts={tts}
                onResult={(ok) => handleGrade(entry, ok ? 3 : 1)}
              />
            ) : (
              <TypeAnswer item={item} tts={tts} onGrade={(r) => handleGrade(entry, r)} />
            ))}
          {item.kind === "wordbank" && (
            <WordBank
              item={item}
              tts={tts}
              onDone={(correct) => handlePractice(entry, "wordbank", item.id, correct)}
            />
          )}
          {item.kind === "listening" && (
            <Listening
              item={item}
              tts={tts}
              onDone={(correct) => handlePractice(entry, "listening", item.id, correct)}
            />
          )}
          {item.kind === "grammar" && (
            <GrammarLessonView
              item={item}
              tts={tts}
              onDone={() => handleUnitStep(completeGrammar, item.unitId)}
            />
          )}
          {item.kind === "reader" && (
            <ReaderView
              item={item}
              tts={tts}
              onDone={() => handleUnitStep(completeReader, item.unitId)}
            />
          )}
          {item.kind === "shadow" && (
            <ShadowView
              item={item}
              tts={tts}
              onDone={() => handleUnitStep(completeShadow, item.unitId)}
            />
          )}
        </div>

        <div className="pointer-events-none absolute inset-x-0 top-2 flex flex-col items-center gap-1">
          {toasts.map((t) => (
            <span
              key={t.id}
              className="animate-float-up rounded-full bg-gold px-3 py-1 text-sm font-black text-bg shadow-lg"
            >
              {t.text}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
