// Web Speech synthesis helpers. Afrikaans voice availability is uneven:
// Android Chrome (device Google TTS) and desktop Edge have af voices;
// iOS/macOS Safari have none. Everything degrades gracefully.

export interface VoicePick {
  voice: SpeechSynthesisVoice;
  /** true when we fell back to a Dutch voice (only used if user opts in). */
  approximate: boolean;
}

export function ttsSupported(): boolean {
  return typeof window !== "undefined" && "speechSynthesis" in window;
}

/** getVoices() is empty until voiceschanged on some browsers — poll + listen. */
export function loadVoices(timeoutMs = 2000): Promise<SpeechSynthesisVoice[]> {
  if (!ttsSupported()) return Promise.resolve([]);
  const synth = window.speechSynthesis;
  const now = synth.getVoices();
  if (now.length > 0) return Promise.resolve(now);
  return new Promise((resolve) => {
    let done = false;
    const finish = () => {
      if (done) return;
      done = true;
      resolve(synth.getVoices());
    };
    synth.addEventListener("voiceschanged", finish, { once: true });
    setTimeout(finish, timeoutMs);
  });
}

export function pickAfrikaansVoice(
  voices: SpeechSynthesisVoice[],
  allowDutch = false,
): VoicePick | null {
  const byLang = voices.find((v) => v.lang.toLowerCase().startsWith("af"));
  if (byLang) return { voice: byLang, approximate: false };
  const byName = voices.find((v) => v.name.toLowerCase().includes("afrikaans"));
  if (byName) return { voice: byName, approximate: false };
  if (allowDutch) {
    const dutch = voices.find((v) => v.lang.toLowerCase().startsWith("nl"));
    if (dutch) return { voice: dutch, approximate: true };
  }
  return null;
}

export function speakText(
  text: string,
  voice: SpeechSynthesisVoice,
  rate: number,
): void {
  if (!ttsSupported()) return;
  const synth = window.speechSynthesis;
  synth.cancel(); // WebKit gets stuck without this
  const u = new SpeechSynthesisUtterance(text);
  u.voice = voice;
  u.lang = voice.lang || "af-ZA";
  u.rate = rate;
  synth.speak(u);
}
