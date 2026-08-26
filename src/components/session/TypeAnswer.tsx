"use client";

import { useRef, useState } from "react";
import { checkAnswer, type Verdict } from "@/lib/answers";
import type { ClozeItem, TypeItem } from "@/lib/session/types";
import type { Tts } from "@/lib/speech/useTts";
import {
  DiacriticBar,
  ExampleBlock,
  FeedbackBanner,
  PrimaryButton,
  SpeakerButton,
  type Feedback,
} from "./bits";

function feedbackFor(verdict: Verdict, expected: string): Feedback {
  switch (verdict) {
    case "exact":
      return { tone: "good", text: "Presies reg! (Exactly right)" };
    case "diacritics":
      return { tone: "warn", text: `Right — but watch the accents: ${expected}` };
    case "typo":
      return { tone: "warn", text: `Close — small typo. It's: ${expected}` };
    case "wrong":
      return { tone: "bad", text: `The answer is: ${expected}` };
  }
}

/** Rating derived from the check: exact→Good, near-miss→Hard, wrong→Again. */
function ratingFor(verdict: Verdict): 1 | 2 | 3 {
  if (verdict === "exact") return 3;
  if (verdict === "wrong") return 1;
  return 2;
}

export default function TypeAnswer({
  item,
  tts,
  onGrade,
}: {
  item: TypeItem | ClozeItem;
  tts: Tts;
  onGrade: (rating: 1 | 2 | 3 | 4) => void;
}) {
  const [value, setValue] = useState("");
  const [verdict, setVerdict] = useState<Verdict | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const isCloze = item.kind === "cloze";
  const answered = verdict !== null;

  const insert = (ch: string) => {
    const el = inputRef.current;
    if (!el) return;
    const start = el.selectionStart ?? value.length;
    const end = el.selectionEnd ?? value.length;
    const next = value.slice(0, start) + ch + value.slice(end);
    setValue(next);
    requestAnimationFrame(() => {
      el.focus();
      el.setSelectionRange(start + ch.length, start + ch.length);
    });
  };

  const submit = () => {
    if (!value.trim() || answered) return;
    const res = checkAnswer(value, item.accepted);
    setVerdict(res.verdict);
    if (tts.available && item.ttsText) tts.speak(item.ttsText, 0.95);
  };

  const answerDisplay = isCloze ? item.answer : item.answerAf;
  const expectedFeedback = feedbackFor(verdict ?? "exact", answerDisplay);

  return (
    <div className="flex min-h-full flex-col">
      <p className="text-center text-xs font-semibold uppercase tracking-wide text-faint">
        {isCloze ? "Fill the gap" : "Say it in Afrikaans"}
      </p>

      <div className="flex flex-col items-center py-6 text-center">
        {isCloze ? (
          <>
            <p className="text-2xl font-bold leading-snug text-ink">
              {item.textAf.split(/\{\{.+?\}\}/).map((part, i, arr) => (
                <span key={i}>
                  {part}
                  {i < arr.length - 1 && (
                    <span className="mx-1 inline-block min-w-16 rounded-lg border-b-2 border-gold bg-raised px-2 text-gold">
                      {answered ? item.answer : "‎ "}
                    </span>
                  )}
                </span>
              ))}
            </p>
            <p className="mt-3 text-sm text-muted">{item.en}</p>
          </>
        ) : (
          <>
            <p className="text-3xl font-black text-ink">{item.promptEn}</p>
            {item.isNew && item.pron && (
              <p className="mt-2 text-sm text-faint">{item.pron}</p>
            )}
          </>
        )}
      </div>

      <div className="flex flex-1 flex-col gap-3">
        {!answered ? (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              submit();
            }}
            className="flex flex-col gap-3"
          >
            <input
              ref={inputRef}
              value={value}
              onChange={(e) => setValue(e.target.value)}
              lang="af"
              autoCapitalize="off"
              autoCorrect="off"
              autoComplete="off"
              spellCheck={false}
              enterKeyHint="done"
              placeholder="Type in Afrikaans…"
              className="w-full rounded-xl border border-border bg-surface px-4 py-3.5 text-lg text-ink placeholder-faint outline-none focus:border-gold"
            />
            <DiacriticBar onInsert={insert} />
            <PrimaryButton type="submit" disabled={!value.trim()}>
              Check
            </PrimaryButton>
          </form>
        ) : (
          <div className="animate-pop-in flex flex-col gap-3">
            <FeedbackBanner feedback={expectedFeedback} />
            <div className="rounded-xl border border-border bg-surface p-4 text-center">
              <div className="flex items-center justify-center gap-3">
                <p className="text-2xl font-bold text-gold">{answerDisplay}</p>
                {tts.available && item.ttsText && (
                  <SpeakerButton
                    onClick={() => tts.speak(item.ttsText!, 0.95)}
                    className="h-9 w-9"
                  />
                )}
              </div>
              {!isCloze && item.pron && (
                <p className="mt-1 text-sm text-faint">{item.pron}</p>
              )}
              {value.trim() && verdict !== "exact" && (
                <p className="mt-2 text-sm text-muted">
                  You wrote: <span className="text-danger">{value}</span>
                </p>
              )}
            </div>
            {!isCloze && item.example && (
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
            <div className="mt-auto flex gap-2">
              {verdict === "exact" && (
                <button
                  type="button"
                  onClick={() => onGrade(4)}
                  className="flex-1 rounded-xl border border-sky/40 bg-sky/15 px-4 py-3.5 font-bold text-sky active:scale-[0.98]"
                >
                  That was easy
                </button>
              )}
              <button
                type="button"
                onClick={() => onGrade(ratingFor(verdict!))}
                className="flex-[2] rounded-xl bg-gold px-4 py-3.5 font-bold text-bg active:scale-[0.98]"
              >
                Continue
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
