"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { loadVoices, pickAfrikaansVoice, speakText, ttsSupported } from "./tts";

export interface Tts {
  /** Voice discovery finished (result may still be unavailable). */
  ready: boolean;
  /** An Afrikaans (or opted-in approximate) voice exists on this device. */
  available: boolean;
  /**
   * No Afrikaans voice here, so a Dutch one is standing in. Dutch is the
   * parent language: close enough to learn from, noticeably off on some
   * vowels. Far better than silence (iPhones ship no Afrikaans voice).
   */
  approximate: boolean;
  speak: (text: string, rate?: number) => void;
}

export function useTts(baseRate = 1): Tts {
  const [ready, setReady] = useState(false);
  const voiceRef = useRef<SpeechSynthesisVoice | null>(null);
  const [approximate, setApproximate] = useState(false);

  useEffect(() => {
    let cancelled = false;
    if (!ttsSupported()) {
      setReady(true);
      return;
    }
    loadVoices().then((voices) => {
      if (cancelled) return;
      const pick = pickAfrikaansVoice(voices, true);
      voiceRef.current = pick?.voice ?? null;
      setApproximate(pick?.approximate ?? false);
      setReady(true);
    });
    return () => {
      cancelled = true;
    };
  }, []);

  const speak = useCallback(
    (text: string, rate?: number) => {
      if (voiceRef.current) {
        speakText(text, voiceRef.current, rate ?? baseRate);
      }
    },
    [baseRate],
  );

  return {
    ready,
    available: ready && voiceRef.current !== null,
    approximate,
    speak,
  };
}
