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

type DivArrayRef = React.RefObject<(HTMLDivElement | null)[]>;

export function useStartPageObserver(sectionRefs: DivArrayRef): void {
  const { currentIndex, setCurrentIndex, isScrolling, scrollToSection } =
    useStartPageStore();

  const observerRef = useRef<Observer | null>(null);

  // --- 인덱스별 전환 함수들(0~17) ---
  // 필요 시 18 이상도 동일 패턴으로 추가
  const moveFrom0 = (dir: "up" | "down") => (dir === "down" ? 1 : 0);
  const moveFrom1 = (dir: "up" | "down") => (dir === "down" ? 2 : 0);
  const moveFrom2 = (dir: "up" | "down") => (dir === "down" ? 3 : 1);
  const moveFrom3 = (dir: "up" | "down") => (dir === "down" ? 4 : 2);
  const moveFrom4 = (dir: "up" | "down") => (dir === "down" ? 5 : 3);
  const moveFrom5 = (dir: "up" | "down") => (dir === "down" ? 6 : 4);
  const moveFrom6 = (dir: "up" | "down") => (dir === "down" ? 7 : 5);
  const moveFrom7 = (dir: "up" | "down") => (dir === "down" ? 8 : 6);
  const moveFrom8 = (dir: "up" | "down") => (dir === "down" ? 9 : 7);
  const moveFrom9 = (dir: "up" | "down") => (dir === "down" ? 10 : 8);
  const moveFrom10 = (dir: "up" | "down") => (dir === "down" ? 11 : 9);
  const moveFrom11 = (dir: "up" | "down") => (dir === "down" ? 12 : 10);
  const moveFrom12 = (dir: "up" | "down") => (dir === "down" ? 13 : 11);
  const moveFrom13 = (dir: "up" | "down") => (dir === "down" ? 14 : 12);
  const moveFrom14 = (dir: "up" | "down") => (dir === "down" ? 15 : 13);
  const moveFrom15 = (dir: "up" | "down") => (dir === "down" ? 16 : 14);
  const moveFrom16 = (dir: "up" | "down") => (dir === "down" ? 17 : 15);
  const moveFrom17 = (dir: "up" | "down") => (dir === "down" ? 17 : 16);

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
      default:
        return idx; // 안전장치
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
