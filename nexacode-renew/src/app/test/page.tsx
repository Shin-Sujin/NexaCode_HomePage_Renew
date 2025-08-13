"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { Observer } from "gsap/Observer";
import "@/src/styles/gsapSlides.css";
import Image from "next/image";
import { initSlides } from "@/src/utils/slides"; // 위 파일 경로

gsap.registerPlugin(Observer);

export default function GsapSlides() {
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
              <div className="slide__container">
                <h2 className="slide__heading">PERFECT</h2>
                <figure className="slide__img-cont">
                  <Image
                    className="slide__img"
                    src="/images/test/photo1.png"
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
                <h2 className="slide__heading">COMUNICATION</h2>
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
