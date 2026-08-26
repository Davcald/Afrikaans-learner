"use client";

// Small shared pieces for the session player renderers.
import type { IntervalPreview } from "@/lib/session/types";

export function SpeakerButton({
  onClick,
  slow,
  disabled,
  className = "",
}: {
  onClick: () => void;
  slow?: boolean;
  disabled?: boolean;
  className?: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      aria-label={slow ? "Play slowly" : "Play audio"}
      className={`inline-flex h-11 w-11 items-center justify-center rounded-full border border-border bg-raised text-gold transition active:scale-95 disabled:opacity-40 ${className}`}
    >
      {slow ? (
        <span className="text-lg">🐢</span>
      ) : (
        <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M4 9v6h4l5 4V5L8 9H4z" />
          <path
            d="M16 8.5a5 5 0 0 1 0 7M18.5 6a8.5 8.5 0 0 1 0 12"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
        </svg>
      )}
    </button>
  );
}

const GRADE_STYLES: Record<1 | 2 | 3 | 4, { label: string; cls: string }> = {
  1: { label: "Again", cls: "bg-danger/20 text-danger border-danger/40" },
  2: { label: "Hard", cls: "bg-flame/15 text-flame border-flame/40" },
  3: { label: "Good", cls: "bg-leaf/15 text-leaf border-leaf/40" },
  4: { label: "Easy", cls: "bg-sky/15 text-sky border-sky/40" },
};

export function GradeBar({
  intervals,
  onGrade,
  disabled,
}: {
  intervals: IntervalPreview;
  onGrade: (rating: 1 | 2 | 3 | 4) => void;
  disabled?: boolean;
}) {
  return (
    <div className="grid grid-cols-4 gap-2">
      {([1, 2, 3, 4] as const).map((r) => (
        <button
          key={r}
          type="button"
          disabled={disabled}
          onClick={() => onGrade(r)}
          className={`rounded-xl border px-1 py-3 text-center transition active:scale-95 disabled:opacity-50 ${GRADE_STYLES[r].cls}`}
        >
          <span className="block text-sm font-bold">{GRADE_STYLES[r].label}</span>
          <span className="block text-[11px] opacity-80">{intervals[r]}</span>
        </button>
      ))}
    </div>
  );
}

export const AF_DIACRITICS = ["ê", "ë", "é", "è", "ï", "î", "ô", "ö", "û", "ü", "á", "'n"];

export function DiacriticBar({
  onInsert,
}: {
  onInsert: (ch: string) => void;
}) {
  return (
    <div className="flex flex-wrap gap-1.5">
      {AF_DIACRITICS.map((ch) => (
        <button
          key={ch}
          type="button"
          tabIndex={-1}
          onMouseDown={(e) => e.preventDefault()} // keep input focus
          onClick={() => onInsert(ch)}
          className="min-w-9 rounded-lg border border-border bg-raised px-2 py-1.5 text-sm font-semibold text-ink active:scale-95"
        >
          {ch}
        </button>
      ))}
    </div>
  );
}

export function PrimaryButton({
  children,
  onClick,
  disabled,
  type = "button",
}: {
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  type?: "button" | "submit";
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className="w-full rounded-xl bg-gold px-4 py-3.5 text-base font-bold text-bg transition active:scale-[0.98] disabled:opacity-50"
    >
      {children}
    </button>
  );
}

export function ExampleBlock({
  af,
  en,
  onSpeak,
}: {
  af: string;
  en: string;
  onSpeak?: () => void;
}) {
  return (
    <div className="mt-4 rounded-xl border border-border bg-surface p-3 text-left">
      <div className="flex items-center justify-between gap-2">
        <p className="text-[15px] font-medium text-ink">{af}</p>
        {onSpeak && (
          <SpeakerButton onClick={onSpeak} className="h-9 w-9 shrink-0" />
        )}
      </div>
      <p className="mt-1 text-sm text-muted">{en}</p>
    </div>
  );
}

export type Feedback =
  | { tone: "good"; text: string }
  | { tone: "warn"; text: string }
  | { tone: "bad"; text: string };

export function FeedbackBanner({ feedback }: { feedback: Feedback }) {
  const cls =
    feedback.tone === "good"
      ? "bg-leaf/15 text-leaf"
      : feedback.tone === "warn"
        ? "bg-flame/15 text-flame"
        : "bg-danger/15 text-danger";
  return (
    <p className={`rounded-xl px-3 py-2.5 text-sm font-semibold ${cls}`}>
      {feedback.text}
    </p>
  );
}
