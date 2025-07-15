"use client";

import { useEffect, useState, memo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import CounterUp from "./CounterUp";

type Testimonial = {
  name: string;
  position: string;
  number: string;
  total: string;
  imageSrc: string;
};

const testimonials: Testimonial[] = [
  {
    name: "Julian Bray",
    position: "Deputy Manager, Karnofully",
    number: "01",
    total: "03",
    imageSrc: "/images/videoframe1.png",
  },
  {
    name: "Bray Julian",
    position: "Deputy Manager, Karnofully",
    number: "02",
    total: "03",
    imageSrc: "/images/videoframe2.png",
  },
  {
    name: "Julian Bray",
    position: "Deputy Manager, Karnofully",
    number: "03",
    total: "03",
    imageSrc: "/images/videoframe3.png",
  },
];

// 고정된 콘텐츠를 위한 메모이제이션된 컴포넌트
const StaticContent = memo(() => {
  return (
    <div>
      <div className="flex items-end testimonial-count md:text-[100px] lg:text-[120px] leading-none mb-4 w-full max-md:items-start text-white">
        <CounterUp targetNumber={30} duration={2000} className="text-white" />
        <span className="text-white">+</span>
      </div>
      <p
        className="has_fade_anim w-full text-[#999999] text-m font-bold leading-relaxed mb-20 px-10 ]
        md:px-0 md:text-base md:leading-relaxed md:mb-0 max-md:w-[15rem] max-md:pl-0"
        data-fade-from="bottom"
        style={{
          fontFamily: "BeatriceTRIAL-Regular",
        }}
      >
        We have worked with top companies globally and achieved a huge positive
        vibes.
      </p>
    </div>
  );
});

StaticContent.displayName = "StaticContent";

// 변경되는 콘텐츠만을 위한 컴포넌트
const DynamicContent = memo(({ testimonial }: { testimonial: Testimonial }) => {
  return (
    <>
      <hr className="w-full my-8" style={{ borderColor: "#2e2e2e" }} />
      <h3 className="name text-2xl text-white mt-20 mb-1 w-full">
        {testimonial.name}
      </h3>
      <p className="text-sm text-[#999999] leading-relaxed w-full">
        {testimonial.position}
      </p>
      <div className="flex items-center justify-items-start w-full mt-52">
        <span
          className="text-white text-sm font-bold font-nKKU"
          style={{
            fontFamily: "nKKU-Go6G5tXcr4-ORWnVaFrNlJz, sans-serif",
          }}
        >
          {testimonial.number}
        </span>
        <div className="w-1/4 h-px bg-white mx-4" />
        <span
          className="text-white text-sm font-bold font-nKKU"
          style={{
            fontFamily: "nKKU-Go6G5tXcr4-ORWnVaFrNlJz, sans-serif",
          }}
        >
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

  const handleManualChange = (newIndex: number) => {
    setIndex(newIndex);
  };

  return (
    <>
      {/* sm 이상에서는 기존 구조 유지 */}
      <div className="flex flex-row w-full items-start max-md:flex-col max-sm:hidden">
        <div className="meta-info relative md:static w-full">
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
            className="w-full md:w-[26.25rem] lg:w-[26.25rem] overflow-hidden ml-16 relative h-[40.5rem] max-md:w-[25rem] max-md:h-[40rem] max-md:mr-0 max-md:ml-auto max-md:order-first"
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
          <CounterUp targetNumber={30} duration={2000} className="text-white" />
          <span className="text-white">+</span>
        </div>

        {/* 2. 설명 텍스트 */}
        <p
          className="text-[#999999] text-base font-bold leading-relaxed"
          style={{
            fontFamily: "BeatriceTRIAL-Regular",
          }}
        >
          We have worked with top companies globally and achieved a huge
          positive vibes.
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

      {/* 페이지네이션 (클릭 가능) */}
      <div className="absolute bottom-8 left-3/4 -translate-x-1/2 flex gap-2 max-md:hidden">
        {testimonials.map((_, idx) => (
          <button
            key={idx}
            onClick={() => handleManualChange(idx)}
            className={`w-3 h-3 justify-center items-center rounded-full ${
              idx === index ? "bg-white" : "bg-gray-500"
            }`}
          />
        ))}
      </div>
    </>
  );
}
