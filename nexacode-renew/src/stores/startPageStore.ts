// startPageStore.ts
// 상태 + 스크롤 실행기
// 왜 store(Zustand)로 관리하나요?

import { create } from "zustand";
import { persist } from "zustand/middleware";
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin);

interface StartPageState {
  currentIndex: number; // 현재 섹션 인덱스
  isScrolling: boolean; // 스크롤 중인지 여부

  setCurrentIndex: (index: number) => void; // 섹션 인덱스 설정
  setIsScrolling: (scrolling: boolean) => void; // 스크롤 중인지 여부 설정
  scrollToSection: (
    index: number,
    sectionRefs: (HTMLDivElement | null)[]
  ) => void;
}

export const useStartPageStore = create<StartPageState>()(
  persist(
    (set) => ({
      currentIndex: 0, // 초기 섹션 인덱스
      isScrolling: false, // 초기 스크롤 중인지 여부
      setCurrentIndex: (index: number) => set({ currentIndex: index }), // 섹션 인덱스 설정
      setIsScrolling: (scrolling: boolean) => set({ isScrolling: scrolling }), // 스크롤 중인지 여부 설정

      //sectionRefs[index]로 스크롤할 타깃 DOM을 찾고,
      scrollToSection: (
        index: number,
        sectionRefs: (HTMLDivElement | null)[]
      ) => {
        const target = sectionRefs[index];
        if (!target) return;
        set({ isScrolling: true });

        gsap.to(window, {
          scrollTo: {
            y: target,
            offsetY: 100,
          },
          duration: 0.5, // 숫자를 조절해 스크롤 속도를 제어할 수 있습니다. (단위: 초)
          onComplete: () => {
            set({ isScrolling: false });
          },
        });
      },
    }),
    {
      name: "startpage-storage",
      partialize: (state) =>
        // 저장할 항목(isScrolling)만 필터링, 재방문 시 스크롤 중 상태를 복원하지 않게 최소화
        ({
          isScrolling: state.isScrolling,
        }),
    }
  )
);
