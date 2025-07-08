// src/components/Header.tsx
"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function DesignTrial() {
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (textRef.current) {
      // 초기 상태 설정 - 텍스트가 엎드려있도록
      gsap.set(textRef.current, {
        opacity: 1,
        rotationX: 100, // 글씨가 엎드려있는 상태 (반대 방향)
        transformOrigin: "top center", // 회전축을 맨 위로
      });

      // 스크롤 애니메이션 - 엎드려있다가 일어나는 효과
      gsap.fromTo(
        textRef.current,
        {
          opacity: 0,
          rotationX: 100, // 엎드려있는 상태에서 시작 (반대 방향)
          transformOrigin: "top center", // 회전축을 맨 위로
        },
        {
          opacity: 1,
          rotationX: 0, // 일어선 상태로
          duration: 5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: textRef.current,
            start: "top 80%", // 화면 하단 80% 지점에서 시작
            end: "bottom 20%", // 화면 상단 20% 지점에서 끝
            toggleActions: "play none none reverse", // 스크롤 방향에 따라 애니메이션 반전
          },
        }
      );
    }
  }, []);

  return (
    <div
      ref={textRef}
      style={{
        color: "#121212",
        fontFamily: "Kanit",
        fontSize: "10rem",
        fontStyle: "normal",
        fontWeight: 600,
        lineHeight: "1rem",
        textTransform: "uppercase",
        boxSizing: "border-box",
        overflow: "hidden",
        position: "relative",
        width: "100%",
        height: "50vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        perspective: "1000px",
        // 초기 상태에서 텍스트가 보이도록 설정
        opacity: 1,
      }}
    >
      안녕하세요
    </div>
  );
}
