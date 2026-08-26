"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { loadVoices, pickAfrikaansVoice, speakText, ttsSupported } from "./tts";

export interface Tts {
  /** Voice discovery finished (result may still be unavailable). */
  ready: boolean;
  /** An Afrikaans (or opted-in approximate) voice exists on this device. */
  available: boolean;
  speak: (text: string, rate?: number) => void;
}

export function useTts(baseRate = 1): Tts {
  const [ready, setReady] = useState(false);
  const voiceRef = useRef<SpeechSynthesisVoice | null>(null);

  useEffect(() => {
    let cancelled = false;
    if (!ttsSupported()) {
      setReady(true);
      return;
    }
    loadVoices().then((voices) => {
      if (cancelled) return;
      voiceRef.current = pickAfrikaansVoice(voices)?.voice ?? null;
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

  return { ready, available: ready && voiceRef.current !== null, speak };
}
