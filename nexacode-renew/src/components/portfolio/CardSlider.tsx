"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import { PrevArrow, NextArrow } from "@/src/components/portfolio/CustomArrows";
import { useRef } from "react";
import { items } from "./portfolioItems";
const CardSlider = () => {
  const sliderRef = useRef<Slider | null>(null);

  const settings = {
    dots: true,
    infinite: false, // variableWidth에서는 보통 false 권장
    variableWidth: false, // 각 카드의 너비를 동적으로 조정
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    arrows: false,
    nextArrow: <NextArrow />, // ✅ 커스텀 적용
    prevArrow: <PrevArrow />,
    draggable: true, // ✅ 데스크탑 드래그 허용
    swipe: true, // ✅ 모바일 스와이프 허용
    swipeToSlide: true, // ✅ 드래그 중간 위치에도 반응
    touchMove: true, // ✅ 터치로도 드래그 허용
    responsive: [
      {
        breakpoint: 3000,
        settings: { slidesToShow: 4.2 },
      },
      {
        breakpoint: 1099,
        settings: { slidesToShow: 3.2 },
      },
      {
        breakpoint: 799,
        settings: { slidesToShow: 2.2 },
      },
      {
        breakpoint: 639,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <div className="w-full  px-4 py-10 pf_sm:py-4 pf_sm:h-[350px]">
      <Slider ref={sliderRef} {...settings}>
        {items.map((item) => (
          <div
            key={item.id}
            className="px-3 inline-block align-top pf_sm:w-[240px]" // px-2로 살짝 줄임
          >
            <div className="bg-white overflow-hidden text-start w-full ">
              <Image
                src={item.imageSrc}
                alt={item.title}
                width={400}
                height={300}
                className="w-full h-auto pf_sm:h-[300px] pf_lg:h-[100px]"
              />
              <div className="py-4 pf_sm:w-[250px]">
                {" "}
                {/* 텍스트 영역도 동일하게 */}
                <h3 className="text-2xl font-500 mb-2 pf_xs:text-3xl">
                  {item.title}
                </h3>
                <p className="text-gray-500 text-sm pf_xs:ml-1">
                  {item.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </Slider>{" "}
      {/* 🔽 화살표 버튼 - 양쪽 끝에 고정 */}
      <div className="absolute bottom-1 left-2 -translate-y-1/2 z-10 px-4">
        <PrevArrow onClick={() => sliderRef.current?.slickPrev()} />
      </div>
      <div className="absolute bottom-1 right-2 -translate-y-1/2 z-10 px-4">
        <NextArrow onClick={() => sliderRef.current?.slickNext()} />
      </div>
    </div>
  );
};

export default CardSlider;
