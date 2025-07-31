"use client";

import CardSlider from "../../components/portfolio/CardSlider";
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
  const [portfolioList, setPortfolioList] = useState<PortfolioListItem[]>([]);

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
        <CardSlider portfolios={portfolioList} />
      </div>
    </div>
  );
}
