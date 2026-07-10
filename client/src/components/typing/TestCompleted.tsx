interface TestCompletedProps {
  show: boolean;
  onRestart: () => void;
}

export default function TestCompleted({
  show,
  onRestart,
}: TestCompletedProps) {
  if (!show) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/70">
      <div className="w-[420px] rounded-2xl bg-slate-900 p-8 text-center text-white">

        <h2 className="mb-4 text-3xl font-bold">
          🎉 Test Completed
        </h2>

        <p className="mb-8 text-slate-400">
          খুব ভালো! তুমি পুরো অনুচ্ছেদটি শেষ করেছ।
        </p>

        <button
          onClick={onRestart}
          className="rounded-xl bg-cyan-600 px-6 py-3 font-semibold hover:bg-cyan-500"
        >
          Start Again
        </button>

      </div>
    </div>
  );
}