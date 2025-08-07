import OverlapCard from "../startPageComponents/OverlapCard";
import { useRef } from "react";
import { useSectionNumberAnimation } from "../../animations/sectionNumber";
import { useSectionTitleAnimation } from "../../animations/sectionTitle";

interface Section07Props {
  sectionRefs: React.RefObject<(HTMLDivElement | null)[]>;
  startIndex: number;
}

export default function Section07({ sectionRefs, startIndex }: Section07Props) {
  const sectionNumberRef = useRef<HTMLDivElement>(null);
  const sectionTitleRef = useRef<HTMLDivElement>(null);
  useSectionTitleAnimation(sectionTitleRef);
  useSectionNumberAnimation(sectionNumberRef);
  const cardContainer = document.querySelector(".card-container");
  const prev = document.querySelector(".prev");
  const next = document.querySelector(".next");

  prev?.addEventListener("click", () => {
    const slides = document.querySelectorAll(".slide");

    cardContainer?.append(slides[0]);
  });

  next?.addEventListener("click", () => {
    const slides = document.querySelectorAll(".slide");

    cardContainer?.prepend(slides[slides.length - 1]);
  });

  return (
    <div className="container relative justify-center  items-center py-36">
      <div className="flex flex-col w-full max-md:mx-10">
        <div className="section-number">
          <div
            ref={(el) => {
              if (sectionRefs.current) {
                sectionRefs.current[startIndex] = el;
              }
            }}
          >
            <div ref={sectionNumberRef} data-stagger="0.05">
              07. OUR VALUES
            </div>
          </div>
        </div>
        <div className="startPage-title-height">
          <h2 ref={sectionTitleRef} className="startPage-title">
            <div className="section-title-line ">
              <span className="font-bold ">개발 이상의 가치</span>를 약속합니다
            </div>
          </h2>
        </div>
        <div className="relative w-full xxl:pt-20 pt-5 h-[60vh] bg-red-50 p-0 m-0 ">
          <div className="card-container">
            <div className="slide">
              <OverlapCard
                imageSrc="/images/startPage/OurValues1.jpg"
                imageAlt="넥사코드의 가치 1"
                category="우리는 파트너 입니다"
                title="당신의 성공이 곧 우리의 목표입니다.<br/>그래서 우리는 <strong>‘개발사’</strong>가 아닌 <br/><strong>‘파트너’</strong>입니다."
                sentence="Build Together, Win Together"
              />
            </div>{" "}
            <div className="slide">
              <OverlapCard
                imageSrc="/images/startPage/OurValues2.jpg"
                imageAlt="넥사코드의 가치 2"
                category="우리는 약속을 ‘결과’로 보여드립니다"
                title="말이 아닌 ‘결과’로 증명합니다.<br/><strong>책임 있게, 끝까지.</strong> <br/>그것이 넥사코드의 방식입니다."
                sentence="With responsibility"
              />
            </div>{" "}
            <div className="slide">
              <OverlapCard
                imageSrc="/images/startPage/OurValues3.jpg"
                imageAlt="넥사코드의 가치 3"
                category="우리는 ‘성공’에 집중합니다"
                title="단순히 만드는 것이 아니라,<br/> <strong>고객의 고객까지 생각하는</strong> <br/>성공 구조를 설계합니다."
                sentence="Built to Deliver"
              />
            </div>
          </div>
          <div className="slide-buttons">
            <button className="prev">뒤로</button>
            <button className="next">앞으로</button>
          </div>
        </div>
      </div>
    </div>
  );
}
