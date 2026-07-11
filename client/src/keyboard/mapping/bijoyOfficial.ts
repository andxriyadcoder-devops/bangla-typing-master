export interface BijoyMapping {
  char: string;
  key: string;
  finger:
    | "left-pinky"
    | "left-ring"
    | "left-middle"
    | "left-index"
    | "right-index"
    | "right-middle"
    | "right-ring"
    | "right-pinky"
    | "thumb";
  shift: boolean;
}

export const bijoyOfficial: BijoyMapping[] = [
  // ===========================
  // স্বরবর্ণ
  // ===========================

  {
    char: "অ",
    key: "KeyF",
    finger: "left-index",
    shift: false,
  },
  {
    char: "আ",
    key: "KeyA",
    finger: "left-pinky",
    shift: false,
  },
  {
    char: "ই",
    key: "KeyD",
    finger: "left-middle",
    shift: false,
  },
  {
    char: "ঈ",
    key: "KeyD",
    finger: "left-middle",
    shift: true,
  },
  {
    char: "উ",
    key: "KeyS",
    finger: "left-ring",
    shift: false,
  },
  {
    char: "ঊ",
    key: "KeyS",
    finger: "left-ring",
    shift: true,
  },
  {
    char: "এ",
    key: "KeyQ",
    finger: "left-pinky",
    shift: false,
  },
  {
    char: "ঐ",
    key: "KeyQ",
    finger: "left-pinky",
    shift: true,
  },
  {
    char: "ও",
    key: "KeyG",
    finger: "left-index",
    shift: false,
  },
  {
    char: "ঔ",
    key: "KeyG",
    finger: "left-index",
    shift: true,
  },

  // ===========================
  // ব্যঞ্জনবর্ণ (Phase 1)
  // ===========================

  {
    char: "ক",
    key: "KeyH",
    finger: "right-index",
    shift: false,
  },
  {
    char: "খ",
    key: "KeyH",
    finger: "right-index",
    shift: true,
  },
  {
    char: "গ",
    key: "KeyJ",
    finger: "right-index",
    shift: false,
  },
  {
    char: "ঘ",
    key: "KeyJ",
    finger: "right-index",
    shift: true,
  },
  {
    char: "ঙ",
    key: "KeyZ",
    finger: "left-pinky",
    shift: false,
  },
  {
    char: "চ",
    key: "KeyK",
    finger: "right-middle",
    shift: false,
  },
  {
    char: "ছ",
    key: "KeyK",
    finger: "right-middle",
    shift: true,
  },
  {
    char: "জ",
    key: "KeyL",
    finger: "right-ring",
    shift: false,
  },
  {
    char: "ঝ",
    key: "KeyL",
    finger: "right-ring",
    shift: true,
  },
  {
    char: "ঞ",
    key: "KeyX",
    finger: "left-ring",
    shift: false,
  },
];