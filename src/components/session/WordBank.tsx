"use client";

import { useState } from "react";
import type { WordBankItem } from "@/lib/session/types";
import type { Tts } from "@/lib/speech/useTts";
import { FeedbackBanner, PrimaryButton, SpeakerButton } from "./bits";

/** Arrange the shuffled words into the sentence (output practice). */
export default function WordBank({
  item,
  tts,
  onDone,
}: {
  item: WordBankItem;
  tts: Tts;
  onDone: (correct: boolean) => void;
}) {
  // Track by index into item.shuffled so duplicate words stay distinct.
  const [placed, setPlaced] = useState<number[]>([]);
  const [checked, setChecked] = useState<boolean | null>(null);
  const answered = checked !== null;

  const sentence = placed.map((i) => item.shuffled[i]).join(" ");
  const correctSentence = item.tokens.join(" ");

  const check = () => {
    const ok = sentence === correctSentence;
    setChecked(ok);
    if (tts.available && item.ttsText) tts.speak(item.ttsText, 0.95);
  };

  return (
    <div className="flex min-h-full flex-col">
      <p className="text-center text-xs font-semibold uppercase tracking-wide text-faint">
        Build the sentence
      </p>
      <p className="mt-4 text-center text-xl font-bold text-ink">{item.en}</p>

      <div className="mt-6 min-h-16 rounded-xl border border-dashed border-border bg-surface p-3">
        <div className="flex flex-wrap gap-2">
          {placed.map((si, pos) => (
            <button
              key={`${si}-${pos}`}
              type="button"
              disabled={answered}
              onClick={() =>
                setPlaced((p) => p.filter((_, idx) => idx !== pos))
              }
              className="rounded-lg bg-gold px-3 py-2 text-[15px] font-semibold text-bg active:scale-95"
            >
              {item.shuffled[si]}
            </button>
          ))}
          {placed.length === 0 && (
            <span className="py-2 text-sm text-faint">
              Tap words below in order…
            </span>
          )}
        </div>
      </div>

      <div className="mt-4 flex flex-1 flex-col">
        <div className="flex flex-wrap gap-2">
          {item.shuffled.map((w, i) => {
            const used = placed.includes(i);
            return (
              <button
                key={i}
                type="button"
                disabled={used || answered}
                onClick={() => setPlaced((p) => [...p, i])}
                className={`rounded-lg border px-3 py-2 text-[15px] font-semibold transition active:scale-95 ${
                  used
                    ? "border-border bg-bg text-faint opacity-40"
                    : "border-border bg-raised text-ink"
                }`}
              >
                {w}
              </button>
            );
          })}
        </div>

        {answered && (
          <div className="animate-pop-in mt-4 space-y-3">
            <FeedbackBanner
              feedback={
                checked
                  ? { tone: "good", text: "Perfek! (Perfect)" }
                  : { tone: "bad", text: `Correct order: ${correctSentence}` }
              }
            />
            <div className="flex items-center justify-center gap-2">
              {tts.available && item.ttsText && (
                <SpeakerButton onClick={() => tts.speak(item.ttsText!, 0.9)} />
              )}
            </div>
          </div>
        )}
      </div>

      <div className="mt-4">
        {answered ? (
          <PrimaryButton onClick={() => onDone(checked!)}>
            Continue
          </PrimaryButton>
        ) : (
          <PrimaryButton onClick={check} disabled={placed.length === 0}>
            Check
          </PrimaryButton>
        )}
      </div>
    </div>
  );
}
