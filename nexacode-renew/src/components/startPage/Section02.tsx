import Image from "next/image";

export default function Section02() {
  return (
    <div className="container relative justify-center  items-center py-36">
      <div className="flex flex-col  w-full max-md:mx-10">
        <div className="text-2xl  max-xxxl:text-xl max-lg:text-lg ">
          02. SOLUTION
        </div>
        <div className="w-full h-[20vh] text-center max-xxxl:h-[15vh] max-lg:h-[10vh] max-md:h-auto">
          <h2 className="mt-20 text-center text-[5rem] font-normal max-xxxl:text-6xl max-xxxl:mb-2 max-xl:text-5xl max-lg:mt-10 max-lg:text-4xl max-md:text-2xl">
            고민의 끝에서 마주하는 진짜 파트너,&nbsp;
            <span className="font-bold ">넥사코드 </span>
            입니다
          </h2>
        </div>
        <div className="w-full h-[50vh] flex items-center justify-center max-lg:pt-24 max-md:h-auto">
          <div className="flex  gap-10 max-xl:mt-10 max-md:flex-col max-md:mt-0">
            <div className="text-center">
              <Image
                width={100}
                height={100}
                src="/images/startPage/section02_1.png"
                alt="고민의 끝에서 마주하는 진짜 파트너, 넥사코드 입니다"
                className="rounded-full w-60 h-60 object-cover mx-auto text-center max-lg:w-48 max-lg:h-48"
              />
              <h3 className="mt-20 font-medium text-4xl max-xxl:text-3xl max-lg:text-2xl max-lg:mt-10">
                단계마다 체계적인 관리
              </h3>
              <p className="mt-4 text-2xl font-light max-xxl:text-xl max-xl:text-base">
                담당 매니저가 기획부터 운영까지{" "}
                <br className=" max-lg:block hidden" />전 과정을 책임지고,{" "}
                <br className=" max-lg:hidden" /> 프로젝트의 방향성과{" "}
                <br className=" max-lg:block hidden" />
                성장성을 함께 고민합니다.
              </p>
            </div>
            <div className="text-center">
              <Image
                width={100}
                height={100}
                src="/images/startPage/section02_2.png"
                alt="고민의 끝에서 마주하는 진짜 파트너, 넥사코드 입니다"
                className="rounded-full w-60 h-60 object-cover mx-auto max-lg:w-48 max-lg:h-48"
              />
              <h3 className="mt-20 font-medium text-4xl max-xxl:text-3xl max-lg:text-2xl max-lg:mt-10">
                수많은 프로젝트에서 검증된 방식
              </h3>
              <p className="mt-4 text-2xl font-light max-xxl:text-xl max-xl:text-base">
                미끼 견적 없이, 가짜 포트폴리오 없이. <br /> 결과로 증명된 실전
                전략으로 정확하게 실행합니다.
              </p>
            </div>
            <div className="text-center">
              <Image
                width={100}
                height={100}
                src="/images/startPage/section02_1.png"
                alt="고민의 끝에서 마주하는 진짜 파트너, 넥사코드 입니다"
                className="rounded-full w-60 h-60 object-cover mx-auto max-lg:w-48 max-lg:h-48"
              />
              <h3 className="mt-20 font-medium text-4xl max-xxl:text-3xl max-lg:text-2xl max-lg:mt-10">
                외주를 넘어선 진짜 파트너십
              </h3>
              <p className="mt-4 text-2xl font-light max-xxl:text-xl max-xl:text-base">
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
