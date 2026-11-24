// Memory hooks for vocab, keyed by vocab id. Kept apart from the unit files
// so hooks can be added, reworded or removed without touching content ids.
import type { HookMap, WordHook } from "./types";
import { hooks as u01 } from "./u01";
import { hooks as u02 } from "./u02";
import { hooks as u03 } from "./u03";
import { hooks as u04 } from "./u04";
import { hooks as u05 } from "./u05";
import { hooks as u06 } from "./u06";
import { hooks as u07 } from "./u07";
import { hooks as u08 } from "./u08";
import { hooks as u09 } from "./u09";
import { hooks as u10 } from "./u10";
import { hooks as u11 } from "./u11";
import { hooks as u12 } from "./u12";
import { hooks as u13 } from "./u13";
import { hooks as u14 } from "./u14";
import { hooks as u15 } from "./u15";
import { hooks as u16 } from "./u16";
import { hooks as u17 } from "./u17";
import { hooks as u18 } from "./u18";
import { hooks as u19 } from "./u19";
import { hooks as u20 } from "./u20";

export type { WordHook } from "./types";

export const allHooks: HookMap = {
  ...u01, ...u02, ...u03, ...u04, ...u05, ...u06, ...u07, ...u08, ...u09,
  ...u10, ...u11, ...u12, ...u13, ...u14, ...u15, ...u16, ...u17, ...u18,
  ...u19, ...u20,
};

export function hookFor(vocabId: string): WordHook | undefined {
  return allHooks[vocabId];
}
