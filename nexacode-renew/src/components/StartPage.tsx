"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";

import "splitting/dist/splitting.css"; // 필요 시
gsap.registerPlugin(ScrollTrigger);

export default function StartPage() {
  const fadeRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (fadeRef.current) {
      gsap.fromTo(
        fadeRef.current,
        { y: -150, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          ease: "bounce.out",
          duration: 2,
          scrollTrigger: {
            trigger: fadeRef.current,
            start: "top 80%", // 요소의 top이 viewport의 80% 지점에 올 때 시작
            toggleActions: "play none none none", // 스크롤 진입 시 1회 실행
          },
        }
      );
    }
  }, []);

  useEffect(() => {
    if (textRef.current) {
      const split = new SplitType(textRef.current, {
        types: "lines,words,chars",
        tagName: "span",
      });

      gsap.from(split.chars, {
        x: "100%",
        opacity: 0,
        duration: 0.5,
        ease: "circ.out",
        stagger: 0.01,
      });
    }
  }, []);

  return (
    <div className="w-full flex flex-col items-center">
      <div className="relative w-full" style={{ height: "102vh" }}>
        {/* 동영상 */}
        <video
          src="/videoes/production_id.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover"
          style={{ zIndex: 0 }}
        />
        {/* 검은색 오버레이 */}
        <div
          className="absolute top-0 left-0 w-full h-full"
          style={{
            background: "#000",
            opacity: 0.8,
            zIndex: 1,
          }}
        />
      </div>
      <div
        className="absolute mt-36 ml-16 top-0 left-0 flex flex-row gap-24 p-10"
        style={{ zIndex: 2 }}
      >
        {/* 주소 부분 */}
        <div
          ref={fadeRef}
          className="absolute flex flex-col gap-4"
          style={{ zIndex: 2, width: 450, maxWidth: "90vw" }}
        >
          {/* 윗부분 선 */}
          <div
            style={{
              borderTop: "1px solid #fff",
              width: "100%",
              marginBottom: 8,
            }}
          />
          {/* 텍스트 + 화살표 한 줄 */}
          <div
            className="flex items-center justify-between"
            style={{ width: "100%" }}
          >
            <span
              style={{
                color: "#fff",
                fontWeight: 400,
                fontSize: 20,
                letterSpacing: 1,
                whiteSpace: "nowrap",
              }}
            >
              Arolax™
            </span>
            <span style={{ color: "#fff", fontSize: 18, whiteSpace: "nowrap" }}>
              ↗
            </span>
          </div>
          {/* 주소 */}
          <div
            style={{
              color: "#fff",
              fontFamily: "Kanit",
              fontWeight: 700,
              fontSize: 18,
              lineHeight: 1.3,
            }}
          >
            1772 Street Charleston,
            <br />
            New York
          </div>
        </div>
        {/* 오른쪽: 설명 텍스트 */}
        <div
          ref={textRef}
          style={{
            display: "block",
            width: "25rem",
            color: "#FFF",
            fontFamily: "Inter",
            fontSize: "1.4rem",
            fontStyle: "normal",
            fontWeight: 400,
            lineHeight: "1.725rem",
            marginLeft: "55rem",
            letterSpacing: "0.05em",
            whiteSpace: "normal",
            wordBreak: "break-word",
          }}
        >
          We believe that the surest measure of success is when our partners
          with us more than half It&apos;s more than just the visuals.
          We&apos;re here to support your growth.
        </div>
      </div>

      <div>안녕하세요</div>
    </div>
  );
}
