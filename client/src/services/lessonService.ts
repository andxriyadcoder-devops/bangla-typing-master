import beginner from "../data/lessons/beginner.json";
import intermediate from "../data/lessons/intermediate.json";
import advanced from "../data/lessons/advanced.json";

import type { Lesson } from "../types/lesson";

const lessons: Lesson[] = [
  ...beginner,
  ...intermediate,
  ...advanced,
];

export function getAllLessons(): Lesson[] {
  return lessons;
}

export function getLesson(id: number) {
  return lessons.find((lesson) => lesson.id === id);
}