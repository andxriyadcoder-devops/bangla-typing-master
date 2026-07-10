interface StatsBarProps {
  seconds: number;
  accuracy: number;
  characters: number;
}

export default function StatsBar({
  seconds,
  accuracy,
  characters,
}: StatsBarProps) {
  const minutes = seconds / 60;

  const wpm =
    minutes > 0
      ? Math.round((characters / 5) / minutes)
      : 0;

  return (
    <div className="mt-8 grid grid-cols-3 gap-4">

      <div className="rounded-xl bg-slate-900 p-5 text-center">
        <h3 className="text-slate-400">Time</h3>

        <p className="mt-2 text-3xl font-bold">
          {seconds}s
        </p>
      </div>

      <div className="rounded-xl bg-slate-900 p-5 text-center">
        <h3 className="text-slate-400">WPM</h3>

        <p className="mt-2 text-3xl font-bold text-cyan-400">
          {wpm}
        </p>
      </div>

      <div className="rounded-xl bg-slate-900 p-5 text-center">
        <h3 className="text-slate-400">Accuracy</h3>

        <p className="mt-2 text-3xl font-bold text-green-400">
          {accuracy}%
        </p>
      </div>

    </div>
  );
}