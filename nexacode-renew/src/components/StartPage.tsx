"use client";

import React, { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { useStartPageAnimations } from "@/animations/animations_StartPage";
import { useTextSlide } from "@/animations/textSlide";
import { useFadeInOnScroll } from "@/animations/fadeInOnScroll";
import "splitting/dist/splitting.css"; // 필요 시
gsap.registerPlugin(ScrollTrigger);

export default function StartPage() {
  const fadeRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const creativeRef = useRef<HTMLDivElement>(null);
  const studioRef = useRef<HTMLDivElement>(null);
  const slideRef = useRef<HTMLDivElement>(null);
  const targetRef = useRef<HTMLDivElement>(null);
  useStartPageAnimations({
    fadeRef,
    textRef,
    creativeRef,
    studioRef,
    // imageRef,
  });
  useTextSlide({ slideRef });
  useFadeInOnScroll({ targetRef });
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
      <div className="relative w-full" style={{ height: "90vh" }}>
        {/* ================================ 동영상 ================================ */}
        <video
          src="/videoes/production_id.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover"
          style={{ zIndex: 0 }}
        />
        {/* ================================ 검은색 오버레이 ================================ */}
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
            {/* ================================ 1번 요소 ================================ */}
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
            {/* ================================ 2번 요소 ================================ */}
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

        {/* ================================ 3번 요소 ================================ */}
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

      {/* ================================ 하단 text-slide 바 ================================ */}
      <div
        ref={targetRef}
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
      {/* ================================ 흰색 배경 시작(container 안에 있음) ================================ */}
      <div className="container">
        <div className="pt-36 pb-36 section-spacing-top">
          <div className="flex flex-row">
            <div className="subtitle-wrappe w-8/12">
              <div
                style={{
                  color: "#121212",
                  fontFamily: "Kanit",
                  fontSize: "1rem",
                  fontStyle: "normal",
                  fontWeight: 600,
                  lineHeight: "1rem",
                  textTransform: "uppercase",
                }}
              >
                01.WHO WE ARE
              </div>
            </div>
            <div className="flex flex-col">
              <h2 className="section-title " style={{ perspective: "400px" }}>
                <div className="section-title-line">
                  We provide brilliant idea to grow the
                </div>
                <div className="section-title-line">
                  startup — agency with your sharp
                </div>
                <div className="section-title-line">brand.</div>
              </h2>
              <div className="mt-20">
                <div className="flex flex-row items-start">
                  <div className="info-text">
                    <div className="flex flex-col w-72">
                      <div
                        style={{
                          color: "#121212",
                          fontFamily: "Inter",
                          fontSize: "16rem",
                          fontStyle: "normal",
                          fontWeight: 400,
                          lineHeight: "13.125rem",
                        }}
                      >
                        15
                      </div>
                      <div
                        style={{
                          color: "#555",
                          fontFamily: "Kanit",
                          fontSize: "1.25rem",
                          fontStyle: "normal",
                          fontWeight: 600,
                          lineHeight: "1.7125rem",
                        }}
                      >
                        We helped to get companies with $15M+ funding
                      </div>
                    </div>
                  </div>
                  <div
                    style={{
                      width: "2px",
                      minHeight: "200px",
                      background: "rgba(18, 18, 18, 0.08)",
                      margin: "0 5rem",
                      alignSelf: "stretch",
                    }}
                  ></div>

                  <div className="flex flex-col">
                    <div
                      style={{
                        color: "#555",
                        fontFamily: "Kanit",
                        fontSize: "1.125rem",
                        fontStyle: "normal",
                        fontWeight: 600,
                        lineHeight: "1.58625rem",
                        marginBottom: "2.5rem",
                      }}
                    >
                      Consumers today rely heavily on digital means to research
                      products. We research a brand of bldend engaging with it,
                      according to the meanwhile, 51% of consumers{" "}
                    </div>
                    <button
                      style={{
                        display: "flex",
                        width: "10.625rem",
                        height: "10.625rem",
                        padding: "0rem 2.68125rem 0rem 2.69313rem",
                        justifyContent: "center",
                        alignItems: "center",
                        borderRadius: "5.3125rem",
                        background: "#C9F31D",
                        color: "#121212",
                        textAlign: "center",
                        fontFamily: "Kanit",
                        fontSize: "1.125rem",
                        fontStyle: "normal",
                        fontWeight: 600,
                        lineHeight: "1.18125rem",
                        border: "none",
                        cursor: "pointer",
                      }}
                    >
                      Explore us
                      <br />
                      more
                    </button>
                  </div>
                </div>
              </div>{" "}
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-96 bg-red-500">
        <div className="w-full h-full bg-blue-500">안녕하세요</div>
      </div>
    </div>
  );
}
