import Key from "./Key";
import { bijoyLayout } from "./layouts/bijoy";
import { getActiveKey } from "./engine/getActiveKey";

interface KeyboardProps {
  activeKey?: string;
}

export default function Keyboard({
  activeKey = "",
}: KeyboardProps) {
  const highlightedKey = getActiveKey(activeKey);

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
                active={
                  key.id.toLowerCase() ===
                  highlightedKey.toLowerCase()
                }
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}