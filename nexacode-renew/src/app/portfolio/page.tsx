"use client";

import CardSlider from "../../components/portfolio/CardSlider";
import Image from "next/image";
import { useState, useEffect } from "react";
import "../../styles/portfolio.css";

export default function PortfolioPage() {
  const [isSliderReady, setIsSliderReady] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsSliderReady(true); // 일정 시간 후 슬라이더 보여주기
    }, 100); // 0.5초 정도 기다렸다가 교체

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen">
      <div className="w-full h-20 mt-32 bg-red-500"></div>
      <div className="w-full max-w-[200rem] px-4 flex-1 flex items-center justify-center">
        {isSliderReady ? (
          <CardSlider />
        ) : (
          <Image
            src="/images/portfolio/nexaPortfolio.webp"
            alt="헬스 친구 매칭, 커머스 앱"
            width={1}
            height={1}
            priority
            fetchPriority="high"
            loading="eager"
            draggable={false}
            style={{
              position: "absolute",
              width: "1px",
              height: "1px",
              opacity: 0,
              pointerEvents: "none",
            }}
          />
        )}
      </div>
    </div>
  );
}
