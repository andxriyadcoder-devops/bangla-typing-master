import { bijoyOfficial } from "../mapping/bijoyOfficial";

export function isShiftRequired(character: string) {
  const item = bijoyOfficial.find(
    (entry) => entry.char === character
  );

  return item?.shift ?? false;
}