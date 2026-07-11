import { useEffect, useState } from "react";
import { getPressedKey } from "../engine/getPressedKey";

export default function useKeyboardHighlight() {
  const [activeKey, setActiveKey] = useState("");

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      const pressed = getPressedKey(event);
      setActiveKey(pressed.code);
    }

    function handleKeyUp() {
      setActiveKey("");
    }

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, []);

  return activeKey;
}