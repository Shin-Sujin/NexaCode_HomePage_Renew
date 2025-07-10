"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type SlideInFromRightParams = {
  targetRef: React.RefObject<HTMLElement>;
  delay?: number;
  duration?: number;
  x?: number;
};

export const useSlideInFromRight = ({
  targetRef,
  delay = 0,
  duration = 1,
  x = 100,
}: SlideInFromRightParams) => {
  useEffect(() => {
    if (targetRef.current) {
      gsap.fromTo(
        targetRef.current,
        {
          opacity: 0,
          x: x, // 오른쪽에서 시작
          scale: 0.95,
        },
        {
          opacity: 1,
          x: 0, // 원래 위치로
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
