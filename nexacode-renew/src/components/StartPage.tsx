"use client";

import React, { useRef } from "react";
import Image from "next/image";
import {
  useStartPageAnimations,
  useScrollClippingEffect,
} from "@/src/animations/animations_StartPage";
import { useTextSlide } from "@/src/animations/textSlide";
import { useFadeInOnScroll } from "@/src/animations/fadeInOnScroll";
import "splitting/dist/splitting.css"; // 필요 시
// import CounterUp from "@/components/CounterUp";
import TestimonialRotator from "@/src/components/startPageComponents/TestimonialRotator";
import ButtonPage01 from "@/src/components/startPageComponents/ButtonPage01";
import ButtonPage02 from "@/src/components/startPageComponents/ButtonPage02";
import TeamGrid from "@/src/components/startPageComponents/TeamGrid";
import AchievementTable from "@/src/components/startPageComponents/AchievementTable";
import WorkGallery from "@/src/components/startPageComponents/WorkGallery";
import OverlapCard from "@/src/components/startPageComponents/OverlapCard";
import FooterArea from "@/src/components/startPageComponents/FooterArea";

export default function StartPage() {
  const fadeRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const creativeRef = useRef<HTMLDivElement>(null);
  const studioRef = useRef<HTMLDivElement>(null);
  const slideRef = useRef<HTMLDivElement>(null);
  const targetRef = useRef<HTMLDivElement>(null);
  const whoWeAreRef = useRef<HTMLDivElement>(null);
  const sectionTitleRef = useRef<HTMLDivElement>(null);
  const workTitleRef = useRef<HTMLDivElement>(null);
  const recentPostTitleRef = useRef<HTMLDivElement>(null);
  const whetherRef = useRef<HTMLDivElement>(null);
  const ourTeamRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);
  const backgroundImageRef = useRef<HTMLDivElement>(null);

  useStartPageAnimations({
    fadeRef,
    textRef,
    creativeRef,
    studioRef,
    whoWeAreRef,
    sectionTitleRef,
    workTitleRef,
    recentPostTitleRef,
    whetherRef,
    ourTeamRef,
    imgRef,
  });
  useTextSlide({ slideRef });
  useFadeInOnScroll({ targetRef });

  // 스크롤 클리핑 효과 훅 사용
  const imageClip = useScrollClippingEffect(backgroundImageRef);
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
      {/* ================================ 01.WHO WE ARE ================================ */}
      <div className="container">
        <div className="pt-36 pb-36 section-spacing-top">
          <div className="flex flex-row">
            <div className="subtitle-wrappe w-8/12">
              <div
                ref={whoWeAreRef}
                className="has_char_anim section-subtitle"
                data-stagger="0.05"
                data-translateX="20"
                data-delay="0.3"
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
                      className="has_fade_anim"
                      data-fade-from="bottom"
                      data-fade-offset="10"
                      data-delay="0.3"
                      data-duration="1.5"
                      data-on-scroll="1"
                      style={{
                        color: "#999999",
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
                    <ButtonPage01 />
                  </div>
                </div>
              </div>{" "}
            </div>
          </div>
        </div>
      </div>
      <div className="container overflow-hidden">
        <div className="relative w-full h-auto overflow-hidden">
          <Image
            ref={imgRef}
            src="/images/img-s-17.webp"
            alt="image"
            width={1500}
            height={1000}
            className="w-full h-auto object-cover"
            data-speed="0.8"
            data-lag="0"
          />
        </div>
        {/* ================================ 02.SERVICES ================================ */}
        <div className="pt-36 pb-36 section-spacing-top">
          <div className="flex flex-row">
            <div className="subtitle-wrappe w-5/12">
              <div
                className="has_char_anim section-subtitle"
                data-stagger="0.05"
                data-translateX="20"
                data-delay="0.3"
              >
                02. SERVICES
              </div>
            </div>
            <div className="flex flex-col">
              <h2
                className="section-title has_text_move_anim mb-8"
                data-delay="0.5"
                style={{ perspective: "400px" }}
              >
                <div
                  className="section-title-line has_fade_anim"
                  data-fade-from="bottom"
                  data-fade-offset="30"
                  data-delay="0.3"
                  data-duration="1.5"
                  data-on-scroll="1"
                >
                  Digital experience by our professional team.
                </div>
              </h2>
              <div
                className="grid grid-cols-2 gap-x-24 w-full has_fade_anim"
                data-fade-from="left"
                data-fade-offset="50"
                data-delay="0.3"
                data-duration="1.5"
                data-on-scroll="1"
              >
                <div>
                  <div className="service-item-top">Creative Design</div>
                  <div className="service-item">Branding Design</div>
                  <div className="service-item">Development</div>
                </div>
                <div>
                  <div className="service-item-top">eCommerce</div>
                  <div className="service-item">Digital marketing</div>
                  <div className="service-item">Creative Writing</div>
                </div>
              </div>{" "}
              <div className="mt-20">
                <div className="flex flex-row items-start">
                  <div className="flex flex-row">
                    <ButtonPage02 />
                    <div
                      className="has_fade_anim mt-9"
                      data-fade-from="bottom"
                      data-fade-offset="10"
                      data-delay="0.3"
                      data-duration="1.5"
                      data-on-scroll="1"
                      style={{
                        color: "#999999",
                        fontFamily: "Kanit",
                        fontSize: "1.125rem",
                        fontStyle: "normal",
                        fontWeight: 600,
                        lineHeight: "1.58625rem",
                        width: 360,
                      }}
                    >
                      Consumers today rely heavily on digital means to research
                      products. We research a brand of bldend engaging with it,
                      according to the meanwhile, 51% of consumers{" "}
                    </div>
                  </div>
                </div>
              </div>{" "}
            </div>
          </div>
        </div>
        <h2 ref={workTitleRef}>
          <div className="section-title-work">WORK</div>
        </h2>
      </div>
      {/* ================================ 03.SELECTED WORK ================================ */}
      <div className="container">
        <div className="pt-36 pb-3 section-spacing-top">
          <div className="flex flex-col">
            <div className="subtitle-wrappe w-8/12">
              <div className="section-subtitle">03.SELECTED WORK</div>
            </div>
            <div
              style={{
                width: "100%",
                height: "1px",
                background: "#E5E5E5",
                marginTop: "1rem",
              }}
            ></div>
            <WorkGallery />
          </div>
        </div>
      </div>
      {/* ================================ 04.TESTIMONIAL ================================ */}
      <div className="w-full" style={{ background: "#161616" }}>
        <div className="container mx-auto">
          <div className="pt-24 pb-24 section-spacing-top">
            {/* ================================ row 1 ================================ */}
            <div className="flex flex-row">
              <div className="subtitle-wrappe w-6/12">
                <div className="section-subtitle-white">04.TESTIMONIAL</div>
              </div>
              {/* ================================ row1 -  col 1 ================================ */}
              <div className="flex flex-col w-full">
                <div className="title-wrapper">
                  <h2
                    className="section-title has_text_move_anim"
                    data-delay="0.5"
                    style={{ perspective: "400px" }}
                  >
                    <div
                      className="section-title-line has_fade_anim w-full"
                      data-fade-from="bottom"
                      data-fade-offset="30"
                      data-delay="0"
                      data-duration="1.5"
                      data-on-scroll="1"
                      style={{ color: "#fff", letterSpacing: "2px" }}
                    >
                      What client say
                      <br />
                      about us
                    </div>
                  </h2>
                </div>
                <div className="testimonial-box-wrapper relative w-full">
                  <div className="flex flex-row w-full">
                    <TestimonialRotator />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>{" "}
      {/* ================================ 05.achievement & Award ================================ */}
      <div className="container overflow-hidden relative">
        {/* 배경 이미지 */}
        <div className="absolute inset-0 z-0 flex items-center justify-center">
          <Image
            src="/images/background05.webp"
            alt="background"
            width={1000}
            height={750}
            className="object-contain"
            style={{
              zIndex: -1,
              maxWidth: "65%",
              maxHeight: "80%",
              transform: "translateX(70px) translateY(110px)",
            }}
          />
        </div>
        <div className="pt-36 pb-36 section-spacing-top relative z-10">
          <div className="flex flex-row">
            <div className="subtitle-wrappe w-6/12">
              <div className="section-subtitle">05. ACHIEVEMENT & AWARD</div>
            </div>
            <div className="flex flex-col w-full">
              <h2
                ref={whetherRef}
                className="section-title has_text_move_anim mb-20"
                style={{ perspective: "400px" }}
              >
                <div
                  className="section-title-line has_fade_anim"
                  data-fade-from="bottom"
                  data-fade-offset="10"
                  data-delay="0"
                  data-duration="1.5"
                  data-on-scroll="1"
                >
                  <span>Whether it&apos;s crafting a visually</span>
                  <br />
                  <span>stunning brand identity, the</span>
                  <br />
                  <span>creative design service</span>
                  <br />
                  <span>compare with more agencies</span>
                  <br />
                  <span>of world-wide.</span>
                </div>
              </h2>
              <AchievementTable />
            </div>
          </div>
        </div>
      </div>
      {/* ================================ 06. The team ================================ */}
      <div className="container overflow-hidden relative">
        <div className="pt-36 pb-36 section-spacing-top relative z-10">
          <div className="flex flex-row">
            <div className="subtitle-wrappe w-6/12">
              <div className="section-subtitle">06. THE TEAM</div>
            </div>
            <div className="flex flex-col w-full">
              <h2
                ref={ourTeamRef}
                className="section-title has_text_move_anim mb-20"
                style={{ perspective: "400px" }}
              >
                <div
                  className="section-title-line has_fade_anim"
                  data-fade-from="bottom"
                  data-fade-offset="50"
                  data-delay="0.1"
                  data-duration="1.2"
                  data-on-scroll="1"
                >
                  <span>Our talented</span>
                  <br />
                  <span>team</span>
                </div>
              </h2>
              <TeamGrid />
            </div>
          </div>
        </div>
      </div>
      <div
        ref={backgroundImageRef}
        className="relative w-full h-auto overflow-hidden"
        style={{
          clipPath: `inset(${imageClip}px 0 ${imageClip}px 0)`,
          transition: "clip-path 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
        }}
      >
        <Image
          src="/images/background06.webp"
          alt="image"
          width={1500}
          height={1000}
          className="w-full h-auto object-cover"
          data-speed="0.8"
          data-lag="0"
        />
      </div>{" "}
      {/* ================================ 07. RECENT POST ================================ */}
      <div className="container overflow-hidden relative">
        <div className="pt-36 pb-36 section-spacing-top relative z-10">
          <div className="flex flex-col">
            <div className="flex flex-row">
              <div className="subtitle-wrappe w-6/12">
                <div className="section-subtitle">07.RECENT POST</div>
              </div>
              <div className="flex w-full mb-20">
                <h2
                  ref={recentPostTitleRef}
                  className="section-title has_text_move_anim"
                  data-delay="0.2"
                  style={{ perspective: "400px" }}
                >
                  <div className="section-title-line">Learn from journal</div>
                  <div className="section-title-line">insight of Binox</div>
                </h2>
              </div>
            </div>
            <div
              className="flex flex-row gap-20 w-full has_fade_anim "
              data-fade-from="bottom"
              data-fade-offset="30"
              data-delay="0"
              data-duration="0.6"
              data-on-scroll="1"
            >
              <OverlapCard
                imageSrc="/images/page07Image1.webp"
                imageAlt="Card Background"
                category="Branding"
                date="14 Jan 2024"
                title="How to bring fold to your startup company with Arolax"
              />
              <OverlapCard
                imageSrc="/images/page07Image2.webp"
                imageAlt="Card Background"
                category="Design"
                date="12 Jan 2024"
                title="How to manage a talented and successful design team"
              />
            </div>
          </div>
        </div>
      </div>
      {/* ================================ 마무리 페이지 ================================ */}
      <div
        className="w-full flex justify-center"
        style={{ background: "#161616" }}
      >
        <div className="container">
          <FooterArea />
        </div>
      </div>{" "}
    </div>
  );
}
