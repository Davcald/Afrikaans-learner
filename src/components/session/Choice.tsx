"use client";

import { useState } from "react";
import type { ChoiceItem } from "@/lib/session/types";
import type { Tts } from "@/lib/speech/useTts";
import { ExampleBlock, PrimaryButton, SpeakerButton } from "./bits";

export default function Choice({
  item,
  tts,
  onGrade,
}: {
  item: ChoiceItem;
  tts: Tts;
  onGrade: (rating: 1 | 3) => void;
}) {
  const [picked, setPicked] = useState<number | null>(null);
  const answered = picked !== null;
  const correct = picked === item.correct;

  return (
    <div className="flex min-h-full flex-col">
      <p className="text-center text-xs font-semibold uppercase tracking-wide text-faint">
        {item.isNew ? "New word — pick the meaning" : "Pick the meaning"}
      </p>
      <div className="flex flex-col items-center py-6 text-center">
        <div className="flex items-center gap-3">
          <p className="text-4xl font-black text-ink">{item.prompt}</p>
          {tts.available && item.ttsText && (
            <SpeakerButton onClick={() => tts.speak(item.ttsText!)} />
          )}
        </div>
        {item.pron && <p className="mt-2 text-sm text-faint">{item.pron}</p>}
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
              onClick={() => {
                setPicked(i);
                if (item.ttsText && tts.available) tts.speak(item.ttsText);
              }}
              className={`rounded-xl border px-4 py-3.5 text-left text-[15px] font-semibold transition active:scale-[0.99] ${cls}`}
            >
              {opt}
            </button>
          );
        })}
        {answered && item.example && (
          <div className="animate-pop-in">
            <ExampleBlock
              af={item.example.af}
              en={item.example.en}
              onSpeak={
                tts.available
                  ? () => tts.speak(item.example!.af, 0.9)
                  : undefined
              }
            />
          </div>
        )}
      </div>

      {answered && (
        <div className="mt-4">
          <PrimaryButton onClick={() => onGrade(correct ? 3 : 1)}>
            Continue
          </PrimaryButton>
        </div>
      )}
    </div>
  );
}
