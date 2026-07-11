import type { BijoyEntry } from "./vowels";

export const vowelSigns: BijoyEntry[] = [
  { char: "া", key: "KeyF", finger: "left-index", shift: false },
  { char: "ি", key: "KeyD", finger: "left-middle", shift: false },
  { char: "ী", key: "KeyD", finger: "left-middle", shift: true },
  { char: "ু", key: "KeyS", finger: "left-ring", shift: false },
  { char: "ূ", key: "KeyS", finger: "left-ring", shift: true },
  { char: "ৃ", key: "KeyR", finger: "left-index", shift: true },
  { char: "ে", key: "KeyQ", finger: "left-pinky", shift: false },
  { char: "ৈ", key: "KeyQ", finger: "left-pinky", shift: true },
  { char: "ো", key: "KeyG", finger: "left-index", shift: false },
  { char: "ৌ", key: "KeyG", finger: "left-index", shift: true },
];