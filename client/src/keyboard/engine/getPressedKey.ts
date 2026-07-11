import type { PressedKey } from "../types/keyboard";

export function getPressedKey(
  event: KeyboardEvent
): PressedKey {
  return {
    code: event.code,
    key: event.key,
  };
}