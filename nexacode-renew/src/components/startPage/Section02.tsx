import Image from "next/image";
export default function Section02() {
  return (
    <div className="container relative xl:px-20 max-xl:px-10 py-36">
      <div className="flex flex-col max-lg:gap-10">
        <div>02. SOLUTION</div>
        <h2 className="has_text_move_anim mt-10 text-center perspective-[400px] max-md:w-[50rem] text-[3rem] font-normal">
          <div
            className="has_fade_anim w-full"
            data-fade-from="bottom"
            data-duration="0.5"
          >
            고민의 끝에서 마주하는 진짜 파트너,&nbsp;
            <span className="font-bold ">넥사코드 </span>
            입니다
          </div>
        </h2>
        <div className="relative w-full pt-40 ">
          <div className="flex justify-around items-center">
            <div className="text-center">
              <Image
                width={100}
                height={100}
                src="/images/startPage/section02_1.png"
                alt="고민의 끝에서 마주하는 진짜 파트너, 넥사코드 입니다"
                className="rounded-full w-44 h-44 object-cover mx-auto"
              />
              <h3 className="mt-8 font-medium text-3xl">
                단계마다 체계적인 관리
              </h3>
              <p className="mt-4 text-xl font-light">
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
                className="rounded-full w-44 h-44 object-cover mx-auto"
              />
              <h3 className="mt-8 font-medium text-3xl">
                수많은 프로젝트에서 검증된 방식
              </h3>
              <p className="mt-4 text-xl font-light">
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
                className="rounded-full w-44 h-44 object-cover mx-auto"
              />
              <h3 className="mt-8 font-medium text-3xl">
                외주를 넘어선 진짜 파트너십
              </h3>
              <p className="mt-4 text-xl font-light">
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
