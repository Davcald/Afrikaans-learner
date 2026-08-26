"use client";

import { useState } from "react";
import type { ReaderItem, ReaderLine } from "@/lib/session/types";
import type { Tts } from "@/lib/speech/useTts";
import { PrimaryButton, SpeakerButton } from "./bits";

function Line({
  line,
  tts,
  showEn,
  selected,
  onSelectToken,
}: {
  line: ReaderLine;
  tts: Tts;
  showEn: boolean;
  selected: number | null;
  onSelectToken: (tokenIdx: number | null) => void;
}) {
  const gloss = selected !== null ? line.tokens[selected] : null;
  return (
    <div className="rounded-xl border border-border bg-surface p-3">
      <div className="flex items-start justify-between gap-2">
        <div>
          <p className="text-xs font-bold uppercase tracking-wide text-gold">
            {line.speaker}
          </p>
          <p className="mt-1 text-[17px] leading-relaxed text-ink">
            {line.tokens.map((tok, i) => (
              <span key={i}>
                <button
                  type="button"
                  onClick={() =>
                    onSelectToken(selected === i ? null : tok.g ? i : null)
                  }
                  className={`rounded px-0.5 transition ${
                    selected === i
                      ? "bg-gold text-bg"
                      : tok.g
                        ? "decoration-faint/60 underline decoration-dotted underline-offset-4"
                        : ""
                  }`}
                >
                  {tok.t}
                </button>{" "}
              </span>
            ))}
          </p>
        </div>
        {tts.available && (
          <SpeakerButton
            onClick={() => tts.speak(line.af, 0.9)}
            className="h-9 w-9 shrink-0"
          />
        )}
      </div>
      {gloss?.g && (
        <p className="animate-pop-in mt-2 rounded-lg bg-raised px-3 py-2 text-sm">
          <span className="font-bold text-gold">{gloss.t.replace(/[.,!?;:"]/g, "")}</span>
          <span className="text-muted"> — {gloss.g}</span>
        </p>
      )}
      {showEn && <p className="mt-2 text-sm italic text-muted">{line.en}</p>}
    </div>
  );
}

export default function ReaderView({
  item,
  tts,
  onDone,
  doneLabel = "Finish reading",
}: {
  item: ReaderItem;
  tts: Tts;
  onDone: () => void;
  doneLabel?: string;
}) {
  const [showEn, setShowEn] = useState(false);
  const [selected, setSelected] = useState<{ line: number; tok: number } | null>(null);
  const [answers, setAnswers] = useState<(number | null)[]>(
    item.questions.map(() => null),
  );
  const allAnswered = answers.every((a) => a !== null);

  return (
    <div className="flex min-h-full flex-col">
      <p className="text-center text-xs font-semibold uppercase tracking-wide text-gold">
        Read along — tap any word
      </p>
      <h2 className="mt-1 text-center text-2xl font-black text-ink">
        {item.title}
      </h2>
      <p className="text-center text-sm text-muted">{item.titleEn}</p>

      <div className="mt-4 flex justify-end">
        <button
          type="button"
          onClick={() => setShowEn((s) => !s)}
          className={`rounded-full border px-3 py-1.5 text-xs font-bold ${
            showEn
              ? "border-gold bg-gold text-bg"
              : "border-border bg-surface text-muted"
          }`}
        >
          {showEn ? "Hide English" : "Show English"}
        </button>
      </div>

      <div className="mt-3 flex-1 space-y-2.5">
        {item.lines.map((line, li) => (
          <Line
            key={li}
            line={line}
            tts={tts}
            showEn={showEn}
            selected={selected?.line === li ? selected.tok : null}
            onSelectToken={(tok) =>
              setSelected(tok === null ? null : { line: li, tok })
            }
          />
        ))}

        {item.questions.length > 0 && (
          <div className="mt-5 space-y-4">
            <p className="text-sm font-bold uppercase tracking-wide text-faint">
              Did you follow?
            </p>
            {item.questions.map((q, qi) => (
              <div key={qi}>
                <p className="mb-2 font-semibold text-ink">{q.q}</p>
                <div className="flex flex-col gap-2">
                  {q.options.map((opt, oi) => {
                    const picked = answers[qi];
                    let cls = "border-border bg-surface text-ink";
                    if (picked !== null && oi === q.correct) {
                      cls = "border-leaf bg-leaf/15 text-leaf";
                    } else if (picked === oi && picked !== q.correct) {
                      cls = "border-danger bg-danger/15 text-danger";
                    }
                    return (
                      <button
                        key={oi}
                        type="button"
                        disabled={picked !== null}
                        onClick={() =>
                          setAnswers((a) =>
                            a.map((v, i) => (i === qi ? oi : v)),
                          )
                        }
                        className={`rounded-xl border px-4 py-3 text-left text-sm font-semibold ${cls}`}
                      >
                        {opt}
                      </button>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="mt-5">
        <PrimaryButton
          onClick={onDone}
          disabled={item.questions.length > 0 && !allAnswered}
        >
          {doneLabel}
        </PrimaryButton>
      </div>
    </div>
  );
}
