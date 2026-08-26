"use client";

import { useRouter } from "next/navigation";
import { completeReader } from "@/app/actions/review";
import ReaderView from "@/components/session/ReaderView";
import type { ReaderItem } from "@/lib/session/types";
import { useTts } from "@/lib/speech/useTts";

export default function ReaderPage({ item }: { item: ReaderItem }) {
  const router = useRouter();
  const tts = useTts();
  const started = Date.now();

  return (
    <ReaderView
      item={item}
      tts={tts}
      doneLabel={item.alreadyDone ? "Done (read again anytime)" : "Finish reading"}
      onDone={() => {
        completeReader(item.unitId, Date.now() - started).catch(() => {});
        router.push(`/library/${item.unitId}`);
        router.refresh();
      }}
    />
  );
}
