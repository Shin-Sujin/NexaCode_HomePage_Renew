import Image from "next/image";
import React from "react";
import { useRef } from "react";
import { useSectionNumberAnimation } from "../../animations/sectionNumber";
import { useLetterBounceAnimation } from "../../animations/letterBounceAnimation";
import { useFadeInIntersection } from "../../animations/fadeInOnScroll";

interface Section04Props {
  sectionRefs: React.RefObject<(HTMLDivElement | null)[]>;
  startIndex: number;
}

export default function Section04({ sectionRefs, startIndex }: Section04Props) {
  const sectionNumberRef = useRef<HTMLDivElement>(null);
  useSectionNumberAnimation(sectionNumberRef);

  const imageRef1 = useRef<HTMLDivElement>(null);
  const imageRef2 = useRef<HTMLDivElement>(null);
  const imageRef3 = useRef<HTMLDivElement>(null);
  const imageRef4 = useRef<HTMLDivElement>(null);
  const imageRef5 = useRef<HTMLDivElement>(null);
  // 원페이지 구조에서는 Intersection 기반 사용
  useFadeInIntersection({ ref: imageRef1, delay: 0.2 });
  useFadeInIntersection({ ref: imageRef2, delay: 0.2 });
  useFadeInIntersection({ ref: imageRef3, delay: 0.3 });
  useFadeInIntersection({ ref: imageRef4, delay: 0.2 });
  useFadeInIntersection({ ref: imageRef5, delay: 0.3 });

  const triggerRef = useRef<HTMLDivElement>(null);
  const text = "PORTFOLIO";
  useLetterBounceAnimation(triggerRef);

  return (
    <div className="container relative justify-center items-center py-36">
      <div className="flex flex-col max-lg:gap-10 w-full max-md:mx-10 ">
        <div className="xl:mx-24">
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
                04. PORTFOLIO
              </div>
            </div>
          </div>
          <hr className="w-full h-[1px] bg-[#E5E5E5] mt-3 mb-10" />
          <div className="grid-container-portfolio max-md:grid-cols-1">
            {/* 1번------------ */}
            <div ref={triggerRef} className="flex justify-center items-center">
              <div className="xxl:text-8xl xl:text-7xl text-3xl tracking-tighter font-black word lg:text-8xl">
                {text.split("").map((char, index) => (
                  <span key={index} className="inline-block">
                    {char}
                  </span>
                ))}
              </div>
            </div>
            {/* 2번------------ */}
            <div
              ref={imageRef1}
              className="startPage-portfolio-image-container"
            >
              <div>
                <Image
                  src="/images/portfolio/nexaPortfolio5.webp"
                  alt="블루투스 연동, 헬스케어 앱 개발"
                  width={1000}
                  height={1000}
                />
              </div>
              <h2 className="startPage-portfolio-title">
                블루투스 연동, 헬스케어 앱 개발
              </h2>
              <div className="startPage-portfolio-description">
                5억 투자 유치 성공
              </div>
            </div>
            {/* 인덱스 번호: startIndex + 1 */}
            {/* 3번------------ */}
            <div
              ref={(el) => {
                if (sectionRefs.current) {
                  sectionRefs.current[startIndex + 1] = el;
                }
              }}
            >
              <div
                ref={imageRef2}
                className="startPage-portfolio-image-container"
              >
                <div>
                  <Image
                    src="/images/portfolio/nexaPortfolio6.webp"
                    alt="리워드, 모바일 쿠폰 플랫폼 개발"
                    width={1000}
                    height={1000}
                  />
                </div>
                <h2 className="startPage-portfolio-title">
                  리워드, 모바일 쿠폰 플랫폼 개발
                </h2>
                <div className="startPage-portfolio-description">
                  오픈 1개월 만에 방문자수 4만명 돌파
                </div>
              </div>
            </div>
            {/* 4번------------ */}
            <div
              ref={imageRef3}
              className="startPage-portfolio-image-container"
            >
              <div>
                <Image
                  src="/images/portfolio/nexaPortfolio.webp"
                  alt="헬스 친구 매칭, 커머스 앱"
                  width={1000}
                  height={1000}
                />
              </div>
              <h2 className="startPage-portfolio-title">
                헬스 친구 매칭, 커머스 앱
              </h2>
              <div className="startPage-portfolio-description">
                3억 무상 지원금 획득
              </div>
            </div>

            {/* 5번------------ */}
            <div
              ref={(el) => {
                if (sectionRefs.current) {
                  sectionRefs.current[startIndex + 2] = el;
                }
              }}
            >
              <div
                ref={imageRef4}
                className="startPage-portfolio-image-container"
              >
                <div>
                  <Image
                    src="/images/portfolio/nexaPortfolio2.webp"
                    alt="중고 거래, 매칭 앱 개발"
                    width={1000}
                    height={1000}
                  />
                </div>
                <h2 className="startPage-portfolio-title">
                  중고 거래, 매칭 앱 개발
                </h2>
                <div className="startPage-portfolio-description">
                  다른 개발사에서 실패한 프로젝트 심폐소생술
                </div>
              </div>
            </div>
            {/* 6번------------ */}
            <div
              ref={imageRef5}
              className="startPage-portfolio-image-container"
            >
              <div>
                <Image
                  src="/images/portfolio/nexaPortfolio4.webp"
                  alt="스마트워치 앱 개발"
                  width={1000}
                  height={1000}
                />
              </div>
              <h2 className="startPage-portfolio-title">스마트워치 앱 개발</h2>
              <div className="startPage-portfolio-description">
                해외 바이어 대상 수출 성공
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
