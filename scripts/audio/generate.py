#!/usr/bin/env python3
"""Pre-record every Afrikaans string in the course as an MP3.

    npx tsx scripts/audio/export-texts.ts > /tmp/texts.json
    python3 scripts/audio/generate.py /tmp/texts.json --provider azure
    python3 scripts/audio/generate.py /tmp/texts.json --provider mimic3 --model-dir <dir>

Writes public/audio/<key>.mp3 and public/audio/manifest.json (the list of
keys the app may play). Already-recorded keys are skipped, so it is safe to
re-run after adding content. Needs ffmpeg on PATH.

Providers
  azure   Microsoft neural voices af-ZA-AdriNeural / af-ZA-WillemNeural.
          Natural-sounding; licensed for commercial use. Set AZURE_SPEECH_KEY
          and AZURE_SPEECH_REGION. The whole course is ~200k characters,
          inside the free monthly allowance.
  mimic3  Open model af_ZA/google-nwu_low (CC BY-SA 4.0, see CREDITS.md),
          run locally through sherpa-onnx==1.12.40. Free and offline, but
          clearly synthetic.
"""
import argparse
import json
import os
import subprocess
import sys
import tempfile
import urllib.request
from xml.sax.saxutils import escape

OUT = os.path.join(os.path.dirname(__file__), "..", "..", "public", "audio")


def to_mp3(wav_path: str, mp3_path: str) -> None:
    subprocess.run(
        ["ffmpeg", "-y", "-loglevel", "error", "-i", wav_path,
         "-af", "silenceremove=start_periods=1:start_threshold=-50dB,areverse,"
                "silenceremove=start_periods=1:start_threshold=-50dB,areverse,apad=pad_dur=0.15",
         "-ac", "1", "-ar", "24000", "-b:a", "40k", mp3_path],
        check=True,
    )


class Mimic3:
    def __init__(self, model_dir: str, speaker: int):
        import sherpa_onnx  # pip install sherpa-onnx==1.12.40 soundfile

        m = os.path.join(model_dir, "")
        self.speaker = speaker
        self.tts = sherpa_onnx.OfflineTts(sherpa_onnx.OfflineTtsConfig(
            model=sherpa_onnx.OfflineTtsModelConfig(
                vits=sherpa_onnx.OfflineTtsVitsModelConfig(
                    model=m + "af_ZA-google-nwu_low.onnx", tokens=m + "tokens.txt",
                    data_dir=m + "espeak-ng-data", noise_scale=0.333,
                    noise_scale_w=0.333, length_scale=1.15),
                num_threads=4)))

    def wav(self, text: str, kind: str, path: str) -> None:
        import soundfile as sf

        a = self.tts.generate(text, sid=self.speaker, speed=1.0)
        sf.write(path, a.samples, a.sample_rate)


