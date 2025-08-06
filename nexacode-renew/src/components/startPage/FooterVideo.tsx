"use client";

import React, { useRef } from "react";

import {
  useStartPageAnimations,
  useScrollClippingEffect,
} from "@/src/animations/animations_StartPage";
export default function FooterVideo() {
  const fadeRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const creativeRef = useRef<HTMLDivElement>(null);
  const studioRef = useRef<HTMLDivElement>(null);
  const whoWeAreRef = useRef<HTMLDivElement>(null);
  const sectionTitleRef = useRef<HTMLDivElement>(null);
  const workTitleRef = useRef<HTMLDivElement>(null);
  const recentPostTitleRef = useRef<HTMLDivElement>(null);
  const whetherRef = useRef<HTMLDivElement>(null);
  const ourTeamRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);
  const backgroundImageRef = useRef<HTMLDivElement>(null);

  useStartPageAnimations({
    fadeRef,
    textRef,
    creativeRef,
    studioRef,
    whoWeAreRef,
    sectionTitleRef,
    workTitleRef,
    recentPostTitleRef,
    whetherRef,
    ourTeamRef,
    imgRef,
  });

  // 스크롤 클리핑 효과 훅 사용
  const imageClip = useScrollClippingEffect(backgroundImageRef);

  return (
    <div
      ref={backgroundImageRef}
      className="relative w-full h-screen overflow-hidden max-md:h-auto"
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
