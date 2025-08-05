"use client";
import React, { useRef, useState, useEffect } from "react";
import Title from "./startPage/Title";
import Section01 from "./startPage/Section01";
import Section02 from "./startPage/Section02";
import Section03 from "./startPage/Section03";
import Section04 from "./startPage/Section04";
import Section05 from "./startPage/Section05";
import Section06 from "./startPage/Section06";
import Section07 from "./startPage/Section07";
import FooterVideo from "./startPage/FooterVideo";
import FooterArea from "./startPage/FooterArea";
import ButtonPage02 from "./startPageComponents/ButtonPage02";
export default function StartPage() {
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);
  const currentIndexRef = useRef(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const section04TopRef = useRef<HTMLDivElement | null>(null);
  const [isScrolling, setIsScrolling] = useState(false);

  // 원페이지 효과를 줄 섹션 인덱스
  const isFullPageSection = (index: number) => {
    return [0, 1, 2, 3, 6, 7, 8, 9, 10].includes(index); // Section03, 04는 제외
  };

  const scrollToSection = (index: number) => {
    const target = sectionRefs.current[index];
    if (!target) return;

    setIsScrolling(true);
    target.scrollIntoView({ behavior: "smooth" });

    setTimeout(() => {
      setIsScrolling(false);
    }, 1000);
  };
  const wheelHandler = (e: WheelEvent) => {
    if (isScrolling) return;

    const direction = e.deltaY > 0 ? "down" : "up";
    const nextIndex =
      direction === "down" ? currentIndex + 1 : currentIndex - 1;

    // Section03, 04에서는 기본 스크롤 허용
    if (!isFullPageSection(currentIndex)) return;

    // 기본 스크롤 막기
    e.preventDefault();

    // Section02 → Section03으로 강제 이동
    if (currentIndex === 3 && direction === "down") {
      setCurrentIndex(4);
      scrollToSection(4);
      return;
    }
    // Section05 → Section04로 이동 (휠 위로)
    if (currentIndex === 6 && direction === "up") {
      setCurrentIndex(5);
      scrollToSection(5);
      return;
    }

    // Section04 → Section03 (스크롤 맨 위에서 휠을 올릴 때)
    if (currentIndex === 5 && direction === "up") {
      const sectionTopElement = document.getElementById("section04-top");

      if (sectionTopElement) {
        const rect = sectionTopElement.getBoundingClientRect();

        // 스크롤이 Section04의 맨 꼭대기에 도달했는지 판단
        if (rect.top <= 10) {
          console.log("🔥 Section04 맨 위에서 휠 업 → Section03으로 이동");
          setCurrentIndex(4);
          scrollToSection(4);
          return;
        }
      }
    }

    // 다음 섹션으로 스크롤 이동
    if (
      nextIndex >= 0 &&
      nextIndex < sectionRefs.current.length &&
      isFullPageSection(nextIndex)
    ) {
      setCurrentIndex(nextIndex);
      scrollToSection(nextIndex);
    }
  };
  // 현재 보이는 섹션 추적
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries.find((entry) => entry.isIntersecting);
        if (visibleEntry) {
          const index = sectionRefs.current.findIndex(
            (ref) => ref === visibleEntry.target
          );
          if (index !== -1) {
            setCurrentIndex(index);
          }
        }
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.6, // 60% 보이면 감지
      }
    );

    sectionRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      observer.disconnect();
    };
  }, []);
  // wheel 이벤트를 섹션 변경될 때마다 등록/해제
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        // max-md 이하
        window.removeEventListener("wheel", wheelHandler);
      } else {
        window.addEventListener("wheel", wheelHandler, { passive: false });
      }
    };

    handleResize(); // 초기 실행 시 크기 확인

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("wheel", wheelHandler);
    };
  }, [currentIndex, isScrolling]);
  const handleWheel = (e: WheelEvent) => {
    const direction = e.deltaY > 0 ? "down" : "up";
    const currentIndex = currentIndexRef.current;
    const nextIndex =
      direction === "down" ? currentIndex + 1 : currentIndex - 1;

    if (
      nextIndex < 0 ||
      nextIndex >= sectionRefs.current.length ||
      !sectionRefs.current[nextIndex]
    )
      return;

    // Section03(3), Section04(4) → 일반 스크롤 허용
    if (!isFullPageSection(currentIndex)) {
      return; // preventDefault 없이 통과
    }

    // 기본 스크롤 막기
    e.preventDefault();

    if (isScrolling) return;

    // Section02에서 Section03으로 넘어가는 예외 처리
    if (currentIndex === 3 && direction === "down") {
      scrollToSection(4);
      currentIndexRef.current = 4;
      return;
    }

    // 원페이지 스크롤 적용 구간만 이동
    if (isFullPageSection(nextIndex)) {
      scrollToSection(nextIndex);
      currentIndexRef.current = nextIndex;
    }
  };

  useEffect(() => {
    window.addEventListener("wheel", handleWheel, { passive: false });
    return () => {
      window.removeEventListener("wheel", handleWheel);
    };
  }, [isScrolling]);

  return (
    <div className="flex flex-col">
      {/* Title ~ Section03 */}
      {[Title, Section01, ButtonPage02, Section02, Section03].map(
        (Component, i) => (
          <div
            key={i}
            ref={(el) => {
              sectionRefs.current[i] = el;
            }}
          >
            <div className="flex justify-center">
              <Component />
            </div>{" "}
          </div>
        )
      )}

      <div
        ref={(el) => {
          sectionRefs.current[5] = el;
        }}
      >
        <div className="flex justify-center">
          <Section04 ref={section04TopRef} />
        </div>{" "}
      </div>

      {/* Section05 ~ FooterVideo */}
      {[Section05, Section06, Section07, FooterVideo].map((Component, i) => (
        <div
          key={i + 6}
          ref={(el) => {
            sectionRefs.current[i + 6] = el;
          }}
          className={`w-full ${i === 0 ? "bg-black" : ""}`} // Section05에만 bg-black 적용
        >
          <div className="flex justify-center">
            <Component />
          </div>{" "}
        </div>
      ))}

      {/* FooterArea */}
      <div
        ref={(el) => {
          sectionRefs.current[10] = el;
        }}
      >
        <div className="bg-[#161616] flex justify-center max-xxxl:pt-10">
          <FooterArea />
        </div>
      </div>
      <style jsx>{`
        * {
          font-family: "Noto Sans", sans-serif;
        }
      `}</style>
    </div>
  );
}
