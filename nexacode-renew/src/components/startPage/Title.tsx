"use client";
import Link from "next/link";
import React, { useRef } from "react";
import TextSlideBar from "../startPage/TextSlideBar";
import { useGradientTextAnimation } from "../../animations/gradientText";
import { useStartPageAnimations } from "@/src/animations/animations_StartPage";
import { useTextSlide } from "@/src/animations/textSlide";
import { useFadeInOnScroll } from "@/src/animations/fadeInOnScroll";

import "splitting/dist/splitting.css";

export default function Title() {
  const fadeRef = useRef<HTMLDivElement>(null);
  const creativeRef = useRef<HTMLDivElement>(null);
  const slideRef = useRef<HTMLDivElement>(null);
  const targetRef = useRef<HTMLDivElement>(null);
  const sectionTitleRef = useRef<HTMLDivElement>(null);
  const textRef2 = useRef<HTMLDivElement | null>(null);
  useGradientTextAnimation(textRef2);

  useStartPageAnimations({
    fadeRef,
    creativeRef,
    sectionTitleRef,
  });
  useTextSlide({ slideRef });
  useFadeInOnScroll({ targetRef });

  return (
    <div>
      <div className="relative h-[90vh] flex items-center justify-center max-lg:h-[45rem] max-md:h-[55rem] max-sm:h-[45rem]  max-xl:h-[50rem] ">
        <video
          src="/videoes/production_id.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover z-[0]"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-black/80 z-[1] flex" />
        {/* Title 내부 내용 */}
        <div className=" relative z-[2] h-full flex">
          <div className="flex flex-col w-full my-auto xxl:gap-72 xl:gap-32 gap-52">
            {/* ================================ 1번 요소 ================================ */}
            <div className="flex flex-col xl:items-end items-center">
              <Link href="/contact">
                <div
                  ref={fadeRef}
                  className=" flex flex-col gap-4 z-[2] xxl:w-[23.125rem] xl:w-[20rem] w-[16rem]"
                >
                  {/* 윗부분 선 */}
                  <div className="w-full mb-2 border-t border-white" />
                  {/* 텍스트 + 화살표 한 줄 */}
                  <div className="flex justify-between w-full">
                    <span className="xxl:text-xl xl:text-lg font-normal tracking-wider text-white">
                      NEXACODE™
                    </span>
                    <span className="xxl:text-xl xl:text-lg font-extrabold text-white">
                      ↗
                    </span>
                  </div>
                  <h2 className="text-white font-normal xxl:text-xl xl:text-lg leading-[1.3] tracking-wider">
                    서울시 금천구 디지털로 178
                    <br />
                    가산 퍼블릭 A동 1515~1516호
                  </h2>
                </div>
              </Link>
            </div>
            {/* ================================ 3번 요소 ================================ */}
            <div className="flex flex-col ">
              <div className="text-white xxl:text-3xl xl:text-2xl text-xl font-thin text-center xl:text-left">
                <h1>개발이 필요한 순간, 디지털 전환이 필요한 지금</h1>
                <h1
                  ref={textRef2}
                  className="textGradient__header mt-5 xxl:text-5xl xl:text-4xl text-xl  font-thin"
                >
                  <strong>앱개발·홈페이지제작 전문팀 넥사코드</strong>가{" "}
                  <br className="hidden max-lg:block" />
                  당신만의 IT 개발 부서가 되어드립니다
                </h1>
              </div>
              <div className="flex justify-center text-white tracking-tight font-normal xl:justify-start items-center xxl:text-[12rem] xl:text-[10rem] text-5xl mt-10 xl:mt-3">
                <div ref={creativeRef}>
                  Digital <br className="hidden max-md:block" />
                  Starts Here
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <TextSlideBar />
    </div>
  );
}
