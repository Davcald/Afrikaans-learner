"use client";

import { useEffect, useState } from "react";
import type { ListeningItem } from "@/lib/session/types";
import type { Tts } from "@/lib/speech/useTts";
import { PrimaryButton, SpeakerButton } from "./bits";

/** Hear an Afrikaans sentence, pick its meaning (listening practice). */
export default function Listening({
  item,
  tts,
  onDone,
}: {
  item: ListeningItem;
  tts: Tts;
  onDone: (correct: boolean) => void;
}) {
  const [picked, setPicked] = useState<number | null>(null);
  const answered = picked !== null;
  const correct = picked === item.correct;

  useEffect(() => {
    // Auto-play once on mount (we're already inside the session, which
    // started from a tap, so audio is unlocked).
    const t = setTimeout(() => tts.speak(item.ttsText, 0.9), 250);
    return () => clearTimeout(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [item.id]);

  return (
    <div className="flex min-h-full flex-col">
      <p className="text-center text-xs font-semibold uppercase tracking-wide text-faint">
        Listen — what does it mean?
      </p>

      <div className="flex flex-col items-center gap-4 py-8">
        <div className="flex items-center gap-4">
          <SpeakerButton
            onClick={() => tts.speak(item.ttsText, 0.9)}
            className="h-16 w-16"
          />
          <SpeakerButton slow onClick={() => tts.speak(item.ttsText, 0.65)} />
        </div>
        {answered && (
          <p className="animate-pop-in text-center text-lg font-bold text-ink">
            {item.answerAf}
          </p>
        )}
      </div>

      <div className="flex flex-1 flex-col gap-2.5">
        {item.options.map((opt, i) => {
          let cls = "border-border bg-surface text-ink";
          if (answered && i === item.correct) {
            cls = "border-leaf bg-leaf/15 text-leaf";
          } else if (answered && i === picked && !correct) {
            cls = "border-danger bg-danger/15 text-danger";
          }
          return (
            <button
              key={i}
              type="button"
              disabled={answered}
              onClick={() => setPicked(i)}
              className={`rounded-xl border px-4 py-3.5 text-left text-[15px] font-semibold transition active:scale-[0.99] ${cls}`}
            >
              {opt}
            </button>
          );
        })}
      </div>

      {answered && (
        <div className="mt-4">
          <PrimaryButton onClick={() => onDone(correct)}>Continue</PrimaryButton>
        </div>
      )}
    </div>
  );
}
