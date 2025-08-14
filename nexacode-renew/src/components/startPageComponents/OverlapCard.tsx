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
      {/* 모바일에서는 따로 컴포넌트 작성 */}
      <div className="xl:hidden flex flex-col w-full max-w-xl justify-center items-center px-auto py-auto">
        {/* 앞에 겹쳐진 흰색 텍스트 박스 */}
        <div className="bg-white flex flex-col lg:py-20 py-10 px-2 lg:w-[20rem] w-[15rem] lg:h-[23.75rem] h-[20rem] text-2xl  text-center">
          <div>
            <p className="text-sm text-[#555555] mb-8">{category}</p>
            <h2
              className="text-lg text-gray-800 leading-relaxed break-keep"
              dangerouslySetInnerHTML={{ __html: title }}
            />
          </div>
          <div className="mt-auto">
            <hr className="lg:mb-8 mb-5" />
            <p className="lg:text-lg text-base font-black text-gray-700">
              {sentence}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
