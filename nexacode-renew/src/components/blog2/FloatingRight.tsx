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
  return (
    <div className="flex flex-col gap-4 w-60 min-w-[8rem] sticky top-32 h-fit pl-10">
      <div className="font-semibold mb-2">Step</div>
      {steps.map((step) => (
        <a
          key={step.id}
          href={`#${step.id}`}
          className="text-gray-600 hover:underline"
        >
          {step.label}
        </a>
      ))}
    </div>
  );
}
