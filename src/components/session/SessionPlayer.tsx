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
} from "@/app/actions/review";
import type { ExerciseItem, SessionPlan } from "@/lib/session/types";
import { useTts } from "@/lib/speech/useTts";
import Choice from "./Choice";
import ClozeChoice from "./ClozeChoice";
import Flashcard from "./Flashcard";
import GrammarLessonView from "./GrammarLessonView";
import Listening from "./Listening";
import ReaderView from "./ReaderView";
import ShadowView from "./ShadowView";
import TypeAnswer from "./TypeAnswer";
import WordBank from "./WordBank";

interface QueueEntry {
  item: ExerciseItem;
  requeued?: boolean;
}

interface Toast {
  id: number;
  text: string;
}

function isSpeechOnly(item: ExerciseItem): boolean {
  return item.kind === "listening" || item.kind === "shadow";
}

export default function SessionPlayer({ plan }: { plan: SessionPlan }) {
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
  const requeuedRef = useRef(new Set<string>());
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
    setQueue(filtered.map((item) => ({ item })));
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

  const handleGrade = (entry: QueueEntry, rating: 1 | 2 | 3 | 4) => {
    const item = entry.item;
    if (!("cardId" in item)) return;
    const d = duration();
    // Failed cards come back a few items later for another attempt.
    if (rating === 1 && !entry.requeued && !requeuedRef.current.has(item.cardId)) {
      requeuedRef.current.add(item.cardId);
      setQueue((q) => {
        const insertAt = Math.min(q.length, idx + 4);
        const copy = [...q];
        copy.splice(insertAt, 0, { item, requeued: true });
        return copy;
      });
    }
    advance();
    gradeCard(item.cardId, rating, d)
      .then(applyResult)
      .catch(() => pushToast("⚠ Couldn't save"));
  };

  const handlePractice = (
    kind: "wordbank" | "listening",
    id: string,
    correct: boolean,
  ) => {
    const d = duration();
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
        <h1 className="mt-4 text-3xl font-black text-ink">Today&apos;s session</h1>
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
            <p className="text-xs text-muted">new cards</p>
          </div>
          <div className="rounded-xl border border-border bg-surface px-5 py-3">
            <p className="text-2xl font-black text-flame">{streak}</p>
            <p className="text-xs text-muted">day streak</p>
          </div>
        </div>
        {tts.ready && !tts.available && speechItems > 0 && (
          <p className="mx-auto mt-4 max-w-xs text-xs text-faint">
            No Afrikaans voice on this device — listening &amp; shadowing are
            skipped. On Android Chrome you get the full experience.
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
        {goalMet && (
          <p className="mt-4 text-sm font-semibold text-leaf">
            🎯 Daily goal reached — consistency is the whole game.
          </p>
        )}
        <div className="mx-auto mt-8 flex w-full max-w-xs flex-col gap-2">
          <Link
            href="/"
            className="w-full rounded-2xl bg-gold px-6 py-4 text-lg font-black text-bg active:scale-[0.98]"
          >
            Back home
          </Link>
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
        <div key={`${idx}-${"cardId" in item ? item.cardId : item.kind}`} className="animate-pop-in flex min-h-full flex-col">
          {item.kind === "flashcard" && (
            <Flashcard item={item} tts={tts} onGrade={(r) => handleGrade(entry, r)} />
          )}
          {item.kind === "choice" && (
            <Choice item={item} tts={tts} onGrade={(r) => handleGrade(entry, r)} />
          )}
          {item.kind === "type" && (
            <TypeAnswer item={item} tts={tts} onGrade={(r) => handleGrade(entry, r)} />
          )}
          {item.kind === "cloze" &&
            (item.options ? (
              <ClozeChoice item={item} tts={tts} onGrade={(r) => handleGrade(entry, r)} />
            ) : (
              <TypeAnswer item={item} tts={tts} onGrade={(r) => handleGrade(entry, r)} />
            ))}
          {item.kind === "wordbank" && (
            <WordBank
              item={item}
              tts={tts}
              onDone={(correct) => handlePractice("wordbank", item.id, correct)}
            />
          )}
          {item.kind === "listening" && (
            <Listening
              item={item}
              tts={tts}
              onDone={(correct) => handlePractice("listening", item.id, correct)}
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
