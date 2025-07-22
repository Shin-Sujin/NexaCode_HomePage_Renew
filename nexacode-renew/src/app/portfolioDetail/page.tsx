"use client";

import Footer from "@/src/components/blog/Footer";
import Image from "next/image";

export default function PortfolioDetailPage() {
  return (
    <div className="relative w-screen">
      <div className="relative mt-24 flex  ">
        {/* 텍스트 영역 */}
        <div className="relative flex flex-col justify-end w-full h-full py-6 px-32">
          <h1 className="text-7xl md:text-5xl font-medium drop-shadow-lg mb-6 text-gray-900">
            Nexa Portfolio
          </h1>
          <div className="flex items-center text-xl drop-shadow font-chiron font-400 text-gray-500">
            <span>넥사코드와 함께한 성공 사례를 공유합니다.</span>
          </div>
        </div>
      </div>
      {/* 실제 콘텐츠 */}
      <div className="relative flex w-screen z-10 max-md:flex-col ">
        <div className="flex justify-center items-center">
          <div className="w-[55vw] flex items-end justify-end">
            <Image
              src="/images/nexaPortfolio2.png"
              alt="portfolio"
              width={600}
              height={600}
            />
          </div>
          <div className="w-[45vw] min-h-[70vh] flex flex-col items-start justify-center pt-60 px-10 font-chiron ">
            <div className="text-6xl font-light">
              헬스 친구 매칭,
              <br /> 커머스 앱{" "}
            </div>

            <div className="text-gray-500 text-xl font-light mt-4 ml-3">
              <div>BRANDING 2025.04.09</div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
