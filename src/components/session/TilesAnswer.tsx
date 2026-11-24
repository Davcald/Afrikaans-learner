"use client";

import { useState } from "react";
import type { ClozeItem, TypeItem } from "@/lib/session/types";
import type { Tts } from "@/lib/speech/useTts";
import {
  ExampleBlock,
  FeedbackBanner,
  HookNote,
  PrimaryButton,
  SpeakerButton,
} from "./bits";

/**
 * Build the Afrikaans from tiles — letters for a word, words for a phrase.
 * The step between recognising a word and typing it from nothing: you still
 * have to recall it, but spelling and accents are not the obstacle.
 */
export default function TilesAnswer({
  item,
  tts,
  onResult,
}: {
  item: TypeItem | ClozeItem;
  tts: Tts;
  onResult: (correct: boolean) => void;
}) {
  const set = item.tileSet!;
  // Track by index into set.tiles so repeated letters stay distinct.
  const [placed, setPlaced] = useState<number[]>([]);
  const [checked, setChecked] = useState<boolean | null>(null);
  const answered = checked !== null;
  const isCloze = item.kind === "cloze";
  const answer = isCloze ? item.answer : item.answerAf;
  const built = placed.map((i) => set.tiles[i]).join(set.joiner);
  const letters = set.joiner === "";

  const check = () => {
    setChecked(built === set.solution.join(set.joiner));
    if (tts.available && item.ttsText) tts.speak(item.ttsText, 0.95);
  };

  const tileCls = letters
    ? "min-w-10 px-2.5 py-2.5 text-lg"
    : "px-3 py-2 text-[15px]";

  return (
    <div className="flex min-h-full flex-col">
      <p className="text-center text-xs font-semibold uppercase tracking-wide text-faint">
        {isCloze
          ? "Spell the missing word"
          : letters
            ? "Spell it in Afrikaans"
            : "Build it in Afrikaans"}
      </p>

      <div className="flex flex-col items-center py-5 text-center">
        {isCloze ? (
          <>
            <p className="text-2xl font-bold leading-snug text-ink">
              {item.textAf.split(/\{\{.+?\}\}/).map((part, i, arr) => (
                <span key={i}>
                  {part}
                  {i < arr.length - 1 && (
                    <span className="mx-1 inline-block min-w-16 rounded-lg border-b-2 border-gold bg-raised px-2 text-gold">
                      {answered ? item.answer : built || "‎ "}
                    </span>
                  )}
                </span>
              ))}
            </p>
            <p className="mt-3 text-sm text-muted">{item.en}</p>
          </>
        ) : (
          <p
            className={`font-black text-ink ${item.promptEn.length > 18 ? "text-2xl" : "text-3xl"}`}
          >
            {item.promptEn}
          </p>
        )}
      </div>

      <div className="min-h-14 rounded-xl border border-dashed border-border bg-surface p-2.5">
        <div className="flex flex-wrap justify-center gap-1.5">
          {placed.map((ti, pos) => (
            <button
              key={`${ti}-${pos}`}
              type="button"
              disabled={answered}
              onClick={() => setPlaced((p) => p.filter((_, idx) => idx !== pos))}
              className={`rounded-lg bg-gold font-bold text-bg active:scale-95 ${tileCls}`}
            >
              {set.tiles[ti]}
            </button>
          ))}
          {placed.length === 0 && (
            <span className="py-2 text-sm text-faint">
              Tap the {letters ? "letters" : "words"} in order…
            </span>
          )}
        </div>
      </div>

      <div className="mt-4 flex flex-1 flex-col">
        {!answered && (
          <div className="flex flex-wrap justify-center gap-1.5">
            {set.tiles.map((t, i) => {
              const used = placed.includes(i);
              return (
                <button
                  key={i}
                  type="button"
                  disabled={used}
                  onClick={() => setPlaced((p) => [...p, i])}
                  className={`rounded-lg border border-border font-bold transition active:scale-95 ${tileCls} ${
                    used ? "bg-bg text-faint opacity-30" : "bg-raised text-ink"
                  }`}
                >
                  {t}
                </button>
              );
            })}
          </div>
        )}

        {answered && (
          <div className="animate-pop-in flex flex-col gap-3">
            <FeedbackBanner
              feedback={
                checked
                  ? { tone: "good", text: "Presies reg! (Exactly right)" }
                  : { tone: "bad", text: `Not quite — it's: ${answer}` }
              }
            />
            <div className="rounded-xl border border-border bg-surface p-4 text-center">
              <div className="flex items-center justify-center gap-3">
                <p className="text-2xl font-bold text-gold">{answer}</p>
                {tts.available && item.ttsText && (
                  <SpeakerButton
                    onClick={() => tts.speak(item.ttsText!, 0.95)}
                    className="h-9 w-9"
                  />
                )}
              </div>
              {!checked && !isCloze && item.hook && (
                <div className="mt-3">
                  <HookNote hook={item.hook} />
                </div>
              )}
            </div>
            {!isCloze && checked && item.example && (
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

      <div className="mt-4">
        {answered ? (
          <PrimaryButton onClick={() => onResult(checked!)}>
            {checked ? "Continue" : "Got it — ask me again soon"}
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
