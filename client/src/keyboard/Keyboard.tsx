import Key from "./Key";
import { bijoyLayout } from "./layouts/bijoy";

interface KeyboardProps {
  activeKey?: string;
}

export default function Keyboard({
  activeKey = "",
}: KeyboardProps) {
  return (
    <div className="mt-10 rounded-2xl border border-slate-800 bg-slate-950 p-6">
      <div className="space-y-3">
        {bijoyLayout.map((row, rowIndex) => (
          <div
            key={rowIndex}
            className="flex justify-center gap-2"
          >
            {row.map((key) => (
              <Key
                key={key.id}
                label={key.label}
                active={key.id === activeKey.toLowerCase()}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}