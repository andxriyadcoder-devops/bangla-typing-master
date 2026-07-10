import type { Lesson } from "../../types/lesson";

interface LessonCardProps {
  lesson: Lesson;
  active: boolean;
  onClick: () => void;
}

export default function LessonCard({
  lesson,
  active,
  onClick,
}: LessonCardProps) {
  return (
    <button
      onClick={onClick}
      className={`w-full rounded-xl p-4 text-left transition ${
        active
          ? "bg-cyan-600 text-white"
          : "bg-slate-800 text-slate-300 hover:bg-slate-700"
      }`}
    >
      <h3 className="font-semibold">{lesson.title}</h3>

      <p className="mt-1 text-sm opacity-80">
        {lesson.description}
      </p>

      <span className="mt-3 inline-block rounded bg-slate-900 px-2 py-1 text-xs">
        {lesson.difficulty}
      </span>
    </button>
  );
}