"use client";

import { useEffect, useRef, useState } from "react";

export function Footer() {
  const [isInView, setIsInView] = useState(false);
  const footerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = footerRef.current;
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
      { threshold: 0.12 }
    );

    observer.observe(el);

    return () => observer.disconnect();
  }, []);

  return (
    <footer
      ref={footerRef}
      className={`wrap py-[28px] pb-10 text-[var(--muted)] text-[0.8rem] flex justify-between flex-wrap gap-2.5 transition-all duration-500 ease-out ${
        isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3.5"
      }`}
    >
      <span>© 2026 Taha Hamdy</span>
      <span>Full-Stack Developer — SaaS, E-commerce & Business Systems</span>
    </footer>
  );
}
