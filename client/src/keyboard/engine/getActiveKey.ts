import { bijoyMap } from "../layouts/bijoyMap";

export function getActiveKey(character: string): string {
  if (!character) {
    return "";
  }

  return bijoyMap[character] ?? "";
}