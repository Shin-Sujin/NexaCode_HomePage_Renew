"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type FadeInParams = {
  targetRef: React.RefObject<HTMLElement>;
};

export const useFadeInOnScroll = ({ targetRef }: FadeInParams) => {
  useEffect(() => {
    if (targetRef.current) {
      gsap.fromTo(
        targetRef.current,
        { opacity: 0, y: 20 }, // 처음에는 안 보이고 아래에 위치
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: targetRef.current,
            start: "top 99%", // 스크롤 시 뷰포트 80% 도달 시 애니메이션 시작
            toggleActions: "play none none none",
          },
        }
      );
    }
  }, [targetRef]);
};
