"use client";
import { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";
import { PrevArrow, NextArrow } from "@/src/components/portfolio/CustomArrows";
import { PortfolioListItem } from "../../app/portfolio/page";
import { Swiper as SwiperClass } from "swiper";
import Link from "next/link";

interface CardSliderProps {
  portfolios: PortfolioListItem[];
}

const CardSlider: React.FC<CardSliderProps> = ({ portfolios }) => {
  console.log("portfolios", portfolios);
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
    <div className="relative w-full flex items-center justify-center">
      <div className="w-full max-w-[200rem] px-4">
        <div
          ref={containerRef}
          className="w-full relative select-none"
          onMouseDown={(e) => handleStart(e.clientX)}
          onTouchStart={(e) => handleStart(e.touches[0].clientX)}
          onTouchEnd={(e) => handleEnd(e.changedTouches[0].clientX)}
        >
          <Swiper
            className="min-h-[400px]"
            modules={[Navigation, Pagination, Autoplay]}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
            slidesPerView={3}
            spaceBetween={24}
            speed={600}
            allowTouchMove={false}
            pagination={{ clickable: true }}
            breakpoints={{
              0: { slidesPerView: 1, centeredSlides: true },
              640: { slidesPerView: 2.2, centeredSlides: false },
              800: { slidesPerView: 3.5, centeredSlides: false },
              1100: { slidesPerView: 4.3, centeredSlides: false },
            }}
          >
            {portfolios.map((item) => (
              <SwiperSlide key={item.id}>
                <div className="px-3 inline-block align-top cursor-grab active:cursor-grabbing">
                  <Link
                    href={`/portfolio/${item.id}`}
                    draggable={false}
                    onDragStart={(e) => e.preventDefault()}
                  >
                    <div className="bg-white overflow-hidden text-start w-full">
                      <div className="w-full aspect-square relative">
                        <Image
                          src={item.thumbnailPath}
                          alt={item.title}
                          width={800}
                          height={800}
                          draggable={false}
                        />
                      </div>
                      <div className="py-4  select-none">
                        <h3 className="list-title  text-xl text-gray-700 font-500 mb-2">
                          {item.title}
                        </h3>
                        <p className="text-gray-500 text-sm xs:ml-1">
                          BRANDING – {item.createdAt}
                        </p>
                      </div>
                    </div>
                  </Link>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="fixed  bottom-5 left-2 -translate-y-1/2 z-10 px-4">
          <PrevArrow onClick={() => swiperRef.current?.slidePrev()} />
        </div>
        <div className="fixed bottom-5 right-2 -translate-y-1/2 z-10 px-4">
          <NextArrow onClick={() => swiperRef.current?.slideNext()} />
        </div>
      </div>
    </div>
  );
};

export default CardSlider;
