import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const createRotatingAnimation = (
  element: HTMLSpanElement,
  trigger: HTMLElement
) => {
  gsap.fromTo(
    element,
    {
      rotation: -75,
      y: -80,
      opacity: 0,
      transformOrigin: "left center",
    },
    {
      scrollTrigger: {
        trigger: trigger,
        start: "top 85%",
        toggleActions: "play none none reset",
      },
      rotation: 0,
      y: 0,
      opacity: 1,
      ease: "bounce.out",
      duration: 1.5,
    }
  );
};
