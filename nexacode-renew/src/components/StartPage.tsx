"use client";

import React, { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Image from "next/image";
import { useStartPageAnimations } from "@/animations/animations_StartPage";
import { useTextSlide } from "@/animations/textSlide";

import "splitting/dist/splitting.css"; // 필요 시
gsap.registerPlugin(ScrollTrigger);

export default function StartPage() {
  const fadeRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const creativeRef = useRef<HTMLDivElement>(null);
  const studioRef = useRef<HTMLDivElement>(null);
  const slideRef = useRef<HTMLDivElement>(null);
  // const imageRef = useRef<HTMLDivElement>(null);
  useStartPageAnimations({
    fadeRef,
    textRef,
    creativeRef,
    studioRef,
    // imageRef,
  });
  useTextSlide({ slideRef });
  const navTexts = [
    "BRANDING",
    "AGENCY",
    "TYPOGRAPHY",
    "DESIGN",
    "INTERACTION",
    "CREATIVITY",
    "DEVELOPMENT",
    "STUDIO",
    "STRATEGY",
  ];

  const repeatedNavTexts = Array(3).fill(navTexts).flat();
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
        className="absolute mt-36 ml-16 top-0 left-0 flex flex-col gap-12 p-10"
        style={{ zIndex: 2 }}
      >
        <div>
          <div className="flex flex-row gap-24">
            {/* 1번 요소 */}
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
                <span
                  style={{ color: "#fff", fontSize: 18, whiteSpace: "nowrap" }}
                >
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
            {/* 2번 요소 */}
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
        </div>

        {/* 3번 요소 */}
        <div
          style={{
            width: "60rem",
            height: "28rem",
            color: "#FFF",
            fontFamily: "beatricetrial",
            fontSize: "12rem",
            fontStyle: "normal",
            fontWeight: 600,
            lineHeight: "10rem",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          {/* CREATIVE (첫 줄) */}
          <div ref={creativeRef} style={{ letterSpacing: "0.05em" }}>
            CREATIVE
          </div>

          {/* STUDI + 이미지 (둘째 줄) */}
          <div style={{ display: "flex", alignItems: "center" }}>
            <div ref={studioRef} style={{ letterSpacing: "0.05em" }}>
              STUDI
            </div>
            <div>
              <Image
                src="/images/o-switch.webp"
                alt="switch"
                width={160}
                height={68}
                style={{
                  height: "8.5rem",
                  marginLeft: "0.5rem",
                  width: "auto",
                }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* 하단 text-slide 바 */}
      <div
        style={{
          height: "4rem", // 원하는 높이로 조정
          background: "#C9F31D",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 10,
          width: "100%",
        }}
        className="w-full overflow-hidden"
      >
        <div ref={slideRef} style={{ display: "flex", alignItems: "center" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "2.8rem",
            }}
          >
            {repeatedNavTexts.map((text, idx) => (
              <div key={idx} className="flex items-center">
                <span className="nav-bar-text mr-5">{text}</span>
                <Image
                  src="/images/star.webp"
                  alt="star"
                  width={20}
                  height={20}
                  className="nav-bar-icon"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
