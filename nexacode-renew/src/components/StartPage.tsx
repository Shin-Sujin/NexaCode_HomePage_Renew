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
import { useStartPageScroll } from "@/src/hooks/useStartPageScroll";
import { useStartPageStore } from "@/src/stores/startPageStore";

export default function StartPage() {
  const setCurrentIndex = useStartPageStore((state) => state.setCurrentIndex);

  useEffect(() => {
    setCurrentIndex(0);
    window.scrollTo({ top: 0, behavior: "auto" });

    const preventScroll = (e: WheelEvent) => {
      e.preventDefault();
    };

    window.addEventListener("wheel", preventScroll, { passive: false });

    return () => {
      window.removeEventListener("wheel", preventScroll);
    };
  }, [setCurrentIndex]);

  const sectionRefs = useRef<(HTMLDivElement | null)[]>(
    new Array(18).fill(null)
  );

  useStartPageScroll(sectionRefs);

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

      <div
        ref={(el) => {
          sectionRefs.current[2] = el;
        }}
      >
        <div className="bg-[#17171B] flex justify-center max-xxxl:pt-10">
          <ButtonPage02 />
        </div>
      </div>
      <div className="flex justify-center">
        <Section02 sectionRefs={sectionRefs} startIndex={3} />
      </div>

      <div className="flex justify-center">
        <Section03 sectionRefs={sectionRefs} startIndex={4} />
      </div>

      <div className="flex justify-center">
        <Section04 sectionRefs={sectionRefs} startIndex={10} />
      </div>

      <div className="w-full bg-[#17171B]">
        <div className="flex justify-center">
          <Section05 sectionRefs={sectionRefs} startIndex={13} />
        </div>
      </div>

      <div className="flex justify-center">
        <Section06 sectionRefs={sectionRefs} startIndex={14} />
      </div>

      <div className="flex justify-center">
        <Section07 sectionRefs={sectionRefs} startIndex={15} />
      </div>

      <div
        ref={(el) => {
          sectionRefs.current[16] = el;
        }}
        className="w-full"
      >
        <div className="flex justify-center">
          <FooterVideo />
        </div>
      </div>
      <div
        ref={(el) => {
          sectionRefs.current[17] = el;
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
