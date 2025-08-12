// components/ScrollProgressBar.tsx
"use client";

import { useEffect, useState } from "react";

export default function ScrollProgressBar() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let rafId: number;

    const update = () => {
      const el = document.documentElement;
      const top = el.scrollTop;
      const total = el.scrollHeight - el.clientHeight;
      const pct = total > 0 ? (top / total) * 100 : 0;
      setProgress(pct);
      rafId = requestAnimationFrame(update);
    };

    rafId = requestAnimationFrame(update);
    return () => cancelAnimationFrame(rafId);
  }, []);

  return (
    <div className="fixed top-[68px] left-0 w-full h-[4px] bg-gray-200 z-50 max-sm:top-[60px]">
      {/* transition 제거, transform(scaleX)로 페인트만 */}
      <div
        className="h-full bg-black origin-left will-change-transform"
        style={{ transform: `scaleX(${progress / 100})` }}
      />
    </div>
  );
}
