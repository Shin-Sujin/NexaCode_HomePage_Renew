"use client";
import Footer from "@/src/components/blog/Footer";
import Image from "next/image";
import "@/src/styles/blog.css"; // 스타일 분리해서 이 경로에 저장한다고 가정

interface PortfolioDetail {
  id: number;
  title: string;
  thumbnailPath: string;
  createdAt: string;
}

export default function PortfolioComponent({
  portfolio,
}: {
  portfolio: PortfolioDetail;
}) {
  if (!portfolio) return <div>존재하지 않는 글입니다.</div>;
  console.log("portfolio", portfolio);
  return (
    <div className="site__container">
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
            <span>🗓️ {portfolio.createdAt}</span>
          </div>
        </div>
      </div>

      <main className="post">
        <div className="blog-container">
          <div className="flex flex-col  justify-center items-center">
            <Image
              src={portfolio.thumbnailPath}
              alt="portfolio"
              width={600}
              height={600}
            />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
