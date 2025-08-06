import StepTable from "../startPageComponents/StepTable";
import { useRef } from "react";
import { useSectionNumberAnimation } from "../../animations/sectionNumber";
import { useSectionTitleAnimation } from "../../animations/sectionTitle";
export default function Section06() {
  const sectionNumberRef = useRef<HTMLDivElement>(null);
  const sectionTitleRef = useRef<HTMLDivElement>(null);
  useSectionNumberAnimation(sectionNumberRef);
  useSectionTitleAnimation(sectionTitleRef);
  return (
    <div className="container relative justify-center  items-center py-36">
      <div className="flex flex-col w-full max-md:mx-10">
        <div className="text-2xl  max-xxxl:text-xl max-lg:text-lg">
          <div ref={sectionNumberRef} data-stagger="0.05">
            06. HOW WE WORK
          </div>
        </div>
        <div className="w-full h-[20vh] text-center max-xxxl:h-[15vh] max-lg:h-[10vh] max-md:h-auto">
          <h2
            ref={sectionTitleRef}
            className="mt-20 text-center text-[5rem] font-normal max-xxxl:text-6xl max-xxxl:mb-2 max-xl:text-5xl max-lg:mt-10 max-lg:text-4xl max-md:text-2xl"
          >
            <div className="section-title-line ">
              <span className="font-bold ">처음부터 끝까지, </span>
              <br className="max-md:block hidden" />
              넥사코드가 함께합니다
            </div>
          </h2>
        </div>
        <div className="relative w-full pt-20 flex justify-center items-center max-xxxl:pt-10">
          {/* 제목 밑 내용 */}
          <StepTable />
        </div>
      </div>
    </div>
  );
}
