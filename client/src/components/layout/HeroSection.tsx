import { motion } from "framer-motion";
import Button from "../ui/Button";
import Navbar from "./Navbar";

export default function HeroSection() {
  return (
    <>
      <Navbar />

      <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-slate-950 px-6 text-white">
        {/* Background */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#1e3a8a20,transparent_60%)]" />

        <div className="relative z-10 mx-auto max-w-6xl text-center">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl font-extrabold leading-tight md:text-7xl"
          >
            Master Bangla Typing
            <span className="mt-3 block bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 bg-clip-text text-transparent">
              Bijoy • Avro • Unicode
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-slate-400"
          >
            Learn Bangla typing faster with interactive lessons, AI-powered
            feedback, typing tests, achievements and detailed analytics.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-10 flex flex-wrap justify-center gap-4"
          >
            <Button>Start Learning</Button>
            <Button variant="outline">Watch Demo</Button>
          </motion.div>
        </div>
      </section>
    </>
  );
}