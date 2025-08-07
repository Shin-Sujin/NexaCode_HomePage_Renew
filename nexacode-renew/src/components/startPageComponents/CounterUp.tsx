// components/CounterUp.tsx
"use client";

import { useEffect, useRef } from "react";

type CounterUpProps = {
  targetNumber: number;
  duration?: number; // in ms
};

export default function CounterUp({ targetNumber, duration }: CounterUpProps) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const element = entry.target as HTMLElement;
            const startTime = performance.now();

            const animate = (currentTime: number) => {
              const elapsed = currentTime - startTime;
              const progress = Math.min(elapsed / (duration || 500), 1);

              // linear easing for a direct but smooth feel
              const value = Math.floor(progress * targetNumber);
              element.textContent = value.toString();

              if (progress < 1) {
                requestAnimationFrame(animate);
              } else {
                element.textContent = targetNumber.toString();
              }
            };

            requestAnimationFrame(animate);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.5,
      }
    );

    observer.observe(ref.current);

    return () => observer.disconnect();
  }, [targetNumber, duration]);

  return <span ref={ref}>0</span>;
}
