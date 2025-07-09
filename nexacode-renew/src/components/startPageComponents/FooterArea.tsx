"use client";

import { useRef } from "react";
import styles from "../../styles/FooterArea.module.css";
import { useSlideInFromLeft } from "../../animations/slideInFromLeft";
import { useFooterTitleAnimation } from "../../animations/animations_StartPage";

export default function FooterArea() {
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  useSlideInFromLeft({
    targetRef: subtitleRef,
    delay: 0.2,
    duration: 1.2,
  });

  useFooterTitleAnimation(titleRef);

  return (
    <section className={styles.footerAreaWrapper}>
      <div className={styles.inner}>
        <h2 ref={titleRef} className={styles.title}>
          Get started <br />
          now
        </h2>
        <p ref={subtitleRef} className={styles.subtitle}>
          If you would like to work with us or just want to get in touch,
          we&apos;d love to hear from you!
        </p>
        <div className={styles.ctaArea}>
          <div className={styles.locationBlock}>
            <h3>London</h3>
            <p>
              Baltia Squar, Mark Street,
              <br />
              London
            </p>
          </div>
          <div className={styles.locationBlock}>
            <h3>New York</h3>
            <p>
              Nenuya Centre, Elia Street,
              <br />
              New York, USA
            </p>
          </div>
          <div className={styles.newsletter}>
            <form className={styles.form}>
              <input
                type="email"
                placeholder="Enter your email"
                className={styles.input}
              />
              <button type="submit" className={styles.button}>
                →
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className={styles.footerLinks}>
        <p>
          © 2022 – 2025 | All rights reserved <br /> by{" "}
          <strong>crowdyTheme</strong>
        </p>
        <div className={styles.linkList}>
          <a href="#">About Us</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Career</a>
          <a href="#">Sitemap</a>
        </div>
      </div>
    </section>
  );
}
