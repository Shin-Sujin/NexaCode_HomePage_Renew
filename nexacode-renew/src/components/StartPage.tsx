"use client";

import React, { useRef, useEffect } from "react";
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
  const whoWeAreRef = useRef<HTMLDivElement>(null);
  const sectionTitleRef = useRef<HTMLDivElement>(null);

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

  // has_char_anim 애니메이션 직접 구현
  useEffect(() => {
    if (whoWeAreRef.current) {
      const element = whoWeAreRef.current;
      const text = element.textContent || "";
      const stagger = element.getAttribute("data-stagger") || "0.05";
      const translateX = element.getAttribute("data-translateX") || "20";
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
        x: parseFloat(translateX),
        autoAlpha: 0,
        stagger: parseFloat(stagger),
        ease: "power2.out",
        scrollTrigger: {
          trigger: element,
          start: "top 80%", // 더 일찍 시작
          end: "bottom 20%", // 끝 지점 설정
          scroller: "body",
          toggleActions: "play none none reverse", // 스크롤 올릴 때도 애니메이션 되돌림
          markers: false, // 디버깅용 마커 (필요시 true로 변경)
        },
      });
    }
  }, []);

  // has_text_move_anim 애니메이션 직접 구현
  useEffect(() => {
    if (sectionTitleRef.current) {
      const element = sectionTitleRef.current;
      const delay = element.getAttribute("data-delay") || "0.5";

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
        duration: 1,
        delay: parseFloat(delay),
        opacity: 1,
        rotationX: 0,
        force3D: true,
        stagger: 0.1,
        scrollTrigger: {
          trigger: element,
          start: "top 80%", // 더 일찍 시작
          end: "bottom 20%", // 끝 지점 설정
          scroller: "body",
          toggleActions: "play none none reverse", // 스크롤 올릴 때도 애니메이션 되돌림
          markers: false, // 디버깅용 마커 (필요시 true로 변경)
        },
      });
    }
  }, []);

  // has_fade_anim 애니메이션 직접 구현
  useEffect(() => {
    const fadeElements = document.querySelectorAll(".has_fade_anim");
    fadeElements.forEach((element) => {
      const fadeFrom = element.getAttribute("data-fade-from") || "bottom";
      const onScroll = element.getAttribute("data-on-scroll") || "1";
      const duration = element.getAttribute("data-duration") || "1.5";
      const fadeOffset = element.getAttribute("data-fade-offset") || "50";
      const delay = element.getAttribute("data-delay") || "0.5";
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
        if (fadeFrom === "bottom") {
          gsap.to(element, {
            y: 0,
            opacity: 1,
            ease: ease,
            duration: parseFloat(duration),
            delay: parseFloat(delay),
            scrollTrigger: {
              trigger: element,
              start: "top 80%",
              scroller: "body",
              toggleActions: "play none none none",
              markers: false,
            },
          });
        } else if (fadeFrom === "top") {
          gsap.to(element, {
            y: 0,
            opacity: 1,
            ease: ease,
            duration: parseFloat(duration),
            delay: parseFloat(delay),
            scrollTrigger: {
              trigger: element,
              start: "top 80%",
              scroller: "body",
              toggleActions: "play none none none",
              markers: false,
            },
          });
        } else if (fadeFrom === "left") {
          gsap.to(element, {
            x: 0,
            opacity: 1,
            ease: ease,
            duration: parseFloat(duration),
            delay: parseFloat(delay),
            scrollTrigger: {
              trigger: element,
              start: "top 80%",
              scroller: "body",
              toggleActions: "play none none none",
              markers: false,
            },
          });
        } else if (fadeFrom === "right") {
          gsap.to(element, {
            x: 0,
            opacity: 1,
            ease: ease,
            duration: parseFloat(duration),
            delay: parseFloat(delay),
            scrollTrigger: {
              trigger: element,
              start: "top 80%",
              scroller: "body",
              toggleActions: "play none none none",
              markers: false,
            },
          });
        } else if (fadeFrom === "in") {
          gsap.to(element, {
            opacity: 1,
            ease: ease,
            duration: parseFloat(duration),
            delay: parseFloat(delay),
            scrollTrigger: {
              trigger: element,
              start: "top 80%",
              scroller: "body",
              toggleActions: "play none none none",
              markers: false,
            },
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
                ref={whoWeAreRef}
                className="has_char_anim"
                data-stagger="0.05"
                data-translateX="20"
                data-delay="0.3"
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
              <h2
                ref={sectionTitleRef}
                className="section-title has_text_move_anim"
                data-delay="0.5"
                style={{ perspective: "400px" }}
              >
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
                        className="has_fade_anim"
                        data-fade-from="bottom"
                        data-fade-offset="10"
                        data-delay="0.1"
                        data-duration="0.6"
                        data-on-scroll="1"
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
                        className="has_fade_anim"
                        data-fade-from="bottom"
                        data-fade-offset="10"
                        data-delay="0.01"
                        data-duration="0.5"
                        data-on-scroll="1"
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
                      width: "6px",
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
