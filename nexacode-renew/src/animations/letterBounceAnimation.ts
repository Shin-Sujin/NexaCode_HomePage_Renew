import { useEffect } from "react";
import gsap from "gsap";

export const useLetterBounceAnimation = (
  triggerRef: React.RefObject<HTMLElement>
) => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      if (!triggerRef.current) return;

      const letters = Array.from(triggerRef.current.querySelectorAll("span"));
      if (letters.length === 0) return;

      gsap.set(letters, { y: 0 });

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const tl = gsap.timeline();
              letters.forEach((letter, index) => {
                tl.to(
                  letter,
                  {
                    y: -50,
                    duration: 0.4,
                    yoyo: true,
                    repeat: 2,
                  },
                  index * 0.2
                );
              });
            }
          });
        },
        {
          threshold: 0.1,
          rootMargin: "0px 0px -5% 0px",
        }
      );

      observer.observe(triggerRef.current);
    }, 100); // 살짝 딜레이 줌

    return () => clearTimeout(timeout);
  }, [triggerRef]);
};
