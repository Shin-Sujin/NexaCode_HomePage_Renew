// 예시: src/components/portfolio/CustomSwiperNav.tsx
import React from "react";

interface Props {
  onPrev: () => void;
  onNext: () => void;
}

export default function CustomSwiperNav({ onPrev, onNext }: Props) {
  return (
    <div className="custom-swiper-nav">
      <button className="nav-btn prev" onClick={onPrev}>
        <span className="arrow">{"<"}</span> PREV
      </button>
      <button className="nav-btn next" onClick={onNext}>
        NEXT <span className="arrow">{">"}</span>
      </button>
    </div>
  );
}
