import StepTable from "../startPageComponents/StepTable";
import { useRef } from "react";
import { useSectionNumberAnimation } from "../../animations/sectionNumber";
import { useSectionTitleAnimation } from "../../animations/sectionTitle";

interface Section06Props {
  sectionRefs: React.RefObject<(HTMLDivElement | null)[]>;
  startIndex: number;
}

export default function Section06({ sectionRefs, startIndex }: Section06Props) {
  const sectionNumberRef = useRef<HTMLDivElement>(null);
  const sectionTitleRef = useRef<HTMLDivElement>(null);
  useSectionNumberAnimation(sectionNumberRef);
  useSectionTitleAnimation(sectionTitleRef);
  return (
    <div
      id="process"
      className="container relative justify-center  items-center lg:py-20 py-10"
    >
      <div className="flex flex-col w-full max-md:mx-10">
        <div className="section-number">
          <div
            ref={(el) => {
              if (sectionRefs.current) {
                sectionRefs.current[startIndex] = el;
              }
            }}
          >
            <div ref={sectionNumberRef} data-stagger="0.05">
              06. HOW WE WORK
            </div>
          </div>
        </div>
        <div className="startPage-title-height">
          <div ref={sectionTitleRef} className="startPage-title">
            <h1 className="section-title-line ">
              <span className="font-bold ">처음부터 끝까지, </span>
              <br className="max-md:block hidden" />
              넥사코드가 함께합니다
            </h1>
          </div>
        </div>
        <div className="relative w-full flex justify-center items-center lg:mt-10 mt-0">
          {/* 제목 밑 내용 */}
          <StepTable />
        </div>
      </div>
    </div>
  );
}
