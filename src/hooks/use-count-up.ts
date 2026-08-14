"use client";

import { useEffect, useRef, useState } from "react";

export function useCountUp(target: number, suffix: string = "") {
  const [displayValue, setDisplayValue] = useState<string>(`0${suffix}`);
  const elementRef = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const el = elementRef.current;
    if (!el) return;

    const reduceMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated.current) {
            hasAnimated.current = true;
            if (reduceMotion) {
              setDisplayValue(`${target}${suffix}`);
            } else {
              const duration = 1100;
              const start = performance.now();
              const tick = (now: number) => {
                const p = Math.min((now - start) / duration, 1);
                const eased = 1 - Math.pow(1 - p, 3);
                const currentVal = Math.round(eased * target);
                setDisplayValue(`${currentVal}${suffix}`);
                if (p < 1) {
                  requestAnimationFrame(tick);
                }
              };
              requestAnimationFrame(tick);
            }
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );

    observer.observe(el);

    return () => observer.disconnect();
  }, [target, suffix]);

  return { ref: elementRef, value: displayValue };
}
