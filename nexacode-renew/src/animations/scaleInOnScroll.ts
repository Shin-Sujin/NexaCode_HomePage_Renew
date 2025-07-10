"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type ScaleInParams = {
  targetRef: React.RefObject<HTMLElement>;
  delay?: number;
  duration?: number;
  scale?: number;
};

export const useScaleInOnScroll = ({
  targetRef,
  delay = 0,
  duration = 1,
  scale = 0.5,
}: ScaleInParams) => {
  useEffect(() => {
    if (targetRef.current) {
      gsap.fromTo(
        targetRef.current,
        {
          opacity: 0,
          scale: scale, // 작게 시작
        },
        {
          opacity: 1,
          scale: 1, // 원래 크기로
          duration: duration,
          delay: delay,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: targetRef.current,
            start: "bottom 95%", // 화면 하단에서 약간이라도 등장하는 순간
            end: "top 20%",
            scrub: true, // 스크롤과 동기화
            markers: false,
          },
        }
      );
    }
  }, [targetRef, delay, duration, scale]);
};
