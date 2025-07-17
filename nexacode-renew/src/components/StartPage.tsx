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
    <div className="flex flex-col items-center w-full">
      {/* ================================ section 01 ================================ */}
      <div className="relative w-full h-[55rem] flex items-center justify-center max-lg:h-[45rem] xl:pr-20 max-md:h-[55rem] max-sm:h-[45rem] max-xl:pr-20 max-xl:mt-16 max-xl:h-[50rem] max-lg:pr-20  ">
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
          <div className="w-full mt-5 mb-5 section-spacing-top ">
            <div
              className="flex flex-col h-full xl:ml-20 max-xl:ml-20 max-lg:ml-6 
             max-md:ml-10 max-md:mr-10 max-sm:ml-6 max-sm:mr-6 max-sm:mt-5"
            >
              <div className="flex flex-row items-start justify-between pb-10 max-md:flex-col max-md:pb-5 max-md:gap-8 ">
                {/* ================================ 1번 요소 ================================ */}
                <div
                  ref={fadeRef}
                  className=" flex flex-col gap-4 z-[2] max-w-[90vw] w-[23.125rem] max-lg:w-[20rem] max-sm:w-[25rem] max-md:mt-10"
                >
                  {/* 윗부분 선 */}
                  <div className="w-full mb-4 border-t border-white" />
                  {/* 텍스트 + 화살표 한 줄 */}
                  <div className="flex justify-between w-full">
                    <span className="text-xl font-normal tracking-wider text-white">
                      Arolax™
                    </span>
                    <span className="text-xl font-extrabold text-white">↗</span>
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
                  className=" w-[25rem] text-white font-normal text-[1.3rem] leading-[1.725rem] tracking-wider max-sm:w-[25rem] max-sm:text-xl max-sm:font-light max-sm:leading-[1.5rem] max-md:hidden max-xs:hidden"
                >
                  We believe that the surest measure of success is when our
                  partners with us more than half It&apos;s more than just the
                  visuals. We&apos;re here to support your growth.
                </div>
              </div>
              {/* ================================ 3번 요소 ================================ */}
              <div className="flex items-center justify-center flex-1 xl:items-start xl:justify-start xl:mt-16 max-md:flex-none max-xl:items-start max-xl:justify-start ">
                <div className="text-white font-medium  text-[15rem] leading-[12rem] flex flex-col items-start  max-xl:text-[12rem] max-xl:leading-[10rem] max-xl:mt-20 max-lg:text-[10rem] max-lg:leading-[8rem] max-sm:text-[5rem] max-sm:leading-[4.5rem]  max-md:justify-start  max-md:text-[8rem] max-md:leading-[7rem] ">
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
                        className="h-[8.5rem]  w-auto max-lg:h-[6rem] max-lg:ml-[0.5rem] ml-[0.5rem] max-sm:h-[4rem] max-sm:ml-0 max-md:h-[6rem] max-md:ml-[0.5rem]"
                      />
                    </div>
                  </div>
                </div>
              </div>
              {/* ================================ 2번 요소 (모바일에서만 표시) ================================ */}
              <div
                ref={textRef}
                className="hidden max-md:block w-[25rem] text-white font-normal text-[1.3rem] leading-[1.725rem] tracking-wider mt-8 max-sm:w-[25rem] max-sm:text-xl max-sm:font-light max-sm:leading-[1.5rem] "
              >
                We believe that the surest measure of success is when our
                partners with us more than half It&apos;s more than just the
                visuals. We&apos;re here to support your growth.
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
                <span className="mr-5 nav-bar-text">{text}</span>
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
      <div className="container xl:px-20 max-xl:px-10 max-xs:px-6">
        <div className="pt-36 pb-36 section-spacing-top xl:pb-20 max-xl:pb-16 ">
          <div className="flex flex-row max-lg:flex-col">
            <div className="w-8/12 subtitle-wrappe xl:w-7/12 max-xl:w-6/12">
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
                className="section-title has_text_move_anim perspective-[400px] max-w-full"
                // data-delay="0.5"
              >
                <div className="section-title-line w-full max-w-full max-lg:mt-10 max-md:text-[3rem] max-md:leading-[2.8rem] max-xs:text-[2.6rem]">
                  We provide brilliant idea to grow the startup — agency with
                  your sharp brand.
                </div>
              </h2>
              <div className="mt-20">
                <div className="flex flex-row items-start max-xs:flex-col">
                  <div className="info-text ">
                    <div className="flex flex-col w-72 max-md:w-[16rem] max-sm:w-[12rem] max-xs:w-full">
                      <div
                        data-fade-from="bottom"
                        data-duration="0.6"
                        className="has_fade_anim text-[#121212] font-normal text-[16rem] leading-[13.125rem] max-sm:text-[10rem] max-xs:leading-[8rem]"
                        style={{
                          fontFamily: "Inter",
                        }}
                      >
                        15
                      </div>
                      <div
                        className="has_fade_anim text-[#555] font-medium text-[1.25rem] leading-[1.8125rem] max-xs:font-bold max-xs:leading-[2rem] max-xs:text-[1.5rem] max-xs:w-[20rem] "
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
                  <div className="w-[6px] min-h-[200px] bg-[rgba(18,18,18,0.08)] mx-[5rem] self-stretch max-sm:mx-[2rem] max-xs:hidden" />

                  <div className="flex flex-col">
                    <div
                      className="has_fade_anim text-[#525252] font-medium text-[1.125rem] leading-[1.58625rem] mb-[2.5rem]  max-xs:mt-10 max-xs:text-[1.3rem] max-xs:leading-[2rem] max-xs:font-semibold"
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
        <div className="relative w-full h-auto overflow-hidden">
          <Image
            ref={imgRef}
            src="/images/img-s-17.webp"
            alt="image"
            width={1500}
            height={1000}
            className="object-cover w-full h-auto"
            data-speed="0.8"
            data-lag="0"
          />
        </div>
      </div>
      {/* ================================ section 03 ================================ */}
      <div className="container overflow-hidden xl:px-20 max-xl:px-10 max-xs:px-6">
        <div className="pt-36 pb-36 section-spacing-top xl:pb-10 max-xl:pb-10 max-md:pb-10 max-sm:pb-10">
          <div className="flex flex-row max-lg:flex-col max-lg:gap-10">
            <div className="w-5/12 subtitle-wrappe max-xl:w-4/12">
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
                className="section-title has_text_move_anim mb-8 perspective-[400px] max-lg:w-full"
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
                className="grid w-full grid-cols-2 gap-x-24 has_fade_anim max-md:gap-x-16 max-sm:hidden"
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
              <div
                className="hidden w-full gap-x-24 has_fade_anim max-md:gap-x-16 max-sm:grid"
                data-fade-from="left"
                data-duration="0.5"
              >
                <div>
                  <div className="service-item-top">Creative Design</div>
                  <div className="service-item">Branding Design</div>
                  <div className="service-item">Development</div>
                  <div className="service-item">eCommerce</div>
                  <div className="service-item">Digital marketing</div>
                  <div className="service-item">Creative Writing</div>
                </div>
              </div>{" "}
              <div className="mt-20 max-md:mt-5">
                <div className="flex flex-row items-start">
                  <div className="flex flex-row max-xl:items-center max-xs:flex-col">
                    <ButtonPage02 />
                    <div
                      className="has_fade_anim mt-9 mb-20 text-[#525252] font-medium text-[1.125rem] leading-[1.58625rem] w-[36rem] font-kanit max-xl:w-[26rem] 
                      max-xl:text-[1.2rem]  max-xl:font-semibold  max-xl:items-center max-xs:mt-12"
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
      <div className="container xl:px-20 max-xl:px-10">
        <div className="pb-3 pt-36 section-spacing-top">
          <div className="flex flex-col">
            <div className="w-8/12 subtitle-wrappe">
              <div className="section-subtitle">03.SELECTED WORK</div>
            </div>
            <div className="w-full h-[1px] bg-[#E5E5E5] mt-3"></div>
            <WorkGallery />
          </div>
        </div>
      </div>
      {/* ================================ section 05 ================================ */}
      <div
        className="w-full xl:px-20 max-xl:px-10"
        style={{ background: "#161616" }}
      >
        <div className="container mx-auto">
          <div className="pt-24 pb-24 section-spacing-top">
            <div className="flex flex-row max-md:flex-col">
              <div className="w-6/12 subtitle-wrappe">
                <div className="section-subtitle-white">04.TESTIMONIAL</div>
              </div>

              <div className="flex flex-col w-full">
                <div className="title-wrapper">
                  <h2
                    className="section-title has_text_move_anim perspective-[400px] max-md:mt-10 max-md:w-[50rem]"
                    // data-delay="0.5"
                  >
                    <div
                      className="section-title-line has_fade_anim w-full tracking-wider !text-white"
                      data-fade-from="bottom"
                      data-duration="0.5"
                    >
                      What client say
                      <br className="max-md:hidden" />
                      about us
                    </div>
                  </h2>
                </div>
                <div className="relative w-full testimonial-box-wrapper">
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
      <div className="container relative overflow-hidden xl:px-20 max-xl:px-10">
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
        <div className="relative z-10 pt-36 pb-36 section-spacing-top">
          <div className="flex flex-row max-lg:flex-col max-lg:gap-10">
            <div className="w-6/12 subtitle-wrappe">
              <div className="section-subtitle">05. ACHIEVEMENT & AWARD</div>
            </div>
            <div className="flex flex-col w-full">
              <h2
                ref={whetherRef}
                className="section-title has_text_move_anim mb-20 perspective-[400px] "
              >
                <div
                  className="section-title-line has_fade_anim max-lg:space-y-3"
                  data-fade-from="bottom"
                  data-duration="0.3"
                >
                  <span className="block">
                    Whether it&apos;s crafting a visually
                  </span>
                  <span className="block">stunning brand identity, the</span>
                  <span className="block">creative design service</span>
                  <span className="block">compare with more agencies</span>
                  <span className="block">of world-wide.</span>
                </div>
              </h2>
              <AchievementTable />
            </div>
          </div>
        </div>
      </div>
      {/* ================================ section 07 ================================ */}
      <div className="container relative overflow-hidden xl:px-20 max-xl:px-10">
        <div className="relative z-10 pt-36 pb-36 section-spacing-top">
          <div className="flex flex-row max-lg:flex-col max-lg:gap-10">
            <div className="w-6/12 subtitle-wrappe">
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
                  <span>Our talented </span>
                  <br className="max-lg:hidden" />
                  <span>team</span>
                </div>
              </h2>
              <TeamGrid />
            </div>
          </div>
        </div>
      </div>
      {/* ================================ section 08 ================================ */}
      <div className="container relative overflow-hidden xl:px-20 max-xl:px-10">
        <div className="relative z-10 pt-36 pb-36 section-spacing-top">
          <div className="flex flex-col">
            <div className="flex flex-row max-lg:flex-col max-lg:gap-10">
              <div className="w-6/12 subtitle-wrappe">
                <div className="section-subtitle">07. RECENT POST</div>
              </div>
              <div className="flex w-full mb-20 max-lg:hidden">
                <h2
                  ref={recentPostTitleRef}
                  className="section-title perspective-[400px]"
                >
                  <div className="section-title-line">Learn from journal</div>
                  <div className="section-title-line">insight of Binox</div>
                </h2>
              </div>
              <div className="hidden w-[75%] mb-20 max-lg:flex">
                <h2
                  ref={recentPostTitleRef}
                  className="section-title perspective-[400px]"
                >
                  <div className="section-title-line">
                    Learn from journal insight of Binox
                  </div>
                </h2>
              </div>
            </div>
            <div className="flex flex-row justify-between w-full gap-20 max-lg:gap-10 max-sm:gap-0 max-xs:flex-col">
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
          className="object-cover w-full h-auto"
          // data-speed="0.5"
          data-lag="0"
        />
      </div>{" "}
      {/* ================================ FooterArea ================================ */}
      <div
        className="flex items-center justify-center w-full  xl:px-20 max-xl:px-10"
        style={{ background: "#161616" }}
      >
        <div className="container">
          <FooterArea />
        </div>
      </div>{" "}
    </div>
  );
}
