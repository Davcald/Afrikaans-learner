"use client";

import { useTts } from "@/lib/speech/useTts";
import { SpeakerButton } from "@/components/session/bits";

export interface VocabRow {
  af: string;
  en: string;
  pron?: string;
  exampleAf: string;
  exampleEn: string;
  known: boolean;
}

export default function VocabList({ rows }: { rows: VocabRow[] }) {
  const tts = useTts();
  return (
    <ul className="divide-y divide-border overflow-hidden rounded-2xl border border-border bg-surface">
      {rows.map((row, i) => (
        <li key={i} className="p-3">
          <div className="flex items-center gap-3">
            <div className="min-w-0 flex-1">
              <p className="font-bold text-ink">
                {row.af}{" "}
                {row.known && (
                  <span className="text-xs text-leaf" title="In your reviews">
                    ●
                  </span>
                )}
              </p>
              <p className="text-sm text-muted">{row.en}</p>
              {row.pron && (
                <p className="mt-0.5 text-xs text-faint">{row.pron}</p>
              )}
            </div>
            {tts.available && (
              <SpeakerButton
                onClick={() => tts.speak(row.af, 0.9)}
                className="h-9 w-9 shrink-0"
              />
            )}
          </div>
        </li>
      ))}
    </ul>
  );
}
