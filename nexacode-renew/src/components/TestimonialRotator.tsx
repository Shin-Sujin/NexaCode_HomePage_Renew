"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

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

export default function TestimonialRotator() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const handleManualChange = (newIndex: number) => {
    setIndex(newIndex);
  };

  return (
    <div className="flex flex-row w-full items-start">
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="meta-info relative md:static w-full"
        >
          <h3 className="name text-2xl text-white mt-20 mb-1 w-full">
            {testimonials[index].name}
          </h3>
          <p className="text-sm text-[#999999] leading-relaxed w-full">
            {testimonials[index].position}
          </p>
          <div className="flex items-center justify-items-start w-full mt-52">
            <span
              className="text-white text-sm font-bold font-nKKU"
              style={{
                fontFamily: "nKKU-Go6G5tXcr4-ORWnVaFrNlJz, sans-serif",
              }}
            >
              {testimonials[index].number}
            </span>
            <div className="w-1/4 h-px bg-white mx-4" />
            <span
              className="text-white text-sm font-bold font-nKKU"
              style={{
                fontFamily: "nKKU-Go6G5tXcr4-ORWnVaFrNlJz, sans-serif",
              }}
            >
              {testimonials[index].total}
            </span>
          </div>
        </motion.div>

        {/* 이미지 */}
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
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
        {testimonials.map((_, idx) => (
          <button
            key={idx}
            onClick={() => handleManualChange(idx)}
            className={`w-3 h-3 rounded-full ${
              idx === index ? "bg-white" : "bg-gray-500"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
