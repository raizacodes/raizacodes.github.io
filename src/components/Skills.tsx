"use client";

import { motion } from "framer-motion";

const skillGroups = [
  {
    category: "Front-End",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" />
      </svg>
    ),
    skills: ["React", "Next.js", "TypeScript", "JavaScript (ES2022+)", "HTML5", "CSS3 / Sass", "Tailwind CSS", "Framer Motion"],
  },
  {
    category: "Back-End",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect width="20" height="8" x="2" y="2" rx="2" ry="2" /><rect width="20" height="8" x="2" y="14" rx="2" ry="2" /><line x1="6" x2="6.01" y1="6" y2="6" /><line x1="6" x2="6.01" y1="18" y2="18" />
      </svg>
    ),
    skills: ["Node.js", "NestJS", "PostgreSQL", "REST APIs", "JWT Auth"],
  },
  {
    category: "Accessibility",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="10" /><path d="M12 8v4l3 3" />
      </svg>
    ),
    skills: ["WCAG 2.1 AA/AAA", "ARIA roles & attributes", "Keyboard navigation", "Screen reader testing", "Color contrast audit", "Axe DevTools", "Accessible component design"],
  },
  {
    category: "Tools & Workflow",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
      </svg>
    ),
    skills: ["Git / GitHub", "Figma", "VS Code", "ESLint / Prettier", "Vitest / Testing Library", "Docker (basics)"],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="bg-zinc-100/50 px-6 py-24 dark:bg-zinc-900/30"
      aria-labelledby="skills-heading"
    >
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-14 text-center"
        >
          <p className="mb-3 font-mono text-sm font-medium tracking-widest text-indigo-500 dark:text-indigo-400">
            What I work with
          </p>
          <h2
            id="skills-heading"
            className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl dark:text-zinc-50"
          >
            Skills & Technologies
          </h2>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {skillGroups.map(({ category, icon, skills }, i) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="rounded-xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900"
            >
              <div className="mb-4 flex items-center gap-3">
                <span className="text-indigo-500 dark:text-indigo-400">{icon}</span>
                <h3 className="font-semibold text-zinc-900 dark:text-zinc-50">{category}</h3>
              </div>
              <ul className="space-y-2" role="list">
                {skills.map((skill) => (
                  <li
                    key={skill}
                    className="text-sm text-zinc-600 dark:text-zinc-400"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
