import Image from "next/image";
// import ButtonPage02 from "../startPageComponents/ButtonPage02";
import { useRef } from "react";
import { useSectionNumberAnimation } from "../../animations/sectionNumber";
import { useSectionTitleAnimation } from "../../animations/sectionTitle";
import { useGradientTextAnimation } from "../../animations/gradientText";
interface Section01Props {
  sectionRefs: React.RefObject<(HTMLDivElement | null)[]>;
  startIndex: number;
}

export default function Section01({ sectionRefs, startIndex }: Section01Props) {
  const textRef = useRef<HTMLDivElement | null>(null);
  useGradientTextAnimation(textRef);

  const sectionNumberRef = useRef<HTMLDivElement>(null);
  useSectionNumberAnimation(sectionNumberRef);
  const sectionTitleRef = useRef<HTMLDivElement>(null);
  useSectionTitleAnimation(sectionTitleRef);

  return (
    <div className="container relative justify-center  items-center py-20">
      <div className="flex flex-col  w-full max-md:mx-10">
        <div className="section-number">
          <div
            ref={(el) => {
              if (sectionRefs.current) {
                sectionRefs.current[startIndex] = el;
              }
            }}
          >
            <div ref={sectionNumberRef} data-stagger="0.05">
              01. ISSUES
            </div>
          </div>
        </div>
        <div className="startPage-title-height">
          <div ref={sectionTitleRef} className="startPage-title">
            <h1 className="section-title-line ">
              <span className="font-bold ">개발사 선정에 </span>
              고민이 많으시죠?
              <br />
            </h1>
          </div>
          <span
            ref={textRef}
            className="textGradient__header mt-20 text-gray-500 text-center lg:mt-2 xxl:text-4xl lg:text-3xl  "
          >
            무엇을 만들지보다, 누구와 함께할지가 더 중요한 고민일지도 모릅니다.
          </span>
        </div>
        <div className="w-full h-auto">
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
