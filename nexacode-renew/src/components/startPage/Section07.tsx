"use client";
import OverlapCard from "../startPageComponents/OverlapCard";
import { useCallback, useEffect, useRef, useState } from "react";
import { useSectionNumberAnimation } from "../../animations/sectionNumber";
import { useSectionTitleAnimation } from "../../animations/sectionTitle";

interface Section07Props {
  sectionRefs: React.RefObject<(HTMLDivElement | null)[]>;
  startIndex: number;
}

type Pos = "left" | "center" | "right";

export default function Section07({ sectionRefs, startIndex }: Section07Props) {
  const sectionNumberRef = useRef<HTMLDivElement>(null);
  const sectionTitleRef = useRef<HTMLDivElement>(null);
  useSectionTitleAnimation(sectionTitleRef);
  useSectionNumberAnimation(sectionNumberRef);

  // 각 카드의 위치 상태
  const [order, setOrder] = useState<Pos[]>(["left", "center", "right"]);
  const isAnimatingRef = useRef(false);
  const DURATION = 500; // transition과 맞춤

  const lockDuringAnimation = () => {
    isAnimatingRef.current = true;
    setTimeout(() => (isAnimatingRef.current = false), DURATION);
  };

  const rotateFromRight = useCallback(() => {
    // right -> center, center -> left, left -> right
    if (isAnimatingRef.current) return;
    setOrder((prev) =>
      prev.map((p) =>
        p === "right" ? "center" : p === "center" ? "left" : "right"
      )
    );
    lockDuringAnimation();
  }, []);

  const rotateFromLeft = useCallback(() => {
    // left -> center, center -> right, right -> left
    if (isAnimatingRef.current) return;
    setOrder((prev) =>
      prev.map((p) =>
        p === "left" ? "center" : p === "center" ? "right" : "left"
      )
    );
    lockDuringAnimation();
  }, []);

  const handleClick = (pos: Pos) => {
    if (pos === "left") rotateFromLeft();
    else if (pos === "right") rotateFromRight();
  };

  const handleKeyDown =
    (pos: Pos) => (e: React.KeyboardEvent<HTMLDivElement>) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        handleClick(pos);
      }
      if (e.key === "ArrowLeft" && pos !== "center") {
        e.preventDefault();
        rotateFromLeft();
      }
      if (e.key === "ArrowRight" && pos !== "center") {
        e.preventDefault();
        rotateFromRight();
      }
    };
  useEffect(() => {
    const interval = setInterval(() => {
      rotateFromRight();
    }, 3000);

    return () => clearInterval(interval);
  }, [rotateFromRight]);

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

  return (
    <div className="container relative justify-center items-center py-36">
      <div className="flex flex-col w-full max-md:mx-10">
        <div className="section-number">
          <div
            ref={(el) => {
              if (sectionRefs.current) sectionRefs.current[startIndex] = el;
            }}
          >
            <div ref={sectionNumberRef} data-stagger="0.05">
              07. OUR VALUES
            </div>
          </div>
        </div>

        <div className="startPage-title-height">
          <h2 ref={sectionTitleRef} className="startPage-title">
            <div className="section-title-line ">
              <span className="font-bold ">개발 이상의 가치</span>를 약속합니다
            </div>
          </h2>
        </div>

        <div className="relative w-full pt-5 h-[60vh] p-0 m-0">
          <div className="cardContainer">
            {cards.map((c, idx) => {
              const pos = order[idx]; // idx번째 카드의 위치
              const isCenter = pos === "center";
              return (
                <div
                  key={c.id}
                  className={`slide pos-${pos}`}
                  onClick={() => !isCenter && handleClick(pos)}
                  onKeyDown={handleKeyDown(pos)}
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
      </div>
    </div>
  );
}
