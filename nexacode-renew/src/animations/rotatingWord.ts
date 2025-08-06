import { useEffect } from "react";
import gsap from "gsap";

export const useRotatingAnimation = (
  elementRef: React.RefObject<HTMLSpanElement>,
  triggerRef: React.RefObject<HTMLElement>
) => {
  useEffect(() => {
    if (elementRef && elementRef.current && triggerRef && triggerRef.current) {
      gsap.fromTo(
        elementRef.current,
        {
          rotation: -75,
          y: -80,
          opacity: 0,
          transformOrigin: "left center",
        },
        {
          scrollTrigger: {
            trigger: triggerRef.current,
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
    }
  }, [elementRef, triggerRef]);
};
