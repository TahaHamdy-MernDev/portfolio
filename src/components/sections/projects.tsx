"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { SectionHead } from "@/components/ui/section-head";

interface ProjectItem {
  title: string;
  arabicTitle?: string;
  role: string;
  status: string;
  link?: {
    text: string;
    url: string;
  };
  disabledLinkText?: string;
  description: string;
  tags: string[];
}

const PROJECTS: ProjectItem[] = [
  {
    title: "Nazam",
    arabicTitle: "نظّم",
    role: "Full-Stack · Solo",
    status: "Private repository",
    link: {
      text: "GitHub ↗",
      url: "https://github.com/TahaHamdy-MernDev/nazam",
    },
    description:
      "A commerce-operations platform that helps merchants organize, combine, and follow every part of their business in one place.",
    tags: [
      "Next.js",
      "NestJS",
      "Turborepo",
      "Prisma",
      "PostgreSQL",
      "Redis",
      "BullMQ",
    ],
  },
  {
    title: "Egapy",
    role: "Full-Stack · Team of 2",
    status: "Live product",
    link: {
      text: "Visit site ↗",
      url: "https://www.egapy.com/ar",
    },
    description:
      "A modern ERP solution designed to help businesses of all sizes streamline their operations and grow efficiently.",
    tags: ["Next.js", "NestJS", "Prisma", "PostgreSQL"],
  },
  {
    title: "Labaik",
    role: "Full-Stack · Solo",
    status: "Live landing · private dashboard",
    link: {
      text: "Visit site ↗",
      url: "https://labaikapp.com/ar",
    },
    description:
      'A platform that makes "Umrah al-Badal" easier and more reliable — letting people dedicate the reward of Umrah to loved ones, like the elderly, ill, or deceased, who can\'t make the trip themselves, by connecting them with vetted individuals who perform it on their behalf. Built the landing site plus a private dashboard managing data and backend for the promotional site, dashboard, and mobile app.',
    tags: [
      "Next.js",
      "NestJS",
      "TypeORM",
      "MySQL",
      "BullMQ",
      "FCM",
      "Sockets",
    ],
  },
  {
    title: "Buy From Egypt",
    role: "Front-End",
    status: "Private · unpublished",
    disabledLinkText: "Not public",
    description:
      "A B2B export platform connecting Egyptian exporters with global buyers through business profiles, product listings, and communication workflows — integrated with a custom-built machine learning model that chats with and answers users.",
    tags: ["Next.js", "shadcn/ui", "ML integration"],
  },
  {
    title: "Coldwell Banker — New Alex",
    role: "Full-Stack · Solo",
    status: "Formerly live · now offline",
    link: {
      text: "GitHub (partial) ↗",
      url: "https://github.com/TahaHamdy-MernDev/cold-well-banker",
    },
    description:
      "A real estate platform in the spirit of Nawy, with property discovery, advanced filtering, interactive maps, multilingual support, and SEO-focused pages. Hosted for the client for six months; no longer maintained.",
    tags: [
      "Vite",
      "Bootstrap 5",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Cloudinary",
    ],
  },
  {
    title: "GEDO",
    arabicTitle: "جدو",
    role: "Backend Developer",
    status: "Case study",
    disabledLinkText: "No public link",
    description:
      "An Alzheimer's care management system helping caregivers and family members manage medication, health tracking, communication, and daily activity monitoring for patients.",
    tags: ["Node.js", "Express.js", "MongoDB"],
  },
];

export function Projects() {
  const [isInView, setIsInView] = useState(false);
  const listRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = listRef.current;
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

  const handlePointerMove = useCallback(
    (e: React.PointerEvent<HTMLElement>) => {
      const rect = e.currentTarget.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      e.currentTarget.style.setProperty("--mx", `${x}%`);
      e.currentTarget.style.setProperty("--my", `${y}%`);
    },
    []
  );

  return (
    <section id="work" className="py-[72px] border-t border-[var(--line)]">
      <div className="wrap">
        <SectionHead title="Selected work" num="§ 03" />

        <div
          ref={listRef}
          id="projectList"
          className="project-list flex flex-col gap-[1px] bg-[var(--line)] border border-[var(--line)] rounded-[var(--radius)] overflow-hidden"
        >
          {PROJECTS.map((project, idx) => (
            <article
              key={project.title}
              onPointerMove={handlePointerMove}
              className={`project relative overflow-hidden bg-[var(--surface)] hover:bg-[#161821] p-7 md:p-[30px_28px] grid grid-cols-1 md:grid-cols-[1.1fr_1.4fr] gap-7 transition-all duration-500 ease-out group before:content-[''] before:absolute before:inset-0 before:bg-[radial-gradient(220px_circle_at_var(--mx,50%)_var(--my,50%),rgba(255,255,255,0.06),transparent_70%)] before:opacity-0 hover:before:opacity-100 before:pointer-events-none before:transition-opacity before:duration-300 ${
                isInView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-3"
              }`}
              style={{ transitionDelay: `${idx * 70}ms` }}
            >
              {/* Meta column */}
              <div className="project-meta flex flex-col gap-2.5">
                <div className="project-title font-serif text-[1.2rem] font-semibold text-[var(--ink)]">
                  {project.title}{" "}
                  {project.arabicTitle && (
                    <span className="mono text-[0.7em] text-[var(--muted)] font-normal ml-1">
                      {project.arabicTitle}
                    </span>
                  )}
                </div>
                <div className="project-role text-[0.8rem] text-[var(--accent-ink)] font-medium">
                  {project.role}
                </div>
                <div className="project-status text-[0.76rem] text-[var(--muted)]">
                  {project.status}
                </div>
                <div className="project-links flex gap-3.5 mt-1 flex-wrap items-center">
                  {project.link ? (
                    <a
                      href={project.link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[0.82rem] no-underline text-[var(--ink)] border-b border-[var(--ink)] pb-[1px] transition-colors hover:text-[#FFFFFF] hover:border-[#FFFFFF]"
                    >
                      {project.link.text}
                    </a>
                  ) : (
                    <span className="disabled text-[0.82rem] text-[var(--muted-2)] border-b border-dashed border-[var(--line)] pb-[1px] cursor-default">
                      {project.disabledLinkText}
                    </span>
                  )}
                </div>
              </div>

              {/* Description column */}
              <div className="project-desc">
                <p className="m-0 text-[var(--muted)] text-[0.95rem] leading-relaxed">
                  {project.description}
                </p>
                <div className="stack-tags flex flex-wrap gap-[7px] mt-3.5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[0.74rem] px-[9px] py-1 rounded-[4px] bg-[var(--accent-soft)] text-[var(--muted)] border border-[var(--line)] select-none"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
