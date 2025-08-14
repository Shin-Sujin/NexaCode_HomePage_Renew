import Image from "next/image";
import CounterUp from "../startPageComponents/CounterUp";
import TableSection03 from "./TableSection03";
import { useRef } from "react";
import { useSectionNumberAnimation } from "../../animations/sectionNumber";
import { useSectionTitleAnimation } from "../../animations/sectionTitle";
import { useTypewriterOnView } from "../../animations/useTypewriterOnView";
interface Section03Props {
  sectionRefs: React.RefObject<(HTMLDivElement | null)[]>;
  startIndex: number;
}

export default function Section03({ sectionRefs, startIndex }: Section03Props) {
  const sectionNumberRef = useRef<HTMLDivElement>(null);
  const sectionTitleRef = useRef<HTMLDivElement>(null);
  useSectionNumberAnimation(sectionNumberRef);
  useSectionTitleAnimation(sectionTitleRef);
  const typingRef = useTypewriterOnView<HTMLParagraphElement>({
    speed: 24, // 숫자 낮출수록 더 빨라짐
    rootMargin: "0px 0px -15% 0px",
    threshold: 0.1,
  });
  return (
    <div
      id="strengths"
      className="container relative justify-center items-center py-20"
      data-index="2"
    >
      <div className="flex flex-col  w-full max-md:mx-10">
        <div className="section-number">
          {/* 인덱스 번호: startIndex */}
          <div
            ref={(el) => {
              if (sectionRefs.current) {
                sectionRefs.current[startIndex] = el;
              }
            }}
          >
            <div ref={sectionNumberRef} data-stagger="0.05">
              03. WHAT WE DO
            </div>
          </div>
        </div>
        <div ref={sectionTitleRef} className="startPage-title">
          <h1 className="section-title-line">
            우리는 당신의&nbsp;
            <span className="font-bold">IT 개발팀이 되어드립니다</span>
          </h1>
        </div>
        <div className="w-full flex items-center justify-center">
          <div className="relative mt-24 w-full flex justify-center items-center h-full">
            <TableSection03 />
          </div>
        </div>
        <div className="relative w-full pt-20 mx-auto">
          {/* 인덱스 번호: startIndex + 1 */}
          <div
            ref={(el) => {
              if (sectionRefs.current) {
                sectionRefs.current[startIndex + 1] = el;
              }
            }}
            className="flex items-center justify-center mt-40 mb-40 max-xl:mt-20 max-xl:mb-40 max-md:flex-col max-md:mt-0"
          >
            <div className="flex flex-col items-center lg:items-end w-[500px]">
              <div className="flex  font-bold tracking-[-0.1em]   md:text-[100px] max-lg:text-[120px] leading-none max-md:items-start">
                <CounterUp targetNumber={2500} duration={10000} />
                <span>k</span>
              </div>
              <p className="text-center text-lg text-gray-700">
                자사 서비스 250만 다운로드 / 매각
              </p>
            </div>
            <div className="w-[3px] mx-10 h-36 bg-gray-200 max-md:hidden"></div>
            <hr className="h-[1px] mx-10 w-full my-10 bg-gray-200 hidden max-md:block"></hr>
            <h1 className="startPage-section03-description-text">
              직접 운영해본 적, 성공시켜본 적 없는 개발사가{" "}
              <br className="max-lg:block hidden" />
              과연 &quot;성공하는 서비스&quot;를 만들 수 있을까요?
              <br />
              넥사코드는 직접 만들었고, 성공까지 이뤄냈습니다. <br />
              우리가 증명한 성공 노하우, <br className="max-lg:block hidden" />
              당신의 프로젝트에 그대로 전합니다.
            </h1>
          </div>
          {/* 인덱스 번호: startIndex + 2 */}
          <div
            ref={(el) => {
              if (sectionRefs.current) {
                sectionRefs.current[startIndex + 2] = el;
              }
            }}
            className="flex my-80 max-xxl:my-40 max-xl:my-20 max-md:flex-col max-md:mt-0 max-md:justify-center max-md:gap-10 max-md:items-center"
          >
            <div className="w-1/2 flex flex-col items-center">
              <div className="h-[250px] w-[300px] flex items-center justify-center">
                <Image
                  src="/images/startPage/section03_01.png"
                  alt="모두의 노래방"
                  width={200}
                  height={200}
                  className="w-full"
                />
              </div>
              <h1 className="startPage-section03-service-name">
                모두의 노래방, <br className="max-lg:block hidden" />
                직접 운영한 250만 다운로드 앱
              </h1>
              <ul className="startPage-section03-service-description">
                <li>자사 기획/개발/운영 서비스</li>
                <li>
                  누적 다운로드 250만, <br className="max-lg:block hidden" />
                  리뷰 1.6만 개, 평점 4.8점의 인기 앱
                </li>
                <li>음악 카테고리 7위 (구글스토어)</li>
              </ul>
            </div>
            <div className="w-1/2 flex flex-col items-center">
              <div className="h-[250px] flex items-center justify-center">
                <Image
                  src="/images/startPage/section03_02.png"
                  alt="스마일 코인노래방"
                  width={200}
                  height={200}
                />
              </div>
              <h1 className="startPage-section03-service-name">
                스마일 코인노래방, <br className="max-lg:block hidden" />
                O2O 서비스 확장 테스트 베드
              </h1>
              <ul className="startPage-section03-service-description">
                <li>노래방 DX 시스템 직영 운영/개발</li>
                <li>21개 호실, 50평 이상의 매장 무인 운영</li>
              </ul>
            </div>
          </div>
          {/* 인덱스 번호: startIndex + 3 */}
          <div
            ref={(el) => {
              if (sectionRefs.current) {
                sectionRefs.current[startIndex + 3] = el;
              }
            }}
            className="flex items-center justify-center my-80 max-xxl:my-40 max-xl:my-20 max-md:flex-col max-md:mt-0 max-md:justify-center max-md:gap-10 max-md:items-center"
          >
            <h1
              ref={typingRef}
              className="startPage-section03-description-text text-right"
            >
              1개월 내 기획·디자인·개발까지 정교하게 완료합니다.
              <br />
              수많은 프로젝트를 안정적으로 완수하며,{" "}
              <br className="max-lg:block hidden" />
              사내 개발팀 구축까지 지원하는{" "}
              <br className="max-md:block hidden" />
              넥사코드는 <br className="max-md:hidden" />
              퀄리티와 속도, <br className="max-md:block hidden" />
              고객의 만족까지 모두 챙기는 개발사입니다.
            </h1>
            <div className="w-[3px] mx-10 h-36 bg-gray-200 max-md:hidden"></div>
            <hr className="h-[1px] mx-10 w-full my-5 bg-gray-200 hidden max-md:block"></hr>
            <h1 className="flex flex-col lg:items-start items-center text-center lg:text-left w-[15rem] xl:w-auto text-2xl font-semibold text-gray-700 leading-2 xl:text-4xl">
              넥사코드가 <br className="xl:hidden" /> 진행한
              <br className="xl:hidden" /> 프로젝트
            </h1>
          </div>
          {/* 인덱스 번호: startIndex + 4 */}
          <div
            ref={(el) => {
              if (sectionRefs.current) {
                sectionRefs.current[startIndex + 4] = el;
              }
            }}
            className="flex items-center justify-center my-80 max-xxl:my-40 max-xl:my-20 max-md:flex-col max-md:mt-0 max-md:justify-center max-md:gap-10 max-md:items-center "
          >
            <div className="flex flex-col items-center lg:items-end w-[400px]">
              <div className="flex  font-bold tracking-[-0.1em] text-9xl max-xxl:text-9xl">
                <CounterUp targetNumber={100} duration={2500} />
                <span>+</span>
              </div>
              <h2 className="text-center text-xl text-gray-700">
                넥사코드와 함께한 브랜드
              </h2>
            </div>
            <div className="w-[3px] mx-12 h-36 bg-gray-200 max-md:hidden"></div>
            <hr className="h-[1px] mx-10 w-full my-5 bg-gray-200 hidden max-md:block"></hr>
            <h1 className="startPage-section03-description-text">
              수많은 후속 투자 유치와 정부 지원금 획득 경험,
              <br />
              서비스의 시작부터 확장, 매각까지. <br />
              다양한 브랜드와 함께한 수많은 여정은{" "}
              <br className="max-md:block hidden" />
              우리의 실력을 말해주는 가장 확실한 증거입니다.
            </h1>
          </div>
          {/* 인덱스 번호: startIndex + 5 */}
          <div
            ref={(el) => {
              if (sectionRefs.current) {
                sectionRefs.current[startIndex + 5] = el;
              }
            }}
            className="flex flex-col items-center justify-center mt-80 mb-20 max-xxl:mt-40 max-xxl:mb-10 max-xl:mt-20 max-xl:mb-10"
          >
            <h2 className="text-4xl text-gray-800 mb-20 max-xxl:text-3xl max-lg:mb-10">
              주요 클라이언트
            </h2>
            <Image
              src="/images/startPage/client.png"
              alt="주요 클라이언트"
              width={1200}
              height={1200}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
