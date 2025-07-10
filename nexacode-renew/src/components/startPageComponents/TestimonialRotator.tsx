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
    <>
      <div className="flex items-end testimonial-count md:text-[100px] lg:text-[120px] leading-none mb-4 w-full">
        <CounterUp
          targetNumber={30}
          duration={2000}
          // delay={16}
          className=""
        />
        <span>+</span>
      </div>
      <p
        className="has_fade_anim w-full"
        data-fade-from="bottom"
        data-fade-offset="10"
        // data-delay="0.01"
        data-duration="0.5"
        style={{
          color: "#999999",
          fontFamily: "BeatriceTRIAL-Regular",
          fontSize: "1.125rem",
          fontStyle: "normal",
          fontWeight: 600,
          lineHeight: "1.58625rem",
          marginBottom: "2.5rem",
          paddingInlineEnd: "90px",
        }}
      >
        We have worked with top companies globally and achieved a huge positive
        vibes.
      </p>
    </>
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
    <div className="flex flex-row w-full items-start">
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
          className="w-full md:w-[26.25rem] lg:w-[26.25rem] overflow-hidden ml-16 relative h-[40.5rem]"
        >
          <Image
            src={testimonials[index].imageSrc}
            alt={`testimonial ${testimonials[index].number}`}
            fill
            style={{ objectFit: "cover" }}
          />
        </motion.div>
      </AnimatePresence>

      {/* 페이지네이션 (클릭 가능) */}
      <div className="absolute bottom-8 left-3/4 -translate-x-1/2 flex gap-2">
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
    </div>
  );
}
