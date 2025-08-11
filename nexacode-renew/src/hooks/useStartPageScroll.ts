import { useEffect, useRef } from "react";
import { useStartPageStore } from "@/src/stores/startPageStore";

export function useStartPageScroll(
  sectionRefs: React.RefObject<(HTMLDivElement | null)[]>
): void {
  const { currentIndex, setCurrentIndex, isScrolling, scrollToSection } =
    useStartPageStore();
  // 휠 연속 감지를 위한 ref
  const wheelCountRef = useRef(0);
  const wheelTimerRef = useRef<NodeJS.Timeout | null>(null);

  // 휠 이벤트 핸들러
  const wheelHandler = (e: WheelEvent): void => {
    e.preventDefault();

    const deltaY: number = e.deltaY;
    const direction: "up" | "down" = deltaY > 0 ? "down" : "up";
    const intensity: number = Math.abs(deltaY);
    // 연속 휠 감지
    wheelCountRef.current += 1;
    // wheelCount 초기화 타이머
    if (wheelTimerRef.current) clearTimeout(wheelTimerRef.current);
    wheelTimerRef.current = setTimeout(() => {
      wheelCountRef.current = 0;
    }, 300); // 300ms 이내 휠 이벤트가 들어오면 연속으로 간주

    // 기본은 한 페이지 이동
    let jump: number = 1;

    // deltaY의 크기에 따라 jump 수 조정
    if (intensity > 250 && wheelCountRef.current >= 3) {
      jump = 3;
    }

    // isScrolling 중이고 jump가 1이라면 무시
    if (isScrolling && jump === 1) return;

    // nextIndex 계산
    let nextIndex: number =
      direction === "down" ? currentIndex + jump : currentIndex - jump;

    const maxIndex: number = sectionRefs.current?.length
      ? sectionRefs.current.length - 1
      : 0;
    nextIndex = Math.max(0, Math.min(nextIndex, maxIndex));

    // 스크롤 이동
    setCurrentIndex(nextIndex);
    scrollToSection(nextIndex, sectionRefs.current ?? []);
  };

  // 휠 이벤트 등록/해제
  useEffect(() => {
    const handleResize = (): void => {
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
      if (wheelTimerRef.current) clearTimeout(wheelTimerRef.current);
    };
  }, [currentIndex, isScrolling]);

  // 디버깅용 currentIndex 로그
  useEffect(() => {
    console.log("현재 currentIndex:", currentIndex);
  }, [currentIndex]);
}
