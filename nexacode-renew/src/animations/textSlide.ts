// src/animations/animations_StartPage.ts

"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type Params = {
  slideRef: React.RefObject<HTMLElement>;
};

export const useTextSlide = ({ slideRef }: Params) => {
  useEffect(() => {
    if (slideRef.current) {
      const element = slideRef.current;
      const totalWidth = element.children[0].getBoundingClientRect().width / 3;

      gsap.to(element, {
        x: -totalWidth,
        duration: 55,
        ease: "linear",
        repeat: -1,
        modifiers: {
          x: gsap.utils.unitize((x) => parseFloat(x) % -totalWidth),
        },
      });
    }
  }, [slideRef]);
};
