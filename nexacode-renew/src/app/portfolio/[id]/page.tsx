"use client";

// import "@/src/styles/blog.css"; // 스타일 분리해서 이 경로에 저장한다고 가정

import FloatingLeft from "@/src/components/blog/FloatingLeft";
import FloatingRight from "@/src/components/blog/FloatingRight";
import Footer from "@/src/components/blog/Footer";
import ScrollProgressBar from "@/src/components/blog/ScrollProgressBar";
import { steps } from "@/src/components/blog/blogSteps";
import { portfolioItems } from "@/src/components/portfolio/portfolioItems";
import Image from "next/image";
import "@/src/styles/blog.css"; // 스타일 분리해서 이 경로에 저장한다고 가정

export default function PortfolioPage({ params }: { params: { id: string } }) {
  const portfolio = portfolioItems[Number(params.id)];

  return (
    <div className="site__container">
      <ScrollProgressBar />
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
            {portfolio.title}
          </h1>
          <div className="flex items-center text-white/90 text-lg drop-shadow">
            <span>🗓️ {portfolio.description}</span>
          </div>
        </div>
      </div>

      <main className="post">
        <div className="blog-container">
          <FloatingLeft />
          <div style={{ flex: 1 }}>
            <div className="content">
              {/* 실제 콘텐츠 */}
              <div className="flex flex-col  justify-center items-center">
                <div className="flex items-end justify-end w-[30vw]">
                  <Image
                    src={portfolio.imageSrc}
                    alt="portfolio"
                    width={600}
                    height={600}
                  />
                </div>
                <div className="flex flex-col items-start justify-center pt-10 px-10 font-chiron ">
                  <div className="text-6xl font-light">{portfolio.title}</div>
                  <div className="text-gray-500 text-xl font-light mt-4 ml-3">
                    <div>{portfolio.description}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <FloatingRight steps={steps} />
        </div>
      </main>
      <Footer />
    </div>
  );
}
