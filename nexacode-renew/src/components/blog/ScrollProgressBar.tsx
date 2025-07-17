// components/ScrollProgressBar.tsx
"use client";

import { useEffect, useState } from "react";

export default function ScrollProgressBar() {
  const [scrollPercentage, setScrollPercentage] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = (scrollTop / docHeight) * 100;
      setScrollPercentage(scrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed top-[68px] left-0 w-full h-[4px] bg-gray-200 z-50 max-sm:top-[60px]">
      <div
        className="h-full bg-black transition-all duration-75"
        style={{ width: `${scrollPercentage}%` }}
      />
    </div>
  );
}
