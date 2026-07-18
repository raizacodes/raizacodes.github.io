"use client";

import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-zinc-100/50 px-6 py-24 dark:bg-zinc-900/30"
      aria-labelledby="contact-heading"
    >
      <div className="mx-auto max-w-2xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="mb-3 font-mono text-sm font-medium tracking-widest text-indigo-500 dark:text-indigo-400">
            Let&apos;s work together
          </p>
          <h2
            id="contact-heading"
            className="mb-4 text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl dark:text-zinc-50"
          >
            Get in Touch
          </h2>
          <p className="mb-10 text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
            I&apos;m currently available for freelance projects. Whether you need a
            polished React interface, a Next.js application, or an accessibility
            audit — I&apos;d love to hear about your project.
          </p>

          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-5 py-2.5 text-sm font-medium text-emerald-600 dark:text-emerald-400">
            <span className="relative flex h-2 w-2" aria-hidden="true">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            Available for new projects
          </div>
        </motion.div>
      </div>
    </section>
  );
}
