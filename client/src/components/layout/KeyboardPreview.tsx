const layouts = [
  {
    title: "Bijoy",
    color: "border-cyan-500",
  },
  {
    title: "Avro Unicode",
    color: "border-green-500",
  },
  {
    title: "National",
    color: "border-orange-500",
  },
];

export default function KeyboardPreview() {
  return (
    <section className="bg-slate-900 py-24 text-white">
      <div className="mx-auto max-w-7xl px-6">

        <h2 className="mb-4 text-center text-4xl font-bold">
          Keyboard Layout Support
        </h2>

        <p className="mb-14 text-center text-slate-400">
          Switch between Bangla keyboard layouts with one click.
        </p>

        <div className="grid gap-8 md:grid-cols-3">
          {layouts.map((layout) => (
            <div
              key={layout.title}
              className={`rounded-2xl border-2 ${layout.color} bg-slate-950 p-8`}
            >
              <h3 className="mb-6 text-2xl font-bold">
                {layout.title}
              </h3>

              <div className="grid grid-cols-10 gap-2">
                {Array.from({ length: 40 }).map((_, i) => (
                  <div
                    key={i}
                    className="h-8 rounded bg-slate-800"
                  />
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}