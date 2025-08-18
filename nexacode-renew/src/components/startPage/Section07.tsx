// src/app/startPage/Section07.tsx
"use client";
import OverlapCard from "../startPageComponents/OverlapCard";
import { useCallback, useEffect, useRef, useState } from "react";
import { useSectionNumberAnimation } from "../../animations/sectionNumber";
import { useSectionTitleAnimation } from "../../animations/sectionTitle";
import "../../styles/section07.css";
import { useStartPageStore } from "@/src/stores/startPageStore";

interface Section07Props {
  sectionRefs: React.RefObject<(HTMLDivElement | null)[]>;
  /** 이 섹션이 차지하는 첫 전역 인덱스 (이번 표 기준 17) */
  startIndex: number;
}

type Pos = "left" | "center" | "right";

export default function Section07({ sectionRefs, startIndex }: Section07Props) {
  const sectionNumberRef = useRef<HTMLDivElement>(null);
  const sectionTitleRef = useRef<HTMLDivElement>(null);
  useSectionTitleAnimation(sectionTitleRef);
  useSectionNumberAnimation(sectionNumberRef);

  // 전역 인덱스
  const { currentIndex } = useStartPageStore();
  const prevIndexRef = useRef<number | null>(null);

  // 각 카드의 위치 상태 (idx: 0,1,2 → pos: left/center/right)
  // 기본: 카드0=left, 카드1=center, 카드2=right
  const [order, setOrder] = useState<Pos[]>(["left", "center", "right"]);
  const isAnimatingRef = useRef(false); //애니메이션 잠금용
  const DURATION = 500; // 연속 입력 시 중복 방지

  const lockDuringAnimation = () => {
    isAnimatingRef.current = true;
    setTimeout(() => (isAnimatingRef.current = false), DURATION);
  };

  // 회전 애니메이션 (오른쪽 카드가 가운데로 옴) : 17→18, 18→19일 때 사용
  const rotateFromRight = useCallback(() => {
    if (isAnimatingRef.current) return;
    setOrder((prev) =>
      prev.map((p) =>
        p === "right" ? "center" : p === "center" ? "left" : "right"
      )
    );
    lockDuringAnimation();
  }, []);

  // 회전 애니메이션 (왼쪽 카드가 가운데로 옴) : 19→18, 18→17일 때 사용
  const rotateFromLeft = useCallback(() => {
    if (isAnimatingRef.current) return;
    setOrder((prev) =>
      prev.map((p) =>
        p === "left" ? "center" : p === "center" ? "right" : "left"
      )
    );
    lockDuringAnimation();
  }, []);

  // 스냅(애니 없이 즉시 정렬): center로 만들 카드 index를 지정
  // centerIdx: 0/1/2 중 하나
  const snapToCenter = useCallback((centerIdx: number) => {
    // 원형으로: centerIdx-1 → left, centerIdx → center, centerIdx+1 → right
    const leftIdx = (centerIdx + 3 - 1) % 3;
    const rightIdx = (centerIdx + 1) % 3;
    //
    const next: Pos[] = ["left", "left", "left"]; //각 카드의 위치를 담당, 이 값이 변하면 카드에 pos-left, pos-center, pos-right 클래스가 css 트랜지션으로 움직임.
    next[centerIdx] = "center";
    next[rightIdx] = "right";
    next[leftIdx] = "left";
    setOrder(next);
  }, []);

  // 자동 3초 타이머는 제거 (요청대로 스크롤/인덱스 전이로만 제어)

  // 이 섹션의 카드 데이터
  const cards = [
    {
      id: 0,
      imageSrc: "/images/startPage/OurValues1.jpg",
      imageAlt: "넥사코드의 가치 1",
      category: "우리는 파트너 입니다",
      title:
        "당신의 성공이 곧 우리의 목표입니다.<br/>그래서 우리는 <strong>‘개발사’</strong>가 아닌 <br/><strong>‘파트너’</strong>입니다.",
      sentence: "Build Together, Win Together",
      className: "bg-[#C1C6D2]/95",
    },
    {
      id: 1,
      imageSrc: "/images/startPage/OurValues2.jpg",
      imageAlt: "넥사코드의 가치 2",
      category: "우리는 약속을 ‘결과’로 보여드립니다",
      title:
        "말이 아닌 ‘결과’로 증명합니다.<br/><strong>책임 있게, 끝까지.</strong> <br/>그것이 넥사코드의 방식입니다.",
      sentence: "With responsibility",
      className: "bg-[#BEBEC0]/95",
    },
    {
      id: 2,
      imageSrc: "/images/startPage/OurValues3.jpg",
      imageAlt: "넥사코드의 가치 3",
      category: "우리는 ‘성공’에 집중합니다",
      title:
        "단순히 만드는 것이 아니라,<br/> <strong>고객의 고객까지 생각하는</strong> <br/>성공 구조를 설계합니다.",
      sentence: "Built to Deliver",
      className: "bg-[#807F71]/95",
    },
  ];

  // 전역 인덱스 전이 기반 슬라이드 구동
  useEffect(() => {
    const now = currentIndex;
    const prev = prevIndexRef.current;
    prevIndexRef.current = now;

    const first = startIndex; // 17
    const second = startIndex + 1; // 18
    const third = startIndex + 2; // 19
    const inRange = (i: number) => i >= first && i <= third;

    // 초기 세팅 또는 첫 렌더
    if (prev === null) {
      if (inRange(now)) {
        // 17/18/19 각각 center가 0/1/2가 되도록 스냅
        const wantCenter = now - startIndex; // 0,1,2
        snapToCenter(wantCenter);
      }
      return;
    }

    // 범위 밖 → 범위 안 "점프": 스냅 정렬(애니X)
    if (!inRange(prev) && inRange(now)) {
      snapToCenter(now - startIndex);
      return;
    }

    // 범위 안 → 범위 밖: 아무 것도 하지 않음(슬라이드 애니 없음)
    if (inRange(prev) && !inRange(now)) {
      return;
    }

    // 범위 내부 인접 전이만 애니메이션
    if (prev === first && now === second) return rotateFromRight(); // 17→18
    if (prev === second && now === third) return rotateFromRight(); // 18→19
    if (prev === third && now === second) return rotateFromLeft(); // 19→18
    if (prev === second && now === first) return rotateFromLeft(); // 18→17

    // 비인접 점프(예: 17↔19)는 스냅
    if (inRange(prev) && inRange(now)) {
      snapToCenter(now - startIndex);
    }
  }, [currentIndex, startIndex, rotateFromRight, rotateFromLeft, snapToCenter]);

  return (
    <div className="container relative justify-center items-center py-20">
      <div className="flex flex-col w-full max-md:mx-10">
        <div className="section-number">
          <div
            ref={(el) => {
              if (!sectionRefs.current) return;
              // 17,18,19 모두 같은 DOM에 매핑
              sectionRefs.current[startIndex] = el;
              sectionRefs.current[startIndex + 1] = el;
              sectionRefs.current[startIndex + 2] = el;
            }}
          >
            <div ref={sectionNumberRef} data-stagger="0.05">
              07. OUR VALUES
            </div>
          </div>
        </div>

        <div className="startPage-title-height">
          <div ref={sectionTitleRef} className="startPage-title xl:mt-8">
            <h1 className="section-title-line ">
              <span className="font-bold ">개발 이상의 가치</span>를 약속합니다
            </h1>
          </div>
        </div>

        <div className="hidden lg:block relative w-full pt-5 xxl:h-[37rem] xl:h-[27rem] lg:h-[20rem] h-[15rem] mt-16 p-0 m-0">
          <div className="cardContainer">
            {cards.map((c, idx) => {
              const pos = order[idx]; // idx번째 카드의 위치
              const isCenter = pos === "center";
              return (
                <div
                  key={c.id}
                  className={`slide pos-${pos}`}
                  // 클릭/키보드로도 넘기고 싶다면 아래 두 줄 유지,
                  // 전역 인덱스만으로 제어하고 싶다면 주석 처리해도 됨.
                  onClick={() =>
                    !isCenter &&
                    (pos === "left" ? rotateFromLeft() : rotateFromRight())
                  }
                  role={isCenter ? "img" : "button"}
                  aria-label={
                    isCenter
                      ? c.imageAlt
                      : pos === "left"
                      ? "왼쪽 카드 선택"
                      : "오른쪽 카드 선택"
                  }
                  tabIndex={isCenter ? -1 : 0}
                >
                  <OverlapCard
                    imageSrc={c.imageSrc}
                    imageAlt={c.imageAlt}
                    category={c.category}
                    title={c.title}
                    sentence={c.sentence}
                    className={c.className}
                  />
                </div>
              );
            })}
          </div>
        </div>
        {/* 모바일용 */}
        <div className="lg:hidden flex flex-col w-full justify-center items-center px-auto py-auto mt-16 space-y-8">
          {cards.map((card) => (
            <div
              key={card.id}
              className="bg-white flex flex-col py-10 px-2 w-[20rem] h-[20rem] text-2xl text-center shadow-lg"
            >
              <div>
                <p className="text-sm text-[#555555] mb-8">{card.category}</p>
                <h2
                  className="text-lg text-gray-800 leading-relaxed break-keep"
                  dangerouslySetInnerHTML={{ __html: card.title }}
                />
              </div>
              <div className="mt-auto">
                <hr className="mb-5" />
                <p className="text-base font-black text-gray-700">
                  {card.sentence}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
