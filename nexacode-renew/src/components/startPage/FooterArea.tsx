"use client";
import { useRef } from "react";
import Link from "next/link";
import styles from "../../styles/FooterArea.module.css";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useRotatingAnimation } from "../../animations/rotatingWord";
import { useGradientTextAnimation } from "../../animations/gradientText";
gsap.registerPlugin(ScrollTrigger);

export default function FooterArea() {
  const textRef = useRef<HTMLParagraphElement | null>(null);
  useGradientTextAnimation(textRef);

  const rotatingRef = useRef<HTMLSpanElement | null>(null);
  const animatedTextRef = useRef<HTMLParagraphElement | null>(null);
  useRotatingAnimation(rotatingRef, animatedTextRef);

  return (
    <div className="container xxl:h-screen h-full max-md:mx-10">
      <section className={styles.footerAreaWrapper}>
        <div className={styles.inner}>
          <div className="lg:text-4xl font-normal max-md:pt-10">
            누구나 IT 개발 전문 부서를 가질 수 있도록,
          </div>
          <div
            ref={animatedTextRef}
            className="text-3xl xxl:text-8xl font-normal mt-8 lg:text-5xl"
          >
            당신만의 개발 파트너
            <br className="lg:block hidden" />{" "}
            <span className="rotating-word" ref={rotatingRef}>
              <strong>넥사코드</strong>
            </span>
            입니다.
          </div>

          <p
            ref={textRef}
            className="textGradient__header text-xl text-gray-400 mt-5 mb-40 lg:text-3xl 
             max-lg:mt-5"
          >
            처음의 기대가 끝까지 이어지도록,{" "}
            <br className="lg:block xl:hidden" />
            넥사코드는
            <strong> 끝까지 책임지는 개발</strong>을{" "}
            <br className="max-md:block hidden" />
            약속드립니다.
          </p>

          <div className={styles.ctaArea}>
            <div>
              <h3 className="text-2xl text-gray-200 mb-5 max-xxxl:text-xl">
                오시는 길
              </h3>
              <p className="text-lg text-gray-400 max-xxxl:text-base">
                서울시 금천구 디지털로 178
                <br />
                가산 퍼블릭 A동 1515~1516호
              </p>
            </div>
            <div>
              <h3 className="text-2xl text-gray-200 mb-5 max-xxxl:text-xl">
                CONTACT
              </h3>
              <p className="text-lg text-gray-400 max-xxxl:text-base">
                전화번호: 010-4009-2398
                <br />
                Email: nexacode@nexacode.co.kr
              </p>
            </div>
            <div className={styles.newsletter}>
              <form className={styles.form}>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className={styles.input}
                />
                <Link href="/contact">
                  <button type="submit" className={styles.button}>
                    →
                  </button>
                </Link>
              </form>
            </div>
          </div>
        </div>
        <div className={`${styles.footerLinks} max-md:flex max-md:flex-col `}>
          <div className="max-lg:hidden">
            <p>
              © 2022 – 2025 | All rights reserved <br /> by{" "}
              <strong>crowdyTheme</strong>
            </p>
            <div className={`${styles.linkList} max-md:mt-10`}>
              <a href="#">About Us</a>
              <a href="#">Privacy Policy</a>
              <a href="#">Career</a>
              <a href="#">Sitemap</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
