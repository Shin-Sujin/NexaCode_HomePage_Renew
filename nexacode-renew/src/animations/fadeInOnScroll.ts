"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type FadeInParams = {
  targetRef: React.RefObject<HTMLElement>;
  delay?: number;
  duration?: number;
  y?: number;
};

export const useFadeInOnScroll = ({
  targetRef,
  delay = 0,
  duration = 1,
  y = 50,
}: FadeInParams) => {
  useEffect(() => {
    if (targetRef.current) {
      gsap.fromTo(
        targetRef.current,
        {
          opacity: 0,
          y: y, // 아래에서 시작
          scale: 0.9, // 약간 작게 시작
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: duration,
          delay: delay,
          ease: "power3.out",
          scrollTrigger: {
            trigger: targetRef.current,
            start: "bottom 95%", // 화면 하단에서 약간이라도 등장하는 순간
            end: "top 20%",
            markers: false,
          },
        }
      );
    }
  }, [targetRef, delay, duration, y]);
};

// type FadeInDirectionParams = FadeInParams & { direction: "left" | "right" };
//
// export const useFadeInOnScrollFromDirection = ({
//   targetRef,
//   delay = 0,
//   duration = 1,
//   direction = "right",
// }: FadeInDirectionParams) => {
//   const x = direction === "right" ? 50 : -50;

//   useEffect(() => {
//     if (targetRef.current) {
//       gsap.fromTo(
//         targetRef.current,
//         {
//           opacity: 0,
//           x: x, // 방향에 따라 시작 위치 설정
//           scale: 0.95, // 약간 작게 시작
//         },
//         {
//           opacity: 1,
//           x: 0,
//           scale: 1,
//           duration: duration,
//           delay: delay,
//           ease: "power3.out",
//           scrollTrigger: {
//             trigger: targetRef.current,
//             start: "bottom 99%", // 화면 하단에서 약간이라도 등장하는 순간
//             end: "top 10%",
//             markers: false,
//           },
//         }
//       );
//     }
//   }, [targetRef, delay, duration, x]);
// };

type IntersectionFadeInParams = {
  ref: React.RefObject<HTMLElement>;
  delay?: number;
  duration?: number;
  y?: number;
};

export const useFadeInIntersection = ({
  ref,
  delay = 0,
  duration = 1,
  y = 50,
}: IntersectionFadeInParams) => {
  useEffect(() => {
    if (!ref.current) return;

    const el = ref.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          gsap.to(el, {
            opacity: 1,
            y: 0,
            delay, // ✅ 딜레이 추가
            duration,
            ease: "power3.out",
          });
          observer.unobserve(el);
        }
      },
      {
        threshold: 0.1,
      }
    );

    gsap.set(el, { opacity: 0, y }); // 초기 상태 설정

    observer.observe(el);

    return () => {
      observer.unobserve(el);
    };
  }, [ref, delay, duration, y]);
};
