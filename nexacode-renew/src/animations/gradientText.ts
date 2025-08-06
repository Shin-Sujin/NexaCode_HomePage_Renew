import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

export const useGradientTextAnimation = (
  textRef: React.RefObject<HTMLParagraphElement>
) => {
  useEffect(() => {
    if (textRef && textRef.current) {
      ScrollTrigger.matchMedia({
        "(min-width: 992px)": () => {
          gsap.to(textRef.current, {
            duration: 1.5,
            ease: "none",
            "-webkit-mask-image":
              "-webkit-linear-gradient(left, rgba(0,0,0,2) 100%, rgba(0,0,0,1) 100%",
            scrollTrigger: {
              trigger: textRef.current,
              start: "top 80%",
              toggleActions: "play none none reset",
            },
          });
        },
      });
    }
  }, [textRef]);
};
