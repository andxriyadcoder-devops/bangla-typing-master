import { bijoyOfficial } from "../mapping/bijoyOfficial";

export function getExpectedKey(character: string): string {
  const item = bijoyOfficial.find(
    (entry) => entry.char === character
  );

  return item?.key ?? "";
}