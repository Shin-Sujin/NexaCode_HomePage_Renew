// 입력 해석기(컨트롤러)
// 휠 이벤트를 분석해서 다음 인덱스 결정
// 여기서 휠 감지를 해서 스크롤을 이동시키는데, Button02 에서는 휠 이벤트가 들어오면 여기로 휠 이벤트를 넘기면 안되겠다.
// Button02가 끝나면 다시 휠 이벤트를 감지해서 스크롤을 이동시키면 되겠다.
import { useEffect, useRef } from "react";
import { useStartPageStore } from "@/src/stores/startPageStore";

export function useStartPageScroll(
  sectionRefs: React.RefObject<(HTMLDivElement | null)[]>
): void {
  const { currentIndex, setCurrentIndex, isScrolling, scrollToSection } =
    useStartPageStore();
  // 휠 연속 감지를 위한 ref
  // const wheelCountRef = useRef(0);
  const wheelTimerRef = useRef<NodeJS.Timeout | null>(null);

  // 휠 이벤트 핸들러
  const wheelHandler = (e: WheelEvent): void => {
    e.preventDefault();

    const deltaY: number = e.deltaY;
    const direction: "up" | "down" = deltaY > 0 ? "down" : "up";

    const jump: number = 1;

    if (isScrolling && jump === 1) return;

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

  // 휠 이벤트 등록(데스크탑)/해제(모바일 대응)
  useEffect(() => {
    const handleResize = (): void => {
      if (window.innerWidth <= 1366) {
        window.removeEventListener("wheel", wheelHandler);
      } else {
        window.addEventListener("wheel", wheelHandler, { passive: false });
      }
      if (window.innerHeight < 1200) {
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
}
