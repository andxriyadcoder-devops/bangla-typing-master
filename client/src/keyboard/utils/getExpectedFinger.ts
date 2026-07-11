import { bijoyOfficial } from "../mapping/bijoyOfficial";

export function getExpectedFinger(character: string) {
  const item = bijoyOfficial.find(
    (entry) => entry.char === character
  );

  return item?.finger ?? "";
}