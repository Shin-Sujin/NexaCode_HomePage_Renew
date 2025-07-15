import Image from "next/image";

interface OverlapCardProps {
  imageSrc: string;
  imageAlt: string;
  category: string;
  date: string;
  title: string;
  readMoreText?: string;
}

export default function OverlapCard({
  imageSrc,
  imageAlt,
  category,
  date,
  title,
}: OverlapCardProps) {
  return (
    <>
      <div
        className="block max-lg:hidden relative w-full max-w-xl work-box has_fade_anim"
        data-fade-from="bottom"
        data-duration="0.5"
        data-delay="0.3"
      >
        {/* 뒤에 있는 이미지 */}
        <div className="w-[18.9375rem] h-[25.8125rem] relative overflow-hidden thumb">
          <Image src={imageSrc} alt={imageAlt} fill className="object-cover" />
        </div>

        {/* 앞에 겹쳐진 흰색 텍스트 박스 */}
        <div className="absolute bottom-0 translate-x-[10rem] bg-white p-10 w-[24.375rem] h-[18.75rem]">
          <p className="text-sm mb-2" style={{ color: "#555555" }}>
            {category} — {date}
          </p>
          <h2
            className="mb-10"
            style={{
              color: "#121212",
              fontSize: "1.625rem",
              letterSpacing: "0.01em",
            }}
          >
            {title}
          </h2>
          <hr className="mb-3" />
          <p className="text-base font-semibold">Read More</p>
        </div>
      </div>
      <div
        className="hidden max-lg:flex max-lg:flex-col w-full max-w-xl work-box has_fade_anim"
        data-fade-from="bottom"
        data-duration="0.5"
        data-delay="0.3"
      >
        {/* 뒤에 있는 이미지 */}
        <div className="w-[18.9375rem] h-[25.8125rem]  thumb max-sm:w-[15rem] max-sm:h-[23rem] max-xs:w-[27rem] max-xs:h-[40rem]">
          <Image src={imageSrc} alt={imageAlt} fill className="object-cover" />
        </div>

        {/* 앞에 겹쳐진 흰색 텍스트 박스 */}
        <div className="bg-white p-2 mt-5 w-[20rem] h-[18.75rem]">
          <p className="text-sm" style={{ color: "#555555" }}>
            {category} — {date}
          </p>
          <h2
            className="mb-5"
            style={{
              color: "#121212",
              fontSize: "1.625rem",
              letterSpacing: "0.01em",
            }}
          >
            {title}
          </h2>
          <hr className="mb-2" />
          <p className="text-base font-semibold">Read More</p>
        </div>
      </div>
    </>
  );
}