class Azure:
    """Azure neural voices. Several texts are sent per request, separated by
    long pauses, and the audio is cut apart at those pauses: the free tier
    allows only ~20 requests a minute, so one request per clip would take
    hours."""

    BATCH = 10
    BREAK_MS = 1800
    MIN_GAP_S = 1.2  # a silence this long can only be one of our breaks

    def __init__(self, voices):
        self.key = os.environ["AZURE_SPEECH_KEY"]
        self.region = os.environ["AZURE_SPEECH_REGION"]
        self.voices = voices
        self.last = 0.0

    def _request(self, ssml: str) -> bytes:
        import time
        import urllib.error

        for attempt in range(8):
            wait = 3.2 - (time.time() - self.last)  # stay under 20 requests/minute
            if wait > 0:
                time.sleep(wait)
            self.last = time.time()
            req = urllib.request.Request(
                f"https://{self.region}.tts.speech.microsoft.com/cognitiveservices/v1",
                data=ssml.encode("utf-8"),
                headers={
                    "Ocp-Apim-Subscription-Key": self.key,
                    "Content-Type": "application/ssml+xml",
                    "X-Microsoft-OutputFormat": "riff-24khz-16bit-mono-pcm",
                    "User-Agent": "course-audio-generator",
                },
            )
            try:
                with urllib.request.urlopen(req, timeout=120) as r:
                    return r.read()
            except urllib.error.HTTPError as e:
                if e.code in (429, 500, 502, 503):
                    time.sleep(15 * (attempt + 1))
                    continue
                raise
        raise RuntimeError("Azure kept refusing the request")

    def _ssml(self, voice: str, texts) -> str:
        gap = f'<break time="{self.BREAK_MS}ms"/>'
        body = gap.join(f"<s>{escape(t)}</s>" for t in texts)
        return (
            '<speak version="1.0" xml:lang="af-ZA">'
            f'<voice name="{voice}"><prosody rate="-8%">{body}</prosody></voice></speak>'
        )

    def _split(self, wav_bytes: bytes, n: int):
        """Cut one recording into n clips at the long silences, or None."""
        import io
        import wave

        import numpy as np

        with wave.open(io.BytesIO(wav_bytes)) as w:
            sr = w.getframerate()
            x = np.frombuffer(w.readframes(w.getnframes()), dtype=np.int16)
        loud = np.abs(x.astype(np.int32)) > 250
        idx = np.flatnonzero(loud)
        if len(idx) == 0:
            return None
        # runs of sound separated by gaps longer than MIN_GAP_S
        cuts = np.flatnonzero(np.diff(idx) > self.MIN_GAP_S * sr)
        starts = [idx[0]] + [idx[c + 1] for c in cuts]
        ends = [idx[c] for c in cuts] + [idx[-1]]
        if len(starts) != n:
            return None
        pad = int(0.08 * sr)
        return [(x[max(0, s - pad): e + pad], sr) for s, e in zip(starts, ends)]

    def record(self, items, write) -> None:
        """Record all items; `write(item, samples, sample_rate)` saves one."""
        groups = {v: [] for v in self.voices}
        n = 0
        for it in items:
            # Words always use the first voice; sentences alternate so
            # learners hear more than one speaker.
            v = self.voices[0] if it["kind"] == "word" else self.voices[n % len(self.voices)]
            n += it["kind"] != "word"
            groups[v].append(it)
        done = 0
        for voice, group in groups.items():
            for i in range(0, len(group), self.BATCH):
                batch = group[i: i + self.BATCH]
                try:
                    parts = self._split(
                        self._request(self._ssml(voice, [b["text"] for b in batch])), len(batch))
                    if parts is None:  # couldn't cut cleanly: one request each
                        parts = [self._split(self._request(self._ssml(voice, [b["text"]])), 1)[0]
                                 for b in batch]
                    for it, (samples, sr) in zip(batch, parts):
                        write(it, samples, sr)
                except Exception as e:  # keep going; a re-run picks up the gaps
                    print(f"FAILED batch starting {batch[0]['text']!r}: {e}", file=sys.stderr)
                done += len(batch)
                if done % 200 < self.BATCH:
                    print(f"  {done}/{len(items)}", file=sys.stderr, flush=True)


def main() -> None:
    ap = argparse.ArgumentParser()
    ap.add_argument("texts")
    ap.add_argument("--provider", choices=["azure", "mimic3"], required=True)
    ap.add_argument("--model-dir", help="mimic3: directory with the .onnx, tokens.txt, espeak-ng-data")
    ap.add_argument("--speaker", type=int, default=1, help="mimic3 speaker id (0-8)")
    ap.add_argument("--voices", default="af-ZA-AdriNeural,af-ZA-WillemNeural")
    ap.add_argument("--limit", type=int, default=0, help="only the first N missing clips")
    ap.add_argument("--out", default=OUT)
    args = ap.parse_args()

    items = json.load(open(args.texts, encoding="utf-8"))
    os.makedirs(args.out, exist_ok=True)
    provider = (
        Azure(args.voices.split(",")) if args.provider == "azure"
        else Mimic3(args.model_dir, args.speaker)
    )
    todo = [i for i in items if not os.path.exists(os.path.join(args.out, i["key"] + ".mp3"))]
    if args.limit:
        todo = todo[: args.limit]
    print(f"{len(items)} texts, {len(todo)} to record", file=sys.stderr)
    with tempfile.TemporaryDirectory() as tmp:
        wav = os.path.join(tmp, "a.wav")
        if args.provider == "azure":
            import soundfile as sf

            def write(item, samples, sr):
                sf.write(wav, samples, sr)
                to_mp3(wav, os.path.join(args.out, item["key"] + ".mp3"))

            provider.record(todo, write)
        else:
            for n, item in enumerate(todo, 1):
                try:
                    provider.wav(item["text"], item["kind"], wav)
                    to_mp3(wav, os.path.join(args.out, item["key"] + ".mp3"))
                except Exception as e:  # keep going; a re-run picks up the gaps
                    print(f"FAILED {item['text']!r}: {e}", file=sys.stderr)
                if n % 200 == 0:
                    print(f"  {n}/{len(todo)}", file=sys.stderr)

    wanted = {i["key"] for i in items}
    have = sorted(f[:-4] for f in os.listdir(args.out) if f.endswith(".mp3") and f[:-4] in wanted)
    json.dump(have, open(os.path.join(args.out, "manifest.json"), "w"))
    print(f"manifest: {len(have)} of {len(wanted)} clips", file=sys.stderr)


if __name__ == "__main__":
    main()
