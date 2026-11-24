"use client";

import { useState } from "react";
import type { FlashcardItem } from "@/lib/session/types";
import type { Tts } from "@/lib/speech/useTts";
import { ExampleBlock, HookNote, PrimaryButton, SpeakerButton } from "./bits";

/**
 * Recall card for well-known words: think of the meaning, reveal, then say
 * honestly whether you had it. Two buttons — no agonising over four grades.
 */
export default function Flashcard({
  item,
  tts,
  onGrade,
}: {
  item: FlashcardItem;
  tts: Tts;
  onGrade: (rating: 1 | 3) => void;
}) {
  const [revealed, setRevealed] = useState(false);

  return (
    <div className="flex min-h-full flex-col">
      <p className="text-center text-xs font-semibold uppercase tracking-wide text-faint">
        What does this mean? Say it in your head first
      </p>
      <div className="flex flex-1 flex-col items-center justify-center py-8 text-center">
        <div className="flex items-center gap-3">
          <p
            className={`font-black text-ink ${item.front.length > 18 ? "text-2xl" : "text-4xl"}`}
          >
            {item.front}
          </p>
          {tts.available && item.ttsText && (
            <SpeakerButton onClick={() => tts.speak(item.ttsText!)} />
          )}
        </div>
        {item.pron && <p className="mt-2 text-sm text-faint">{item.pron}</p>}
        {revealed && (
          <div className="animate-pop-in mt-6 w-full">
            <p className="text-2xl font-bold text-gold">{item.back}</p>
            {item.hook && (
              <div className="mt-4">
                <HookNote hook={item.hook} />
              </div>
            )}
            {item.example && (
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
      {revealed ? (
        <div className="grid grid-cols-2 gap-2.5">
          <button
            type="button"
            onClick={() => onGrade(1)}
            className="rounded-xl border border-danger/40 bg-danger/15 px-3 py-4 font-bold text-danger active:scale-[0.98]"
          >
            Forgot it
          </button>
          <button
            type="button"
            onClick={() => onGrade(3)}
            className="rounded-xl border border-leaf/40 bg-leaf/15 px-3 py-4 font-bold text-leaf active:scale-[0.98]"
          >
            Knew it
          </button>
        </div>
      ) : (
        <PrimaryButton onClick={() => setRevealed(true)}>
          Show answer
        </PrimaryButton>
      )}
    </div>
  );
}
