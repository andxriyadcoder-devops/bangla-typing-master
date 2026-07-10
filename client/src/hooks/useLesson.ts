import { useState } from "react";
import { getLesson } from "../services/lessonService";

export default function useLesson() {
  const [lessonId, setLessonId] = useState(1);

  const lesson = getLesson(lessonId);

  return {
    lesson,
    lessonId,
    setLessonId,
  };
}