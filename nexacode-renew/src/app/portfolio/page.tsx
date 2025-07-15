"use client";

import CardSlider from "../../components/portfolio/CardSlider";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function PortfolioPage() {
  return (
    <div className=" bg-red-200 fixed top-0 left-0 w-screen h-screen overflow-hidden">
      <h1 className="text-3xl font-bold text-center mt-60">My Portfolio</h1>
      <CardSlider />
    </div>
  );
}
