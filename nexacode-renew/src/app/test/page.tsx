"use client";

import { useRef } from "react";
import { useLetterBounceAnimation } from "../../animations/letterBounceAnimation";

export default function TestPage() {
  const triggerRef = useRef<HTMLDivElement>(null);
  const text = "PORTFOLIO";

  useLetterBounceAnimation(triggerRef);

  return (
    <div ref={triggerRef} className="flex justify-center items-center h-screen">
      <div className="text-9xl tracking-tighter font-black word">
        {text.split("").map((char, index) => (
          <span key={index} className="inline-block">
            {char}
          </span>
        ))}
      </div>
    </div>
  );
}
