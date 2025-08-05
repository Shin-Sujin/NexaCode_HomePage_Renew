"use client";
import { useEffect, useRef } from "react";
import Link from "next/link";
import styles from "../../styles/FooterArea.module.css";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { createRotatingAnimation } from "../../animations/rotatingWord";
gsap.registerPlugin(ScrollTrigger);

export default function FooterArea() {
  const rotatingRef = useRef<HTMLSpanElement | null>(null);
  const animatedTextRef = useRef<HTMLParagraphElement | null>(null);
  useEffect(() => {
    if (rotatingRef.current && animatedTextRef.current) {
      createRotatingAnimation(rotatingRef.current, animatedTextRef.current);
    }
  }, []);
  return (
    <div className="container h-screen max-md:h-auto max-md:mx-10">
      <section className={styles.footerAreaWrapper}>
        <div className={styles.inner}>
          <div className="text-7xl font-normal max-xxxl:text-5xl max-lg:text-4xl max-md:text-xl max-md:pt-10">
            누구나 IT 개발 전문 부서를 가질 수 있도록,
          </div>
          <div
            ref={animatedTextRef}
            className="text-9xl font-normal mt-8 max-xxxl:text-7xl max-lg:text-5xl max-md:text-4xl"
          >
            당신만의 개발 파트너
            <br className="max-md:block hidden" />{" "}
            <span className="rotating-word" ref={rotatingRef}>
              <strong>넥사코드</strong>
            </span>
            입니다.
          </div>
          <p className="text-5xl animated-text text-gray-400 mt-10 mb-40 max-xxxl:text-4xl max-xxxl:mb-20 max-lg:text-xl max-lg:mb-20 max-lg:mt-5 max-md:text-xl">
            처음의 기대가 끝까지 이어지도록,{" "}
            <br className="max-md:block hidden" />
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
