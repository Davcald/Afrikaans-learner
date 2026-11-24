"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { audioKey } from "./audioKey";
import { loadVoices, pickAfrikaansVoice, speakText, ttsSupported } from "./tts";

export interface Tts {
  /** Discovery finished (result may still be unavailable). */
  ready: boolean;
  /** There is some way to hear Afrikaans on this device. */
  available: boolean;
  /**
   * Speech is coming from a stand-in Dutch voice: no recorded clips and no
   * Afrikaans voice on the device. Close enough to learn from, noticeably
   * off on some vowels.
   */
  approximate: boolean;
  speak: (text: string, rate?: number) => void;
  /** Like speak, but resolves when the audio has finished (or failed). */
  speakAsync: (text: string, rate?: number) => Promise<void>;
}

// Recorded clips (public/audio/<key>.mp3). The manifest lists which texts
// have one; it is fetched once per page load and shared by every hook.
let manifestPromise: Promise<Set<string>> | null = null;
function loadManifest(): Promise<Set<string>> {
  if (!manifestPromise) {
    manifestPromise = fetch("/audio/manifest.json")
      .then((r) => (r.ok ? r.json() : []))
      .then((keys: string[]) => new Set(keys))
      .catch(() => new Set<string>());
  }
  return manifestPromise;
}

let current: HTMLAudioElement | null = null;
function playClip(
  key: string,
  rate: number,
  onFail: () => void,
  onEnd?: () => void,
): void {
  current?.pause();
  if (typeof window !== "undefined" && "speechSynthesis" in window) {
    window.speechSynthesis.cancel();
  }
  const audio = new Audio(`/audio/${key}.mp3`);
  audio.playbackRate = Math.min(Math.max(rate, 0.5), 1.5);
  current = audio;
  if (onEnd) audio.onended = onEnd;
  audio.play().catch(onFail);
}

/**
 * Speech for the app. Recorded clips are preferred; the device's Afrikaans
 * voice (or, failing that, a Dutch one) covers anything without a clip.
 */
export function useTts(baseRate = 1): Tts {
  const [ready, setReady] = useState(false);
  const [clips, setClips] = useState<Set<string>>(new Set());
  const [approximateVoice, setApproximateVoice] = useState(false);
  const voiceRef = useRef<SpeechSynthesisVoice | null>(null);

  useEffect(() => {
    let cancelled = false;
    const voices = ttsSupported() ? loadVoices() : Promise.resolve([]);
    Promise.all([loadManifest(), voices]).then(([keys, list]) => {
      if (cancelled) return;
      const pick = pickAfrikaansVoice(list, true);
      voiceRef.current = pick?.voice ?? null;
      setApproximateVoice(pick?.approximate ?? false);
      setClips(keys);
      setReady(true);
    });
    return () => {
      cancelled = true;
    };
  }, []);

  const speakAsync = useCallback(
    (text: string, rate?: number) =>
      new Promise<void>((resolve) => {
        const r = rate ?? baseRate;
        let settled = false;
        const done = () => {
          if (settled) return;
          settled = true;
          resolve();
        };
        // Never hang a caller on a browser that drops the end event.
        setTimeout(done, 4000 + text.length * 250);
        const viaVoice = () => {
          if (voiceRef.current) speakText(text, voiceRef.current, r, done);
          else done();
        };
        const key = audioKey(text);
        if (clips.has(key)) playClip(key, r, viaVoice, done);
        else {
          current?.pause();
          viaVoice();
        }
      }),
    [baseRate, clips],
  );
  const speak = useCallback(
    (text: string, rate?: number) => {
      void speakAsync(text, rate);
    },
    [speakAsync],
  );

  const hasClips = clips.size > 0;
  return {
    ready,
    available: ready && (hasClips || voiceRef.current !== null),
    approximate: !hasClips && approximateVoice,
    speak,
    speakAsync,
  };
}
