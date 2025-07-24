"use client";

import CardSlider from "../../components/portfolio/CardSlider";
import Image from "next/image";
import { useState, useEffect } from "react";
export default function PortfolioPage() {
  const [isSliderReady, setIsSliderReady] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsSliderReady(true); // 일정 시간 후 슬라이더 보여주기
    }, 500); // 0.5초 정도 기다렸다가 교체

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-screen h-screen overflow-hidden flex items-center justify-center">
      <div className="w-full max-w-[200rem] px-4">
        {isSliderReady ? (
          <CardSlider />
        ) : (
          <Image
            src="/images/portfolio/nextPortfoilo.webp"
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
