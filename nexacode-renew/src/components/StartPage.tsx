"use client";
import Link from "next/link";
import React, { useRef } from "react";
import TextSlideBar from "./startPage/TextSlideBar";
import {
  useStartPageAnimations,
  useScrollClippingEffect,
} from "@/src/animations/animations_StartPage";
import { useTextSlide } from "@/src/animations/textSlide";
import { useFadeInOnScroll } from "@/src/animations/fadeInOnScroll";
import "splitting/dist/splitting.css";

// import WorkGallery from "@/src/components/startPageComponents/WorkGallery";
import FooterArea from "@/src/components/startPageComponents/FooterArea";
import Section06 from "./startPage/Section06";
import Section02 from "./startPage/Section02";
import Section01 from "./startPage/Section01";
import Section03 from "./startPage/Section03";
import Section07 from "./startPage/Section07";
import Section05 from "./startPage/Section05";
import Section04 from "./startPage/Section04";

// import Section09 from "./startPage/Section04";

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

  return (
    <div className="flex flex-col items-center w-full">
      {/* ================================ Title ================================ */}
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
              {/* ================================ 1번 요소 ================================ */}
              <div className="flex flex-row justify-end">
                <div className="flex flex-row justify-between pb-10 max-md:flex-col max-md:pb-5 max-md:gap-8 ">
                  <Link href="/contact">
                    <div
                      ref={fadeRef}
                      className=" flex flex-col gap-4 z-[2] max-w-[90vw] w-[23.125rem] max-lg:w-[20rem] max-sm:w-[25rem] max-md:mt-10"
                    >
                      {/* 윗부분 선 */}
                      <div className="w-full mb-2 border-t border-white" />
                      {/* 텍스트 + 화살표 한 줄 */}
                      <div className="flex justify-between w-full">
                        <span className="text-xl font-normal tracking-wider text-white">
                          NEXACODE™
                        </span>
                        <span className="text-xl font-extrabold text-white">
                          ↗
                        </span>
                      </div>
                      <div className="text-white font-normal text-xl leading-[1.3] tracking-wider">
                        서울시 금천구 디지털로 178
                        <br />
                        가산 퍼블릭 A동 1515~1516호
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
              {/* ================================ 3번 요소 ================================ */}
              <div className="flex items-end mt-24">
                <div className="text-white text-xl font-thin">
                  <div>개발이 필요한 순간, 디지털 전환이 필요한 지금</div>
                  <div className="mt-5 text-[2rem] leading-[2rem] font-thin">
                    <strong>앱개발·홈페이지제작 전문팀 넥사코드</strong>가
                    당신만의 IT 개발 부서가 되어드립니다
                  </div>
                </div>
              </div>
              <div
                className="flex items-end justify-end flex-1 xl:items-start xl:justify-start xl:mt-8 
              max-md:flex-none max-xl:items-start max-xl:justify-start "
              >
                <div
                  className="text-white tracking-tight font-normal text-[8rem] flex flex-col items-start  
                "
                >
                  <div ref={creativeRef}>Digital Starts Here</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <TextSlideBar />
      <Section01 />
      <Section02 />
      <Section03 />
      <Section04 />
      <div
        className="w-full flex justify-center"
        style={{ background: "#161616" }}
      >
        <Section05 />
      </div>{" "}
      <Section06 />
      <Section07 />
      <div
        ref={backgroundImageRef}
        className="relative w-full h-auto overflow-hidden"
        style={{
          clipPath: `inset(${imageClip}px 0 ${imageClip}px 0)`,
          transition: "clip-path 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
        }}
      >
        <video
          src="/videoes/footer.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="object-cover w-full h-auto"
          data-lag="0"
          width={1500}
          height={1000}
        />
      </div>{" "}
      {/* ================================ FooterArea ================================ */}
      <div className="flex items-center justify-center w-full  xl:px-20 max-xl:px-10 bg-[#161616]">
        <div className="container">
          <FooterArea />
        </div>
      </div>{" "}
      <style jsx>{`
        * {
          font-family: "Noto Sans", sans-serif;
        }
      `}</style>
    </div>
  );
}
