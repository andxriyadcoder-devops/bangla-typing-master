export type Hand = "left" | "right";

export type Finger =
  | "left-pinky"
  | "left-ring"
  | "left-middle"
  | "left-index"
  | "left-thumb"
  | "right-thumb"
  | "right-index"
  | "right-middle"
  | "right-ring"
  | "right-pinky";

export interface KeyboardKeyData {
  id: string;

  code: string;

  primary: string;

  shift?: string;

  bangla?: string;

  width?: number;

  finger: Finger;

  hand: Hand;

  isModifier?: boolean;
}