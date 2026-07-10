interface ProgressBarProps {
  current: number;
  total: number;
}

export default function ProgressBar({
  current,
  total,
}: ProgressBarProps) {
  const percentage =
    total === 0 ? 0 : (current / total) * 100;

  return (
    <div className="mb-8">
      <div className="mb-2 flex justify-between text-sm text-slate-400">
        <span>Progress</span>
        <span>{Math.floor(percentage)}%</span>
      </div>

      <div className="h-3 overflow-hidden rounded-full bg-slate-800">
        <div
          className="h-full rounded-full bg-cyan-500 transition-all duration-300"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
}