import { useMemo, useState } from "react";
import TypingText from "../components/typing/TypingText";
import HiddenInput from "../components/typing/HiddenInput";
import StatsBar from "../components/typing/StatsBar";

import { compareText } from "../engine/matcher/compare";
import { calculateAccuracy } from "../engine/stats/calculate";

import useTypingTimer from "../hooks/useTypingTimer";

const sampleText =
  "আমি বাংলায় টাইপ করতে শিখছি। প্রতিদিন অনুশীলন করলে আমার গতি এবং নির্ভুলতা বৃদ্ধি পাবে।";

export default function PracticePage() {
  const [input, setInput] = useState("");

  const seconds = useTypingTimer(input.length > 0);

  const result = useMemo(
    () => compareText(sampleText, input),
    [input]
  );

  const accuracy = calculateAccuracy(
    result.correct,
    result.incorrect
  );

  return (
    <div className="min-h-screen bg-slate-950 px-6 py-24 text-white">
      <div className="mx-auto max-w-5xl">

        <h1 className="mb-10 text-center text-4xl font-bold">
          Bangla Typing Practice
        </h1>

        {/* Typing Area */}
        <div
          className="cursor-text rounded-xl border border-slate-700 bg-slate-900 p-6"
          onClick={() =>
            (
              document.querySelector("textarea") as HTMLTextAreaElement
            )?.focus()
          }
        >
          <TypingText
            expected={sampleText}
            typed={input}
          />
        </div>

        {/* Hidden Input */}
        <HiddenInput
          value={input}
          onChange={setInput}
        />

        {/* Stats */}
        <StatsBar
          seconds={seconds}
          accuracy={accuracy}
          characters={input.length}
        />

        {/* Detailed Statistics */}
        <div className="mt-8 grid grid-cols-3 gap-4">

          <div className="rounded-xl bg-slate-900 p-5 text-center">
            <h2 className="text-sm text-slate-400">
              Correct
            </h2>

            <p className="mt-2 text-3xl font-bold text-green-400">
              {result.correct}
            </p>
          </div>

          <div className="rounded-xl bg-slate-900 p-5 text-center">
            <h2 className="text-sm text-slate-400">
              Incorrect
            </h2>

            <p className="mt-2 text-3xl font-bold text-red-400">
              {result.incorrect}
            </p>
          </div>

          <div className="rounded-xl bg-slate-900 p-5 text-center">
            <h2 className="text-sm text-slate-400">
              Characters
            </h2>

            <p className="mt-2 text-3xl font-bold text-cyan-400">
              {input.length}
            </p>
          </div>

        </div>

      </div>
    </div>
  );
}