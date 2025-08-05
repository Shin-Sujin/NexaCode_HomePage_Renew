import Image from "next/image";

export default function Section02() {
  return (
    <div className=" container relative  justify-center bg-green-300 items-center xl:px-20 max-xl:px-10 py-36 h-screen">
      <div className="flex flex-col max-lg:gap-10 w-full">
        <div className="text-2xl mt-10">02. SOLUTION</div>
        <div className="w-full h-[20vh] text-center">
          <h2 className="mt-20 text-center max-md:w-[50rem] text-[5rem] font-normal bg-green-200">
            고민의 끝에서 마주하는 진짜 파트너,&nbsp;
            <span className="font-bold ">넥사코드 </span>
            입니다
          </h2>
        </div>
        <div className="w-full h-[50vh] flex items-center justify-center">
          <div className="flex  gap-10">
            <div className="text-center">
              <Image
                width={100}
                height={100}
                src="/images/startPage/section02_1.png"
                alt="고민의 끝에서 마주하는 진짜 파트너, 넥사코드 입니다"
                className="rounded-full w-60 h-60 object-cover mx-auto text-center"
              />
              <h3 className="mt-20 font-medium text-4xl">
                단계마다 체계적인 관리
              </h3>
              <p className="mt-4 text-2xl font-light">
                담당 매니저가 기획부터 운영까지 전 과정을 책임지고, <br />{" "}
                프로젝트의 방향성과 성장성을 함께 고민합니다.
              </p>
            </div>
            <div className="text-center">
              <Image
                width={100}
                height={100}
                src="/images/startPage/section02_2.png"
                alt="고민의 끝에서 마주하는 진짜 파트너, 넥사코드 입니다"
                className="rounded-full w-60 h-60 object-cover mx-auto"
              />
              <h3 className="mt-20 font-medium text-4xl">
                수많은 프로젝트에서 검증된 방식
              </h3>
              <p className="mt-4 text-2xl font-light">
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
                className="rounded-full w-60 h-60 object-cover mx-auto"
              />
              <h3 className="mt-20 font-medium text-4xl">
                외주를 넘어선 진짜 파트너십
              </h3>
              <p className="mt-4 text-2xl font-light">
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
