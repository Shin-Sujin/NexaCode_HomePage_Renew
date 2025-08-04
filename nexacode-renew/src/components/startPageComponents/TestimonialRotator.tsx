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
      <div className="flex items-end testimonial-count md:text-[100px] lg:text-[120px] leading-none mb-4 w-full max-md:items-start text-white">
        <CounterUp targetNumber={5} duration={500} />
        <span className="text-white text-[100px]">/5</span>
      </div>
      <p
        className="has_fade_anim w-full text-[#999999] text-m font-bold leading-relaxed mb-20 px-10 ]
        md:px-0 md:text-base md:leading-relaxed md:mb-0 max-md:w-[15rem] max-md:pl-0"
        data-fade-from="bottom"
        style={{
          fontFamily: "BeatriceTRIAL-Regular",
        }}
      >
        넥사코드 만족도 설문조사
      </p>
      <hr className="w-full my-8 border-[#2e2e2e]" />
      <h3 className="name text-2xl text-white mt-20 mb-1 w-full">
        고객의 말이 증명합니다
      </h3>
      <p className="text-sm text-[#999999] leading-relaxed w-full">
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
      <div className="flex items-center justify-items-start w-full mt-52">
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
      <div className="flex flex-row w-full max-md:flex-col max-sm:hidden">
        <div className="meta-info relative md:static w-full mx-auto">
          <StaticContent />
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

        {/* 이미지 */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`${index}-img`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="h-full flex justify-start pb-10 md:w-[26.25rem] lg:w-[26.25rem] overflow-hidden relative max-md:w-[25rem] max-md:h-[40rem] max-md:mr-0 max-md:order-first"
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

      {/* max-sm에서만 보이는 분리된 구조 */}
      <div className="hidden max-sm:flex max-sm:flex-col max-sm:w-full max-sm:gap-6">
        {/* 1. CounterUp */}
        <div className="flex items-end testimonial-count text-[80px] leading-none text-white">
          <CounterUp targetNumber={30} duration={2000} />
          <span className="text-white">+</span>
        </div>

        {/* 2. 설명 텍스트 */}
        <p className="text-[#999999] text-lg font-bold leading-relaxed">
          넥사코드 만족도 설문조사
        </p>

        {/* 3. 이미지 */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`${index}-img-mobile`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full h-[30rem] relative overflow-hidden"
          >
            <Image
              src={testimonials[index].imageSrc}
              alt={`testimonial ${testimonials[index].number}`}
              fill
              style={{ objectFit: "cover" }}
            />
          </motion.div>
        </AnimatePresence>

        {/* 4. 이름, 직책 */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`${index}-text-mobile`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <DynamicContent testimonial={testimonials[index]} />
          </motion.div>
        </AnimatePresence>
      </div>
    </>
  );
}
