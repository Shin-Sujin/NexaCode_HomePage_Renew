import Image from "next/image";
interface TitleProps {
  title: string;
  date?: string;
  // 필요하면 author, thumbnailPath 등도 추가
}
export default function Title({ title, date }: TitleProps) {
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
      <div className="relative z-10 flex flex-col items-center justify-end w-full h-full pb-20 max-sm:px-10">
        <h1
          className="xl:text-7xl lg:text-5xl font-semibold text-white drop-shadow-lg mb-6 
        text-center sm:text-5xl text-3xl"
        >
          {title}
        </h1>
        <div className="flex items-center text-white/90 text-lg drop-shadow">
          <span>🗓️ {date}</span>
        </div>
      </div>
    </div>
  );
}
