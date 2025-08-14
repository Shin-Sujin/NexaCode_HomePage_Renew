// Section05.tsx
"use client";
import CounterUp from "../startPageComponents/CounterUp";
import Image from "next/image";
import { useEffect, useRef, useCallback } from "react";
import { useSectionNumberAnimation } from "../../animations/sectionNumber";
import { useSectionTitleAnimation } from "../../animations/sectionTitle";
import gsap from "gsap";

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
  { number: "01", total: "03", imageSrc: "/images/test/photo1.png" },
  { number: "02", total: "03", imageSrc: "/images/test/photo2.png" },
  { number: "03", total: "03", imageSrc: "/images/test/review1.png" },
];

export default function Section05({ sectionRefs, startIndex }: Section05Props) {
  const sectionNumberRef = useRef<HTMLDivElement>(null);
  const sectionTitleRef = useRef<HTMLDivElement>(null);
  useSectionNumberAnimation(sectionNumberRef);
  useSectionTitleAnimation(sectionTitleRef);

  // ---- 슬라이더 refs/state ----
  const trackRef = useRef<HTMLDivElement | null>(null); // x 이동할 트랙
  const slideIndexRef = useRef(0); // 현재 슬라이드 (0..N-1)
  const animatingRef = useRef(false); // 중복 애니 방지

  // 트랙 이동 함수
  const goToSlide = useCallback((idx: number) => {
    const track = trackRef.current;
    if (!track) return;

    const first = track.children[0] as HTMLElement | undefined;
    const second = track.children[1] as HTMLElement | undefined;
    if (!first) return;

    const cardW = first.getBoundingClientRect().width;
    const gap = second
      ? parseFloat(getComputedStyle(second).marginLeft || "0") || 0
      : 0;
    const offset = -(cardW + gap) * idx;

    animatingRef.current = true;
    gsap.to(track, {
      x: offset,
      duration: 0.6,
      ease: "power3.inOut",
      onComplete: () => {
        animatingRef.current = false;
      },
    });
  }, []);

  // 이미지 슬라이드 트랙
  const nextSlide = useCallback(() => {
    if (animatingRef.current || !trackRef.current) return;
    const track = trackRef.current;

    const first = track.children[0] as HTMLElement | undefined;
    if (!first) return;

    const cardW = first.getBoundingClientRect().width;
    const gap = track.children[1]
      ? parseFloat(
          getComputedStyle(track.children[1] as HTMLElement).marginLeft || "0"
        ) || 0
      : 0;
    const moveX = -(cardW + gap);

    animatingRef.current = true;
    gsap.to(track, {
      x: moveX,
      duration: 0.6,
      ease: "power3.inOut",
      onComplete: () => {
        // 첫 번째 요소를 맨 뒤로 이동
        track.appendChild(first);
        gsap.set(track, { x: 0 });
        animatingRef.current = false;
      },
    });
  }, []);

  const prevSlide = useCallback(() => {
    if (animatingRef.current || !trackRef.current) return;
    const track = trackRef.current;

    const children = track.children;
    const last = children[children.length - 1] as HTMLElement | undefined;
    if (!last) return;

    const cardW = last.getBoundingClientRect().width;
    const gap =
      children.length > 1
        ? parseFloat(
            getComputedStyle(children[1] as HTMLElement).marginLeft || "0"
          ) || 0
        : 0;
    const moveX = -(cardW + gap);

    // 마지막 요소를 맨 앞으로 이동하고 위치 세팅
    track.insertBefore(last, children[0]);
    gsap.set(track, { x: moveX });

    animatingRef.current = true;
    gsap.to(track, {
      x: 0,
      duration: 0.6,
      ease: "power3.inOut",
      onComplete: () => {
        animatingRef.current = false;
      },
    });
  }, []);

  // 트랙 초기 위치 & 리사이즈 반영
  useEffect(() => {
    goToSlide(slideIndexRef.current);
    const onResize = () => goToSlide(slideIndexRef.current);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [goToSlide]);

  // 트랙 위에서만 휠로 슬라이드 (페이지 전체 스크롤 막지 않음)
  const onWheelOverTrack = useCallback(
    (e: React.WheelEvent) => {
      // 트랙 위에서만 동작하게 하고, 트랙 내부 스크롤 대신 슬라이드로 소비
      e.preventDefault();
      if (e.deltaY > 0) nextSlide();
      else prevSlide();
    },
    [nextSlide, prevSlide]
  );

  // 키보드 접근성 (트랙 포커스 시 ←/→로 이동)
  const onKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === "ArrowRight") {
        e.preventDefault();
        nextSlide();
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        prevSlide();
      }
    },
    [nextSlide, prevSlide]
  );

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
              {/* 왼쪽 메타 */}
              <div className="meta-info relative md:static lg:w-[45%] lg:flex-shrink-0 w-full ml-36 mr-10 max-lg:mx-auto ">
                <div>
                  <div className="flex items-end font-black text-9xl leading-none mb-4 w-full max-md:items-start text-white">
                    <CounterUp targetNumber={5} duration={1000} />
                    <span className="text-white text-8xl max-md:text-7xl max-md:mt-4">
                      /5
                    </span>
                  </div>
                  <h1
                    className="has_fade_anim w-full text-[#999999] text-m font-bold text-2xl xxl:mb-20 lg:mb-10 mb-5"
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

                {/* 페이지 수(선택 사항): 현재 인덱스를 보여주고 싶다면 상태를 상태관리로 노출 */}
                <div className="max-lg:hidden">
                  <div>
                    <div className="flex items-center justify-items-start w-full mt-52 max-xxxl:mt-20">
                      <span className="text-white text-sm font-bold font-nKKU">
                        {String(slideIndexRef.current + 1).padStart(2, "0")}
                      </span>
                      <div className="w-1/4 h-px bg-white mx-4" />
                      <span className="text-white text-sm font-bold font-nKKU">
                        {String(testimonials.length).padStart(2, "0")}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* 오른쪽 슬라이드 영역 */}
              <div className="flex-1 relative">
                {/* 뷰포트: 여기서만 휠로 슬라이드 */}
                <div
                  className="overflow-hidden outline-none"
                  tabIndex={0}
                  onWheel={onWheelOverTrack}
                  onKeyDown={onKeyDown}
                >
                  {/* 트랙: x 이동 */}
                  <div
                    ref={trackRef}
                    className="flex flex-row will-change-transform space-x-5"
                  >
                    {testimonials.map((t, i) => (
                      <div
                        key={i}
                        className={`flex-shrink-0 xxl:h-[45rem] xxl:w-[30rem] h-[30rem] w-[30rem] overflow-hidden relative lg:h-[28rem] lg:w-[17rem] ${
                          i > 0 ? "ml-5" : ""
                        }`}
                      >
                        <Image
                          src={t.imageSrc}
                          alt={`testimonial ${t.number}`}
                          fill
                          style={{ objectFit: "cover" }}
                        />
                      </div>
                    ))}
                  </div>
                </div>

                {/* 하단 도트 네비(옵션) */}
                <div className="mt-4 flex justify-center gap-2">
                  {testimonials.map((_, i) => (
                    <span
                      key={i}
                      className="inline-block w-2 h-2 rounded-full bg-white/40"
                      // 도트 활성 표시를 쓰고 싶다면, 상태를 Zustand로 빼거나
                      // forceUpdate 트릭을 넣어도 됨. 우선은 단순 표시.
                    />
                  ))}
                </div>
              </div>
              {/* /슬라이드 영역 */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
