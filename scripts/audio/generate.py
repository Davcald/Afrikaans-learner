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
         "-af", "silenceremove=start_periods=1:start_threshold=-50dB,apad=pad_dur=0.15",
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
    def __init__(self, voices):
        self.key = os.environ["AZURE_SPEECH_KEY"]
        self.region = os.environ["AZURE_SPEECH_REGION"]
        self.voices = voices
        self.n = 0

    def wav(self, text: str, kind: str, path: str) -> None:
        # Words always use the first voice; sentences alternate so learners
        # hear more than one speaker.
        voice = self.voices[0] if kind == "word" else self.voices[self.n % len(self.voices)]
        self.n += 1
        ssml = (
            '<speak version="1.0" xml:lang="af-ZA">'
            f'<voice name="{voice}"><prosody rate="-8%">{escape(text)}</prosody></voice></speak>'
        )
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
        with urllib.request.urlopen(req, timeout=60) as r, open(path, "wb") as f:
            f.write(r.read())


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
