"use client";

import { useState } from "react";
import type { ClozeItem } from "@/lib/session/types";
import type { Tts } from "@/lib/speech/useTts";
import { PrimaryButton } from "./bits";

/** Cloze in choice mode (first exposure of grammar exercises). */
export default function ClozeChoice({
  item,
  tts,
  onGrade,
}: {
  item: ClozeItem;
  tts: Tts;
  onGrade: (rating: 1 | 3) => void;
}) {
  const [picked, setPicked] = useState<string | null>(null);
  const answered = picked !== null;
  const correct = picked === item.answer;
  const options = item.options ?? [item.answer];

  return (
    <div className="flex min-h-full flex-col">
      <p className="text-center text-xs font-semibold uppercase tracking-wide text-faint">
        Pick the missing word
      </p>
      <div className="flex flex-col items-center py-6 text-center">
        <p className="text-2xl font-bold leading-snug text-ink">
          {item.textAf.split(/\{\{.+?\}\}/).map((part, i, arr) => (
            <span key={i}>
              {part}
              {i < arr.length - 1 && (
                <span
                  className={`mx-1 inline-block min-w-16 rounded-lg border-b-2 px-2 ${
                    answered
                      ? correct
                        ? "border-leaf bg-leaf/10 text-leaf"
                        : "border-danger bg-danger/10 text-danger"
                      : "border-gold bg-raised text-gold"
                  }`}
                >
                  {answered ? item.answer : picked ?? "‎ "}
                </span>
              )}
            </span>
          ))}
        </p>
        <p className="mt-3 text-sm text-muted">{item.en}</p>
      </div>

      <div className="flex flex-1 flex-col gap-2.5">
        {options.map((opt) => {
          let cls = "border-border bg-surface text-ink";
          if (answered && opt === item.answer) {
            cls = "border-leaf bg-leaf/15 text-leaf";
          } else if (answered && opt === picked && !correct) {
            cls = "border-danger bg-danger/15 text-danger";
          }
          return (
            <button
              key={opt}
              type="button"
              disabled={answered}
              onClick={() => {
                setPicked(opt);
                if (tts.available && item.ttsText) tts.speak(item.ttsText, 0.95);
              }}
              className={`rounded-xl border px-4 py-3.5 text-center text-lg font-bold transition active:scale-[0.99] ${cls}`}
            >
              {opt}
            </button>
          );
        })}
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
