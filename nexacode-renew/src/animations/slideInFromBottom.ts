"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type SlideInFromBottomParams = {
  targetRef: React.RefObject<HTMLElement>;
  delay?: number;
  duration?: number;
  y?: number;
};

export const useSlideInFromBottom = ({
  targetRef,
  delay = 0,
  duration = 1,
  y = 100,
}: SlideInFromBottomParams) => {
  useEffect(() => {
    if (targetRef.current) {
      gsap.fromTo(
        targetRef.current,
        {
          opacity: 0,
          y: y, // 아래에서 시작
          scale: 0.95,
        },
        {
          opacity: 1,
          y: 0, // 원래 위치로
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
