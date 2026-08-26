import "server-only";

import {
  buildGlossaryUpTo,
  mergedDialogueGlosses,
  resolveGloss,
  tokenizeLine,
  units,
} from "@/content";
import type { Unit } from "@/content/types";
import type { ReaderItem } from "./types";

/** Server-side reader payload: every token pre-resolved to its gloss. */
export function buildReader(unit: Unit, alreadyDone: boolean): ReaderItem {
  const glossary = buildGlossaryUpTo(units, unit.id);
  const dialogueGlosses = mergedDialogueGlosses(unit.dialogue);
  return {
    kind: "reader",
    unitId: unit.id,
    title: unit.dialogue.title,
    titleEn: unit.dialogue.titleEn,
    lines: unit.dialogue.lines.map((line) => ({
      speaker: line.speaker,
      af: line.af,
      en: line.en,
      tokens: tokenizeLine(line.af).map((t) => ({
        t,
        g: resolveGloss(t, dialogueGlosses, glossary) ?? undefined,
      })),
    })),
    questions: unit.dialogue.questions,
    alreadyDone,
  };
}
