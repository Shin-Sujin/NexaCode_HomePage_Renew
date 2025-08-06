// src/animations/animations_StartPage.ts

"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const useBounceSection1 = (bounceRef: React.RefObject<HTMLElement>) => {
  useEffect(() => {
    if (bounceRef && bounceRef.current) {
      gsap.fromTo(
        bounceRef.current,
        { y: -150, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          ease: "bounce.out",
          duration: 1,
          delay: 0.3,
          scrollTrigger: {
            trigger: bounceRef.current,
            start: "top 80%",
            toggleActions: "play none none reset",
          },
        }
      );
    }
  }, [bounceRef]);
};

export const useBounceSection2 = (bounceRef: React.RefObject<HTMLElement>) => {
  useEffect(() => {
    if (bounceRef && bounceRef.current) {
      gsap.fromTo(
        bounceRef.current,
        { y: -150, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          ease: "bounce.out",
          duration: 1,
          delay: 0.5,
          scrollTrigger: {
            trigger: bounceRef.current,
            start: "top 80%",
            toggleActions: "play none none reset",
          },
        }
      );
    }
  }, [bounceRef]);
};

export const useBounceSection3 = (bounceRef: React.RefObject<HTMLElement>) => {
  useEffect(() => {
    if (bounceRef && bounceRef.current) {
      gsap.fromTo(
        bounceRef.current,
        { y: -150, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          ease: "bounce.out",
          duration: 1,
          delay: 1,
          scrollTrigger: {
            trigger: bounceRef.current,
            start: "top 80%",
            toggleActions: "play none none reset",
          },
        }
      );
    }
  }, [bounceRef]);
};
