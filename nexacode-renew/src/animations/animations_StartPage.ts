// src/animations/animations_StartPage.ts

"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";

gsap.registerPlugin(ScrollTrigger);

type Params = {
  fadeRef: React.RefObject<HTMLElement>;
  creativeRef: React.RefObject<HTMLElement>;
  sectionTitleRef: React.RefObject<HTMLElement>;
};

export const useStartPageAnimations = ({
  fadeRef,
  creativeRef,
  sectionTitleRef,
}: Params) => {
  // 기본 애니메이션들
  useEffect(() => {
    if (fadeRef && fadeRef.current) {
      gsap.fromTo(
        fadeRef.current,
        { y: -150, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          ease: "bounce.out",
          duration: 2,
        }
      );
    }

    if (creativeRef && creativeRef.current) {
      const split = new SplitType(creativeRef.current, {
        types: "lines,words,chars",
        tagName: "span",
      });

      gsap.from(split.chars, {
        x: "100%",
        opacity: 0,
        duration: 0.7,
        ease: "circ.out",
        stagger: 0.07,
      });
    }
  }, [fadeRef, creativeRef]);

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
        },
      });
    }
  }, [sectionTitleRef]);

  // has_fade_anim 애니메이션
  useEffect(() => {
    const fadeElements = document.querySelectorAll(".has_fade_anim");
    fadeElements.forEach((element) => {
      const fadeFrom = element.getAttribute("data-fade-from") || "bottom";
      const onScroll = element.getAttribute("data-on-scroll") || "1";
      const duration = element.getAttribute("data-duration") || "0.5";
      const fadeOffset = element.getAttribute("data-fade-offset") || "30";
      const delay = element.getAttribute("data-delay") || "0.01";
      const ease = element.getAttribute("data-ease") || "power2.out";

      // 초기 상태 설정
      if (fadeFrom === "bottom") {
        gsap.set(element, { y: parseInt(fadeOffset), opacity: 0 });
      } else if (fadeFrom === "top") {
        gsap.set(element, { y: -parseInt(fadeOffset), opacity: 0 });
      } else if (fadeFrom === "left") {
        gsap.set(element, { x: -parseInt(fadeOffset), opacity: 0 });
      } else if (fadeFrom === "right") {
        gsap.set(element, { x: parseInt(fadeOffset), opacity: 0 });
      } else if (fadeFrom === "in") {
        gsap.set(element, { opacity: 0 });
      }

      if (onScroll === "1") {
        const scrollTriggerConfig = {
          trigger: element,
          start: "top 99%", // 트리거 포인트 조정
          scroller: "body",
          toggleActions: "play none none none",
          markers: false,
        };

        if (fadeFrom === "bottom") {
          gsap.to(element, {
            y: 0,
            opacity: 1,
            ease: ease,
            duration: parseFloat(duration),
            delay: parseFloat(delay),
            scrollTrigger: scrollTriggerConfig,
          });
        } else if (fadeFrom === "top") {
          gsap.to(element, {
            y: 0,
            opacity: 1,
            ease: ease,
            duration: parseFloat(duration),
            delay: parseFloat(delay),
            scrollTrigger: scrollTriggerConfig,
          });
        } else if (fadeFrom === "left") {
          gsap.to(element, {
            x: 0,
            opacity: 1,
            ease: ease,
            duration: parseFloat(duration),
            delay: parseFloat(delay),
            scrollTrigger: scrollTriggerConfig,
          });
        } else if (fadeFrom === "right") {
          gsap.to(element, {
            x: 0,
            opacity: 1,
            ease: ease,
            duration: parseFloat(duration),
            delay: parseFloat(delay),
            scrollTrigger: scrollTriggerConfig,
          });
        } else if (fadeFrom === "in") {
          gsap.to(element, {
            opacity: 1,
            ease: ease,
            duration: parseFloat(duration),
            delay: parseFloat(delay),
            scrollTrigger: scrollTriggerConfig,
          });
        }
      } else {
        // 스크롤 트리거 없이 즉시 실행
        if (fadeFrom === "bottom") {
          gsap.from(element, {
            y: parseInt(fadeOffset),
            opacity: 0,
            ease: ease,
            duration: parseFloat(duration),
            delay: parseFloat(delay),
          });
        } else if (fadeFrom === "top") {
          gsap.from(element, {
            y: -parseInt(fadeOffset),
            opacity: 0,
            ease: ease,
            duration: parseFloat(duration),
            delay: parseFloat(delay),
          });
        } else if (fadeFrom === "left") {
          gsap.from(element, {
            x: -parseInt(fadeOffset),
            opacity: 0,
            ease: ease,
            duration: parseFloat(duration),
            delay: parseFloat(delay),
          });
        } else if (fadeFrom === "right") {
          gsap.from(element, {
            x: parseInt(fadeOffset),
            opacity: 0,
            ease: ease,
            duration: parseFloat(duration),
            delay: parseFloat(delay),
          });
        } else if (fadeFrom === "in") {
          gsap.from(element, {
            opacity: 0,
            ease: ease,
            duration: parseFloat(duration),
            delay: parseFloat(delay),
          });
        }
      }
    });
  }, []);
};

