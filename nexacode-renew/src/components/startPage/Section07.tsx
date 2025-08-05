import OverlapCard from "../startPageComponents/OverlapCard";

export default function Section07() {
  return (
    <div className="container relative justify-center  items-center py-36">
      <div className="flex flex-col w-full max-md:mx-10">
        <div className="text-2xl  max-xxxl:text-xl max-lg:text-lg">
          07. OUR VALUES
        </div>
        <div className="w-full h-[20vh] text-center max-xxxl:h-[15vh] max-lg:h-[10vh] max-md:h-auto">
          <h2 className="mt-20 text-center text-[5rem] font-normal max-xxxl:text-6xl max-xxxl:mb-2 max-xl:text-5xl max-lg:mt-10 max-lg:text-4xl max-md:text-2xl">
            <span className="font-bold ">개발 이상의 가치</span>를 약속합니다
          </h2>
        </div>
        <div className="relative w-full pt-32 max-xxxl:pt-20 max-lg:pt-10">
          <div className="flex justify-around w-full gap-20 max-lg:gap-10 max-sm:gap-0 max-xs:flex-col max-xxxl:gap-5">
            <OverlapCard
              imageSrc="/images/startPage/OurValues1.jpg"
              imageAlt="넥사코드의 가치 1"
              category="우리는 파트너 입니다"
              title="당신의 성공이 곧 우리의 목표입니다.<br/>그래서 우리는 <strong>‘개발사’</strong>가 아닌 <br/><strong>‘파트너’</strong>입니다."
              sentence="Build Together, Win Together"
            />
            <OverlapCard
              imageSrc="/images/startPage/OurValues2.jpg"
              imageAlt="넥사코드의 가치 2"
              category="우리는 약속을 ‘결과’로 보여드립니다"
              title="말이 아닌 ‘결과’로 증명합니다.<br/><strong>책임 있게, 끝까지.</strong> <br/>그것이 넥사코드의 방식입니다."
              sentence="With responsibility"
            />
            <OverlapCard
              imageSrc="/images/startPage/OurValues3.jpg"
              imageAlt="넥사코드의 가치 3"
              category="우리는 ‘성공’에 집중합니다"
              title="단순히 만드는 것이 아니라,<br/> <strong>고객의 고객까지 생각하는</strong> <br/>성공 구조를 설계합니다."
              sentence="Built to Deliver"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
