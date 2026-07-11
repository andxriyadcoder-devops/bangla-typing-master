import LessonCard from "./LessonCard";
import { getAllLessons } from "../../services/lessonService";
import { getUnlockedLesson } from "../../services/progressService";

interface Props {
  activeLessonId: number;
  onSelect: (id: number) => void;
}

export default function LessonList({
  activeLessonId,
  onSelect,
}: Props) {
  const lessons = getAllLessons();
  const unlockedLesson = getUnlockedLesson();

  return (
    <div className="space-y-4">
      {lessons.map((lesson) => (
        <LessonCard
          key={lesson.id}
          lesson={lesson}
          active={lesson.id === activeLessonId}
          locked={lesson.id > unlockedLesson}
          onClick={() => {
            if (lesson.id <= unlockedLesson) {
              onSelect(lesson.id);
            }
          }}
        />
      ))}
    </div>
  );
}