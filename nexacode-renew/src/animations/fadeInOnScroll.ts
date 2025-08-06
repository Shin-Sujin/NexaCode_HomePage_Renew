"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type FadeInParams = {
  targetRef: React.RefObject<HTMLElement>;
  delay?: number;
  duration?: number;
  y?: number;
};

export const useFadeInOnScroll = ({
  targetRef,
  delay = 0,
  duration = 1,
  y = 50,
}: FadeInParams) => {
  useEffect(() => {
    if (targetRef.current) {
      gsap.fromTo(
        targetRef.current,
        {
          opacity: 0,
          y: y, // 아래에서 시작
          scale: 0.95, // 약간 작게 시작
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: duration,
          delay: delay,
          ease: "power3.out",
          scrollTrigger: {
            trigger: targetRef.current,
            start: "bottom 95%", // 화면 하단에서 약간이라도 등장하는 순간
            end: "top 20%",
            markers: false,
          },
        }
      );
    }
  }, [targetRef, delay, duration, y]);
};

type FadeInDirectionParams = FadeInParams & { direction: "left" | "right" };

export const useFadeInOnScrollFromDirection = ({
  targetRef,
  delay = 0,
  duration = 1,
  direction = "right",
}: FadeInDirectionParams) => {
  const x = direction === "right" ? 50 : -50;

  useEffect(() => {
    if (targetRef.current) {
      gsap.fromTo(
        targetRef.current,
        {
          opacity: 0,
          x: x, // 방향에 따라 시작 위치 설정
          scale: 0.95, // 약간 작게 시작
        },
        {
          opacity: 1,
          x: 0,
          scale: 1,
          duration: duration,
          delay: delay,
          ease: "power3.out",
          scrollTrigger: {
            trigger: targetRef.current,
            start: "bottom 95%", // 화면 하단에서 약간이라도 등장하는 순간
            end: "top 20%",
            markers: false,
          },
        }
      );
    }
  }, [targetRef, delay, duration, x]);
};
