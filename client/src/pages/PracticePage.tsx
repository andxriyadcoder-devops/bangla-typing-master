import { useMemo, useState } from "react";

import TypingText from "../components/typing/TypingText";
import HiddenInput from "../components/typing/HiddenInput";
import StatsBar from "../components/typing/StatsBar";
import ProgressBar from "../components/typing/ProgressBar";
import RestartButton from "../components/typing/RestartButton";
import TestCompleted from "../components/typing/TestCompleted";

import { compareText } from "../engine/matcher/compare";
import { calculateAccuracy } from "../engine/stats/calculate";
import useTypingTimer from "../hooks/useTypingTimer";
import useLesson from "../hooks/useLesson";

import LessonList from "../features/lessons/LessonList";

export default function PracticePage() {
  const [input, setInput] = useState("");

  const {
    lesson,
    lessonId,
    setLessonId,
  } = useLesson();

  // সব Hook সবসময় আগে কল হবে
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

  const handleRestart = () => {
    setInput("");
  };

  const handleLessonChange = (id: number) => {
    setLessonId(id);
    setInput("");
  };

  // সব Hook-এর পরে Return Check
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

          {/* Sidebar */}
          <aside className="w-full lg:w-80">
            <h2 className="mb-5 text-2xl font-bold">
              Lessons
            </h2>

            <LessonList
              activeLessonId={lessonId}
              onSelect={handleLessonChange}
            />
          </aside>

          {/* Main Content */}
          <main className="flex-1">

            <h1 className="mb-2 text-4xl font-bold">
              {lesson.title}
            </h1>

            <p className="mb-8 text-slate-400">
              {lesson.description}
            </p>

            <ProgressBar
              current={input.length}
              total={lesson.text.length}
            />

            <div
              className="mt-6 cursor-text rounded-2xl border border-slate-700 bg-slate-900 p-8"
              onClick={() =>
                (
                  document.querySelector(
                    "textarea"
                  ) as HTMLTextAreaElement
                )?.focus()
              }
            >
              <TypingText
                expected={lesson.text}
                typed={input}
              />
            </div>

            <HiddenInput
              value={input}
              onChange={setInput}
            />

            <StatsBar
              seconds={seconds}
              accuracy={accuracy}
              characters={input.length}
            />

            <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3">

              <div className="rounded-xl bg-slate-900 p-5 text-center">
                <h3 className="text-sm text-slate-400">
                  Correct
                </h3>

                <p className="mt-2 text-3xl font-bold text-green-400">
                  {result.correct}
                </p>
              </div>

              <div className="rounded-xl bg-slate-900 p-5 text-center">
                <h3 className="text-sm text-slate-400">
                  Incorrect
                </h3>

                <p className="mt-2 text-3xl font-bold text-red-400">
                  {result.incorrect}
                </p>
              </div>

              <div className="rounded-xl bg-slate-900 p-5 text-center">
                <h3 className="text-sm text-slate-400">
                  Characters
                </h3>

                <p className="mt-2 text-3xl font-bold text-cyan-400">
                  {input.length}
                </p>
              </div>

            </div>

            <RestartButton
              onRestart={handleRestart}
            />

          </main>
        </div>
      </div>

      <TestCompleted
        show={input.length >= lesson.text.length}
        onRestart={handleRestart}
      />
    </>
  );
}