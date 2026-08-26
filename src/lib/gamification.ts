import type { Grade } from "ts-fsrs";

// XP rules. "Again" still earns 1 XP — the honest cost of failing a card is
// the shorter interval, and punishing XP would teach users to lie to FSRS.
export const XP = {
  review: { 1: 1, 2: 1, 3: 2, 4: 2 } as Record<Grade, number>,
  newCard: 5,
  grammar: 15,
  reader: 20,
  shadow: 10,
  goalBonus: 25,
} as const;

export const STREAK_MILESTONES: Record<number, number> = {
  7: 50,
  30: 150,
  100: 500,
};

// Triangular XP curve: level n needs 100·n(n-1)/2 total XP
// (L2 at 100, L3 at 300, L4 at 600, …).
export function levelForXp(totalXp: number): number {
  return Math.floor((Math.sqrt(1 + (8 * totalXp) / 100) + 1) / 2);
}

export function xpForLevel(level: number): number {
  return (100 * level * (level - 1)) / 2;
}

const RANKS: [number, string][] = [
  [1, "Nuweling"], // newcomer
  [3, "Grondlegger"], // foundation-layer
  [5, "Padstapper"], // road-walker
  [8, "Gespreksmaat"], // conversation partner
  [12, "Taalvriend"], // language friend
  [16, "Storieverteller"], // storyteller
  [20, "Vlot"], // fluent
];

export function rankForLevel(level: number): string {
  let rank = RANKS[0][1];
  for (const [min, name] of RANKS) {
    if (level >= min) rank = name;
  }
  return rank;
}
