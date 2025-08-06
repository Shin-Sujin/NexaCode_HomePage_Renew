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
  const textRef2 = useRef<HTMLDivElement | null>(null);
  useGradientTextAnimation(textRef2);

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

  return (
    <div className="h-screen">
      <div className="relative h-[90vh] flex items-center justify-center max-lg:h-[45rem] xl:pr-20 max-md:h-[55rem] max-sm:h-[45rem] max-xl:pr-20 max-xl:mt-16 max-xl:h-[50rem] max-lg:pr-20  ">
        <video
          src="/videoes/production_id.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover z-[0]"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-black/80 z-[1] flex" />
        <div className="container relative z-[2] h-full flex">
          <div className="w-full mt-5 mb-5 section-spacing-top ">
            <div
              className="flex flex-col h-full max-xl:ml-20 max-lg:ml-16 
             max-md:mx-20 "
            >
              {/* ================================ 1번 요소 ================================ */}
              <div className="flex flex-row justify-end max-md:justify-center ">
                <div className="flex flex-row justify-between mb-60 max-xxxl:mb-40 max-xl:mb-5 max-md:mb-5">
                  <Link href="/contact">
                    <div
                      ref={fadeRef}
                      className=" flex flex-col gap-4 z-[2] max-w-[90vw] w-[23.125rem] max-lg:w-[20rem] max-sm:w-[15rem] max-md:mt-10"
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
              <div className="flex items-end mt-24 max-md:items-center max-md:mt-2">
                <div className="text-white text-3xl font-thin max-xxxl:text-2xl max-lg:text-xl max-md:text-lg">
                  <div>개발이 필요한 순간, 디지털 전환이 필요한 지금</div>
                  <div
                    ref={textRef2}
                    className="textGradient__header mt-5  max-xxxl:mt-3 text-5xl  font-thin max-xxxl:text-4xl max-lg:text-3xl max-lg:leading-[2.5rem] max-md:text-lg"
                  >
                    <strong>앱개발·홈페이지제작 전문팀 넥사코드</strong>가{" "}
                    <br className="hidden max-lg:block" />
                    당신만의 IT 개발 부서가 되어드립니다
                  </div>
                </div>
              </div>
              <div className="flex flex-1 items-start justify-start max-xxxl:mt-5 max-md:justify-center">
                <div
                  className="text-white tracking-tight font-normal  flex flex-col items-start  text-[12rem] max-xxxl:text-[10rem] max-xxl:text-[8rem] max-lg:text-8xl max-md:text-8xl
                "
                >
                  <div ref={creativeRef}>
                    Digital <br className="hidden max-md:block" />
                    Starts <br className="hidden max-md:block" />
                    Here
                  </div>
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
