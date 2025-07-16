"use client";

import Image from "next/image";

export default function BlogPage() {
  return (
    <div className="relative w-full h-[45rem] flex items-center justify-center">
      {/* 배경 이미지 */}
      <div className="absolute inset-0 w-full h-full overflow-hidden z-0">
        <Image
          src="/images/nexaBlogImage.jpg"
          alt="blog_bg"
          fill
          style={{ objectFit: "cover" }}
          priority
        />
        <div className="absolute inset-0 bg-black/30" /> {/* 어두운 오버레이 */}
      </div>

      {/* 텍스트 영역 */}
      <div className="relative z-10 flex flex-col items-center justify-end w-full h-full pb-20">
        <h1 className="text-7xl md:text-5xl font-semibold text-white drop-shadow-lg mb-6 text-center">
          어플제작업체, C2C 앱 고민이라면 꼭 읽어보세요
        </h1>
        <div className="flex items-center text-white/90 text-lg drop-shadow">
          <span>🗓️ 2023.04.20</span>
        </div>
      </div>
    </div>
  );
}
