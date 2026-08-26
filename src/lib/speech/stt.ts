// Optional speech recognition (Chrome only; af-ZA via cloud recognizer).
// Advisory feedback only — nothing in the app depends on it.

interface MinimalRecognition {
  lang: string;
  interimResults: boolean;
  maxAlternatives: number;
  onresult: ((event: MinimalRecognitionEvent) => void) | null;
  onerror: (() => void) | null;
  onend: (() => void) | null;
  start(): void;
  stop(): void;
  abort(): void;
}

interface MinimalRecognitionEvent {
  results: ArrayLike<ArrayLike<{ transcript: string }>>;
}

type RecognitionCtor = new () => MinimalRecognition;

export function getRecognizerCtor(): RecognitionCtor | null {
  if (typeof window === "undefined") return null;
  const w = window as unknown as {
    SpeechRecognition?: RecognitionCtor;
    webkitSpeechRecognition?: RecognitionCtor;
  };
  return w.SpeechRecognition ?? w.webkitSpeechRecognition ?? null;
}

export function sttSupported(): boolean {
  return getRecognizerCtor() !== null;
}

/** Listen once and return candidate transcripts (empty on error/denial). */
export function recognizeOnce(lang = "af-ZA"): Promise<string[]> {
  const Ctor = getRecognizerCtor();
  if (!Ctor) return Promise.resolve([]);
  return new Promise((resolve) => {
    const rec = new Ctor();
    rec.lang = lang;
    rec.interimResults = false;
    rec.maxAlternatives = 3;
    let settled = false;
    const finish = (out: string[]) => {
      if (settled) return;
      settled = true;
      resolve(out);
    };
    rec.onresult = (event) => {
      const first = event.results[0];
      const alts: string[] = [];
      for (let i = 0; i < first.length; i++) alts.push(first[i].transcript);
      finish(alts);
    };
    rec.onerror = () => finish([]);
    rec.onend = () => finish([]);
    try {
      rec.start();
      setTimeout(() => {
        try {
          rec.stop();
        } catch {
          // already stopped
        }
      }, 8000);
    } catch {
      finish([]);
    }
  });
}

/** Token-set overlap in [0,1] between a transcript and the target phrase. */
export function phraseSimilarity(transcript: string, target: string): number {
  const tok = (s: string) =>
    s
      .toLowerCase()
      .replace(/[.,!?;:"()«»…'’]/g, "")
      .split(/\s+/)
      .filter(Boolean);
  const a = new Set(tok(transcript));
  const b = tok(target);
  if (b.length === 0) return 0;
  const hits = b.filter((t) => a.has(t)).length;
  return hits / b.length;
}
