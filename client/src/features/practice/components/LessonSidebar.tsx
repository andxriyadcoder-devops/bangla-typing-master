import LessonList from "../../lessons/LessonList";

interface LessonSidebarProps {
  lessonId: number;
  onLessonChange: (id: number) => void;
}

export default function LessonSidebar({
  lessonId,
  onLessonChange,
}: LessonSidebarProps) {
  return (
    <aside className="w-full lg:w-80">
      <h2 className="mb-5 text-2xl font-bold">
        Lessons
      </h2>

      <LessonList
        activeLessonId={lessonId}
        onSelect={onLessonChange}
      />
    </aside>
  );
}