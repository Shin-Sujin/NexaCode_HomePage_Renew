// src/hooks/useStartPageScroll.ts
import { useEffect } from "react";
import { useStartPageStore } from "@/src/stores/startPageStore";

export function useStartPageScroll(
  sectionRefs: React.RefObject<(HTMLDivElement | null)[]>
) {
  const { currentIndex, setCurrentIndex, isScrolling, scrollToSection } =
    useStartPageStore();

  // wheel 이벤트로 currentIndex 변경
  const wheelHandler = (e: WheelEvent) => {
    // 현재 스크롤 중이면 동작을 무시하여 중복 스크롤 방지
    if (isScrolling) return;

    const direction = e.deltaY > 0 ? "down" : "up";
    //다음 인덱스 계산
    const nextIndex =
      direction === "down" ? currentIndex + 1 : currentIndex - 1;

    e.preventDefault();

    if (
      nextIndex >= 0 &&
      sectionRefs.current &&
      nextIndex < sectionRefs.current.length
    ) {
      setCurrentIndex(nextIndex);
      scrollToSection(nextIndex, sectionRefs.current || []);
    }
  };

  // wheel 이벤트 등록/해제
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        window.removeEventListener("wheel", wheelHandler);
      } else {
        window.addEventListener("wheel", wheelHandler, { passive: false });
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("wheel", wheelHandler);
    };
  }, [currentIndex, isScrolling]);

  useEffect(() => {
    console.log("현재 currentIndex:", currentIndex);
  }, [currentIndex]);
}
