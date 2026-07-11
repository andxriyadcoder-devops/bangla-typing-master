import Key from "./Key";

import { bijoyLayout } from "./layouts/bijoy";
import { avroLayout } from "./layouts/avro";
import { nationalLayout } from "./layouts/national";

import { useKeyboardLayout } from "../context/KeyboardLayoutContext";
import useKeyboardHighlight from "./hooks/useKeyboardHighlight";

interface KeyboardProps {
  expectedKey: string;
}

export default function Keyboard({
  expectedKey,
}: KeyboardProps) {
  const { layout } = useKeyboardLayout();

  const activeKey = useKeyboardHighlight();

  const keyboardLayout =
    layout === "bijoy"
      ? bijoyLayout
      : layout === "avro"
      ? avroLayout
      : nationalLayout;

  return (
    <div className="mt-10 rounded-2xl border border-slate-800 bg-slate-950 p-6">
      <div className="space-y-3">
        {keyboardLayout.map((row, rowIndex) => (
          <div
            key={rowIndex}
            className="flex justify-center gap-2"
          >
            {row.map((key) => (
              <Key
                key={key.id}
                label={key.label}
                active={key.id === activeKey}
                expected={key.id === expectedKey}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}