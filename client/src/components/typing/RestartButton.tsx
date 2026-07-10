interface RestartButtonProps {
  onRestart: () => void;
}

export default function RestartButton({
  onRestart,
}: RestartButtonProps) {
  return (
    <div className="mt-8 flex justify-center">
      <button
        onClick={onRestart}
        className="rounded-lg bg-cyan-600 px-6 py-3 font-semibold transition hover:bg-cyan-500"
      >
        Restart Test
      </button>
    </div>
  );
}