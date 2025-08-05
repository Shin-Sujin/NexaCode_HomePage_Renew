import Image from "next/image";
// import ButtonPage02 from "../startPageComponents/ButtonPage02";
import { useRef } from "react";
import { useSectionNumberAnimation } from "../../animations/sectionNumber";
import { useSectionTitleAnimation } from "../../animations/sectionTitle";
export default function Section01() {
  const sectionNumberRef = useRef<HTMLDivElement>(null);
  useSectionNumberAnimation(sectionNumberRef);
  const sectionTitleRef = useRef<HTMLDivElement>(null);
  useSectionTitleAnimation(sectionTitleRef);

  return (
    <div className="container relative justify-center  items-center py-36">
      <div className="flex flex-col  w-full max-md:mx-10">
        <div className="text-2xl  max-xxxl:text-xl max-lg:text-lg ">
          <div ref={sectionNumberRef} data-stagger="0.05">
            01. ISSUES
          </div>
        </div>
        <div className="w-full h-[20vh] text-center max-xxxl:h-[15vh] max-lg:h-[10vh] max-md:h-auto">
          <h2
            ref={sectionTitleRef}
            className="max-w-full mt-20 text-center text-[5rem] font-normal max-xxxl:text-6xl max-xxxl:mb-2 max-xl:text-5xl max-lg:mt-10 max-lg:text-4xl  max-md:text-2xl"
          >
            <div className="section-title-line ">
              <span className="font-bold ">개발사 선정에 </span>
              고민이 많으시죠?
              <br />
            </div>
          </h2>
          <span className="text-gray-500 text-5xl text-center mt-2 max-xxxl:text-4xl max-xl:text-3xl max-lg:text-2xl max-md:text-xl">
            무엇을 만들지보다, 누구와 함께할지가 더 중요한 고민일지도 모릅니다.
          </span>
        </div>
        <div className="w-full h-[60vh] max-xxxl:h-[65vh]">
          <div className="relative w-full pt-20 flex flex-col items-center justify-center gap-10">
            <Image
              src="/images/startPage/Container.svg"
              alt="section01"
              width={800}
              height={800}
              className="w-[80%]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
