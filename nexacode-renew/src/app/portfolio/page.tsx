"use client";

import CardSlider from "../../components/portfolio/CardSlider";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function PortfolioPage() {
  return (
    <div className="fixed top-0 left-0 w-screen h-screen overflow-hidden flex items-center justify-center">
      <div className="w-full max-w-[200rem] px-4">
        <CardSlider />
      </div>
    </div>
  );
}
