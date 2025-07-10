import React, { useRef, useEffect } from "react";
import "../../styles/button_startPage.css";

export default function ButtonPage01() {
  const buttonRef = useRef<HTMLAnchorElement>(null);
  const spanRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const button = buttonRef.current;
    const span = spanRef.current;

    if (!button || !span) return;

    const handleMouseEnter = (e: MouseEvent) => {
      const rect = button.getBoundingClientRect();
      const currentX = e.clientX;
      const currentY = e.clientY;

      let topVal = currentY - rect.top;
      let leftVal = currentX - rect.left;

      // 버튼 경계 내로 제한
      if (topVal > rect.height) {
        topVal = rect.height;
      }
      if (leftVal > rect.width) {
        leftVal = rect.width;
      }
      if (topVal < 0) {
        topVal = 0;
      }
      if (leftVal < 0) {
        leftVal = 0;
      }

      // span 요소 표시 및 위치 설정
      span.style.display = "block";
      span.style.top = topVal + "px";
      span.style.left = leftVal + "px";
      span.style.opacity = "1";

      // 애니메이션 클래스 추가
      setTimeout(() => {
        span.classList.add("btnAni");
      }, 200);
    };

    const handleMouseLeave = (e: MouseEvent) => {
      if (!span) return;

      const rect = button.getBoundingClientRect();
      const currentX = e.clientX;
      const currentY = e.clientY;

      let topVal = currentY - rect.top;
      let leftVal = currentX - rect.left;

      // 버튼 경계 내로 제한
      if (topVal > rect.height) {
        topVal = rect.height;
      }
      if (leftVal > rect.width) {
        leftVal = rect.width;
      }
      if (topVal < 0) {
        topVal = 0;
      }
      if (leftVal < 0) {
        leftVal = 0;
      }

      // 퇴장 위치 설정
      span.style.top = topVal + "px";
      span.style.left = leftVal + "px";

      // 퇴장 애니메이션 클래스 추가
      span.classList.remove("btnAni");
      span.classList.add("btnAniOut");

      // 애니메이션 완료 후 요소 숨김
      setTimeout(() => {
        span.style.display = "none";
        span.style.opacity = "0";
        span.classList.remove("btnAniOut");
      }, 500);
    };

    button.addEventListener("mouseenter", handleMouseEnter);
    button.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      button.removeEventListener("mouseenter", handleMouseEnter);
      button.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <a
      ref={buttonRef}
      className="btn has_fade_anim"
      data-fade-from="top"
      data-fade-offset="10"
      // data-delay="0.1"
      data-duration="0.5"
      data-ease="bounce"
    >
      <span ref={spanRef}></span>
      <div className="btn-text">
        Explore us
        <br />
        more
      </div>
    </a>
  );
}
