"use client";
import { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";
import { PrevArrow, NextArrow } from "@/src/components/portfolio/CustomArrows";
import { items } from "./portfolioItems";
import { Swiper as SwiperClass } from "swiper";

const CardSlider = () => {
  const swiperRef = useRef<SwiperClass | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const [dragStartX, setDragStartX] = useState<number | null>(null);

  useEffect(() => {
    const handleMouseUp = (e: MouseEvent) => {
      if (dragStartX !== null) {
        handleEnd(e.clientX);
      }
    };

    window.addEventListener("mouseup", handleMouseUp);
    return () => {
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [dragStartX]);

  const handleStart = (x: number) => {
    setDragStartX(x);
  };

  const handleEnd = (x: number) => {
    if (dragStartX === null || !swiperRef.current) return;

    const diff = x - dragStartX;
    const absDiff = Math.abs(diff);
    const direction = diff < 0 ? "next" : "prev";

    const swiper = swiperRef.current;
    const wrapperWidth = swiper.wrapperEl.offsetWidth;
    const slidesPerView =
      typeof swiper.params.slidesPerView === "number"
        ? swiper.params.slidesPerView
        : 1;
    const slideWidth = wrapperWidth / slidesPerView;
    const slideDelta = Math.floor(absDiff / slideWidth);
    // ✅ 최소 1장 넘어가게 보장
    const nextIndex =
      direction === "next"
        ? swiper.activeIndex + Math.max(1, slideDelta)
        : swiper.activeIndex - Math.max(1, slideDelta);

    swiper.slideTo(nextIndex);

    setDragStartX(null);
  };

  return (
    <div
      ref={containerRef}
      className="w-full px-4 py-10 pf_sm:py-4 pf_sm:h-[350px] relative select-none"
      onMouseDown={(e) => handleStart(e.clientX)}
      onTouchStart={(e) => handleStart(e.touches[0].clientX)}
      onTouchEnd={(e) => handleEnd(e.changedTouches[0].clientX)}
    >
      <Swiper
        modules={[Navigation, Pagination]}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        slidesPerView={3}
        spaceBetween={24}
        speed={600}
        allowTouchMove={false}
        pagination={{ clickable: true }}
        breakpoints={{
          0: { slidesPerView: 1 },
          640: { slidesPerView: 2.2 },
          800: { slidesPerView: 3.2 },
          1100: { slidesPerView: 4.2 },
        }}
      >
        {items.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="px-3 inline-block align-top pf_sm:w-[240px] cursor-grab active:cursor-grabbing">
              <div className="bg-white overflow-hidden text-start w-full">
                <Image
                  src={item.imageSrc}
                  alt={item.title}
                  width={400}
                  height={300}
                  draggable={false}
                  className="w-full h-auto pf_sm:h-[300px] pf_lg:h-[100px] select-none"
                />
                <div className="py-4 pf_sm:w-[250px] select-none">
                  <h3 className="text-2xl font-500 mb-2 pf_xs:text-3xl">
                    {item.title}
                  </h3>
                  <p className="text-gray-500 text-sm pf_xs:ml-1">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="absolute bottom-1 left-2 -translate-y-1/2 z-10 px-4">
        <PrevArrow onClick={() => swiperRef.current?.slidePrev()} />
      </div>
      <div className="absolute bottom-1 right-2 -translate-y-1/2 z-10 px-4">
        <NextArrow onClick={() => swiperRef.current?.slideNext()} />
      </div>
    </div>
  );
};

export default CardSlider;
