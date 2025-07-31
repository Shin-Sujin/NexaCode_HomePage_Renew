"use client";

import CardSlider from "../../components/portfolio/CardSlider";
import Image from "next/image";
import { useState, useEffect } from "react";
import "../../styles/portfolio.css";
import { fetchPortfolios } from "../../apis";

export type PortfolioListItem = {
  id: number;
  title: string;
  thumbnailPath: string;
  createdAt: string;
};

interface PortfolioApiResponse {
  data: PortfolioListItem[];
  meta: {
    total: number;
    last_page: number;
  };
}

export default function PortfolioPage() {
  const [isSliderReady, setIsSliderReady] = useState(false);
  const [portfolioList, setPortfolioList] = useState<PortfolioListItem[]>([]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsSliderReady(true);
    }, 100);

    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = (await fetchPortfolios()) as {
          data: PortfolioApiResponse;
        };
        const items = res.data?.data || [];
        setPortfolioList(items);
      } catch (error) {
        console.error("Error fetching portfolios:", error);
      }
    };
    fetchData();
  }, []);
  console.log("portfolioList", portfolioList);

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen">
      <div className="w-full h-32 mt-32 bg-red-500"></div>
      <div className="w-full max-w-[200rem] px-4 flex-1 flex items-center justify-center">
        {isSliderReady ? (
          <CardSlider portfolios={portfolioList} />
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
