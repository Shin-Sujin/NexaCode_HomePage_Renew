"use client";
import React, { useEffect, useRef } from "react";
import Title from "./startPage/Title";
import Section01 from "./startPage/Section01";
import Section02 from "./startPage/Section02";
import Section03 from "./startPage/Section03";
import Section04 from "./startPage/Section04";
import Section05 from "./startPage/Section05";
import Section06 from "./startPage/Section06";
import Section07 from "./startPage/Section07";
import FooterVideo from "./startPage/FooterVideo";
import FooterArea from "./startPage/FooterArea";
import ButtonPage02 from "./startPageComponents/ButtonPage02";
// import { useStartPageScroll } from "@/src/hooks/useStartPageScroll";
import { useStartPageObserver } from "@/src/hooks/useStartPageObserver";
import { useStartPageStore } from "@/src/stores/startPageStore";

export default function StartPage() {
  const setCurrentIndex = useStartPageStore((state) => state.setCurrentIndex);

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash === "#strengths") {
        setCurrentIndex(5);
      } else if (hash === "#process") {
        setCurrentIndex(14);
      }
    };

    // 페이지 로드 시 초기 해시 값 확인
    handleHashChange();

    window.addEventListener("hashchange", handleHashChange);

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, [setCurrentIndex]);

  useEffect(() => {
    // URL에 해시가 없는 경우에만 최상단으로 스크롤
    if (!window.location.hash) {
      setCurrentIndex(0);
      window.scrollTo({ top: 0, behavior: "auto" });
    }
  }, [setCurrentIndex]);

  const sectionRefs = useRef<(HTMLDivElement | null)[]>(
    new Array(22).fill(null)
  );

  useStartPageObserver(sectionRefs);

  return (
    <div className="flex flex-col">
      <div
        ref={(el) => {
          sectionRefs.current[0] = el;
        }}
      >
        <div className="flex justify-center">
          <Title />
        </div>
      </div>

      <div className="flex justify-center">
        <Section01 sectionRefs={sectionRefs} startIndex={1} />
      </div>

      <div className="bg-[#17171B] flex justify-center max-xxxl:pt-10">
        <ButtonPage02 sectionRefs={sectionRefs} startIndex={2} />
      </div>

      <div className="flex justify-center">
        <Section02 sectionRefs={sectionRefs} startIndex={4} />
      </div>

      <div className="flex justify-center">
        <Section03 sectionRefs={sectionRefs} startIndex={5} />
      </div>

      <div className="flex justify-center">
        <Section04 sectionRefs={sectionRefs} startIndex={11} />
      </div>

      <div className="w-full bg-[#17171B]">
        <div className="flex justify-center">
          <Section05 sectionRefs={sectionRefs} startIndex={13} slides={3} />
        </div>
      </div>

      <div className="flex justify-center">
        <Section06 sectionRefs={sectionRefs} startIndex={16} />
      </div>

      <div
        ref={(el) => {
          sectionRefs.current[17] = el;
          sectionRefs.current[18] = el;
          sectionRefs.current[19] = el;
        }}
      >
        <div className="flex justify-center">
          <Section07 sectionRefs={sectionRefs} startIndex={17} />
        </div>
      </div>

      <div
        ref={(el) => {
          sectionRefs.current[20] = el;
        }}
        className="w-full"
      >
        <div className="flex justify-center">
          <FooterVideo />
        </div>
      </div>

      <div
        ref={(el) => {
          sectionRefs.current[21] = el;
        }}
      >
        <div className="bg-[#17171B] flex justify-center max-xxxl:pt-10">
          <FooterArea />
        </div>
      </div>
      <style jsx>{`
        * {
          font-family: "Noto Sans", sans-serif;
        }
      `}</style>
    </div>
  );
}
