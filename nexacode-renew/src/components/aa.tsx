"use client";

import React, { useRef } from "react";
import Image from "next/image";
import {
  useStartPageAnimations,
  useScrollClippingEffect,
} from "@/src/animations/animations_StartPage";
import { useTextSlide } from "@/src/animations/textSlide";
import { useFadeInOnScroll } from "@/src/animations/fadeInOnScroll";
import "splitting/dist/splitting.css";

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
      {/* ================================ section 01 ================================ */}
      <div className="relative w-full h-[55rem] flex items-center justify-center">
        <video
          src="/videoes/production_id.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover z-[0]"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-black/80 z-[1] flex" />
        {/* 컨테이너 내용을 동영상 위에 겹치도록 배치 */}
        <div className="container relative z-[2] h-full flex">
          <div className="section-spacing-top mb-5 mt-5 w-full ">
            <div className="flex flex-col  h-full">
              <div className="flex flex-row items-start justify-between pb-10 ">
                {/* ================================ 1번 요소 ================================ */}
                <div
                  ref={fadeRef}
                  className="flex flex-col gap-4 z-[2] max-w-[90vw] w-[23.125rem] xs:w-[25rem] xs:mt-20"
                >
                  {/* 윗부분 선 */}
                  <div className="border-t border-white mb-4 w-full" />
                  {/* 텍스트 + 화살표 한 줄 */}
                  <div className="flex justify-between w-full">
                    <span className="text-white font-normal text-xl tracking-wider">
                      Arolax™
                    </span>
                    <span className="text-white text-xl font-extrabold">↗</span>
                  </div>
                  {/* 주소 */}
                  <div className="text-white font-medium text-xl leading-[1.3]">
                    1772 Street Charleston,
                    <br />
                    New York
                  </div>
                </div>
                {/* ================================ 2번 요소 ================================ */}
                <div
                  ref={textRef}
                  className="w-[25rem] text-white font-normal text-[1.3rem] leading-[1.725rem] tracking-wider xs:w-[25rem] xs:text-xl xs:font-light xs:leading-[1.5rem]"
                >
                  We believe that the surest measure of success is when our
                  partners with us more than half It&apos;s more than just the
                  visuals. We&apos;re here to support your growth.
                </div>
              </div>
              {/* ================================ 3번 요소 ================================ */}
              <div className="flex-1 flex items-center justify-center">
                <div className="text-white font-medium text-[15rem] leading-[12rem] flex flex-col items-start max-sm:text-[7rem] max-sm:leading-[4rem]">
                  {/* CREATIVE (첫 줄) */}
                  <div ref={creativeRef}>CREATIVE</div>

                  {/* STUDI + 이미지 (둘째 줄) */}
                  <div className="flex items-center">
                    <div ref={studioRef}>STUDI</div>
                    <div>
                      <Image
                        src="/images/o-switch.webp"
                        alt="switch"
                        width={160}
                        height={68}
                        className="h-[8.5rem] ml-[0.5rem] w-auto max-sm:h-[4rem] max-sm:ml-0"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ================================ 하단 text-slide 바 ================================ */}
      <div
        ref={targetRef}
        className="w-full flex items-center justify-center overflow-hidden h-[4rem] bg-[#C9F31D] z-[10]"
      >
        <div ref={slideRef} style={{ display: "flex", alignItems: "center" }}>
          <div className="flex items-center gap-[2.8rem]">
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
      {/* ================================ section 02 ================================ */}
      <div className="container">
        <div className="pt-36 pb-36 section-spacing-top">
          <div className="flex flex-row">
            <div className="subtitle-wrappe w-8/12">
              <div
                ref={whoWeAreRef}
                className="has_char_anim section-subtitle"
                data-stagger="0.05"
                data-translateX="20"
                // data-delay="0.3"
              >
                01.WHO WE ARE
              </div>
            </div>
            <div className="flex flex-col">
              <h2
                ref={sectionTitleRef}
                className="section-title has_text_move_anim perspective-[400px]"
                // data-delay="0.5"
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
                        data-fade-from="bottom"
                        data-duration="0.6"
                        className="has_fade_anim text-[#121212] font-normal text-[16rem] leading-[13.125rem]"
                        style={{
                          fontFamily: "Inter",
                        }}
                      >
                        15
                      </div>
                      <div
                        className="has_fade_anim text-[#555] font-medium text-[1.25rem] leading-[1.8125rem]"
                        data-fade-from="bottom"
                        data-duration="0.5"
                        style={{
                          fontFamily: "Kanit",
                        }}
                      >
                        We helped to get companies with $15M+ funding
                      </div>
                    </div>
                  </div>
                  <div className="w-[6px] min-h-[200px] bg-[rgba(18,18,18,0.08)] mx-[5rem] self-stretch" />

                  <div className="flex flex-col">
                    <div
                      className="has_fade_anim text-[#999] font-medium text-[1.125rem] leading-[1.58625rem] mb-[2.5rem]"
                      data-fade-from="bottom"
                      data-duration="1.5"
                      style={{
                        fontFamily: "Kanit",
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
        {/* ================================ section 03 ================================ */}
        <div className="pt-36 pb-36 section-spacing-top">
          <div className="flex flex-row">
            <div className="subtitle-wrappe w-5/12">
              <div
                className="has_char_anim section-subtitle"
                data-stagger="0.05"
                data-translateX="20"
                // data-delay="0.3"
              >
                02. SERVICES
              </div>
            </div>
            <div className="flex flex-col">
              <h2
                className="section-title has_text_move_anim mb-8 perspective-[400px]"
                // data-delay="0.5"
              >
                <div
                  className="section-title-line has_fade_anim"
                  data-fade-from="bottom"
                  data-fade-offset="100"
                  data-duration="0.8"
                >
                  Digital experience by our professional team.
                </div>
              </h2>
              <div
                className="grid grid-cols-2 gap-x-24 w-full has_fade_anim"
                data-fade-from="left"
                data-duration="0.5"
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
                      className="has_fade_anim mt-9 text-[#999] font-medium text-[1.125rem] leading-[1.58625rem] w-[36rem] font-kanit"
                      style={{
                        fontFamily: "Kanit",
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
      {/* ================================ section 04 ================================ */}
      <div className="container">
        <div className="pt-36 pb-3 section-spacing-top">
          <div className="flex flex-col">
            <div className="subtitle-wrappe w-8/12">
              <div className="section-subtitle">03.SELECTED WORK</div>
            </div>
            <div className="w-full h-[1px] bg-[#E5E5E5] mt-3"></div>
            <WorkGallery />
          </div>
        </div>
      </div>
      {/* ================================ section 05 ================================ */}
      <div className="w-full" style={{ background: "#161616" }}>
        <div className="container mx-auto">
          <div className="pt-24 pb-24 section-spacing-top">
            <div className="flex flex-row">
              <div className="subtitle-wrappe w-6/12">
                <div className="section-subtitle-white">04.TESTIMONIAL</div>
              </div>

              <div className="flex flex-col w-full">
                <div className="title-wrapper">
                  <h2
                    className="section-title has_text_move_anim perspective-[400px]"
                    // data-delay="0.5"
                  >
                    <div
                      className="section-title-line has_fade_anim w-full tracking-wider !text-white"
                      data-fade-from="bottom"
                      data-duration="0.5"
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
      {/* ================================ section 06 ================================ */}
      <div className="container overflow-hidden relative ">
        {/* 배경 이미지 */}
        <div className="absolute inset-0 z-0 flex items-center justify-center">
          <Image
            src="/images/background05.webp"
            alt="background"
            width={1000}
            height={750}
            className="object-contain z-[-1] max-w-[65%] max-h-[80%] translate-x-[70px] translate-y-[110px]"
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
                className="section-title has_text_move_anim mb-20 perspective-[400px]"
              >
                <div
                  className="section-title-line has_fade_anim"
                  data-fade-from="bottom"
                  data-duration="0.3"
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
      {/* ================================ section 07 ================================ */}
      <div className="container overflow-hidden relative ">
        <div className="pt-36 pb-36 section-spacing-top relative z-10">
          <div className="flex flex-row">
            <div className="subtitle-wrappe w-6/12">
              <div className="section-subtitle">06. THE TEAM</div>
            </div>
            <div className="flex flex-col w-full">
              <h2
                ref={ourTeamRef}
                className="section-title has_text_move_anim mb-20 perspective-[400px]"
              >
                <div
                  className="section-title-line has_fade_anim"
                  data-fade-from="bottom"
                  data-duration="0.5"
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
      {/* ================================ section 08 ================================ */}
      <div className="container overflow-hidden relative ">
        <div className="pt-36 pb-36 section-spacing-top relative z-10">
          <div className="flex flex-col">
            <div className="flex flex-row">
              <div className="subtitle-wrappe w-6/12">
                <div className="section-subtitle">07. RECENT POST</div>
              </div>
              <div className="flex w-full mb-20">
                <h2
                  ref={recentPostTitleRef}
                  className="section-title perspective-[400px]"
                >
                  <div className="section-title-line">Learn from journal</div>
                  <div className="section-title-line">insight of Binox</div>
                </h2>
              </div>
            </div>
            <div className="flex flex-row gap-20 w-full justify-between">
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
          // data-speed="0.5"
          data-lag="0"
        />
      </div>{" "}
      {/* ================================ FooterArea ================================ */}
      <div
        className="w-full flex justify-center h-screen items-center"
        style={{ background: "#161616" }}
      >
        <div className="container">
          <FooterArea />
        </div>
      </div>{" "}
      <div className="h-96 xs:bg-red-300 sm:bg-blue-300 md:bg-yellow-300 lg:bg-green-300 xl:bg-orange-300 xxl:bg-purple-300">
        반응형 배경 컬러 테스트
      </div>
    </div>
  );
}
