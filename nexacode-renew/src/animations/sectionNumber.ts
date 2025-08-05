import { useEffect } from "react";
import gsap from "gsap";

export const useSectionNumberAnimation = (
  sectionNumberRef: React.RefObject<HTMLDivElement>
) => {
  useEffect(() => {
    if (sectionNumberRef && sectionNumberRef.current) {
      const element = sectionNumberRef.current;
      const text = element.textContent || "";
      const stagger = element.getAttribute("data-stagger") || "0.05";
      const delay = element.getAttribute("data-delay") || "0.3";

      // 텍스트를 개별 문자로 분할
      element.innerHTML = text
        .split("")
        .map((char) =>
          char === " " ? " " : `<span class="char">${char}</span>`
        )
        .join("");

      const chars = element.querySelectorAll(".char");

      gsap.from(chars, {
        duration: 1,
        delay: parseFloat(delay),
        autoAlpha: 0,
        stagger: parseFloat(stagger),
        ease: "power2.out",
        scrollTrigger: {
          trigger: element,
          start: "bottom 95%",
          end: "top 20%",
          scroller: "body",
          toggleActions: "play none none reset",
          markers: false,
        },
      });
    }
  }, [sectionNumberRef]);
};
