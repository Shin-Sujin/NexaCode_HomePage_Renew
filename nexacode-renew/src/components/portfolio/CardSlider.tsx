"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import { PrevArrow, NextArrow } from "@/src/components/portfolio/CustomArrows";
import { useRef } from "react";
import type SliderType from "react-slick";

const CardSlider = () => {
  const sliderRef = useRef<SliderType | null>(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    arrows: false, // ✅ 기본 화살표 활성화
    nextArrow: <NextArrow />, // ✅ 커스텀 적용
    prevArrow: <PrevArrow />,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 640,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  const items = [
    {
      id: 1,
      imageSrc: "/images/portfolio1.webp",
      title: "DEESHAPE BUZZ",
      description: "BRANDING – 2014",
    },
    {
      id: 2,
      imageSrc: "/images/portfolio2.webp",
      title: "ROMEN BRAY DILBRO",
      description: "BRANDING – 2014",
    },
    {
      id: 3,
      imageSrc: "/images/portfolio3.webp",
      title: "JACK MOON",
      description: "BRANDING – 2014",
    },
    {
      id: 4,
      imageSrc: "/images/portfolio4.webp",
      title: "BENJAMINE SQUAD",
      description: "BRANDING – 2014",
    },
    {
      id: 5,
      imageSrc: "/images/portfolio5.webp",
      title: "DEESHAPE BUZZ",
      description: "BRANDING – 2014",
    },
    {
      id: 6,
      imageSrc: "/images/portfolio1.webp",
      title: "ROMEN BRAY DILBRO",
      description: "BRANDING – 2014",
    },
    {
      id: 7,
      imageSrc: "/images/portfolio2.webp",
      title: "JACK MOON",
      description: "BRANDING – 2014",
    },
    {
      id: 8,
      imageSrc: "/images/portfolio3.webp",
      title: "BENJAMINE SQUAD",
      description: "BRANDING – 2014",
    },
    {
      id: 9,
      imageSrc: "/images/portfolio4.webp",
      title: "DEESHAPE BUZZ",
      description: "BRANDING – 2014",
    },
    {
      id: 10,
      imageSrc: "/images/portfolio5.webp",
      title: "ROMEN BRAY DILBRO",
      description: "BRANDING – 2014",
    },
  ];

  return (
    <div className="w-full px-4 py-10">
      <Slider ref={sliderRef} {...settings}>
        {items.map((item) => (
          <div key={item.id} className="px-3">
            <div className="bg-white overflow-hidden text-start">
              <Image
                src={item.imageSrc}
                alt={item.title}
                width={400} // 적절한 width로 수정
                height={300} // 적절한 height로 수정
                className="w-full h-auto"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-500 text-sm">{item.description}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>{" "}
      {/* ✅ 하단 고정 화살표 버튼 */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-12 z-50">
        <PrevArrow onClick={() => sliderRef.current?.slickPrev()} />
        <NextArrow onClick={() => sliderRef.current?.slickNext()} />
      </div>
    </div>
  );
};

export default CardSlider;
