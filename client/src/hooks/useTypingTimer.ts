import { useEffect, useState } from "react";

export default function useTypingTimer(start: boolean) {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    if (!start) return;

    const interval = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [start]);

  return seconds;
}