import { useKeyboardLayout } from "../../context/KeyboardLayoutContext";

export default function KeyboardLayoutSelector() {
  const { layout, setLayout } =
    useKeyboardLayout();

  return (
    <div className="mb-6 flex gap-3">
      {(["bijoy", "avro", "national"] as const).map(
        (item) => (
          <button
            key={item}
            onClick={() => setLayout(item)}
            className={`rounded-lg px-4 py-2 font-medium transition ${
              layout === item
                ? "bg-cyan-600 text-white"
                : "bg-slate-800 text-slate-300"
            }`}
          >
            {item.toUpperCase()}
          </button>
        )
      )}
    </div>
  );
}