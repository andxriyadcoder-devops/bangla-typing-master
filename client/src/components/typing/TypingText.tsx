interface TypingTextProps {
  expected: string;
  typed: string;
}

export default function TypingText({
  expected,
  typed,
}: TypingTextProps) {
  return (
    <div className="rounded-xl bg-slate-900 p-6 text-2xl leading-10">
      {expected.split("").map((char, index) => {
        let className = "text-slate-500";

        if (index < typed.length) {
          className =
            typed[index] === char
              ? "text-green-400"
              : "text-red-400";
        } else if (index === typed.length) {
          className = "bg-cyan-500 text-black rounded";
        }

        return (
          <span key={index} className={className}>
            {char}
          </span>
        );
      })}
    </div>
  );
}