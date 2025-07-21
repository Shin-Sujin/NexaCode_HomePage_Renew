"use client";

import Footer from "@/src/components/blog/Footer";
import Image from "next/image";

export default function PortfolioDetailPage() {
  return (
    <div
      className="relative w-screen min-h-screen"
      style={{ width: "100vw", minHeight: "100vh", margin: 0, padding: 0 }}
    >
      <div
        className="relative w-full  h-[80vh] min-w-0 min-h-0 flex items-center justify-center xxl:h-[50vh]"
        style={{ overflowX: "hidden" }}
      >
        {/* 배경 이미지 */}
        <div className="absolute inset-0 w-full h-full z-0">
          <Image
            src="/images/nexaBlogImage.jpg"
            alt="blog_bg"
            fill
            style={{ objectFit: "cover" }}
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/30" />
        </div>
        {/* 텍스트 영역 */}
        <div className="relative z-10 flex flex-col items-center justify-end w-full h-full pb-20 max-pf_md:px-10">
          <h1 className="text-7xl md:text-5xl font-semibold text-white drop-shadow-lg mb-6 text-center max-pf_md:text-5xl max-pf_xs:text-3xl">
            Nexa Portfolio
          </h1>
          <div className="flex items-center text-white/90 text-lg drop-shadow">
            <span>넥사코드와 함께한 성공 사례를 공유합니다.</span>
          </div>
        </div>
      </div>
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
