import Image from "next/image";
import CounterUp from "../startPageComponents/CounterUp";
import TableSection03 from "./TableSection03";

export default function Section03() {
  return (
    <div className="container relative justify-center  items-center py-36 ">
      <div className="flex flex-col  w-full max-md:mx-10">
        <div className="text-2xl  max-xxxl:text-xl max-lg:text-lg">
          03. WHAT WE DO
        </div>
        <div className="w-full h-[20vh] text-center max-xxxl:h-[15vh] max-lg:h-[10vh] max-md:h-auto">
          <h2 className="mt-20 text-center text-[5rem] font-normal max-xxxl:text-6xl max-xxxl:mb-2 max-xl:text-5xl max-lg:mt-10 max-lg:text-4xl max-md:text-2xl">
            우리는 당신의&nbsp;
            <span className="font-bold ">IT 개발팀이 되어드립니다 </span>
          </h2>
        </div>
        <div className="w-full flex items-center justify-center">
          <div className="relative mt-24 w-full flex justify-center items-center h-full">
            <TableSection03 />
          </div>
        </div>
        <div className="relative w-full pt-20 mx-auto">
          <div className="flex items-center justify-center mt-40 mb-60 max-xl:mt-20 max-xl:mb-40 max-md:flex-col max-md:mt-0">
            <div className="flex flex-col items-center w-[500px]">
              <div
                className=" flex testimonial-count font-bold tracking-[-0.1em]  md:text-[100px] 
            max-lg:text-[120px] leading-none max-md:items-start "
              >
                <CounterUp targetNumber={2500} duration={500} />
                <span>k</span>
              </div>
              <p className="text-center text-lg text-gray-700">
                자사 서비스 250만 다운로드 / 매각
              </p>
            </div>
            <div className="w-[3px] mx-10 h-36 bg-gray-200 max-md:hidden"></div>
            <hr className="h-[1px] mx-10 w-full my-10 bg-gray-200 hidden max-md:block max-md:mx-10"></hr>

            <p className="w-full text-3xl text-gray-700 leading-relaxed max-xxl:text-2xl max-xl:text-xl max-lg:text-lg max-md:text-lg max-md:text-center">
              직접 운영해본 적, 성공시켜본 적 없는 개발사가{" "}
              <br className="max-lg:block hidden" />
              과연 &quot;성공하는 서비스&quot; 를 만들 수 있을까요?
              <br />
              넥사코드는 직접 만들었고, 성공까지 이뤄냈습니다. <br />
              우리가 증명한 성공 노하우, <br className="max-lg:block hidden" />{" "}
              당신의 프로젝트에 그대로 전합니다.
            </p>
          </div>
          <div className="flex my-80 max-xxl:my-40 max-xl:my-20 max-md:flex-col max-md:mt-0 max-md:justify-center max-md:gap-10 max-md:items-center">
            <div className="w-1/2  flex flex-col items-center">
              <div className="h-[250px] w-[300px] flex items-center justify-center">
                <Image
                  src="/images/startPage/section03_01.png"
                  alt="모두의 노래방"
                  width={200}
                  height={200}
                  className="w-full"
                />
              </div>
              <p className="mt-3 text-4xl font-semibold text-gray-800 max-xxl:text-3xl max-xl:text-2xl max-lg:text-xl">
                모두의 노래방, <br className="max-lg:block hidden" />
                직접 운영한 250만 다운로드앱
              </p>
              <ul className="list-disc pl-5 text-2xl leading-relaxed text-gray-700 pt-10 max-xxl:text-xl max-xxl:pt-5 max-lg:text-lg">
                <li>자사 기획/개발/운영 서비스</li>
                <li>
                  누적 다운로드 250만,
                  <br className="max-lg:block hidden" /> 리뷰 1.6만 개, 평점
                  4.8점의 인기 앱
                </li>
                <li>음악 카테고리 7위 (구글스토어)</li>
              </ul>
            </div>
            <div className="w-1/2 flex flex-col items-center">
              <div className=" h-[250px] flex items-center justify-center">
                <Image
                  src="/images/startPage/section03_02.png"
                  alt="스마일 코인노래방"
                  width={200}
                  height={200}
                />
              </div>
              <p className="mt-3 text-4xl font-semibold text-gray-800 max-xxl:text-3xl max-xl:text-2xl max-lg:text-xl">
                스마일 코인노래방, <br className="max-lg:block hidden" />
                O2O 서비스 확장 테스트 베드
              </p>
              <ul className="list-disc pl-5 text-2xl leading-relaxed text-gray-700 pt-10 max-xxl:text-xl max-xxl:pt-5 max-lg:text-lg">
                <li>노래방 DX 시스템 직영 운영/개발</li>
                <li>21개 호실, 50평 이상의 매장 무인운영</li>
              </ul>
            </div>
          </div>

          <div className="flex items-center justify-center my-80 max-xxl:my-40 max-xl:my-20 max-md:flex-col max-md:mt-0 max-md:justify-center max-md:gap-10 max-md:items-center">
            <p className="text-3xl text-right text-gray-700 leading-relaxed flex justify-end max-xxl:text-2xl max-xl:text-xl max-lg:text-lg max-md:text-center">
              1개월 내 기획·디자인·개발까지 정교하게 완성합니다.
              <br />
              수많은 프로젝트를 안정적으로 완수하며,{" "}
              <br className="max-lg:block hidden" />
              사내 개발팀 구축까지 지원하는{" "}
              <br className="max-md:block hidden" />
              넥사코드는 <br className="max-md:hidden" />
              퀄리티와 속도, <br className="max-md:block hidden" />
              고객의 만족까지 모두 챙기는 개발사입니다.
            </p>
            <div className="w-[3px] mx-10 h-36 bg-gray-200 max-md:hidden"></div>
            <hr className="h-[1px] mx-10 w-full my-5 bg-gray-200 hidden max-md:block "></hr>

            <div className="flex flex-col items-start  text-6xl font-semibold text-gray-700 leading-2 max-xxl:text-4xl">
              넥사코드가 진행한 <br /> 프로젝트
            </div>
          </div>
          <div className="flex items-center justify-center my-80 max-xxl:my-40 max-xl:my-20 max-md:flex-col max-md:mt-0 max-md:justify-center max-md:gap-10 max-md:items-center">
            <div className="flex flex-col items-end w-[400px] max-md:items-center">
              <div className=" flex testimonial-count font-bold tracking-[-0.1em] text-9xl max-xxl:text-9xl">
                <CounterUp targetNumber={100} duration={500} />
                <span>+</span>
              </div>
              <p className="text-center text-xl text-gray-700">
                넥사코드와 함께한 브랜드
              </p>
            </div>
            <div className="w-[3px] mx-12 h-36 bg-gray-200 max-md:hidden"></div>
            <hr className="h-[1px] mx-10 w-full my-5 bg-gray-200 hidden max-md:block "></hr>

            <p className="w-full text-3xl text-gray-700 leading-relaxed items-start max-xxl:text-2xl max-xl:text-xl max-lg:text-lg max-md:text-center max-md:mt-5">
              수많은 후속 투자 유치와 정부 지원금 획득 경험,
              <br />
              서비스의 시작부터 확장, 매각까지. <br />
              다양한 브랜드와 함께한 수많은 여정은{" "}
              <br className="max-md:block hidden" />
              우리의 실력을 말해주는 가장 확실한 증거입니다.
            </p>
          </div>
          <div className="flex flex-col items-center justify-center mt-80 mb-20 max-xxl:mt-40 max-xxl:mb-10 max-xl:mt-20 max-xl:mb-10 ">
            <p className="text-4xl text-gray-800 mb-20 max-xxl:text-3xl max-lg:mb-10">
              주요 클라이언트
            </p>
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
