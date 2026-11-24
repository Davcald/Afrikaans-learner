"use client";

import { useEffect, useState } from "react";
import type { DictationItem } from "@/lib/session/types";
import type { Tts } from "@/lib/speech/useTts";
import { FeedbackBanner, PrimaryButton, SpeakerButton } from "./bits";

/**
 * Hear a sentence, rebuild it from word tiles. Trains the ear to pick
 * separate words out of running speech — the step flashcards never reach.
 */
export default function Dictation({
  item,
  tts,
  onDone,
}: {
  item: DictationItem;
  tts: Tts;
  onDone: (correct: boolean) => void;
}) {
  const set = item.tileSet;
  const [placed, setPlaced] = useState<number[]>([]);
  const [checked, setChecked] = useState<boolean | null>(null);
  const answered = checked !== null;

  useEffect(() => {
    const t = setTimeout(() => tts.speak(item.ttsText, 0.9), 250);
    return () => clearTimeout(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [item.id]);

  const built = placed.map((i) => set.tiles[i]).join(" ");
  const norm = (s: string) => s.toLowerCase();

  return (
    <div className="flex min-h-full flex-col">
      <p className="text-center text-xs font-semibold uppercase tracking-wide text-faint">
        Listen — build what you hear
      </p>
      <div className="flex items-center justify-center gap-4 py-6">
        <SpeakerButton
          onClick={() => tts.speak(item.ttsText, 0.9)}
          className="h-16 w-16"
        />
        <SpeakerButton slow onClick={() => tts.speak(item.ttsText, 0.65)} />
      </div>

      <div className="min-h-14 rounded-xl border border-dashed border-border bg-surface p-2.5">
        <div className="flex flex-wrap justify-center gap-1.5">
          {placed.map((ti, pos) => (
            <button
              key={`${ti}-${pos}`}
              type="button"
              disabled={answered}
              onClick={() => setPlaced((p) => p.filter((_, idx) => idx !== pos))}
              className="rounded-lg bg-gold px-3 py-2 text-[15px] font-bold text-bg active:scale-95"
            >
              {set.tiles[ti]}
            </button>
          ))}
          {placed.length === 0 && (
            <span className="py-2 text-sm text-faint">
              Tap the words in the order you hear them…
            </span>
          )}
        </div>
      </div>

      <div className="mt-4 flex flex-1 flex-col">
        {!answered ? (
          <div className="flex flex-wrap justify-center gap-1.5">
            {set.tiles.map((t, i) => {
              const used = placed.includes(i);
              return (
                <button
                  key={i}
                  type="button"
                  disabled={used}
                  onClick={() => setPlaced((p) => [...p, i])}
                  className={`rounded-lg border border-border px-3 py-2 text-[15px] font-bold transition active:scale-95 ${
                    used ? "bg-bg text-faint opacity-30" : "bg-raised text-ink"
                  }`}
                >
                  {t}
                </button>
              );
            })}
          </div>
        ) : (
          <div className="animate-pop-in flex flex-col gap-3">
            <FeedbackBanner
              feedback={
                checked
                  ? { tone: "good", text: "Goed gehoor! (Well heard)" }
                  : { tone: "bad", text: "Not quite — here is what was said:" }
              }
            />
            <div className="rounded-xl border border-border bg-surface p-4 text-center">
              <p className="text-xl font-bold text-ink">{item.ttsText}</p>
              <p className="mt-1 text-sm text-gold">{item.en}</p>
            </div>
          </div>
        )}
      </div>

      <div className="mt-4">
        {answered ? (
          <PrimaryButton onClick={() => onDone(checked!)}>Continue</PrimaryButton>
        ) : (
          <PrimaryButton
            disabled={placed.length === 0}
            onClick={() => {
              setChecked(norm(built) === norm(set.solution.join(" ")));
              tts.speak(item.ttsText, 0.9);
            }}
          >
            Check
          </PrimaryButton>
        )}
      </div>
    </div>
  );
}
