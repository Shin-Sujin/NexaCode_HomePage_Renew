import React, { useRef } from "react";
import Image from "next/image";
import { useStartPageAnimations } from "@/src/animations/animations_StartPage";

export default function ContactIntro() {
  const fadeRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLElement>(null);
  const studioRef = useRef<HTMLElement>(null);
  const whoWeAreRef = useRef<HTMLElement>(null);
  const sectionTitleRef = useRef<HTMLElement>(null);
  const workTitleRef = useRef<HTMLElement>(null);
  const recentPostTitleRef = useRef<HTMLElement>(null);
  const whetherRef = useRef<HTMLElement>(null);
  const ourTeamRef = useRef<HTMLElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);
  const creativeRef = useRef<HTMLDivElement>(null);
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
  return (
    <div>
      <div className="flex flex-col items-center max-md:py-20">
        <h2
          ref={creativeRef}
          className="text-9xl font-bold mb-3 mt-[60%] text-gray-100 max-xxl:mt-[-30%] max-md:mt-[40%]  max-md:text-6xl max-lg:text-6xl"
        >
          Contact us
        </h2>
        <p className="ml-12 text-2xl text-gray-200 mb-[40%] max-xxl:mb-[20%] max-md:text-lg max-md:ml-0">
          무엇이든 물어보세요,상세하게 답변하겠습니다.
        </p>
      </div>
      <div className="flex flex-col items-center space-y-2 max-md:hidden">
        <Image
          src="/images/nexacode_logo_white.webp"
          alt="NexaCode Logo"
          width={128}
          height={128}
          className="w-32 mb-4"
        />
        <div className="text-center space-y-1 text-gray-100">
          <div>(주)넥사코드</div>
          <div>사업자등록번호 : 326-87-03313</div>
          <div>대표 김남정</div>
        </div>
        <div className="pt-8 text-center space-y-1 text-gray-100 ">
          <div>서울시 금천구 디지털로 178 가산 퍼블릭 A동 1515~1516호</div>
          <div>M : nexacode@nexacode.co.kr, C : 010-4009-2398</div>
        </div>
      </div>
    </div>
  );
}
