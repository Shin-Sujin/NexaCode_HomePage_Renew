"use client";

import React from "react";

interface Step {
  id: string;
  label: string;
}

interface FloatingRightProps {
  steps: Step[];
}

export default function FloatingRight({ steps }: FloatingRightProps) {
  // 고정 헤더 높이(px)
  const HEADER_HEIGHT = 70;

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      const y =
        el.getBoundingClientRect().top + window.pageYOffset - HEADER_HEIGHT;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <div className="flex flex-col gap-4 w-60 min-w-[8rem] sticky top-32 h-fit pl-10">
      <div className="font-semibold mb-2">Step</div>
      {steps.map((step) => (
        <a
          key={step.id}
          href={`#${step.id}`}
          className="text-gray-600 hover:underline"
          onClick={(e) => handleClick(e, step.id)}
        >
          {step.label}
        </a>
      ))}
    </div>
  );
}
