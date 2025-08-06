import TestimonialRotator from "../startPageComponents/TestimonialRotator";
import { useRef } from "react";
import { useSectionNumberAnimation } from "../../animations/sectionNumber";
import { useSectionTitleAnimation } from "../../animations/sectionTitle";

interface Section05Props {
  sectionRefs: React.RefObject<(HTMLDivElement | null)[]>;
  startIndex: number;
}

export default function Section05({ sectionRefs, startIndex }: Section05Props) {
  const sectionNumberRef = useRef<HTMLDivElement>(null);
  const sectionTitleRef = useRef<HTMLDivElement>(null);
  useSectionNumberAnimation(sectionNumberRef);
  useSectionTitleAnimation(sectionTitleRef);
  return (
    <div className="container relative justify-center  items-center py-36 max-lg:py-10 max-lg:h-screen">
      <div className="flex flex-col max-lg:gap-10 w-full max-md:mx-10">
        <div className="text-2xl  max-xxxl:text-xl max-lg:text-lg text-white max-md:pt-32">
          <div
            ref={(el) => {
              if (sectionRefs.current) {
                sectionRefs.current[startIndex] = el;
              }
            }}
          >
            <div ref={sectionNumberRef} data-stagger="0.05">
              05. WHAT OUR CLIENTS SAY
            </div>
          </div>
        </div>
        <div className="w-full h-[20vh] text-center max-xxxl:h-[15vh] max-lg:h-[10vh]">
          <h2
            ref={sectionTitleRef}
            className="mt-20 text-center text-[5rem] font-normal max-xxxl:text-6xl max-xxxl:mb-2 max-xl:text-5xl max-lg:mt-10 max-lg:text-4xl max-md:text-2xl text-white"
          >
            <div className="section-title-line ">
              고객이 말하는 넥사코드는
              <span className="font-bold ">
                &quot;함께 일하고 싶은 개발사&quot;
              </span>{" "}
            </div>
          </h2>
        </div>

        <div className="relative w-full pt-20 max-xxxl:pt-10">
          <div className="flex flex-row justify-center items-center w-full">
            <TestimonialRotator />
          </div>
        </div>
      </div>
    </div>
  );
}
