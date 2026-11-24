"use client";

import { useEffect } from "react";
import type { IntroItem } from "@/lib/session/types";
import type { Tts } from "@/lib/speech/useTts";
import { ExampleBlock, HookNote, PrimaryButton, SpeakerButton } from "./bits";

/**
 * Teaching card: a new word is shown — sound, meaning, memory hook — before
 * anything is asked about it. Nothing to get wrong here.
 */
export default function Intro({
  item,
  tts,
  onDone,
}: {
  item: IntroItem;
  tts: Tts;
  onDone: () => void;
}) {
  useEffect(() => {
    const t = setTimeout(() => tts.speak(item.ttsText, 0.9), 250);
    return () => clearTimeout(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [item.id]);

  return (
    <div className="flex min-h-full flex-col">
      <p className="text-center text-xs font-semibold uppercase tracking-wide text-leaf">
        {item.isPhrase ? "New phrase" : "New word"} — just look and listen
      </p>
      <div className="flex flex-1 flex-col items-center justify-center py-6 text-center">
        {item.emoji && <p className="mb-3 text-6xl">{item.emoji}</p>}
        <div className="flex items-center gap-3">
          <p
            className={`font-black text-ink ${item.isPhrase ? "text-3xl" : "text-4xl"}`}
          >
            {item.af}
          </p>
          {tts.available && (
            <SpeakerButton onClick={() => tts.speak(item.ttsText, 0.9)} />
          )}
        </div>
        {item.pron && <p className="mt-2 text-sm text-faint">{item.pron}</p>}
        <p className="mt-4 text-2xl font-bold text-gold">{item.en}</p>
        {item.hook && (
          <div className="mt-5 w-full">
            <HookNote hook={item.hook} />
          </div>
        )}
        {item.example && (
          <div className="w-full">
            <ExampleBlock
              af={item.example.af}
              en={item.example.en}
              onSpeak={
                tts.available
                  ? () => tts.speak(item.example!.af, 0.85)
                  : undefined
              }
            />
          </div>
        )}
      </div>
      <PrimaryButton onClick={onDone}>Got it</PrimaryButton>
    </div>
  );
}
