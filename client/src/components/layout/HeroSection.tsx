import { motion } from "framer-motion";
import Button from "../ui/Button";

export default function HeroSection() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-slate-950 px-6 text-white">
      {/* Background Glow */}
      <div className="absolute -top-40 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-blue-600/20 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-5xl text-center">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-5xl font-extrabold leading-tight md:text-7xl"
        >
          Master Bangla Typing
          <span className="block bg-linear-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Bijoy • Avro • National
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mx-auto mt-8 max-w-2xl text-lg text-slate-400 md:text-xl"
        >
          Learn faster. Practice smarter. Track your progress with AI-powered
          insights.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-10 flex flex-wrap justify-center gap-4"
        >
          <Button>Start Learning</Button>

          <Button variant="outline">Explore Features</Button>
        </motion.div>
      </div>
    </section>
  );
}