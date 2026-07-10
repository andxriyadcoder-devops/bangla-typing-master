import LessonCard from "./LessonCard";
import { getAllLessons } from "../../services/lessonService";

interface Props {
  activeLessonId: number;
  onSelect: (id: number) => void;
}

export default function LessonList({
  activeLessonId,
  onSelect,
}: Props) {
  const lessons = getAllLessons();

  return (
    <div className="space-y-4">
      {lessons.map((lesson) => (
        <LessonCard
          key={lesson.id}
          lesson={lesson}
          active={lesson.id === activeLessonId}
          onClick={() => onSelect(lesson.id)}
        />
      ))}
    </div>
  );
}