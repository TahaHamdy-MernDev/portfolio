"use client";

import { useCallback, useRef } from "react";
import { useCountUp } from "@/hooks/use-count-up";

export function Hero() {
  const magnetBtnRef = useRef<HTMLAnchorElement>(null);

  const handlePointerMove = useCallback((e: React.PointerEvent<HTMLAnchorElement>) => {
    const el = magnetBtnRef.current;
    if (!el) return;
    const reduceMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) return;

    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) * 0.25;
    const y = (e.clientY - rect.top - rect.height / 2) * 0.25;
    el.style.transform = `translate(${x}px, ${y}px)`;
  }, []);

  const handlePointerLeave = useCallback(() => {
    const el = magnetBtnRef.current;
    if (!el) return;
    el.style.transform = "";
  }, []);

  const stat1 = useCountUp(3, "+");
  const stat2 = useCountUp(6);
  const stat3 = useCountUp(2);

  return (
    <section className="hero pt-[76px] pb-10 border-t-0">
      <div className="wrap">
        {/* Eyebrow badge */}
        <div>
          <span
            className="eyebrow load-in inline-flex items-center gap-2 text-[0.78rem] text-[var(--muted)] bg-[var(--accent-soft)] border border-[var(--line)] px-3 py-[5px] rounded-[2px] mb-[22px]"
            style={{ animationDelay: "0.05s" }}
          >
            <span className="dot w-1.5 h-1.5 rounded-full bg-[var(--ink)]" />
            Available for new work
          </span>
        </div>

        {/* Heading */}
        <h1 className="split-lines text-[clamp(2.1rem,5vw,3.4rem)] leading-[1.08] max-w-[14ch] font-serif font-semibold">
          <span className="line block overflow-hidden">
            <span
              className="inline-block"
              style={{ animationDelay: "0.15s" }}
            >
              I build the systems
            </span>
          </span>
          <span className="line block overflow-hidden">
            <span
              className="inline-block"
              style={{ animationDelay: "0.28s" }}
            >
              businesses run on.
            </span>
          </span>
        </h1>

        {/* Subtitle */}
        <p
          className="hero-sub load-in mt-[22px] max-w-[58ch] text-[var(--muted)] text-[1.08rem] leading-relaxed"
          style={{ animationDelay: "0.5s" }}
        >
          Full-Stack Developer with 3+ years building SaaS platforms, e-commerce
          systems, and business-focused software — from interface to database to
          the integrations that hold it all together.
        </p>

        {/* CTA Buttons */}
        <div
          className="hero-cta load-in mt-8 flex gap-3.5 flex-wrap"
          style={{ animationDelay: "0.6s" }}
        >
          <a
            ref={magnetBtnRef}
            id="magnetBtn"
            href="#work"
            onPointerMove={handlePointerMove}
            onPointerLeave={handlePointerLeave}
            className="btn btn-primary"
          >
            See the work
          </a>
          <a href="#contact" className="btn btn-ghost">
            Get in touch
          </a>
        </div>

        {/* Stack strip */}
        <div
          className="stack-strip load-in mt-14 border border-[var(--line)] rounded-[var(--radius)] bg-[var(--surface)] overflow-hidden"
          style={{ animationDelay: "0.7s" }}
        >
          <div className="grid grid-cols-1 md:grid-cols-4">
            <div
              className="stack-layer p-[20px_22px] border-b md:border-b-0 md:border-r border-[var(--line)]"
              style={{ animationDelay: "0.05s" }}
            >
              <span className="stack-icon mono w-8 h-8 rounded-full bg-[var(--accent-soft)] border border-[var(--line)] flex items-center justify-center text-[0.7rem] text-[var(--muted)] mb-3">
                01
              </span>
              <span className="stack-label mono text-[0.7rem] uppercase text-[var(--muted)] mb-2 block tracking-wider">
                Interface
              </span>
              <span className="stack-items mono text-[0.86rem] text-[var(--muted)] block">
                React · Next.js · Tailwind
              </span>
            </div>

            <div
              className="stack-layer p-[20px_22px] border-b md:border-b-0 md:border-r border-[var(--line)]"
              style={{ animationDelay: "0.15s" }}
            >
              <span className="stack-icon mono w-8 h-8 rounded-full bg-[var(--accent-soft)] border border-[var(--line)] flex items-center justify-center text-[0.7rem] text-[var(--muted)] mb-3">
                02
              </span>
              <span className="stack-label mono text-[0.7rem] uppercase text-[var(--muted)] mb-2 block tracking-wider">
                Service
              </span>
              <span className="stack-items mono text-[0.86rem] text-[var(--muted)] block">
                NestJS · Node.js · GraphQL
              </span>
            </div>

            <div
              className="stack-layer p-[20px_22px] border-b md:border-b-0 md:border-r border-[var(--line)]"
              style={{ animationDelay: "0.25s" }}
            >
              <span className="stack-icon mono w-8 h-8 rounded-full bg-[var(--accent-soft)] border border-[var(--line)] flex items-center justify-center text-[0.7rem] text-[var(--muted)] mb-3">
                03
              </span>
              <span className="stack-label mono text-[0.7rem] uppercase text-[var(--muted)] mb-2 block tracking-wider">
                Data
              </span>
              <span className="stack-items mono text-[0.86rem] text-[var(--muted)] block">
                PostgreSQL · Prisma · Redis
              </span>
            </div>

            <div
              className="stack-layer p-[20px_22px]"
              style={{ animationDelay: "0.35s" }}
            >
              <span className="stack-icon mono w-8 h-8 rounded-full bg-[var(--accent-soft)] border border-[var(--line)] flex items-center justify-center text-[0.7rem] text-[var(--muted)] mb-3">
                04
              </span>
              <span className="stack-label mono text-[0.7rem] uppercase text-[var(--muted)] mb-2 block tracking-wider">
                Infra
              </span>
              <span className="stack-items mono text-[0.86rem] text-[var(--muted)] block">
                Docker · CI/CD · Vercel
              </span>
            </div>
          </div>
        </div>

        {/* Stats row */}
        <div
          className="stats-row load-in mt-10 grid grid-cols-1 sm:grid-cols-3 border border-[var(--line)] rounded-[var(--radius)] bg-[var(--surface)] overflow-hidden"
          style={{ animationDelay: "0.85s" }}
        >
          <div className="stat p-[22px_24px] border-b sm:border-b-0 sm:border-r border-[var(--line)]">
            <span
              ref={stat1.ref}
              className="stat-num mono block font-serif text-[2rem] font-semibold leading-none text-[var(--ink)]"
            >
              {stat1.value}
            </span>
            <span className="stat-label block mt-2 text-[0.78rem] text-[var(--muted)]">
              Years experience
            </span>
          </div>

          <div className="stat p-[22px_24px] border-b sm:border-b-0 sm:border-r border-[var(--line)]">
            <span
              ref={stat2.ref}
              className="stat-num mono block font-serif text-[2rem] font-semibold leading-none text-[var(--ink)]"
            >
              {stat2.value}
            </span>
            <span className="stat-label block mt-2 text-[0.78rem] text-[var(--muted)]">
              Projects shipped
            </span>
          </div>

          <div className="stat p-[22px_24px]">
            <span
              ref={stat3.ref}
              className="stat-num mono block font-serif text-[2rem] font-semibold leading-none text-[var(--ink)]"
            >
              {stat3.value}
            </span>
            <span className="stat-label block mt-2 text-[0.78rem] text-[var(--muted)]">
              Live in production
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
