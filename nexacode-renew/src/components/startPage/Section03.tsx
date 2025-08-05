import Image from "next/image";
import CounterUp from "../startPageComponents/CounterUp";
import TableSection03 from "./TableSection03";

export default function Section03() {
  return (
    <div className=" container relative  justify-center bg-green-300 items-center xl:px-20 max-xl:px-10 py-36">
      <div className="flex flex-col max-lg:gap-10 w-full">
        <div className="text-2xl mt-10">03. WHAT WE DO</div>
        <div className="w-full h-[20vh] text-center">
          <h2 className="mt-20 text-center max-md:w-[50rem] text-[5rem] font-normal bg-green-200">
            우리는 당신의&nbsp;
            <span className="font-bold ">IT 개발팀이 되어드립니다 </span>
          </h2>
        </div>
        <div className="w-full flex items-center justify-center">
          <div className="relative w-full flex justify-center items-center h-full">
            <TableSection03 />
          </div>
        </div>
        <div className="relative w-full pt-20 mx-auto">
          <div className="flex items-center justify-center pt-40 pb-20">
            <div className="flex flex-col items-center w-[500px]">
              <div
                className=" flex testimonial-count font-bold tracking-[-0.1em] md:text-[100px] 
                lg:text-[120px] leading-none max-md:items-start "
              >
                <CounterUp targetNumber={2500} duration={500} />
                <span>k</span>
              </div>
              <p className="text-center text-lg text-gray-700">
                자사 서비스 250만 다운로드 / 매각
              </p>
            </div>
            <div className="w-[3px] mx-10 h-36 bg-gray-200"></div>

            <p className="w-full text-2xl text-gray-700 leading-relaxed">
              직접 운영해본 적, 성공시켜본 적 없는 개발사가 과연 &quot;성공하는
              서비스&quot; 를 만들 수 있을까요?
              <br />
              넥사코드는 직접 만들었고, 성공까지 이뤄냈습니다. <br />
              우리가 증명한 성공 노하우, 당신의 프로젝트에 그대로 전합니다.
            </p>
          </div>
          <div className="flex mt-8 pb-20">
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
              <p className="mt-2 text-2xl font-semibold text-gray-800">
                모두의 노래방, 직접 운영한 250만 다운로드앱
              </p>
              <ul className="list-disc pl-5 text-lg leading-relaxed text-gray-700 pt-2">
                <li>자사 기획/개발/운영 서비스</li>
                <li>
                  누적 다운로드 250만, 리뷰 1.6만 개, 평점 4.8점의 인기 앱
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
              <p className="mt-2 text-2xl font-semibold text-gray-800">
                스마일 코인노래방, O2O 서비스 확장 테스트 베드
              </p>
              <ul className="list-disc pl-5 text-lg leading-relaxed text-gray-700 pt-2">
                <li>노래방 DX 시스템 직영 운영/개발</li>
                <li>21개 호실, 50평 이상의 매장 무인운영</li>
              </ul>
            </div>
          </div>

          <div className="flex items-center justify-center pt-20 pb-20">
            <p className="text-2xl text-right text-gray-700 leading-relaxed flex justify-end ">
              1개월 내 기획·디자인·개발까지 정교하게 완성합니다.
              <br />
              수많은 프로젝트를 안정적으로 완수하며, 사내 개발팀 구축까지
              지원하는 넥사코드는 <br />
              퀄리티와 속도, 고객의 만족까지 모두 챙기는 개발사입니다.
            </p>
            <div className="w-[3px] mx-8 h-36 bg-gray-200"></div>

            <div className="flex flex-col items-start  text-4xl font-semibold text-gray-700 leading-2">
              넥사코드가 진행한 <br /> 프로젝트
            </div>
          </div>
          <div className="flex items-center justify-center pt-20 pb-20">
            <div className="flex flex-col items-end w-[400px]">
              <div
                className=" flex testimonial-count font-bold tracking-[-0.1em] md:text-[100px] 
                lg:text-[120px] leading-none max-md:items-start "
              >
                <CounterUp targetNumber={100} duration={500} />
                <span>+</span>
              </div>
              <p className="text-center text-lg text-gray-700">
                넥사코드와 함께한 브랜드
              </p>
            </div>
            <div className="w-[3px] mx-10 h-36 bg-gray-200"></div>

            <p className="w-full text-2xl text-gray-700 leading-relaxed items-start">
              수많은 후속 투자 유치와 정부 지원금 획득 경험,
              <br />
              서비스의 시작부터 확장, 매각까지. <br />
              다양한 브랜드와 함께한 수많은 여정은 우리의 실력을 말해주는 가장
              확실한 증거입니다.
            </p>
          </div>
          <div className="flex flex-col items-center justify-center pt-20 pb-20">
            <p className="text-4xl text-gray-800 mb-10"> 주요 클라이언트</p>
            <Image
              src="/images/startPage/client.png"
              alt="주요 클라이언트"
              width={1000}
              height={1000}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
