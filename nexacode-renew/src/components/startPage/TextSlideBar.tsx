import Image from "next/image";

import React, { useRef } from "react";
// import Image from "next/image";
import { useStartPageAnimations } from "@/src/animations/animations_StartPage";
import { useTextSlide } from "@/src/animations/textSlide";
import { useFadeInOnScroll } from "@/src/animations/fadeInOnScroll";
import "splitting/dist/splitting.css";

export default function TextSlideBar() {
  const fadeRef = useRef<HTMLDivElement>(null);
  const creativeRef = useRef<HTMLDivElement>(null); // Digital Starts Here
  const slideRef = useRef<HTMLDivElement>(null);
  const targetRef = useRef<HTMLDivElement>(null);
  const sectionTitleRef = useRef<HTMLDivElement>(null);

  useStartPageAnimations({
    fadeRef,
    creativeRef,
    sectionTitleRef,
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
    <div className="w-full flex items-center justify-center overflow-hidden h-[4rem] bg-[#333333] z-[10]">
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
