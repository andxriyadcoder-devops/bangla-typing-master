import {
  createContext,
  useContext,
  useState,
  type ReactNode,
} from "react";

export type KeyboardLayout =
  | "bijoy"
  | "avro"
  | "national";

interface KeyboardLayoutContextType {
  layout: KeyboardLayout;
  setLayout: (layout: KeyboardLayout) => void;
}

const KeyboardLayoutContext =
  createContext<KeyboardLayoutContextType | null>(
    null
  );

export function KeyboardLayoutProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [layout, setLayout] =
    useState<KeyboardLayout>("bijoy");

  return (
    <KeyboardLayoutContext.Provider
      value={{ layout, setLayout }}
    >
      {children}
    </KeyboardLayoutContext.Provider>
  );
}

export function useKeyboardLayout() {
  const context = useContext(
    KeyboardLayoutContext
  );

  if (!context) {
    throw new Error(
      "useKeyboardLayout must be used inside KeyboardLayoutProvider"
    );
  }

  return context;
}