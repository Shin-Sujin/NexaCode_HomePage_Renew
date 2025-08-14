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
  /** 이 섹션이 차지하는 첫 전역 인덱스 (예: 13) */
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
  const orderRef = useRef<number[]>([0, 1, 2]);
  const prevIndexRef = useRef<number | null>(null);

  // 슬라이드 한 칸이 정확히 몇 픽셀인지" 계산하는 함수.
  // 슬라이드 하나의 가로 크기 + 간격(gap) 을 계산해서 반환
  // 이 값이 다음 슬라이드로 이동할 때 얼마나 움직여야 하는지 기준
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

  // 왼쪽으로 한 칸 넘겼다고 치고, 실제로 DOM 순서를 바꿔서 무한 루프처럼 보이게 하는 함수.
  const rotateLeftNoAnim = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;
    const first = track.children[0];
    if (!first) return;
    track.appendChild(first);
    // 순서 배열도 회전
    orderRef.current.push(orderRef.current.shift()!);
    gsap.set(track, { x: 0 });
  }, []);

  // 오른쪽으로 한 칸 넘겼다고 치고, 마지막 카드를 앞으로 빼오는 함수.
  const rotateRightNoAnim = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;
    const children = track.children;
    const last = children[children.length - 1];
    if (!last) return;
    track.insertBefore(last, children[0]);
    // 순서 배열도 회전(오른쪽)
    orderRef.current.unshift(orderRef.current.pop()!);
    gsap.set(track, { x: 0 });
  }, []);

  // 슬라이드 한 칸 왼쪽으로 부드럽게 넘기고, 끝나면 순서 재정렬.
  const nextSlide = useCallback(() => {
    const track = trackRef.current;
    if (!track || animatingRef.current) return;
    const step = calcStep();
    if (step === 0) return;

    animatingRef.current = true;
    gsap.to(track, {
      x: -step,
      duration: 0.6,
      ease: "power3.inOut",
      onComplete: () => {
        rotateLeftNoAnim();
        animatingRef.current = false;
      },
    });
  }, [calcStep, rotateLeftNoAnim]);

  //한 칸 오른쪽으로 부드럽게 넘기기.
  const prevSlide = useCallback(() => {
    const track = trackRef.current;
    if (!track || animatingRef.current) return;
    const step = calcStep();
    if (step === 0) return;

    // 선회전(마지막을 앞으로), x를 -step에서 0으로
    rotateRightNoAnim();
    gsap.set(track, { x: -step });

    animatingRef.current = true;
    gsap.to(track, {
      x: 0,
      duration: 0.6,
      ease: "power3.inOut",
      onComplete: () => {
        animatingRef.current = false;
      },
    });
  }, [calcStep, rotateRightNoAnim]);

  // 전역 인덱스 변화 감지
  useEffect(() => {
    const now = currentIndex;
    const prev = prevIndexRef.current;
    prevIndexRef.current = now;

    // 이 섹션의 범위
    const first = startIndex; // 13
    const second = startIndex + 1; // 14
    const third = startIndex + 2; // 15

    const inRange = (i: number) => i >= first && i <= third;

    // 최초 마운트/초기값
    if (prev === null) {
      // 범위 안에서 시작했다면 스냅 정렬
      if (inRange(now)) {
        const want = now - startIndex; // 0,1,2
        let guard = 0;
        while (orderRef.current[0] !== want && guard < 4) {
          rotateLeftNoAnim();
          guard++;
        }
      }
      return;
    }

    // --- 케이스 분기 ---

    // 1) 범위 밖 → 범위 안으로 "점프" 진입: 스냅 정렬(애니X)
    if (!inRange(prev) && inRange(now)) {
      const want = now - startIndex; // 0,1,2
      let guard = 0;
      while (orderRef.current[0] !== want && guard < 4) {
        rotateLeftNoAnim();
        guard++;
      }
      gsap.set(trackRef.current, { x: 0 });
      return;
    }

    // 2) 범위 안 → 범위 밖: 그냥 종료 (슬라이드 애니 없음)
    if (inRange(prev) && !inRange(now)) {
      // 필요 시 정리 로직 추가 가능
      return;
    }

    // 3) 범위 내부에서 인접 전이만 애니메이션:
    //    13→14, 14→15 → nextSlide()
    //    15→14, 14→13 → prevSlide()
    if (prev === first && now === second) {
      nextSlide();
      return;
    }
    if (prev === second && now === third) {
      nextSlide();
      return;
    }
    if (prev === third && now === second) {
      prevSlide();
      return;
    }
    if (prev === second && now === first) {
      prevSlide();
      return;
    }

    // 4) 그 외(비인접 점프 13→15, 15→13 같은 경우): 스냅 정렬
    if (inRange(prev) && inRange(now)) {
      const want = now - startIndex;
      let guard = 0;
      while (orderRef.current[0] !== want && guard < 4) {
        rotateLeftNoAnim();
        guard++;
      }
      gsap.set(trackRef.current, { x: 0 });
    }
  }, [currentIndex, startIndex, rotateLeftNoAnim, nextSlide, prevSlide]);
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
            <div className="flex lg:flex-row w-full flex-col mt-5">
              {/* 좌측 메타 */}
              <div className="meta-info relative md:static lg:w-[45%] lg:flex-shrink-0 w-full ml-36 mr-10 max-lg:mx-auto ">
                <div>
                  <div className="flex items-end font-black text-9xl leading-none mb-4 w-full max-md:items-start text-white">
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

                {/* 페이지 표시(선택) */}
                <div className="max-lg:hidden">
                  <div>
                    <div className="flex items-center justify-items-start w-full mt-16">
                      <span className="text-white text-sm font-bold font-nKKU">
                        {/* orderRef 기준으로 현재 첫 카드의 원본 번호 */}
                        {String(orderRef.current[0] + 1).padStart(2, "0")}
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
              <div className="flex-1 relative">
                {/* 뷰포트: 여기서만 휠/키보드로 슬라이드 */}
                <div
                  ref={viewportRef}
                  className="overflow-hidden outline-none"
                  tabIndex={0}
                >
                  {/* 트랙: 형제 간격은 space-x로 부여(재배치해도 gap 유지) */}
                  <div
                    ref={trackRef}
                    className="flex flex-row will-change-transform space-x-5"
                  >
                    {/* 초기 렌더 순서는 testimonials 순서. 이후 DOM 재배치로 무한 루프 */}
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

                {/* 도트 네비(선택) */}
                <div className="mt-4 flex justify-center gap-2">
                  {Array.from({ length: slides }).map((_, i) => (
                    <span
                      key={i}
                      className={`inline-block w-2 h-2 rounded-full ${
                        orderRef.current[0] === i ? "bg-white" : "bg-white/40"
                      }`}
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
