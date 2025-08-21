// src/hooks/useStartPageObserver.ts
// 인덱스 0~17까지 전부 개별 함수로 분리
// innerWidth 1366 이하면 비활성
// 자유 스크롤 구간 제어는 아직 넣지 않음
"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import Observer from "gsap/Observer";
import { useStartPageStore } from "@/src/stores/startPageStore";

gsap.registerPlugin(Observer);

type Dir = "up" | "down";
type DivArrayRef = React.RefObject<(HTMLDivElement | null)[]>;

export function useStartPageObserver(sectionRefs: DivArrayRef): void {
  const { currentIndex, setCurrentIndex, isScrolling, scrollToSection } =
    useStartPageStore();

  const observerRef = useRef<Observer | null>(null);

  // --- 인덱스별 전환 함수들(0~17) ---
  // 필요 시 18 이상도 동일 패턴으로 추가
  const moveFrom0 = (d: Dir) => (d === "down" ? 1 : 0); // 0  → 1 / stay
  const moveFrom1 = (d: Dir) => (d === "down" ? 2 : 0); // 1  → 2 / 0
  const moveFrom2 = (d: Dir) => (d === "down" ? 3 : 1); // 2  → 3 / 1
  const moveFrom3 = (d: Dir) => (d === "down" ? 4 : 2); // 3  → 4 / 2
  const moveFrom4 = (d: Dir) => (d === "down" ? 5 : 3); // 4  → 5 / 3
  const moveFrom5 = (d: Dir) => (d === "down" ? 6 : 4); // 5  → 6 / 4
  const moveFrom6 = (d: Dir) => (d === "down" ? 7 : 5); // 6  → 7 / 5
  const moveFrom7 = (d: Dir) => (d === "down" ? 8 : 6); // 7  → 8 / 6
  const moveFrom8 = (d: Dir) => (d === "down" ? 9 : 7); // 8  → 9 / 7
  const moveFrom9 = (d: Dir) => (d === "down" ? 10 : 8); // 9  → 10 / 8
  const moveFrom10 = (d: Dir) => (d === "down" ? 11 : 9); // 10 → 11 / 9
  const moveFrom11 = (d: Dir) => (d === "down" ? 12 : 10); // 11 → 12 / 10
  const moveFrom12 = (d: Dir) => (d === "down" ? 13 : 11); // 12 → 13 / 11
  const moveFrom13 = (d: Dir) => (d === "down" ? 14 : 12); // 13 → 14 / 12 (Section05 슬라이드1)
  const moveFrom14 = (d: Dir) => (d === "down" ? 15 : 13); // 14 → 15 / 13 (Section05 슬라이드2)
  const moveFrom15 = (d: Dir) => (d === "down" ? 16 : 14); // 15 → 16 / 14 (Section05 슬라이드3)
  const moveFrom16 = (d: Dir) => (d === "down" ? 17 : 15); // 16 → 17 / 15
  const moveFrom17 = (d: Dir) => (d === "down" ? 18 : 16); // 17 → 18 / 16
  const moveFrom18 = (d: Dir) => (d === "down" ? 19 : 17); // 18 → 19 / 17
  const moveFrom19 = (d: Dir) => (d === "down" ? 20 : 18); // 19 → 20 / 18
  const moveFrom20 = (d: Dir) => (d === "down" ? 21 : 19); // 20 → 21 / 19
  // const moveFrom21 = (d: Dir) => (d === "down" ? 21 : 20); // 21 → stay / 20

  // currentIndex → 다음 인덱스 결정 (명시적 스위치)
  const resolveNextIndex = (idx: number, dir: "up" | "down") => {
    switch (idx) {
      case 0:
        return moveFrom0(dir);
      case 1:
        return moveFrom1(dir);
      case 2:
        return moveFrom2(dir);
      case 3:
        return moveFrom3(dir);
      case 4:
        return moveFrom4(dir);
      case 5:
        return moveFrom5(dir);
      case 6:
        return moveFrom6(dir);
      case 7:
        return moveFrom7(dir);
      case 8:
        return moveFrom8(dir);
      case 9:
        return moveFrom9(dir);
      case 10:
        return moveFrom10(dir);
      case 11:
        return moveFrom11(dir);
      case 12:
        return moveFrom12(dir);
      case 13:
        return moveFrom13(dir);
      case 14:
        return moveFrom14(dir);
      case 15:
        return moveFrom15(dir);
      case 16:
        return moveFrom16(dir);
      case 17:
        return moveFrom17(dir);
      case 18:
        return moveFrom18(dir);
      case 19:
        return moveFrom19(dir);
      case 20:
        return moveFrom20(dir);
      // case 21:
      //   return moveFrom21(dir);
      default:
        return idx;
    }
  };

  useEffect(() => {
    if (typeof window === "undefined" || typeof document === "undefined")
      return;

    const handleIntent = (direction: "up" | "down") => {
      if (isScrolling) return;

      const maxIndex = (sectionRefs.current?.length ?? 1) - 1;
      // 명시적 매핑으로 기본 nextIndex 구한 뒤, 혹시 모를 범위 초과는 한 번 더 방지
      let nextIndex = resolveNextIndex(currentIndex, direction);
      if (nextIndex < 0) nextIndex = 0;
      if (nextIndex > maxIndex) nextIndex = maxIndex;

      if (nextIndex === currentIndex) return; // 변화 없음

      setCurrentIndex(nextIndex);
      scrollToSection(nextIndex, sectionRefs.current ?? []);
    };

    const createOrUpdateObserver = () => {
      const enable = window.innerWidth > 1366; // 기존 로직 유지: 1366 이하면 비활성
      if (!enable) {
        observerRef.current?.disable();
        return;
      }
      if (!observerRef.current) {
        observerRef.current = Observer.create({
          type: "wheel,touch,pointer",
          wheelSpeed: -1,
          tolerance: 10,
          preventDefault: true,
          onUp: () => handleIntent("down"), // 스크롤 아래(휠 내림) → onUp
          onDown: () => handleIntent("up"), // 스크롤 위(휠 올림) → onDown
        });
      } else {
        observerRef.current.enable();
      }
    };

    const handleResize = () => {
      createOrUpdateObserver();
    };

    createOrUpdateObserver();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      observerRef.current?.kill();
      observerRef.current = null;
    };
  }, [
    currentIndex,
    isScrolling,
    sectionRefs,
    setCurrentIndex,
    scrollToSection,
  ]);
}
