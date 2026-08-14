"use client";

import { useEffect, useRef, useState } from "react";
import { SectionHead } from "@/components/ui/section-head";

interface SkillCategory {
  title: string;
  skills: string[];
  fullWidth?: boolean;
}

const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Languages",
    skills: ["TypeScript", "JavaScript", "SQL", "HTML", "CSS"],
  },
  {
    title: "Frontend",
    skills: ["React", "Next.js", "Tailwind CSS", "shadcn/ui"],
  },
  {
    title: "Backend",
    skills: ["Node.js", "NestJS", "REST APIs", "GraphQL", "Webhooks"],
  },
  {
    title: "Databases & ORM",
    skills: ["PostgreSQL", "MySQL", "MongoDB", "Prisma", "TypeORM"],
  },
  {
    title: "Architecture & Tools",
    skills: ["Turborepo", "pnpm", "Git", "GitHub", "Docker", "Linux", "CI/CD"],
  },
  {
    title: "Cloud & Deployment",
    skills: ["Vercel", "DigitalOcean", "Nginx"],
  },
  {
    title: "Domain",
    fullWidth: true,
    skills: [
      "Auth & Authorization",
      "Payment Integrations",
      "E-commerce",
      "Localization / i18n",
      "Real-time Systems",
      "API Integrations",
      "SaaS Architecture",
    ],
  },
];

export function Skills() {
  const [isInView, setIsInView] = useState(false);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = gridRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08 }
    );

    observer.observe(el);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="py-[72px] border-t border-[var(--line)]">
      <div className="wrap">
        <SectionHead title="Skills" num="§ 02" />

        <div
          ref={gridRef}
          id="skillsGrid"
          className="skills-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[1px] bg-[var(--line)] border border-[var(--line)] rounded-[var(--radius)] overflow-hidden"
        >
          {SKILL_CATEGORIES.map((category, idx) => (
            <div
              key={category.title}
              className={`skill-group bg-[var(--surface)] p-[22px] transition-all duration-500 ease-out ${
                category.fullWidth ? "col-span-1 sm:col-span-2 lg:col-span-3" : ""
              } ${
                isInView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-3"
              }`}
              style={{ transitionDelay: `${idx * 70}ms` }}
            >
              <h3 className="font-sans font-semibold text-[0.82rem] uppercase tracking-[0.04em] text-[var(--accent-ink)] mb-3.5">
                {category.title}
              </h3>
              <div className="chip-row flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="chip text-[0.8rem] px-2.5 py-[5px] rounded-[4px] bg-[var(--paper)] border border-[var(--line)] text-[var(--ink)] transition-all duration-150 ease-out hover:-translate-y-0.5 hover:border-[var(--ink)] cursor-default select-none"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
