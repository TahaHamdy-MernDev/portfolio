"use client";

import { useEffect, useState } from "react";

const NAV_ITEMS = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "work", label: "Work" },
  { id: "contact", label: "Contact" },
];

export function Header() {
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    const sections = NAV_ITEMS.map((item) =>
      document.getElementById(item.id)
    ).filter(Boolean) as HTMLElement[];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-45% 0px -45% 0px" }
    );

    sections.forEach((s) => observer.observe(s));

    return () => observer.disconnect();
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-[#0B0C10]/85 backdrop-blur-md border-b border-(--line)">
      <nav className="wrap flex items-center justify-between p-5!">
        <a
          href="#"
          className="brand font-serif font-semibold text-[1.05rem] text-(--ink) no-underline"
        >
          Taha Hamdy
        </a>
        <div className="navlinks flex gap-4 sm:gap-7 text-[0.82rem] sm:text-[0.92rem]">
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`relative no-underline transition-colors duration-150 py-0.5 group ${
                  isActive
                    ? "text-[var(--ink)] font-medium"
                    : "text-[var(--muted)] hover:text-[var(--ink)]"
                }`}
              >
                {item.label}
                <span
                  className={`absolute left-0 right-0 -bottom-[5px] h-[1px] bg-[var(--ink)] origin-left transition-transform duration-250 ${
                    isActive
                      ? "scale-x-100"
                      : "scale-x-0 group-hover:scale-x-100"
                  }`}
                />
              </a>
            );
          })}
        </div>
      </nav>
    </header>
  );
}
