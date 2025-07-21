"use client";

import Footer from "@/src/components/blog/Footer";
import Image from "next/image";

export default function PortfolioDetailPage() {
  return (
    <div
      className="relative w-screen min-h-screen"
      style={{ width: "100vw", minHeight: "100vh", margin: 0, padding: 0 }}
    >
      {/* 실제 콘텐츠 */}
      <div className="relative flex w-screen min-h-screen z-10 max-md:flex-col">
        <div className="w-[55vw] flex items-center justify-end">
          <Image
            src="/images/nexaPortfolio2.png"
            alt="portfolio"
            width={600}
            height={600}
            className="translate-y-10"
          />
        </div>
        <div className="w-[45vw] flex flex-col items-start translate-y-32 justify-end py-60 px-10 max-md:w-full font-chiron ">
          <div className="text-8xl font-light">
            헬스 친구 매칭,
            <br /> 커머스 앱{" "}
          </div>

          <div className="text-gray-500 text-xl font-light mt-4 ml-3">
            <div>BRANDING 2025.04.09</div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
