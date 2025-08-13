"use client";

import React, { useRef } from "react";

import {
  useStartPageAnimations,
  useScrollClippingEffect,
} from "@/src/animations/animations_StartPage";
export default function FooterVideo() {
  const fadeRef = useRef<HTMLDivElement>(null);
  const creativeRef = useRef<HTMLDivElement>(null);
  const sectionTitleRef = useRef<HTMLDivElement>(null);
  const backgroundImageRef = useRef<HTMLDivElement>(null);

  useStartPageAnimations({
    fadeRef,
    creativeRef,
    sectionTitleRef,
  });

  // 스크롤 클리핑 효과 훅 사용
  const imageClip = useScrollClippingEffect(backgroundImageRef);

  return (
    <div
      ref={backgroundImageRef}
      className="relative w-full overflow-hidden h-auto"
      style={{
        clipPath: `inset(${imageClip}px 0 ${imageClip}px 0)`,
        transition: "clip-path 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
      }}
    >
      <video
        src="/videoes/footer.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="object-cover w-full h-auto"
        data-lag="0"
        width={1500}
        height={1000}
      />
    </div>
  );
}
