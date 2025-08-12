import Image from "next/image";
import { useRef } from "react";
import { useSectionNumberAnimation } from "../../animations/sectionNumber";
import { useSectionTitleAnimation } from "../../animations/sectionTitle";
import {
  useBounceSection1,
  useBounceSection2,
  useBounceSection3,
} from "../../animations/bounce";
// import { gsap } from "gsap";

interface Section02Props {
  sectionRefs: React.RefObject<(HTMLDivElement | null)[]>;
  startIndex: number;
}

export default function Section02({ sectionRefs, startIndex }: Section02Props) {
  const sectionNumberRef = useRef<HTMLDivElement>(null);
  const sectionTitleRef = useRef<HTMLDivElement>(null);
  useSectionNumberAnimation(sectionNumberRef);
  useSectionTitleAnimation(sectionTitleRef);

  const bounceRef1 = useRef<HTMLDivElement | null>(null);
  const bounceRef2 = useRef<HTMLDivElement | null>(null);
  const bounceRef3 = useRef<HTMLDivElement | null>(null);

  useBounceSection1(bounceRef1);
  useBounceSection2(bounceRef2);
  useBounceSection3(bounceRef3);

  return (
    <div className="container relative justify-center  items-center py-36">
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
              02. SOLUTION
            </div>
          </div>
        </div>
        <div className="startPage-title-height">
          <div ref={sectionTitleRef} className="startPage-title">
            <h1 className="section-title-line ">
              고민의 끝에서 마주하는 <br className="lg:hidden" />
              진짜 파트너,&nbsp;
              <br className="xl:hidden" />
              <span className="font-bold ">넥사코드 </span>
              입니다
            </h1>
          </div>
        </div>
        <div className="w-full flex items-center justify-center max-lg:pt-24 max-md:h-auto ">
          <div className="flex gap-2 max-xl:mt-10 max-md:flex-col max-md:mt-0">
            {/* 1번 항목 */}
            <div className="text-center w-full flex-1" ref={bounceRef1}>
              <Image
                width={100}
                height={100}
                src="/images/startPage/section02_1.png"
                alt="고민의 끝에서 마주하는 진짜 파트너, 넥사코드 입니다"
                className="startPage-section02-image"
              />
              <h3 className="startPage-section02-title">
                단계마다 체계적인 관리
              </h3>
              <p className="startPage-section02-description">
                담당 매니저가 기획부터 운영까지 <br />전 과정을 책임지고, <br />{" "}
                프로젝트의 방향성과 <br />
                성장성을 함께 고민합니다.
              </p>
            </div>
            {/* 2번 항목 */}
            <div className="text-center w-full flex-1" ref={bounceRef2}>
              <Image
                width={100}
                height={100}
                src="/images/startPage/section02_2.png"
                alt="고민의 끝에서 마주하는 진짜 파트너, 넥사코드 입니다"
                className="startPage-section02-image"
              />
              <h3 className="startPage-section02-title">
                수많은 프로젝트에서 검증된 방식
              </h3>
              <p className="startPage-section02-description">
                미끼 견적 없이, 가짜 포트폴리오 없이. <br /> 결과로 증명된 실전
                전략으로 정확하게 실행합니다.
              </p>
            </div>
            {/* 3번 항목 */}
            <div className="text-center w-full flex-1" ref={bounceRef3}>
              <Image
                width={100}
                height={100}
                src="/images/startPage/section02_1.png"
                alt="고민의 끝에서 마주하는 진짜 파트너, 넥사코드 입니다"
                className="startPage-section02-image"
              />
              <h3 className="startPage-section02-title">
                외주를 넘어선 진짜 파트너십
              </h3>
              <p className="startPage-section02-description">
                단순한 외주 개발사가 아닌, <br /> 당신의 성공을 함께 그리는
                비즈니스 파트너입니다.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
