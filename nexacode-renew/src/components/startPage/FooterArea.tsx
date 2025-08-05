"use client";
import Link from "next/link";
import styles from "../../styles/FooterArea.module.css";
// import styles from "@/src/styles/globals.css";
export default function FooterArea() {
  return (
    <div className="container h-screen">
      <section className={styles.footerAreaWrapper}>
        <div className={styles.inner}>
          <div className="text-6xl font-normal mt-20">
            누구나 IT 개발 전문 부서를 가질 수 있도록,
          </div>
          <div className="text-7xl font-normal mt-4">
            당신만의 개발 파트너 <strong>넥사코드</strong>입니다.
          </div>
          <p className="text-3xl text-gray-400 mt-5 mb-10">
            처음의 기대가 끝까지 이어지도록, 넥사코드는{" "}
            <strong>끝까지 책임지는 개발</strong>을 약속드립니다.
          </p>
          <div className={styles.ctaArea}>
            <div className={styles.locationBlock}>
              <h3>오시는 길</h3>
              <p>
                서울시 금천구 디지털로 178
                <br />
                가산 퍼블릭 A동 1515~1516호
              </p>
            </div>
            <div className={styles.locationBlock}>
              <h3>CONTACT</h3>
              <p>
                전화번호: 010-4009-2398
                <br />
                Email:  nexacode@nexacode.co.kr
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
      </section>
    </div>
  );
}
