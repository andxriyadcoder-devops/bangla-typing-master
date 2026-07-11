import KeyboardLayoutSelector from "../../../components/layout/KeyboardLayoutSelector";
import XPBadge from "../../../components/xp/XPBadge";

import type { Lesson } from "../../../types/lesson";

interface PracticeHeaderProps {
  lesson: Lesson;
}

export default function PracticeHeader({
  lesson,
}: PracticeHeaderProps) {
  return (
    <div className="mb-8">

      <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-start md:justify-between">

        <div>

          <h1 className="text-4xl font-bold">
            {lesson.title}
          </h1>

          <p className="mt-2 text-slate-400">
            {lesson.description}
          </p>

          <div className="mt-4">
            <KeyboardLayoutSelector />
          </div>

        </div>

        <XPBadge />

      </div>

    </div>
  );
}