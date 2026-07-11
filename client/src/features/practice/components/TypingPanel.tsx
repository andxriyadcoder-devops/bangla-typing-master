import ProgressBar from "../../../components/typing/ProgressBar";
import TypingText from "../../../components/typing/TypingText";
import HiddenInput from "../../../components/typing/HiddenInput";
import Keyboard from "../../../keyboard/Keyboard";

interface TypingPanelProps {
  text: string;
  input: string;
  setInput: (value: string) => void;
}

export default function TypingPanel({
  text,
  input,
  setInput,
}: TypingPanelProps) {
  return (
    <>
      <ProgressBar
        current={input.length}
        total={text.length}
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
          expected={text}
          typed={input}
        />
      </div>

      <HiddenInput
        value={input}
        onChange={setInput}
      />

      <Keyboard
        activeKey={input.slice(-1)}
      />
    </>
  );
}