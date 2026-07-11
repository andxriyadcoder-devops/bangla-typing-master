interface KeyProps {
  label: string;
  active?: boolean;
  expected?: boolean;
}

export default function Key({
  label,
  active = false,
  expected = false,
}: KeyProps) {
  let className =
    "border-slate-700 bg-slate-900 text-slate-300";

  // Expected Key (Yellow)
  if (expected) {
    className =
      "border-yellow-400 bg-yellow-500 text-black shadow-lg shadow-yellow-500/40";
  }

  // Physical Key (Cyan)
  if (active) {
    className =
      "border-cyan-400 bg-cyan-500 text-white shadow-lg shadow-cyan-500/40";
  }

  return (
    <div
      className={`flex h-12 w-12 items-center justify-center rounded-lg border text-lg font-semibold transition-all duration-150 ${className}`}
    >
      {label}
    </div>
  );
}