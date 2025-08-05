import Image from "next/image";

interface OverlapCardProps {
  imageSrc: string;
  imageAlt: string;
  category: string;
  title: string;
  sentence: string;
}

export default function OverlapCard({
  imageSrc,
  imageAlt,
  category,
  title,
  sentence,
}: OverlapCardProps) {
  return (
    <>
      <div className="block max-lg:hidden relative w-full max-w-xl work-box">
        {/* 뒤에 있는 이미지 */}
        <div className="w-[18.5rem] h-[28rem] relative overflow-hidden thumb ">
          <Image src={imageSrc} alt={imageAlt} fill className="object-cover" />
        </div>

        {/* 앞에 겹쳐진 흰색 텍스트 박스 */}
        <div className="absolute bottom-0 translate-x-[8rem] bg-white px-10 py-12 w-[22rem] h-[18.75rem]">
          <p className="text-sm mb-8 text-[#555555]">{category}</p>
          <h2
            className="mb-10 text-lg text-gray-800 leading-relaxed"
            dangerouslySetInnerHTML={{ __html: title }}
          />
          <hr className="mb-5" />
          <p className="text-base font-black text-gray-700 mb-2">
            &quot;{sentence}&quot;
          </p>
        </div>
      </div>
      <div className="hidden max-lg:flex max-lg:flex-col w-full max-w-xl work-box">
        {/* 뒤에 있는 이미지 */}
        <div className="w-[18.9375rem] h-[25.8125rem] thumb max-sm:w-[15rem] max-sm:h-[23rem] max-xs:w-[15rem] max-xs:h-[15rem] max-xs:mt-[2rem]">
          <Image src={imageSrc} alt={imageAlt} fill className="object-cover" />
        </div>

        {/* 앞에 겹쳐진 흰색 텍스트 박스 */}
        <div className="bg-white p-2 mt-5 w-[20rem] h-[18.75rem] max-xs:w-[20rem] max-xs:text-2xl max-xs:h-[10rem]">
          <p className="text-sm text-[#555555]">{category}</p>
          <h2
            className="mb-5 text-lg text-gray-800 leading-relaxed"
            dangerouslySetInnerHTML={{ __html: title }}
          />
          <hr className="mb-2" />
          <p className="text-base font-black text-gray-700">{sentence}</p>
        </div>
      </div>
    </>
  );
}