export const useScrollClippingEffect = (ref: React.RefObject<HTMLElement>) => {
  useEffect(() => {
    if (ref && ref.current) {
      const element = ref.current;
      let clipPath = "inset(0% 0% 0% 0%)";

      const updateClip = () => {
        const rect = element.getBoundingClientRect();
        const viewportHeight = window.innerHeight;
        const elementTop = rect.top;
        const elementHeight = rect.height;
        const elementBottom = rect.bottom;

        // 요소가 뷰포트에 들어오기 시작할 때 (상단에서 등장)
        if (elementTop < viewportHeight && elementTop > -elementHeight) {
          const progress =
            (viewportHeight - elementTop) / (viewportHeight + elementHeight);
          const clipPercentage = Math.max(0, Math.min(100, progress * 100));

          // 상단에서 등장하는 효과 (상단 100px이 가려져 있다가 나타남)
          const topClip = Math.max(0, 30 - clipPercentage * 1.4); // 1.2배로 조정하여 더 부드럽게
          const bottomClip = 0;

          clipPath = `inset(${topClip}% 0% ${bottomClip}% 0%)`;
        }
        // 요소가 뷰포트를 벗어나기 시작할 때 (하단에서 퇴장)
        else if (elementBottom < viewportHeight && elementBottom > 0) {
          const progress =
            (viewportHeight - elementBottom) / (viewportHeight + elementHeight);
          const clipPercentage = Math.max(0, Math.min(100, progress * 100));

          // 하단에서 퇴장하는 효과 (하단 100px이 가려짐)
          const topClip = 0;
          const bottomClip = Math.max(0, 10 - clipPercentage * 1.2);

          clipPath = `inset(${topClip}% 0% ${bottomClip}% 0%)`;
        }
        // 요소가 완전히 뷰포트 위로 나갔을 때
        else if (elementTop <= -elementHeight) {
          clipPath = "inset(100% 0% 0% 0%)";
        }
        // 요소가 뷰포트 아래에 있을 때
        else if (elementBottom >= viewportHeight + elementHeight) {
          clipPath = "inset(0% 0% 100% 0%)";
        }
        // 요소가 뷰포트 중앙에 있을 때 (완전히 보임)
        else if (elementTop >= 0 && elementBottom <= viewportHeight) {
          clipPath = "inset(0% 0% 0% 0%)";
        }

        element.style.clipPath = clipPath;
      };

      const handleScroll = () => {
        requestAnimationFrame(updateClip);
      };

      window.addEventListener("scroll", handleScroll);
      updateClip(); // 초기 상태 설정

      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, [ref]);
};

// FooterArea h2 태그용 3D 회전 애니메이션
export const useFooterTitleAnimation = (ref: React.RefObject<HTMLElement>) => {
  useEffect(() => {
    if (ref && ref.current) {
      const element = ref.current;

      // 초기 상태 설정 - 텍스트가 엎드려있도록
      gsap.set(element, {
        opacity: 0,
        rotationX: 100,
        transformOrigin: "top center",
      });

      // 스크롤 애니메이션 - 엎드려있다가 일어나는 효과
      gsap.fromTo(
        element,
        {
          opacity: 0,
          rotationX: 100,
          transformOrigin: "top center",
        },
        {
          opacity: 1,
          rotationX: 0,
          duration: 1.5,
          ease: "power3.out",
          scrollTrigger: {
            trigger: element,
            start: "top 99%",
            end: "bottom 20%",
            toggleActions: "play none none none",
            markers: false,
          },
        }
      );
    }
  }, [ref]);
};
