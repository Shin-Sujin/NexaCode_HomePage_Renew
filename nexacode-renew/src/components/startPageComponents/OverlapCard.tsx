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
  readMoreText = "Read More",
}: OverlapCardProps) {
  return (
    <div className="relative w-full max-w-xl">
      {/* 뒤에 있는 이미지 */}
      <div className="w-[18.9375rem] h-[25.8125rem] relative overflow-hidden">
        <Image src={imageSrc} alt={imageAlt} fill className="object-cover" />
      </div>

      {/* 앞에 겹쳐진 흰색 텍스트 박스 */}
      <div className="absolute bottom-0 right-[-3rem] bg-white p-10 w-[24.375rem] h-[18.75rem]">
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
        <p className="text-base font-semibold">{readMoreText}</p>
      </div>
    </div>
  );
}
