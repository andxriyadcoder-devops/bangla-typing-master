import StatsBar from "../../../components/typing/StatsBar";
import RestartButton from "../../../components/typing/RestartButton";

interface StatsPanelProps {
  seconds: number;
  accuracy: number;
  characters: number;
  correct: number;
  incorrect: number;
  onRestart: () => void;
}

export default function StatsPanel({
  seconds,
  accuracy,
  characters,
  correct,
  incorrect,
  onRestart,
}: StatsPanelProps) {
  return (
    <>
      <StatsBar
        seconds={seconds}
        accuracy={accuracy}
        characters={characters}
      />

      <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3">

        <div className="rounded-xl bg-slate-900 p-5 text-center">
          <h3 className="text-sm text-slate-400">
            Correct
          </h3>

          <p className="mt-2 text-3xl font-bold text-green-400">
            {correct}
          </p>
        </div>

        <div className="rounded-xl bg-slate-900 p-5 text-center">
          <h3 className="text-sm text-slate-400">
            Incorrect
          </h3>

          <p className="mt-2 text-3xl font-bold text-red-400">
            {incorrect}
          </p>
        </div>

        <div className="rounded-xl bg-slate-900 p-5 text-center">
          <h3 className="text-sm text-slate-400">
            Characters
          </h3>

          <p className="mt-2 text-3xl font-bold text-cyan-400">
            {characters}
          </p>
        </div>

      </div>

      <RestartButton
        onRestart={onRestart}
      />
    </>
  );
}