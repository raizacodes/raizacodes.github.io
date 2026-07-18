"use client";

import { motion } from "framer-motion";

const highlights = [
  { value: "5+", label: "Years of experience" },
  { value: "30+", label: "Projects delivered" },
  { value: "WCAG 2.1", label: "Accessibility standard" },
];

export default function About() {
  return (
    <section
      id="about"
      className="px-6 py-24"
      aria-labelledby="about-heading"
    >
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <p className="mb-3 font-mono text-sm font-medium tracking-widest text-indigo-500 dark:text-indigo-400">
              About me
            </p>
            <h2
              id="about-heading"
              className="mb-6 text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl dark:text-zinc-50"
            >
              Turning complex requirements into clean, user-first interfaces.
            </h2>
            <div className="space-y-4 text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
              <p>
                I&apos;m a Front-End Developer with over 5 years of experience building
                scalable web applications using React and Next.js. I care deeply about
                code quality, performance, and — above all — the experience of every
                user, regardless of their abilities.
              </p>
              <p>
                Web accessibility isn&apos;t just a checklist for me. I&apos;ve worked on
                WCAG 2.1 remediation projects, partnered with QA teams to run
                screen-reader audits, and built accessible component libraries from
                the ground up. That combination of technical depth and a11y expertise
                is rare, and it&apos;s something I bring to every project.
              </p>
              <p>
                More recently, I&apos;ve expanded into backend development with Node.js,
                NestJS, and PostgreSQL — giving me the context to collaborate more
                effectively across the stack and take on full-stack tasks when needed.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
            className="grid grid-cols-1 gap-6"
          >
            {highlights.map(({ value, label }) => (
              <div
                key={label}
                className="rounded-xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900"
              >
                <p className="text-3xl font-bold text-indigo-500 dark:text-indigo-400">
                  {value}
                </p>
                <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">{label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
