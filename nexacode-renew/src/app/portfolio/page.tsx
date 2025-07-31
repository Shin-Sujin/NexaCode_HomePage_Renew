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
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const res = (await fetchPortfolios()) as {
          data: PortfolioApiResponse;
        };
        const items = res.data?.data || [];
        setPortfolioList(items);
      } catch (error) {
        console.error("Error fetching portfolios:", error);
        setError("포트폴리오 데이터를 불러오지 못했습니다.");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);
  console.log("portfolioList", portfolioList);

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen">
      <div className="w-full h-32 mt-32 bg-red-100"></div>
      <div className="w-full max-w-[200rem] px-4 flex-1 flex items-center justify-center">
        {loading ? (
          <div className="loader"></div>
        ) : error ? (
          <div className="text-center py-10 text-red-400">{error}</div>
        ) : portfolioList.length === 0 ? (
          <div className="loader"></div>
        ) : (
          <CardSlider portfolios={portfolioList} />
        )}
      </div>
    </div>
  );
}
