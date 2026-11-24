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
import { hooks as u21 } from "./u21";
import { hooks as u22 } from "./u22";
import { hooks as u23 } from "./u23";
import { hooks as u24 } from "./u24";
import { hooks as u25 } from "./u25";
import { hooks as u26 } from "./u26";
import { hooks as u27 } from "./u27";
import { hooks as u28 } from "./u28";
import { hooks as u29 } from "./u29";
import { hooks as u30 } from "./u30";
import { hooks as u31 } from "./u31";
import { hooks as u32 } from "./u32";
import { hooks as u33 } from "./u33";
import { hooks as u34 } from "./u34";
import { hooks as u35 } from "./u35";
import { hooks as u36 } from "./u36";
import { hooks as u37 } from "./u37";
import { hooks as u38 } from "./u38";
import { hooks as u39 } from "./u39";
import { hooks as u40 } from "./u40";

export type { WordHook } from "./types";

export const allHooks: HookMap = {
  ...u01, ...u02, ...u03, ...u04, ...u05, ...u06, ...u07, ...u08, ...u09,
  ...u10, ...u11, ...u12, ...u13, ...u14, ...u15, ...u16, ...u17, ...u18,
  ...u19, ...u20, ...u21, ...u22, ...u23, ...u24, ...u25, ...u26, ...u27,
  ...u28, ...u29, ...u30, ...u31, ...u32, ...u33, ...u34, ...u35, ...u36,
  ...u37, ...u38, ...u39, ...u40,
};

export function hookFor(vocabId: string): WordHook | undefined {
  return allHooks[vocabId];
}
