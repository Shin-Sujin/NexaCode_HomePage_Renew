"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { Observer } from "gsap/Observer";
import "@/src/styles/gsapSlides.css";
import Image from "next/image";
import { initSlides } from "@/src/utils/slides"; // 위 파일 경로
import { useSectionNumberAnimation } from "@/src/animations/sectionNumber";
import { useSectionTitleAnimation } from "@/src/animations/sectionTitle";
import CounterUp from "@/src/components/startPageComponents/CounterUp";

gsap.registerPlugin(Observer);

export default function GsapSlides() {
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);
  const sectionNumberRef = useRef<HTMLDivElement>(null);
  const sectionTitleRef = useRef<HTMLDivElement>(null);
  useSectionNumberAnimation(sectionNumberRef);
  useSectionTitleAnimation(sectionTitleRef);
  useEffect(() => {
    document.body.classList.add("gsap-slides-active");
    initSlides();

    return () => {
      document.body.classList.remove("gsap-slides-active");
    };
  }, []);

  return (
    <>
      <section className="slide">
        <div className="slide__outer">
          <div className="slide__inner">
            <div className="slide__content">
              <div className="container relative justify-center items-center">
                <div className="flex flex-col max-lg:gap-10 w-full mx-2">
                  <div className="section-number text-white ">
                    <div
                      ref={(el) => {
                        if (sectionRefs.current) {
                          sectionRefs.current[0] = el;
                        }
                      }}
                    >
                      <div ref={sectionNumberRef} data-stagger="0.05">
                        05. WHAT OUR CLIENTS SAY
                      </div>
                    </div>
                  </div>
                  <div className="startPage-title-height">
                    <div ref={sectionTitleRef} className="startPage-title ">
                      <h1 className="section-title-line text-white">
                        고객이 말하는 넥사코드는
                        <br className="xl:hidden" />
                        <span className="font-bold ">
                          &quot;함께 일하고 싶은 개발사&quot;
                        </span>{" "}
                      </h1>
                    </div>
                  </div>

                  <div className="relative w-full pt-5 max-xxxl:pt-10">
                    <div className="flex flex-row justify-center items-center w-full ">
                      <div className="flex flex-row max-lg:flex-col items-center gap-10 text-white mt-16 mb-32">
                        {/* Left Part */}
                        <div className="flex-shrink-0 ">
                          <div className="flex items-end testimonial-count font-black text-9xl leading-none mb-4 max-md:items-start">
                            <CounterUp targetNumber={5} duration={1000} />
                            <span className="text-8xl max-md:text-7xl max-md:mt-4">
                              /5
                            </span>
                          </div>
                          <h1
                            className="has_fade_anim text-[#999999] text-m font-bold text-2xl"
                            data-fade-from="bottom"
                            style={{
                              fontFamily: "BeatriceTRIAL-Regular",
                            }}
                          >
                            넥사코드 만족도 설문조사
                          </h1>
                        </div>

                        {/* Vertical Divider */}
                        <div className="w-px h-48 bg-[#2e2e2e] mx-8 max-lg:hidden"></div>
                        {/* Horizontal Divider (for smaller screens) */}
                        <hr className="w-full my-8 border-[#2e2e2e] lg:hidden" />

                        {/* Right Part */}
                        <div className="flex flex-col">
                          <h3 className="name text-4xl mb-1">
                            고객의 말이 증명합니다
                          </h3>
                          <p className="text-lg text-[#999999] leading-relaxed max-xxxl:text-base whitespace-normal break-keep">
                            고객의 한마디 속엔 우리가 미처 설명하지 못한 모든
                            것이 담겨 있습니다. <br />
                            말보다 먼저 전해지는 신뢰, 고객의 이야기가
                            넥사코드를 증명합니다.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* 2번 슬라이드 */}
      <section className="slide">
        <div className="slide__outer">
          <div className="slide__inner">
            <div className="slide__content">
              <div className="slide__container">
                <h2 className="slide__heading">TRUST</h2>
                <figure className="slide__img-cont">
                  <Image
                    className="slide__img"
                    src="/images/test/photo2.png"
                    alt=""
                    width={1000}
                    height={1000}
                  />
                </figure>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* 3번 슬라이드 */}
      <section className="slide">
        <div className="slide__outer">
          <div className="slide__inner">
            <div className="slide__content">
              <div className="slide__container">
                <h2 className="slide__heading">CONTACT</h2>
                <figure className="slide__img-cont">
                  <Image
                    className="slide__img"
                    src="/images/test/photo3.png"
                    alt=""
                    width={1000}
                    height={1000}
                  />
                </figure>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* 4번 슬라이드 */}
      <section className="slide">
        <div className="slide__outer">
          <div className="slide__inner">
            <div className="slide__content">
              <div className="slide__container">
                <h2 className="slide__heading">TIME</h2>
                <figure className="slide__img-cont">
                  <Image
                    className="slide__img"
                    src="/images/test/photo4.png"
                    alt=""
                    width={1000}
                    height={1000}
                  />
                </figure>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* 오버레이 : 배경 전체를 덮고 있고, 요소 하나하나씩 바뀜*/}
      <section className="overlay">
        <div className="overlay__content">
          <p className="overlay__count">
            0<span className="count">1</span>
          </p>
          <figure className="overlay__img-cont">
            <Image
              className="image"
              alt=""
              src="/images/test/review4.png"
              width={1000}
              height={1000}
            />
            <Image
              className="image"
              alt=""
              src="/images/test/review3.png"
              width={1000}
              height={1000}
            />
            <Image
              className="image"
              alt=""
              src="/images/test/review2.png"
              width={1000}
              height={1000}
            />
            <Image
              className="image"
              alt=""
              src="/images/test/review1.png"
              width={1000}
              height={1000}
            />
          </figure>
        </div>
      </section>
    </>
  );
}
