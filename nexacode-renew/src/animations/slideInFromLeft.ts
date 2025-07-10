"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type SlideInFromLeftParams = {
  targetRef: React.RefObject<HTMLElement>;
  delay?: number;
  duration?: number;
};

export const useSlideInFromLeft = ({
  targetRef,
  delay = 0,
  duration = 1,
}: SlideInFromLeftParams) => {
  useEffect(() => {
    if (targetRef.current) {
      gsap.fromTo(
        targetRef.current,
        {
          opacity: 0,
          x: -100, // 왼쪽에서 시작
        },
        {
          opacity: 1,
          x: 0, // 원래 위치로
          duration: duration,
          delay: delay,
          ease: "power3.out",
          scrollTrigger: {
            trigger: targetRef.current,
            start: "top 99%", // 스크롤 시 뷰포트 80% 도달 시 애니메이션 시작
            toggleActions: "play none none none",
          },
        }
      );
    }
  }, [targetRef, delay, duration]);
};
