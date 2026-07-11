import type { Lesson } from "../../types/lesson";

interface LessonCardProps {
  lesson: Lesson;
  active: boolean;
  locked: boolean;
  onClick: () => void;
}

export default function LessonCard({
  lesson,
  active,
  locked,
  onClick,
}: LessonCardProps) {
  return (
    <button
      onClick={onClick}
      disabled={locked}
      className={`w-full rounded-xl border p-4 text-left transition ${
        active
          ? "border-cyan-500 bg-cyan-500/10"
          : "border-slate-700 bg-slate-900"
      } ${
        locked
          ? "cursor-not-allowed opacity-50"
          : "hover:border-cyan-400"
      }`}
    >
      <div className="flex items-center justify-between">
        <h3 className="font-semibold">
          {lesson.title}
        </h3>

        {locked ? (
          <span className="text-xl">🔒</span>
        ) : (
          <span className="text-xl">✅</span>
        )}
      </div>

      <p className="mt-2 text-sm text-slate-400">
        {lesson.description}
      </p>
    </button>
  );
}