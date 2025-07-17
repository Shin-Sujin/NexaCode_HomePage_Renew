import Image from "next/image";

export default function Title() {
  return (
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
          어플제작업체, C2C 앱 고민이라면 꼭 읽어보세요
        </h1>
        <div className="flex items-center text-white/90 text-lg drop-shadow">
          <span>🗓️ 2023.04.20</span>
        </div>
      </div>
    </div>
  );
}
