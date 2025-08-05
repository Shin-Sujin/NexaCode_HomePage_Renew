import Image from "next/image";

import React, { useRef } from "react";
// import Image from "next/image";
import { useStartPageAnimations } from "@/src/animations/animations_StartPage";
import { useTextSlide } from "@/src/animations/textSlide";
import { useFadeInOnScroll } from "@/src/animations/fadeInOnScroll";
import "splitting/dist/splitting.css";

export default function TextSlideBar() {
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

  const navTexts = [
    "DEVELOPMENT",
    "APP",
    "WEB",
    "SEO",
    "DESIGN",
    "UI/UX",
    "BRANDING",
    "LAUNCH",
    "AGENCY",
  ];

  const repeatedNavTexts = Array(3).fill(navTexts).flat();

  return (
    <div className="w-full flex items-center justify-center overflow-hidden h-[4rem] bg-[#000000] z-[10]">
      <div ref={slideRef} style={{ display: "flex", alignItems: "center" }}>
        <div className="flex items-center gap-[5rem]">
          {repeatedNavTexts.map((text, idx) => (
            <div key={idx} className="flex items-center">
              <span className="mr-12 text-[#ffffff] text-[1.4rem] font-normal leading-[1.45rem]">
                {text}
              </span>{" "}
              <Image
                src="/images/startPage/star.png"
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
  );
}
