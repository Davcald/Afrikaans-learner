"use client";

import { useEffect, useState } from "react";
import type { ChoiceItem, DrillItem } from "@/lib/session/types";
import type { Tts } from "@/lib/speech/useTts";
import { ExampleBlock, HookNote, PrimaryButton, SpeakerButton } from "./bits";

/**
 * Multiple choice in either direction. Used for the first questions about a
 * new word, for young cards, and for unscheduled drills.
 */
export default function Choice({
  item,
  tts,
  onResult,
}: {
  item: ChoiceItem | DrillItem;
  tts: Tts;
  onResult: (correct: boolean) => void;
}) {
  const [picked, setPicked] = useState<number | null>(null);
  const answered = picked !== null;
  const correct = picked === item.correct;
  const toAf = item.direction === "en-af";

  useEffect(() => {
    if (toAf || !item.ttsText) return;
    const t = setTimeout(() => tts.speak(item.ttsText!, 0.95), 200);
    return () => clearTimeout(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [item.prompt, toAf]);

  return (
    <div className="flex min-h-full flex-col">
      <p className="text-center text-xs font-semibold uppercase tracking-wide text-faint">
        {toAf ? "Pick the Afrikaans" : "Pick the meaning"}
      </p>
      <div className="flex flex-col items-center py-6 text-center">
        <div className="flex items-center gap-3">
          <p
            className={`font-black text-ink ${item.prompt.length > 18 ? "text-2xl" : "text-4xl"}`}
          >
            {item.prompt}
          </p>
          {!toAf && tts.available && item.ttsText && (
            <SpeakerButton onClick={() => tts.speak(item.ttsText!)} />
          )}
        </div>
        {!toAf && item.pron && (
          <p className="mt-2 text-sm text-faint">{item.pron}</p>
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
        {answered && (
          <div className="animate-pop-in">
            {!correct && (
              <div className="mt-3 rounded-xl border border-border bg-surface p-3 text-center">
                <p className="text-lg font-bold text-ink">
                  {item.af} <span className="text-faint">=</span>{" "}
                  <span className="text-gold">{item.en}</span>
                </p>
                {item.hook && (
                  <div className="mt-2">
                    <HookNote hook={item.hook} />
                  </div>
                )}
              </div>
            )}
            {correct && item.example && (
              <ExampleBlock
                af={item.example.af}
                en={item.example.en}
                onSpeak={
                  tts.available
                    ? () => tts.speak(item.example!.af, 0.9)
                    : undefined
                }
              />
            )}
          </div>
        )}
      </div>

      {answered && (
        <div className="mt-4">
          <PrimaryButton onClick={() => onResult(correct)}>
            {correct ? "Continue" : "Got it — ask me again soon"}
          </PrimaryButton>
        </div>
      )}
    </div>
  );
}
