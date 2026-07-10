import Cursor from "./Cursor";

interface TypingTextProps {
  expected: string;
  typed: string;
}

export default function TypingText({
  expected,
  typed,
}: TypingTextProps) {
  return (
    <div className="select-none text-3xl leading-relaxed tracking-wide">
      {expected.split("").map((char, index) => {
        let className = "text-slate-500";

        if (index < typed.length) {
          className =
            typed[index] === char
              ? "text-green-400"
              : "text-red-400";
        }

        return (
          <span key={index}>
            {index === typed.length && <Cursor />}

            <span className={className}>{char}</span>
          </span>
        );
      })}
    </div>
  );
}