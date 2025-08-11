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
      <div className="block max-lg:hidden relative w-full max-w-xl work-box ">
        {/* 뒤에 있는 이미지 */}
        <div className="xxl:w-[25rem] xxl:h-[35rem] xl:w-[18rem] xl:h-[22rem] relative overflow-hidden thumb">
          <Image src={imageSrc} alt={imageAlt} fill className="object-cover" />
        </div>

        {/* 앞에 겹쳐진 텍스트 박스 */}
        <div
          className={`absolute bottom-0 translate-x-[8rem] translate-y-[1rem] xxl:px-10 xxl:py-12 xxl:w-[28rem] 
        xxl:h-[22rem] xl:px-7 xl:py-10 xl:w-[20rem] xl:h-[16rem] w-[25rem] h-[20rem]
        ${className}`}
        >
          <p className="xxl:text-lg xl:text-base xxl:mb-8 xl:mb-5 text-[#555555] ">
            {category}
          </p>
          <h2
            className="xxl:mb-10 xl:mb-5 xxl:text-2xl xl:text-lg text-gray-800 leading-relaxed "
            dangerouslySetInnerHTML={{ __html: title }}
          />
          <hr className="mb-5" />
          <p className="xxl:text-lg xl:text-sm font-black text-gray-700 mb-2">
            &quot;{sentence}&quot;
          </p>
        </div>
      </div>
      {/* 모바일에서는 따로 컴포넌트 작성 */}
      <div className="hidden max-lg:flex max-lg:flex-col w-full max-w-xl work-box">
        {/* 뒤에 있는 이미지 */}
        <div className="w-[18.9375rem] h-[25.8125rem] thumb max-sm:w-[15rem] max-sm:h-[23rem] max-xs:w-[15rem] max-xs:h-[15rem] max-xs:mt-[2rem] mx-auto">
          <Image src={imageSrc} alt={imageAlt} fill className="object-cover" />
        </div>

        {/* 앞에 겹쳐진 흰색 텍스트 박스 */}
        <div className="bg-white p-2 mt-5 w-[20rem] h-[18.75rem] max-xs:w-[20rem] max-xs:text-2xl max-xs:h-[10rem]  mx-auto">
          <p className="text-sm text-[#555555] max-lg:font-medium text-center">
            {category}
          </p>
          <h2
            className="mb-5 text-lg text-gray-800 leading-relaxed max-xxxl:text-sm max-lg:mt-2 text-center"
            dangerouslySetInnerHTML={{ __html: title }}
          />
          <hr className="mb-2" />
          <p className="text-lg font-black text-gray-700 max-lg:text-base text-center">
            {sentence}
          </p>
        </div>
      </div>
    </>
  );
}
