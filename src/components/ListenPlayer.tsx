"use client";

import { useEffect, useRef, useState } from "react";
import { logPractice } from "@/app/actions/review";
import { useTts } from "@/lib/speech/useTts";

type Stage = "hear" | "think" | "reveal";

const wait = (ms: number) => new Promise<void>((r) => setTimeout(r, ms));

/**
 * Hands-free listening loop. Each sentence: hear it → a beat to work out
 * the meaning → see the words and the English → hear it once more, slower.
 */
export default function ListenPlayer({
  playlist,
  poolSize,
}: {
  playlist: { af: string; en: string }[];
  poolSize: number;
}) {
  const tts = useTts();
  const [idx, setIdx] = useState(0);
  const [stage, setStage] = useState<Stage>("hear");
  const [playing, setPlaying] = useState(false);
  const [showText, setShowText] = useState(false);
  // Bumped whenever playback is stopped or restarted, so a superseded loop
  // notices and exits instead of fighting the new one.
  const runRef = useRef(0);
  const done = idx >= playlist.length;

  useEffect(() => {
    if (!playing || done) return;
    const run = ++runRef.current;
    const alive = () => runRef.current === run;
    const started = Date.now();
    const s = playlist[idx];
    (async () => {
      setStage("hear");
      await tts.speakAsync(s.af, 0.95);
      if (!alive()) return;
      setStage("think");
      await wait(1800);
      if (!alive()) return;
      setStage("reveal");
      await wait(500);
      if (!alive()) return;
      await tts.speakAsync(s.af, 0.8);
      if (!alive()) return;
      await wait(1400);
      if (!alive()) return;
      logPractice("listening", `listen-${idx}`, false, Date.now() - started).catch(
        () => undefined,
      );
      setIdx((i) => i + 1);
    })();
    return () => {
      // eslint-disable-next-line react-hooks/exhaustive-deps -- a counter, not a DOM ref
      runRef.current++;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [playing, idx, done]);

  if (tts.ready && !tts.available) {
    return (
      <p className="rounded-2xl border border-border bg-surface p-5 text-sm text-muted">
        This device has no voice that can read Afrikaans, so listening isn&apos;t
        available here. Android Chrome and desktop Edge both work.
      </p>
    );
  }

  if (done) {
    return (
      <div className="rounded-2xl border border-border bg-surface p-6 text-center">
        <p className="text-4xl">🎧</p>
        <p className="mt-3 text-lg font-black text-ink">
          {playlist.length} sentences heard
        </p>
        <p className="mt-1 text-sm text-muted">
          Listening is where words turn into understanding.
        </p>
        <a
          href="/listen"
          className="mt-5 inline-block rounded-xl bg-gold px-5 py-3 font-bold text-bg"
        >
          Another set
        </a>
      </div>
    );
  }

  const s = playlist[idx];
  const visible = showText || stage === "reveal";
  const move = (delta: number) => {
    runRef.current++;
    setStage("hear");
    setIdx((i) => Math.min(Math.max(i + delta, 0), playlist.length));
  };

  return (
    <div className="space-y-4">
      <div className="flex min-h-56 flex-col items-center justify-center rounded-2xl border border-border bg-surface p-5 text-center">
        <p className="text-xs font-semibold uppercase tracking-wide text-faint">
          {idx + 1} of {playlist.length}
          {!playing && " · paused"}
        </p>
        {visible ? (
          <>
            <p className="mt-4 text-2xl font-bold leading-snug text-ink">{s.af}</p>
            <p className="mt-3 text-base text-gold">
              {stage === "reveal" ? s.en : " "}
            </p>
          </>
        ) : (
          <>
            <p className="mt-4 text-5xl">{stage === "think" ? "🤔" : "👂"}</p>
            <p className="mt-3 text-sm text-muted">
              {playing
                ? stage === "think"
                  ? "What did that mean?"
                  : "Listen…"
                : "Press play"}
            </p>
          </>
        )}
      </div>

      <div className="flex items-center justify-center gap-4">
        <button
          type="button"
          onClick={() => move(-1)}
          aria-label="Previous sentence"
          className="h-12 w-12 rounded-full border border-border bg-raised text-lg text-ink active:scale-95"
        >
          ⏮
        </button>
        <button
          type="button"
          disabled={!tts.ready}
          onClick={() => setPlaying((p) => !p)}
          aria-label={playing ? "Pause" : "Play"}
          className="h-16 w-16 rounded-full bg-gold text-2xl font-black text-bg active:scale-95 disabled:opacity-50"
        >
          {playing ? "⏸" : "▶"}
        </button>
        <button
          type="button"
          onClick={() => move(1)}
          aria-label="Next sentence"
          className="h-12 w-12 rounded-full border border-border bg-raised text-lg text-ink active:scale-95"
        >
          ⏭
        </button>
      </div>

      <label className="flex items-center justify-center gap-2 text-sm text-muted">
        <input
          type="checkbox"
          checked={showText}
          onChange={(e) => setShowText(e.target.checked)}
          className="h-4 w-4 accent-gold"
        />
        Show the Afrikaans while it plays (easier)
      </label>
      <p className="text-center text-xs text-faint">
        {poolSize} sentences unlocked so far — the set grows with every word
        you learn.
      </p>
    </div>
  );
}
