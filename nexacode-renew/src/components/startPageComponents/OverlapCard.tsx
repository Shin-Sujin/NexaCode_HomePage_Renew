import Image from "next/image";

interface OverlapCardProps {
  imageSrc: string;
  imageAlt: string;
  category: string;
  title: string;
  sentence: string;
  className?: string;
}

export default function OverlapCard({
  imageSrc,
  imageAlt,
  category,
  title,
  sentence,
  className,
}: OverlapCardProps) {
  return (
    <>
      {" "}
      <div className="xl:block hidden relative w-full max-w-xl work-box ">
        {/* 뒤에 있는 이미지 */}
        <div className="xxl:w-[25rem] xxl:h-[35rem] xl:w-[18rem] xl:h-[22rem] relative overflow-hidden thumb">
          <Image src={imageSrc} alt={imageAlt} fill className="object-cover" />
        </div>

        {/* 앞에 겹쳐진 텍스트 박스 */}
        <div
          className={`absolute bottom-0 translate-x-[8rem] translate-y-[1rem] xxl:px-10 xxl:py-12 xxl:w-[26rem] 
        xxl:h-[22rem] xl:px-7 xl:py-10 xl:w-[20rem] xl:h-[16rem] w-[25rem] h-[20rem]
        ${className} flex flex-col`}
        >
          <div>
            <p className="xxl:text-lg xl:text-base xxl:mb-8 xl:mb-5 text-[#555555] ">
              {category}
            </p>
            <h2
              className="xxl:mb-10 xl:mb-5 xxl:text-2xl xl:text-lg text-gray-800 leading-relaxed break-keep"
              dangerouslySetInnerHTML={{ __html: title }}
            />
          </div>
          <div className="mt-auto">
            <hr className="mb-5" />
            <p className="xxl:text-lg xl:text-sm font-black text-gray-700">
              &quot;{sentence}&quot;
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
