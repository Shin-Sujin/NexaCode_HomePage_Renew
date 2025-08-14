import CounterUp from "../startPageComponents/CounterUp";
import Image from "next/image";
import { useRef } from "react";
import { useSectionNumberAnimation } from "../../animations/sectionNumber";
import { useSectionTitleAnimation } from "../../animations/sectionTitle";

interface Section05Props {
  sectionRefs: React.RefObject<(HTMLDivElement | null)[]>;
  startIndex: number;
}
type Testimonial = {
  number: string;
  total: string;
  imageSrc: string;
};

const testimonials: Testimonial[] = [
  {
    number: "01",
    total: "03",
    imageSrc: "/images/test/photo1.png",
  },
  {
    number: "02",
    total: "03",
    imageSrc: "/images/test/photo2.png",
  },
  {
    number: "03",
    total: "03",
    imageSrc: "/images/test/review1.png",
  },
];

export default function Section05({ sectionRefs, startIndex }: Section05Props) {
  const sectionNumberRef = useRef<HTMLDivElement>(null);
  const sectionTitleRef = useRef<HTMLDivElement>(null);
  useSectionNumberAnimation(sectionNumberRef);
  useSectionTitleAnimation(sectionTitleRef);
  return (
    <div className="container relative justify-center items-center py-20">
      <div className="flex flex-col max-lg:gap-10 w-full mx-2">
        <div className="section-number text-white ">
          <div
            ref={(el) => {
              if (sectionRefs.current) {
                sectionRefs.current[startIndex] = el;
              }
            }}
          >
            <div ref={sectionNumberRef} data-stagger="0.05">
              05. WHAT OUR CLIENTS SAY
            </div>
          </div>
        </div>
        <div className="startPage-title-height">
          <div ref={sectionTitleRef} className="startPage-title ">
            <h1 className="section-title-line text-white">
              고객이 말하는 넥사코드는
              <br className="xl:hidden" />
              <span className="font-bold ">
                &quot;함께 일하고 싶은 개발사&quot;
              </span>{" "}
            </h1>
          </div>
        </div>

        <div className="relative w-full pt-5 max-xxxl:pt-10">
          <div className="flex flex-row justify-center items-center w-full ">
            <div className="flex lg:flex-row w-full flex-col mt-5">
              <div className="meta-info relative md:static lg:w-[45%] lg:flex-shrink-0 w-full ml-36 mr-10 max-lg:mx-auto ">
                <div>
                  <div
                    className="flex items-end font-black text-9xl leading-none 
                        mb-4 w-full max-md:items-start text-white"
                  >
                    <CounterUp targetNumber={5} duration={1000} />
                    <span className="text-white text-8xl max-md:text-7xl max-md:mt-4">
                      /5
                    </span>
                  </div>
                  <h1
                    className="has_fade_anim w-full text-[#999999] text-m font-bold text-2xl  xxl:mb-20 lg:mb-10 mb-5"
                    data-fade-from="bottom"
                  >
                    넥사코드 만족도 설문조사
                  </h1>
                  <hr className="w-full my-8 border-[#2e2e2e]" />
                  <h3 className="name text-4xl text-white mt-10 mb-1 w-full lg:mt-10">
                    고객의 말이 증명합니다
                  </h3>
                  <p className="text-lg text-[#999999] leading-relaxed w-full mt-5 max-xxxl:text-base pr-10 whitespace-normal break-keep">
                    고객의 한마디 속엔 우리가 미처 설명하지 못한 모든 것이 담겨
                    있습니다. <br />
                    말보다 먼저 전해지는 신뢰, 고객의 이야기가 넥사코드를
                    증명합니다.
                  </p>
                </div>
                <div className="max-lg:hidden">
                  <div>
                    <div className="flex items-center justify-items-start w-full mt-52 max-xxxl:mt-20">
                      <span className="text-white text-sm font-bold font-nKKU">
                        {testimonials[0].number}
                      </span>
                      <div className="w-1/4 h-px bg-white mx-4" />
                      <span className="text-white text-sm font-bold font-nKKU">
                        {testimonials[0].total}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex-1">
                <div className="flex flex-row">
                  {testimonials.map((testimonial, index) => (
                    <div
                      key={index}
                      className={`flex-shrink-0 xxl:h-[45rem] xxl:w-[30rem] h-[30rem] w-[30rem] overflow-hidden relative lg:h-[28rem] lg:w-[17rem] ${
                        index > 0 ? "ml-5" : ""
                      }`}
                    >
                      <Image
                        src={testimonial.imageSrc}
                        alt={`testimonial ${testimonial.number}`}
                        fill
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
