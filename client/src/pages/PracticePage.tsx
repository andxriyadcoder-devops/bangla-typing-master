import { useMemo, useState } from "react";

import { compareText } from "../engine/matcher/compare";
import { calculateAccuracy } from "../engine/stats/calculate";

import useTypingTimer from "../hooks/useTypingTimer";
import useLesson from "../hooks/useLesson";

import { unlockLesson } from "../services/progressService";

import TestCompleted from "../components/typing/TestCompleted";

import PracticeHeader from "../features/practice/components/PracticeHeader";
import LessonSidebar from "../features/practice/components/LessonSidebar";
import TypingPanel from "../features/practice/components/TypingPanel";
import StatsPanel from "../features/practice/components/StatsPanel";

import { getExpectedKey } from "../keyboard/utils/getExpectedKey";
import { getExpectedFinger } from "../keyboard/utils/getExpectedFinger";
import { addXP } from "../services/xp/xpService";

export default function PracticePage() {
  const [input, setInput] = useState("");

  const {
    lesson,
    lessonId,
    setLessonId,
  } = useLesson();

  // Hooks সবসময় আগে
  const lessonText = lesson?.text ?? "";

  const seconds = useTypingTimer(input.length > 0);

  const result = useMemo(
    () => compareText(lessonText, input),
    [lessonText, input]
  );

  const accuracy = calculateAccuracy(
    result.correct,
    result.incorrect
  );

  const currentCharacter =
    lessonText[input.length] ?? "";

  const expectedKey =
    getExpectedKey(currentCharacter);

  const expectedFinger =
  getExpectedFinger(currentCharacter);

  const handleRestart = () => {
    setInput("");
  };

  const handleLessonChange = (id: number) => {
    setLessonId(id);
    setInput("");
  };

  const handleComplete = () => {
  if (!lesson) return;

  unlockLesson(lesson.id + 1);

  addXP(50);
};

  // Hooks-এর পরে Return
  if (!lesson) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-slate-950 text-white">
        Lesson not found.
      </div>
    );
  }

  return (
    <>
      <div className="min-h-screen bg-slate-950 text-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 px-6 py-24 lg:flex-row">

          <LessonSidebar
            lessonId={lessonId}
            onLessonChange={handleLessonChange}
          />

          <main className="flex-1">

            <PracticeHeader
              lesson={lesson}
            />

            <TypingPanel
              text={lessonText}
              input={input}
              setInput={setInput}
              expectedKey={expectedKey}
              expectedFinger={expectedFinger}
            />

            <StatsPanel
              seconds={seconds}
              accuracy={accuracy}
              characters={input.length}
              correct={result.correct}
              incorrect={result.incorrect}
              onRestart={handleRestart}
            />

          </main>

        </div>
      </div>

      <TestCompleted
        show={input.length >= lessonText.length}
        onRestart={() => {
          handleComplete();
          handleRestart();
        }}
      />
    </>
  );
}