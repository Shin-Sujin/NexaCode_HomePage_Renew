import Image from "next/image";
import React, { forwardRef } from "react";

const Section04 = forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <div className="container relative xl:px-20 max-xl:px-10 py-36 w-full">
      <div id="section04-top" ref={ref} className="h-1" />
      <div className="flex flex-col max-lg:gap-10">
        <div>04. PORTFOLIO</div>
        <hr className="w-full h-[1px] bg-[#E5E5E5] mt-3 mb-10" />
        <div className="grid-container-portfolio">
          <div className="flex justify-center items-center">
            <div className="text-9xl tracking-tighter font-black">
              PORTFOLIO
            </div>
          </div>
          <div>
            <div className="work-box">
              <Image
                src="/images/portfolio/nexaPortfolio5.webp"
                alt="블루투스 연동, 헬스케어 앱 개발"
                width={1000}
                height={1000}
              />
            </div>
            <h2 className="text-2xl mt-5  font-normal">
              블루투스 연동, 헬스케어 앱 개발
            </h2>
            <div className="text-lg text-gray-600">5억 투자 유치 성공</div>
          </div>
          <div>
            <div className="work-box">
              <Image
                src="/images/portfolio/nexaPortfolio6.webp"
                alt="리워드, 모바일 쿠폰 플랫폼 개발"
                width={1000}
                height={1000}
              />
            </div>
            <h2 className="text-2xl mt-5  font-normal">
              리워드, 모바일 쿠폰 플랫폼 개발
            </h2>
            <div className="text-lg text-gray-600">
              오픈 1개월 만에 방문자수 4만명 돌파{" "}
            </div>
          </div>
          <div>
            <div className="work-box">
              <Image
                src="/images/portfolio/nexaPortfolio.webp"
                alt="헬스 친구 매칭, 커머스 앱"
                width={1000}
                height={1000}
              />
            </div>
            <h2 className="text-2xl mt-5  font-normal">
              헬스 친구 매칭, 커머스 앱
            </h2>
            <div className="text-lg text-gray-600">3억 무상 지원금 획득</div>
          </div>
          <div>
            <div className="work-box">
              <Image
                src="/images/portfolio/nexaPortfolio2.webp"
                alt="중고 거래, 매칭 앱 개발"
                width={1000}
                height={1000}
              />
            </div>
            <h2 className="text-2xl mt-5 font-normal">
              중고 거래, 매칭 앱 개발
            </h2>
            <div className="text-lg text-gray-600">
              다른 개발사에서 실패한 프로젝트 심폐소생술
            </div>
          </div>
          <div>
            <div className="work-box">
              <Image
                src="/images/portfolio/nexaPortfolio4.webp"
                alt="스마트워치 앱 개발"
                width={1000}
                height={1000}
              />
            </div>
            <h2 className="text-2xl mt-5  font-normal">스마트워치 앱 개발</h2>
            <div className="text-lg text-gray-600">
              해외 바이어 대상 수출 성공
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

Section04.displayName = "Section04";

export default Section04;
