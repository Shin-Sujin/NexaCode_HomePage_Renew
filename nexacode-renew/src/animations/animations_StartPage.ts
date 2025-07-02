// src/animations/animations_StartPage.ts

"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";

gsap.registerPlugin(ScrollTrigger);

type Params = {
  fadeRef: React.RefObject<HTMLElement>;
  textRef: React.RefObject<HTMLElement>;
  creativeRef: React.RefObject<HTMLElement>;
  studioRef: React.RefObject<HTMLElement>;
  //   imageRef: React.RefObject<HTMLElement>;
};

export const useStartPageAnimations = ({
  fadeRef,
  textRef,
  creativeRef,
  studioRef,
}: //   imageRef,
Params) => {
  useEffect(() => {
    if (fadeRef.current) {
      gsap.fromTo(
        fadeRef.current,
        { y: -150, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          ease: "bounce.out",
          duration: 2,
          scrollTrigger: {
            trigger: fadeRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );
    }

    if (textRef.current) {
      const split = new SplitType(textRef.current, {
        types: "lines,words,chars",
        tagName: "span",
      });

      gsap.from(split.chars, {
        x: "100%",
        opacity: 0,
        duration: 0.5,
        ease: "circ.out",
        stagger: 0.01,
      });
    }

    if (creativeRef.current) {
      const split = new SplitType(creativeRef.current, {
        types: "lines,words,chars",
        tagName: "span",
      });

      gsap.from(split.chars, {
        x: "100%",
        opacity: 0,
        duration: 0.7,
        ease: "circ.out",
        stagger: 0.05,
      });
    }

    if (studioRef.current) {
      const split = new SplitType(studioRef.current, {
        types: "lines,words,chars",
        tagName: "span",
      });

      gsap.from(split.chars, {
        x: "100%",
        opacity: 0,
        duration: 0.8,
        ease: "circ.out",
        stagger: 0.05,
      });
    }
    // if (imageRef.current) {
    //   gsap.from(imageRef.current, {
    //     y: -10,
    //     opacity: 0,
    //     duration: 1,
    //     ease: "circ.out",
    //     delay: 0.3, // Split 애니메이션과 자연스럽게 이어지도록
    //   }
    // );
    // }
  }, [fadeRef, textRef, creativeRef, studioRef]);
};
