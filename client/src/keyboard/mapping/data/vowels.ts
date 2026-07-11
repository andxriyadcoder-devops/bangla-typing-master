export interface BijoyEntry {
  char: string;
  key: string;
  finger: string;
  shift: boolean;
}

export const vowels: BijoyEntry[] = [
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
];