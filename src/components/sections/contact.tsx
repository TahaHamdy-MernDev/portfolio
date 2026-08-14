"use client";

import { useEffect, useRef, useState, useCallback } from "react";

interface ContactItem {
  label: string;
  value: string;
  href: string;
  external?: boolean;
}

const CONTACT_ITEMS: ContactItem[] = [
  {
    label: "Email",
    value: "tahahamdy.dev@gmail.com",
    href: "mailto:tahahamdy.dev@gmail.com",
  },
  {
    label: "Phone",
    value: "+20 111 491 1898",
    href: "tel:+201114911898",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/taha-hamdy",
    href: "https://www.linkedin.com/in/taha-hamdy",
    external: true,
  },
  {
    label: "GitHub",
    value: "github.com/TahaHamdy-MernDev",
    href: "https://github.com/TahaHamdy-MernDev",
    external: true,
  },
];

export function Contact() {
  const [isInView, setIsInView] = useState(false);
  const blockRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = blockRef.current;
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
    <section id="contact" className="py-[72px] border-t border-[var(--line)]">
      <div className="wrap">
        <div
          ref={blockRef}
          className={`contact-block grid grid-cols-1 md:grid-cols-[1.2fr_1fr] gap-10 items-start transition-all duration-500 ease-out ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3.5"
          }`}
        >
          <h2 className="font-serif text-[clamp(1.6rem,3.4vw,2.3rem)] font-semibold leading-tight max-w-[16ch] m-0 text-[var(--ink)]">
            Building something that needs a full-stack hand? Let&apos;s talk.
          </h2>

          <div id="contactLinks" className="contact-links flex flex-col gap-4">
            {CONTACT_ITEMS.map((item, idx) => (
              <a
                key={item.label}
                href={item.href}
                target={item.external ? "_blank" : undefined}
                rel={item.external ? "noopener noreferrer" : undefined}
                onPointerMove={handlePointerMove}
                className={`contact-row relative overflow-hidden flex justify-between items-center py-4 first:pt-0 border-b border-[var(--line)] no-underline text-[var(--ink)] group transition-all duration-500 ease-out before:content-[''] before:absolute before:inset-0 before:bg-[radial-gradient(200px_circle_at_var(--mx,50%)_var(--my,50%),rgba(255,255,255,0.05),transparent_70%)] before:opacity-0 hover:before:opacity-100 before:pointer-events-none before:transition-opacity before:duration-300 ${
                  isInView
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-3"
                }`}
                style={{ transitionDelay: `${idx * 70}ms` }}
              >
                <span>
                  <span className="label block text-[0.78rem] uppercase text-[var(--muted)] tracking-[0.04em] mb-0.5">
                    {item.label}
                  </span>
                  <span className="value text-[1rem] font-normal text-[var(--ink)]">
                    {item.value}
                  </span>
                </span>
                <span className="arrow text-[var(--muted)] text-xl transition-all duration-150 ease-out group-hover:translate-x-1 group-hover:text-[var(--accent-ink)]">
                  →
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
