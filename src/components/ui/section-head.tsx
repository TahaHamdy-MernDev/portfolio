"use client";

import { useEffect, useRef, useState } from "react";

interface SectionHeadProps {
  title: string;
  num: string;
  className?: string;
}

export function SectionHead({ title, num, className = "" }: SectionHeadProps) {
  const [isInView, setIsInView] = useState(false);
  const headRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = headRef.current;
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
      { threshold: 0.3 }
    );

    observer.observe(el);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={headRef}
      className={`section-head flex items-baseline justify-between gap-5 mb-9 ${className}`}
    >
      <h2 className="section-title text-[clamp(1.5rem,3vw,2rem)] font-semibold font-serif m-0">
        <span className="inline-block overflow-hidden">
          <span
            className={`inline-block transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
              isInView ? "translate-y-0" : "translate-y-[112%]"
            }`}
          >
            {title}
          </span>
        </span>
      </h2>
      <span
        className={`section-num mono text-[0.8rem] text-[var(--muted)] transition-all duration-500 ease-out delay-150 ${
          isInView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-1.5"
        }`}
      >
        {num}
      </span>
    </div>
  );
}
