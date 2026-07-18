"use client";

import { motion, type Transition } from "framer-motion";

function fadeUp(delay = 0) {
  const transition: Transition = { duration: 0.6, delay, ease: "easeOut" };
  return { initial: { opacity: 0, y: 24 }, animate: { opacity: 1, y: 0 }, transition };
}

export default function Hero() {
  return (
    <section
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 pt-24 pb-16"
      aria-label="Introduction"
    >
      {/* Background gradient */}
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        aria-hidden="true"
      >
        <div className="absolute left-1/2 top-1/3 h-[500px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-500/10 blur-3xl dark:bg-indigo-500/5" />
        <div className="absolute right-1/4 top-2/3 h-[300px] w-[400px] rounded-full bg-violet-500/10 blur-3xl dark:bg-violet-500/5" />
      </div>

      <div className="mx-auto max-w-3xl text-center">
        <motion.p
          {...fadeUp(0)}
          className="mb-4 font-mono text-sm font-medium tracking-widest text-indigo-500 dark:text-indigo-400"
        >
          Hi, I&apos;m
        </motion.p>

        <motion.h1
          {...fadeUp(0.1)}
          className="mb-4 text-5xl font-bold tracking-tight text-zinc-900 sm:text-6xl md:text-7xl dark:text-zinc-50"
        >
          Raiza Longart
        </motion.h1>

        <motion.h2
          {...fadeUp(0.2)}
          className="mb-6 text-xl font-medium text-zinc-500 sm:text-2xl dark:text-zinc-400"
        >
          Front-End Developer
        </motion.h2>

        <motion.p
          {...fadeUp(0.3)}
          className="mx-auto mb-10 max-w-xl text-base leading-relaxed text-zinc-600 sm:text-lg dark:text-zinc-400"
        >
          I build fast, accessible, and visually polished web experiences.
          Specialized in{" "}
          <span className="font-medium text-zinc-900 dark:text-zinc-200">React</span>,{" "}
          <span className="font-medium text-zinc-900 dark:text-zinc-200">Next.js</span>, and{" "}
          <span className="font-medium text-zinc-900 dark:text-zinc-200">WCAG accessibility</span>{" "}
          — with 5+ years shipping production-grade interfaces.
        </motion.p>

        <motion.div {...fadeUp(0.4)} className="flex flex-wrap items-center justify-center gap-4">
          <a
            href="#projects"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="rounded-lg bg-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-500/20 transition-all hover:bg-indigo-500 hover:shadow-indigo-500/30 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 dark:bg-indigo-500 dark:hover:bg-indigo-400"
          >
            View Projects
          </a>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="rounded-lg border border-zinc-300 px-6 py-3 text-sm font-semibold text-zinc-700 transition-all hover:border-zinc-400 hover:bg-zinc-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 dark:border-zinc-700 dark:text-zinc-300 dark:hover:border-zinc-600 dark:hover:bg-zinc-800"
          >
            Get in Touch
          </a>
        </motion.div>

        <motion.div
          {...fadeUp(0.5)}
          className="mt-12 flex flex-wrap items-center justify-center gap-3"
          aria-label="Technology stack"
        >
          {["React", "Next.js", "TypeScript", "Node.js", "NestJS", "WCAG"].map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-zinc-200 bg-white px-3 py-1 font-mono text-xs text-zinc-500 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-400"
            >
              {tech}
            </span>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        aria-hidden="true"
      >
        <div className="flex flex-col items-center gap-1">
          <div className="h-10 w-px bg-gradient-to-b from-transparent to-zinc-400 dark:to-zinc-600" />
        </div>
      </motion.div>
    </section>
  );
}
