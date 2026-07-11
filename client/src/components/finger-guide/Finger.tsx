interface FingerProps {
  name: string;
  active?: boolean;
}

export default function Finger({
  name,
  active = false,
}: FingerProps) {
  return (
    <div
      className={`rounded-lg border px-4 py-3 text-center font-medium transition-all duration-200 ${
        active
          ? "border-cyan-400 bg-cyan-500 text-white shadow-lg shadow-cyan-500/40"
          : "border-slate-700 bg-slate-900 text-slate-300"
      }`}
    >
      {name}
    </div>
  );
}