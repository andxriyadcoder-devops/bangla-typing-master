import { Keyboard, Trophy, Brain, BarChart3 } from "lucide-react";

const features = [
  {
    icon: Keyboard,
    title: "3 Keyboard Layouts",
    description: "Bijoy, Avro এবং National Keyboard একসাথে।",
  },
  {
    icon: Trophy,
    title: "Typing Tests",
    description: "Practice, Exam ও Speed Challenge Mode।",
  },
  {
    icon: Brain,
    title: "AI Coach",
    description: "ভুল বিশ্লেষণ করে উন্নতির পরামর্শ দেবে।",
  },
  {
    icon: BarChart3,
    title: "Analytics",
    description: "WPM, Accuracy, Progress Graph এবং Streak।",
  },
];

export default function FeaturesSection() {
  return (
    <section className="bg-slate-950 py-24 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="mb-14 text-center text-4xl font-bold">
          Why Choose Bangla Typing Master?
        </h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="rounded-2xl border border-slate-800 bg-slate-900 p-8 transition hover:-translate-y-2 hover:border-cyan-500"
              >
                <Icon className="mb-5 h-10 w-10 text-cyan-400" />

                <h3 className="mb-3 text-xl font-semibold">
                  {feature.title}
                </h3>

                <p className="text-slate-400">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}