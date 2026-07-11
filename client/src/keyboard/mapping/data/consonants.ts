import type { BijoyEntry } from "./vowels";

export const consonants: BijoyEntry[] = [
  // ক-বর্গ
  { char: "ক", key: "KeyH", finger: "right-index", shift: false },
  { char: "খ", key: "KeyH", finger: "right-index", shift: true },
  { char: "গ", key: "KeyJ", finger: "right-index", shift: false },
  { char: "ঘ", key: "KeyJ", finger: "right-index", shift: true },
  { char: "ঙ", key: "KeyZ", finger: "left-pinky", shift: false },

  // চ-বর্গ
  { char: "চ", key: "KeyK", finger: "right-middle", shift: false },
  { char: "ছ", key: "KeyK", finger: "right-middle", shift: true },
  { char: "জ", key: "KeyL", finger: "right-ring", shift: false },
  { char: "ঝ", key: "KeyL", finger: "right-ring", shift: true },
  { char: "ঞ", key: "KeyX", finger: "left-ring", shift: false },

  // ট-বর্গ
  { char: "ট", key: "KeyT", finger: "left-index", shift: false },
  { char: "ঠ", key: "KeyT", finger: "left-index", shift: true },
  { char: "ড", key: "KeyY", finger: "right-index", shift: false },
  { char: "ঢ", key: "KeyY", finger: "right-index", shift: true },
  { char: "ণ", key: "KeyN", finger: "right-index", shift: false },

  // ত-বর্গ
  { char: "ত", key: "KeyB", finger: "left-index", shift: false },
  { char: "থ", key: "KeyB", finger: "left-index", shift: true },
  { char: "দ", key: "KeyV", finger: "left-index", shift: false },
  { char: "ধ", key: "KeyV", finger: "left-index", shift: true },
  { char: "ন", key: "KeyM", finger: "right-index", shift: false },

  // প-বর্গ
  { char: "প", key: "KeyP", finger: "right-pinky", shift: false },
  { char: "ফ", key: "KeyP", finger: "right-pinky", shift: true },
  { char: "ব", key: "KeyC", finger: "left-middle", shift: false },
  { char: "ভ", key: "KeyC", finger: "left-middle", shift: true },
  { char: "ম", key: "KeyU", finger: "right-index", shift: false },

  // অন্যান্য
  { char: "য", key: "KeyI", finger: "right-middle", shift: false },
  { char: "র", key: "KeyR", finger: "left-index", shift: false },
  { char: "ল", key: "KeyO", finger: "right-ring", shift: false },
  { char: "শ", key: "KeyW", finger: "left-ring", shift: false },
  { char: "ষ", key: "KeyE", finger: "left-middle", shift: false },
  { char: "স", key: "KeyA", finger: "left-pinky", shift: true },
  { char: "হ", key: "KeyG", finger: "left-index", shift: false },
  { char: "ড়", key: "BracketLeft", finger: "right-pinky", shift: false },
  { char: "ঢ়", key: "BracketLeft", finger: "right-pinky", shift: true },
  { char: "য়", key: "Quote", finger: "right-pinky", shift: false },
  { char: "ৎ", key: "Backslash", finger: "right-pinky", shift: false },
  { char: "ং", key: "Comma", finger: "right-middle", shift: false },
  { char: "ঃ", key: "Period", finger: "right-ring", shift: false },
  { char: "ঁ", key: "Slash", finger: "right-pinky", shift: false },
];