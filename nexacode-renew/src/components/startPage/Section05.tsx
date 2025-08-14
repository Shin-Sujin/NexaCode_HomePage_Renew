// src/app/startPage/Section05.tsx
"use client";

import CounterUp from "../startPageComponents/CounterUp";
import Image from "next/image";
import { useCallback, useEffect, useRef } from "react";
import { useSectionNumberAnimation } from "../../animations/sectionNumber";
import { useSectionTitleAnimation } from "../../animations/sectionTitle";
import gsap from "gsap";
import { useStartPageStore } from "@/src/stores/startPageStore";

interface Section05Props {
  sectionRefs: React.RefObject<(HTMLDivElement | null)[]>;
  startIndex: number;
  /** 슬라이드 개수(기본 3) */
  slides?: number;
}

type Testimonial = {
  number: string;
  total: string;
  imageSrc: string;
};

const testimonials: Testimonial[] = [
  { number: "01", total: "03", imageSrc: "/images/test/photo1.png" },
  { number: "02", total: "03", imageSrc: "/images/test/photo2.png" },
  { number: "03", total: "03", imageSrc: "/images/test/photo3.png" },
];

export default function Section05({
  sectionRefs,
  startIndex,
  slides = 3,
}: Section05Props) {
  const sectionNumberRef = useRef<HTMLDivElement>(null);
  const sectionTitleRef = useRef<HTMLDivElement>(null);
  useSectionNumberAnimation(sectionNumberRef);
  useSectionTitleAnimation(sectionTitleRef);

  // 전역 인덱스 → 로컬 슬라이드 동기화용
  const { currentIndex } = useStartPageStore();

  // ---- 슬라이더 refs/state ----
  const viewportRef = useRef<HTMLDivElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null); // x 이동/재배치 대상
  const animatingRef = useRef(false); // 중복 애니 방지
  const orderRef = useRef<number[]>([0, 1, 2]); // 현재 DOM 순서(첫 카드가 어떤 원본 인덱스인지)
  const prevIndexRef = useRef<number | null>(null);

  // 페이지 표시 애니메이션(현재 페이지 숫자)
  const pageCurrentRef = useRef<HTMLSpanElement | null>(null);
  const animatePageTo = useCallback((n: number) => {
    const el = pageCurrentRef.current;
    if (!el) return;
    const text = String(n).padStart(2, "0");
    gsap.to(el, {
      y: -8,
      opacity: 0,
      duration: 0.18,
      ease: "power2.out",
      onComplete: () => {
        el.textContent = text;
        gsap.fromTo(
          el,
          { y: 8, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.24, ease: "power2.out" }
        );
      },
    });
  }, []);

  // 현재 페이지 숫자 갱신 헬퍼 (애니메이션 여부 선택)
  const updatePageDisplay = useCallback(
    (animate = true) => {
      const currentPage = orderRef.current[0] + 1; // 1..slides
      if (!pageCurrentRef.current) return;
      if (animate) {
        animatePageTo(currentPage);
      } else {
        pageCurrentRef.current.textContent = String(currentPage).padStart(
          2,
          "0"
        );
      }
    },
    [animatePageTo]
  );

  // 슬라이드 한 칸 픽셀(step) 계산
  const calcStep = useCallback(() => {
    const track = trackRef.current;
    if (!track) return 0;
    const a = track.children[0] as HTMLElement | undefined;
    const b = track.children[1] as HTMLElement | undefined;
    if (!a) return 0;
    const w = a.getBoundingClientRect().width;
    const gap = b ? parseFloat(getComputedStyle(b).marginLeft || "0") || 0 : 0;
    return w + gap;
  }, []);

  // DOM 순서 회전(왼쪽): 첫 요소 → 맨 뒤
  const rotateLeftNoAnim = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;
    const first = track.children[0];
    if (!first) return;
    track.appendChild(first);
    orderRef.current.push(orderRef.current.shift()!);
    gsap.set(track, { x: 0 });
  }, []);

  // DOM 순서 회전(오른쪽): 마지막 → 맨 앞
  const rotateRightNoAnim = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;
    const children = track.children;
    const last = children[children.length - 1];
    if (!last) return;
    track.insertBefore(last, children[0]);
    orderRef.current.unshift(orderRef.current.pop()!);
    gsap.set(track, { x: 0 });
  }, []);

  // ★ 교체: nextSlide (왼쪽 이동 = 다음)
  const nextSlide = useCallback(() => {
    const track = trackRef.current;
    if (!track || animatingRef.current) return;

    const step = calcStep();
    if (step === 0) return;

    const first = track.children[0] as HTMLElement | undefined;
    if (!first) return;

    // 1) 첫 카드 사본을 뒤에 미리 붙여서 "뒤에서 들어오는" 비주얼 확보
    const clone = first.cloneNode(true) as HTMLElement;
    track.appendChild(clone);
    gsap.set(clone, { opacity: 0, scale: 0.98 });

    animatingRef.current = true;

    const tl = gsap.timeline({
      defaults: { ease: "power3.inOut" },
      onComplete: () => {
        // 3) 애니 끝나면 원래 첫 카드를 제거하고 위치 리셋
        first.remove();
        gsap.set(track, { x: 0 });
        animatingRef.current = false;

        // 순서 배열 갱신(왼쪽 회전)
        orderRef.current.push(orderRef.current.shift()!);

        // 페이지 숫자 자연스러운 전환
        updatePageDisplay(true);
      },
    });

    // 2) 트랙을 -step 만큼 이동시키는 동안, 뒤에 붙인 clone을 자연스럽게 등장
    tl.to(track, { x: -step, duration: 0.35 }, 0).to(
      clone,
      { opacity: 1, scale: 1, duration: 0.35, ease: "power2.out" },
      0.05
    );
  }, [calcStep, updatePageDisplay]);

  // ★ 교체: prevSlide (오른쪽 이동 = 이전)
  const prevSlide = useCallback(() => {
    const track = trackRef.current;
    if (!track || animatingRef.current) return;

    const step = calcStep();
    if (step === 0) return;

    const children = track.children;
    const last = children[children.length - 1] as HTMLElement | undefined;
    if (!last) return;

    // 1) 마지막 카드 사본을 앞에 미리 붙여서 "앞에서 들어오는" 비주얼 확보
    const clone = last.cloneNode(true) as HTMLElement;
    track.insertBefore(clone, children[0]);
    gsap.set(clone, { opacity: 0, scale: 0.98 });

    // 트랙을 -step에서 시작(왼쪽으로 한 칸 밀어둔 상태)
    gsap.set(track, { x: -step });

    animatingRef.current = true;

    const tl = gsap.timeline({
      defaults: { ease: "power3.inOut" },
      onComplete: () => {
        // 3) 애니 끝나면 원래 마지막 카드를 제거하고 위치 리셋
        last.remove();
        gsap.set(track, { x: 0 });
        animatingRef.current = false;

        // 순서 배열 갱신(오른쪽 회전)
        orderRef.current.unshift(orderRef.current.pop()!);

        // 페이지 숫자 자연스러운 전환
        updatePageDisplay(true);
      },
    });

    // 2) 트랙을 0으로 되돌리는 동안, 앞에 붙인 clone을 자연스럽게 등장
    tl.to(track, { x: 0, duration: 0.35 }, 0).to(
      clone,
      { opacity: 1, scale: 1, duration: 0.35, ease: "power2.out" },
      0.05
    );
  }, [calcStep, updatePageDisplay]);

  // 전역 인덱스 변화 감지 → Section05 구간(13~15)에서만 애니 구동
  useEffect(() => {
    const now = currentIndex;
    const prev = prevIndexRef.current;
    prevIndexRef.current = now;

    const first = startIndex; // 13
    const second = startIndex + 1; // 14
    const third = startIndex + 2; // 15
    const inRange = (i: number) => i >= first && i <= third;

    // 최초 마운트
    if (prev === null) {
      if (inRange(now)) {
        const want = now - startIndex; // 0,1,2
        let guard = 0;
        while (orderRef.current[0] !== want && guard < 4) {
          rotateLeftNoAnim();
          guard++;
        }
        // 초기 숫자 세팅은 애니 없이
        updatePageDisplay(false);
      }
      return;
    }

    // 범위 밖 → 범위 안 점프: 스냅 정렬(애니X) + 숫자 즉시 반영
    if (!inRange(prev) && inRange(now)) {
      const want = now - startIndex;
      let guard = 0;
      while (orderRef.current[0] !== want && guard < 4) {
        rotateLeftNoAnim();
        guard++;
      }
      gsap.set(trackRef.current, { x: 0 });
      updatePageDisplay(false);
      return;
    }

    // 범위 안 → 범위 밖: 아무 것도 안 함
    if (inRange(prev) && !inRange(now)) {
      return;
    }

    // 범위 내부 인접 전이만 애니
    if (prev === first && now === second) return nextSlide(); // 13→14
    if (prev === second && now === third) return nextSlide(); // 14→15
    if (prev === third && now === second) return prevSlide(); // 15→14
    if (prev === second && now === first) return prevSlide(); // 14→13

    // 비인접 점프(13↔15): 스냅 + 숫자 즉시 반영
    if (inRange(prev) && inRange(now)) {
      const want = now - startIndex;
      let guard = 0;
      while (orderRef.current[0] !== want && guard < 4) {
        rotateLeftNoAnim();
        guard++;
      }
      gsap.set(trackRef.current, { x: 0 });
      updatePageDisplay(false);
    }
  }, [
    currentIndex,
    startIndex,
    rotateLeftNoAnim,
    rotateRightNoAnim,
    nextSlide,
    prevSlide,
    updatePageDisplay,
  ]);

  // 리사이즈 시 현재 정렬 유지 + 숫자는 그대로
  useEffect(() => {
    const onResize = () => {
      gsap.set(trackRef.current, { x: 0 });
      // 숫자는 orderRef 기준이므로 재세팅 불필요
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <div className="container relative justify-center items-center py-20">
      <div className="flex flex-col max-lg:gap-10 w-full mx-2">
        {/* 인덱스 등록: 이 섹션의 모든 단계(예: 13,14,15)를 같은 DOM에 매핑 */}
        <div className="section-number text-white ">
          <div
            ref={(el) => {
              if (!sectionRefs.current) return;
              for (let i = 0; i < slides; i++) {
                sectionRefs.current[startIndex + i] = el;
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
            <div className="flex xl:flex-row w-full flex-col mt-5">
              {/* 좌측 메타 */}
              <div className="meta-info relative md:static lg:w-[45%] xl:flex-shrink-0 w-full  mr-10 max-lg:mx-auto ">
                <div>
                  <div className="flex items-center lg:items-end font-black text-9xl leading-none mb-4 w-full text-white">
                    <CounterUp targetNumber={5} duration={1000} />
                    <span className="text-white text-8xl max-md:text-7xl max-md:mt-4">
                      /5
                    </span>
                  </div>
                  <h1
                    className="has_fade_anim w-full text-[#999999] text-m font-bold text-2xl xxl:mb-16 lg:mb-8 mb-5"
                    data-fade-from="bottom"
                  >
                    넥사코드 만족도 설문조사
                  </h1>
                  <hr className="w-full my-8 border-[#2e2e2e]" />
                  <h3 className="name text-3xl text-white mt-10 mb-1 w-full lg:mt-10">
                    고객의 말이 증명합니다
                  </h3>
                  <p className="text-lg text-[#999999] leading-relaxed w-full mt-5 max-xxxl:text-base pr-10 whitespace-normal break-keep">
                    고객의 한마디 속엔 우리가 미처 설명하지 못한 모든 것이 담겨
                    있습니다. <br />
                    말보다 먼저 전해지는 신뢰, 고객의 이야기가 넥사코드를
                    증명합니다.
                  </p>
                </div>

                {/* 페이지 표시 */}
                <div className="hidden xl:block">
                  <div>
                    <div className="flex items-center justify-items-start w-full mt-16">
                      <span
                        ref={pageCurrentRef}
                        className="text-white text-sm font-bold font-nKKU inline-block"
                      >
                        {/* 초기값은 mount 시 updatePageDisplay(false)로 채워짐 */}
                        01
                      </span>
                      <div className="w-1/4 h-px bg-white mx-4" />
                      <span className="text-white text-sm font-bold font-nKKU">
                        {String(slides).padStart(2, "0")}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* 오른쪽 슬라이드 영역 */}
              <div className=" hidden xl:block">
                <div className="flex-1 relative ">
                  <div
                    ref={viewportRef}
                    className="overflow-hidden outline-none"
                    tabIndex={-1}
                  >
                    <div
                      ref={trackRef}
                      className="flex flex-row will-change-transform space-x-5"
                    >
                      {testimonials.slice(0, slides).map((t, i) => (
                        <div
                          key={i}
                          className="flex-shrink-0 xxl:h-[40rem] xxl:w-[30rem] h-[30rem] w-[30rem] overflow-hidden relative lg:h-[26rem] lg:w-[17rem] xl:h-[26rem] xl:w-[20rem]"
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
                </div>
              </div>

              {/* 모바일용 세로 이미지 리스트 */}
              <div className="xl:hidden w-full mt-10">
                <div className="flex flex-col items-center gap-5 px-4">
                  {testimonials.slice(0, slides).map((t) => (
                    <div
                      key={`mobile-${t.number}`}
                      className="w-full max-w-sm h-96 relative"
                    >
                      <Image
                        src={t.imageSrc}
                        alt={`testimonial ${t.number}`}
                        fill
                        style={{ objectFit: "cover" }}
                        className="rounded-lg"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
