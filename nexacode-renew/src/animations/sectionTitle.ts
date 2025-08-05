import { useEffect } from "react";
import gsap from "gsap";

export const useSectionTitleAnimation = (
  sectionTitleRef: React.RefObject<HTMLDivElement>
) => {
  // has_text_move_anim 애니메이션
  useEffect(() => {
    if (sectionTitleRef && sectionTitleRef.current) {
      const element = sectionTitleRef.current;
      const delay = element.getAttribute("data-delay") || "0.01";

      // 텍스트를 줄 단위로 분할
      const lines = element.querySelectorAll(".section-title-line");

      gsap.set(element, { perspective: 400 });

      // 초기 상태 설정
      gsap.set(lines, {
        opacity: 0,
        rotationX: -80,
        transformOrigin: "top center -50",
      });

      // 애니메이션 실행
      gsap.to(lines, {
        duration: 0.5,
        delay: parseFloat(delay),
        opacity: 1,
        rotationX: 0,
        force3D: true,
        stagger: 0.1,
        scrollTrigger: {
          trigger: element,
          start: "bottom 95%",
          end: "top 20%",
          scroller: "body",
          markers: false,
          toggleActions: "play none none reset",
        },
      });
    }
  }, [sectionTitleRef]);
};
