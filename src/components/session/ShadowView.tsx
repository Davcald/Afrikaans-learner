"use client";

import { useState } from "react";
import type { ShadowItem } from "@/lib/session/types";
import { phraseSimilarity, recognizeOnce, sttSupported } from "@/lib/speech/stt";
import type { Tts } from "@/lib/speech/useTts";
import { PrimaryButton, SpeakerButton } from "./bits";

const REPS_TARGET = 3;

type MicState = "idle" | "listening" | "great" | "close" | "again";

function MicFeedback({ state }: { state: MicState }) {
  if (state === "idle") return null;
  const map: Record<Exclude<MicState, "idle">, { text: string; cls: string }> = {
    listening: { text: "Listening…", cls: "text-sky" },
    great: { text: "Uitstekend! Sounded great", cls: "text-leaf" },
    close: { text: "Close — try once more", cls: "text-flame" },
    again: { text: "Couldn't catch it — try again", cls: "text-danger" },
  };
  const m = map[state];
  return <p className={`text-xs font-semibold ${m.cls}`}>{m.text}</p>;
}

export default function ShadowView({
  item,
  tts,
  onDone,
}: {
  item: ShadowItem;
  tts: Tts;
  onDone: () => void;
}) {
  const [reps, setReps] = useState<number[]>(item.phrases.map(() => 0));
  const [mic, setMic] = useState<MicState[]>(item.phrases.map(() => "idle"));
  const canFinish = reps.every((r) => r >= 1);
  const hasMic = sttSupported();

  const play = (i: number, rate: number) => {
    tts.speak(item.phrases[i].af, rate);
    setReps((r) => r.map((v, idx) => (idx === i ? v + 1 : v)));
  };

  const listen = async (i: number) => {
    setMic((m) => m.map((v, idx) => (idx === i ? "listening" : v)));
    const transcripts = await recognizeOnce("af-ZA");
    const best = Math.max(
      0,
      ...transcripts.map((t) => phraseSimilarity(t, item.phrases[i].af)),
    );
    const verdict: MicState =
      transcripts.length === 0 ? "again" : best >= 0.8 ? "great" : best >= 0.5 ? "close" : "again";
    setMic((m) => m.map((v, idx) => (idx === i ? verdict : v)));
  };

  return (
    <div className="flex min-h-full flex-col">
      <p className="text-center text-xs font-semibold uppercase tracking-wide text-gold">
        Shadowing
      </p>
      <h2 className="mt-1 text-center text-xl font-black text-ink">
        Speak WITH the voice
      </h2>
      <p className="mt-1 text-center text-xs leading-relaxed text-muted">
        Play each phrase and say it out loud <em>at the same time</em>, copying
        the rhythm. {REPS_TARGET}× each — research says this builds real
        speaking fluency.
      </p>

      <div className="mt-5 flex-1 space-y-3">
        {item.phrases.map((p, i) => (
          <div key={i} className="rounded-xl border border-border bg-surface p-4">
            <p className="text-lg font-bold text-ink">{p.af}</p>
            <p className="mt-0.5 text-sm text-muted">{p.en}</p>
            <div className="mt-3 flex items-center gap-2.5">
              <SpeakerButton onClick={() => play(i, 1)} />
              <SpeakerButton slow onClick={() => play(i, 0.65)} />
              {hasMic && (
                <button
                  type="button"
                  onClick={() => listen(i)}
                  aria-label="Check my pronunciation"
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border bg-raised text-lg active:scale-95"
                >
                  🎙
                </button>
              )}
              <div className="ml-auto flex items-center gap-1">
                {Array.from({ length: REPS_TARGET }).map((_, d) => (
                  <span
                    key={d}
                    className={`h-2.5 w-2.5 rounded-full ${
                      reps[i] > d ? "bg-gold" : "bg-border"
                    }`}
                  />
                ))}
              </div>
            </div>
            <div className="mt-1.5">
              <MicFeedback state={mic[i]} />
            </div>
          </div>
        ))}
      </div>

      <div className="mt-5">
        <PrimaryButton onClick={onDone} disabled={!canFinish}>
          {canFinish ? "Done speaking" : "Play each phrase first"}
        </PrimaryButton>
      </div>
    </div>
  );
}
