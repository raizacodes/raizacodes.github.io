"use client";

import { motion } from "framer-motion";

type Project = {
  title: string;
  description: string;
  tag: string;
  tech: string[];
  github: string;
  live?: string;
};

const projects: Project[] = [
  {
    title: "A11y Lens",
    tag: "Accessibility",
    description:
      "An interactive accessibility auditing dashboard built around WCAG 2.1 guidelines. Surfaces issues with color contrast, keyboard navigation, ARIA roles, and semantic structure — with actionable remediation guidance for each finding.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "React Query"],
    github: "https://github.com/devsparkmindlabs/a11y-lens",
    live: "https://devsparkmindlabs.github.io/a11y-lens",
  },
  {
    title: "DevBoard",
    tag: "Full-Stack",
    description:
      "A project management SaaS dashboard with real-time task tracking, role-based access control, and team collaboration features. REST API built with NestJS, PostgreSQL for persistence, and a fully responsive Next.js front-end.",
    tech: ["Next.js", "NestJS", "PostgreSQL", "TypeScript", "Tailwind CSS"],
    github: "https://github.com/devsparkmindlabs/devboard",
    live: "https://devsparkmindlabs.github.io/devboard",
  },
  {
    title: "ShopFlow",
    tag: "Front-End",
    description:
      "A high-performance e-commerce storefront with server-side rendering, optimized Core Web Vitals, and a fully accessible shopping experience. Built following WCAG 2.1 AA standards — every interaction works with keyboard and screen readers.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    github: "https://github.com/devsparkmindlabs/shopflow",
    live: "https://devsparkmindlabs.github.io/shopflow",
  },
];

const tagColors: Record<string, string> = {
  Accessibility: "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400",
  "Full-Stack": "bg-violet-100 text-violet-700 dark:bg-violet-900/30 dark:text-violet-400",
  "Front-End": "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400",
};

function GitHubIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
    </svg>
  );
}

function ExternalLinkIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M15 3h6v6M10 14 21 3M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    </svg>
  );
}

export default function Projects() {
  return (
    <section
      id="projects"
      className="px-6 py-24"
      aria-labelledby="projects-heading"
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
            What I&apos;ve built
          </p>
          <h2
            id="projects-heading"
            className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl dark:text-zinc-50"
          >
            Featured Projects
          </h2>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group flex flex-col rounded-xl border border-zinc-200 bg-white transition-shadow hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900 dark:hover:shadow-zinc-800/40"
            >
              <div className="flex flex-1 flex-col p-6">
                <div className="mb-4 flex items-start justify-between gap-2">
                  <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">
                    {project.title}
                  </h3>
                  <span
                    className={`shrink-0 rounded-full px-2.5 py-0.5 text-xs font-medium ${tagColors[project.tag]}`}
                  >
                    {project.tag}
                  </span>
                </div>

                <p className="flex-1 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                  {project.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-2" aria-label="Technologies used">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-md border border-zinc-200 bg-zinc-50 px-2 py-0.5 font-mono text-xs text-zinc-500 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-400"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-3 border-t border-zinc-100 px-6 py-4 dark:border-zinc-800">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-sm font-medium text-zinc-500 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50"
                  aria-label={`View ${project.title} source code on GitHub`}
                >
                  <GitHubIcon />
                  Code
                </a>
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-sm font-medium text-indigo-500 transition-colors hover:text-indigo-400 dark:text-indigo-400 dark:hover:text-indigo-300"
                    aria-label={`Visit ${project.title} live demo`}
                  >
                    <ExternalLinkIcon />
                    Live demo
                  </a>
                )}
              </div>
            </motion.article>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-10 text-center text-sm text-zinc-500 dark:text-zinc-400"
        >
          More projects on{" "}
          <a
            href="https://github.com/devsparkmindlabs"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-indigo-500 hover:text-indigo-400 dark:text-indigo-400 dark:hover:text-indigo-300"
          >
            GitHub
          </a>
        </motion.p>
      </div>
    </section>
  );
}
