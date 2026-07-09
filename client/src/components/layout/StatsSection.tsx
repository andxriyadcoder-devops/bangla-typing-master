const stats = [
  { value: "50+", label: "Typing Lessons" },
  { value: "3", label: "Keyboard Layouts" },
  { value: "99%", label: "Accuracy Tracking" },
  { value: "AI", label: "Typing Coach" },
];

export default function StatsSection() {
  return (
    <section className="bg-slate-900 py-20 text-white">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-6 md:grid-cols-4">
        {stats.map((item) => (
          <div
            key={item.label}
            className="rounded-2xl border border-slate-800 bg-slate-950 p-8 text-center"
          >
            <h2 className="text-4xl font-bold text-cyan-400">
              {item.value}
            </h2>

            <p className="mt-2 text-slate-400">
              {item.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}