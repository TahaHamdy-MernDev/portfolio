"use client";

import { useEffect, useRef, useState } from "react";
import { SectionHead } from "@/components/ui/section-head";

export function About() {
  const [isInView, setIsInView] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = containerRef.current;
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
    <section id="about" className="py-[72px] border-t-0">
      <div className="wrap">
        <SectionHead title="About" num="§ 01" />
        <div
          ref={containerRef}
          id="aboutGrid"
          className="about-grid grid grid-cols-1 gap-5 max-w-[70ch]"
        >
          <p
            className={`text-[var(--ink)] text-[1.02rem] leading-relaxed transition-all duration-500 ease-out ${
              isInView
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-3"
            }`}
            style={{ transitionDelay: "0ms" }}
          >
            I&apos;m a Full-Stack Developer with 3+ years of experience building
            web applications, SaaS platforms, e-commerce systems, and
            business-focused software. I work across the entire stack — from
            designing intuitive interfaces to building scalable APIs, databases,
            integrations, and backend architecture.
          </p>
          <p
            className={`text-[var(--muted)] text-[1.02rem] leading-relaxed transition-all duration-500 ease-out ${
              isInView
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-3"
            }`}
            style={{ transitionDelay: "70ms" }}
          >
            I&apos;m drawn to solving real-world problems with software, turning
            complex requirements into simple, reliable products. I especially
            enjoy systems involving commerce, logistics, payments, dashboards,
            and business workflows — the kind of software a company actually
            runs on.
          </p>
          <p
            className={`text-[var(--muted)] text-[1.02rem] leading-relaxed transition-all duration-500 ease-out ${
              isInView
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-3"
            }`}
            style={{ transitionDelay: "140ms" }}
          >
            Beyond writing code, I care about architecture, performance,
            developer experience, and building codebases that are easy to
            understand and evolve. I&apos;m constantly learning, experimenting
            with new technologies, and looking for better ways to build
            software that makes a real difference.
          </p>
        </div>
      </div>
    </section>
  );
}
