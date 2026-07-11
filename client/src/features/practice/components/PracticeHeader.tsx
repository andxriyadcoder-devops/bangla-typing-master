import KeyboardLayoutSelector from "../../../components/layout/KeyboardLayoutSelector";
import type { Lesson } from "../../../types/lesson";

interface PracticeHeaderProps {
  lesson: Lesson;
}

export default function PracticeHeader({
  lesson,
}: PracticeHeaderProps) {
  return (
    <>
      <h1 className="mb-2 text-4xl font-bold">
        {lesson.title}
      </h1>

      <KeyboardLayoutSelector />

      <p className="mb-8 text-slate-400">
        {lesson.description}
      </p>
    </>
  );
}