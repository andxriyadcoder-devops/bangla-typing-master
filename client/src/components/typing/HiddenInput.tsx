import { useEffect, useRef } from "react";

interface HiddenInputProps {
  value: string;
  onChange: (value: string) => void;
}

export default function HiddenInput({
  value,
  onChange,
}: HiddenInputProps) {
  const inputRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <textarea
      ref={inputRef}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="absolute opacity-0 pointer-events-none"
      autoFocus
    />
  );
}