interface KeyProps {
  label: string;
  active?: boolean;
}

export default function Key({
  label,
  active = false,
}: KeyProps) {
  return (
    <div
      className={`flex h-12 w-12 items-center justify-center rounded-lg border text-lg font-semibold transition
      ${
        active
          ? "border-cyan-400 bg-cyan-500 text-white"
          : "border-slate-700 bg-slate-900 text-slate-300"
      }`}
    >
      {label}
    </div>
  );
}