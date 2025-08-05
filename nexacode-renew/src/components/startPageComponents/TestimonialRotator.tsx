"use client";

import { useEffect, useState, memo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import CounterUp from "./CounterUp";

type Testimonial = {
  number: string;
  total: string;
  imageSrc: string;
};

const testimonials: Testimonial[] = [
  {
    number: "01",
    total: "03",
    imageSrc: "/images/startPage/testimonial.png",
  },
  {
    number: "02",
    total: "03",
    imageSrc: "/images/startPage/testimonial.png",
  },
  {
    number: "03",
    total: "03",
    imageSrc: "/images/startPage/testimonial.png",
  },
];

// 고정된 콘텐츠를 위한 메모이제이션된 컴포넌트
const StaticContent = memo(() => {
  return (
    <div>
      <div className="flex items-end testimonial-count font-black text-9xl leading-none mb-4 w-full max-md:items-start text-white">
        <CounterUp targetNumber={5} duration={500} />
        <span className="text-white text-8xl max-md:text-7xl max-md:mt-4">
          /5
        </span>
      </div>
      <p
        className="has_fade_anim w-full text-[#999999] text-m font-bold text-2xl  mb-20 "
        data-fade-from="bottom"
        style={{
          fontFamily: "BeatriceTRIAL-Regular",
        }}
      >
        넥사코드 만족도 설문조사
      </p>
      <hr className="w-full my-8 max-xxxl:my-2 border-[#2e2e2e]" />
      <h3 className="name text-4xl text-white mt-20 mb-1 w-full max-xxxl:mt-10 max-xxxl:text-3xl">
        고객의 말이 증명합니다
      </h3>
      <p className="text-lg text-[#999999] leading-relaxed w-full mt-5 max-xxxl:text-base">
        고객의 한마디 속엔 우리가 미처 설명하지 못한 모든 것이 담겨 있습니다.{" "}
        <br />
        말보다 먼저 전해지는 신뢰, 고객의 이야기가 넥사코드를 증명합니다.
      </p>
    </div>
  );
});

StaticContent.displayName = "StaticContent";

// 변경되는 콘텐츠만을 위한 컴포넌트
const DynamicContent = memo(({ testimonial }: { testimonial: Testimonial }) => {
  return (
    <>
      <div className="flex items-center justify-items-start w-full mt-52 max-xxxl:mt-20">
        <span className="text-white text-sm font-bold font-nKKU">
          {testimonial.number}
        </span>
        <div className="w-1/4 h-px bg-white mx-4" />
        <span className="text-white text-sm font-bold font-nKKU">
          {testimonial.total}
        </span>
      </div>
    </>
  );
});

DynamicContent.displayName = "DynamicContent";

export default function TestimonialRotator() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="flex flex-row w-full max-lg:flex-col my-10">
        <div className="meta-info relative md:static w-full mx-60 max-lg:mx-auto ">
          <StaticContent />
          <div className="max-lg:hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                <DynamicContent testimonial={testimonials[index]} />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
        <div className="max-lg:hidden">
          {/* 이미지 */}
          <AnimatePresence mode="wait">
            <motion.div
              key={`${index}-img`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="h-[45rem] flex pb-10  w-[30rem] overflow-hidden relative max-xxxl:h-[35rem] max-xxxl:w-[20rem] max-xxxl:pb-5"
            >
              <Image
                src={testimonials[index].imageSrc}
                alt={`testimonial ${testimonials[index].number}`}
                fill
                style={{ objectFit: "cover" }}
              />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </>
  );
}
