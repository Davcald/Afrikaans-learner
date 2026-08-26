"use client";

import MarkdownLite from "@/components/MarkdownLite";
import type { GrammarItem } from "@/lib/session/types";
import type { Tts } from "@/lib/speech/useTts";
import { PrimaryButton, SpeakerButton } from "./bits";

export default function GrammarLessonView({
  item,
  tts,
  onDone,
}: {
  item: GrammarItem;
  tts: Tts;
  onDone: () => void;
}) {
  return (
    <div className="flex min-h-full flex-col">
      <p className="text-center text-xs font-semibold uppercase tracking-wide text-gold">
        Grammar bite
      </p>
      <h2 className="mt-2 text-center text-2xl font-black text-ink">
        {item.title}
      </h2>

      <div className="mt-5 flex-1">
        <MarkdownLite text={item.body} />

        {item.examples.length > 0 && (
          <div className="mt-5 space-y-2.5">
            {item.examples.map((ex, i) => (
              <div
                key={i}
                className="rounded-xl border border-border bg-surface p-3"
              >
                <div className="flex items-center justify-between gap-2">
                  <p className="text-[15px] font-semibold text-ink">{ex.af}</p>
                  {tts.available && (
                    <SpeakerButton
                      onClick={() => tts.speak(ex.af, 0.9)}
                      className="h-9 w-9 shrink-0"
                    />
                  )}
                </div>
                <p className="mt-0.5 text-sm text-muted">{ex.en}</p>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="mt-6">
        <PrimaryButton onClick={onDone}>Got it — practise it</PrimaryButton>
      </div>
    </div>
  );
}
