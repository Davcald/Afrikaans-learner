"use client";

import { useState } from "react";
import type { FlashcardItem } from "@/lib/session/types";
import type { Tts } from "@/lib/speech/useTts";
import { ExampleBlock, GradeBar, PrimaryButton, SpeakerButton } from "./bits";

export default function Flashcard({
  item,
  tts,
  onGrade,
}: {
  item: FlashcardItem;
  tts: Tts;
  onGrade: (rating: 1 | 2 | 3 | 4) => void;
}) {
  const [revealed, setRevealed] = useState(false);

  return (
    <div className="flex min-h-full flex-col">
      <p className="text-center text-xs font-semibold uppercase tracking-wide text-faint">
        {item.isNew ? "New word" : "What does this mean?"}
      </p>
      <div className="flex flex-1 flex-col items-center justify-center py-8 text-center">
        <div className="flex items-center gap-3">
          <p className="text-4xl font-black text-ink">{item.front}</p>
          {tts.available && item.ttsText && (
            <SpeakerButton onClick={() => tts.speak(item.ttsText!)} />
          )}
        </div>
        {item.pron && (
          <p className="mt-2 text-sm text-faint">{item.pron}</p>
        )}
        {revealed && (
          <div className="animate-pop-in mt-6 w-full">
            <p className="text-2xl font-bold text-gold">{item.back}</p>
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
        <GradeBar intervals={item.intervals} onGrade={onGrade} />
      ) : (
        <PrimaryButton onClick={() => setRevealed(true)}>
          Show answer
        </PrimaryButton>
      )}
    </div>
  );
}
