// startPageStore.ts
import { create } from "zustand";
import { persist } from "zustand/middleware";

interface StartPageState {
  currentIndex: number;
  isScrolling: boolean;
  setCurrentIndex: (index: number) => void;
  setIsScrolling: (scrolling: boolean) => void;
  scrollToSection: (
    index: number,
    sectionRefs: (HTMLDivElement | null)[]
  ) => void;
}

export const useStartPageStore = create<StartPageState>()(
  persist(
    (set) => ({
      currentIndex: 0,
      isScrolling: false,
      setCurrentIndex: (index: number) => set({ currentIndex: index }),
      setIsScrolling: (scrolling: boolean) => set({ isScrolling: scrolling }),

      scrollToSection: (
        index: number,
        sectionRefs: (HTMLDivElement | null)[]
      ) => {
        const target = sectionRefs[index];
        if (!target) return;

        set({ isScrolling: true });
        if (target) {
          const offset = 100; // px 단위로 여백
          const top =
            target.getBoundingClientRect().top + window.pageYOffset - offset;

          window.scrollTo({
            top,
            behavior: "smooth",
          });
        }

        setTimeout(() => {
          set({ isScrolling: false });
        }, 500);
      },
    }),
    {
      name: "startpage-storage",
      partialize: (state) =>
        // 저장할 항목만 필터링
        ({
          isScrolling: state.isScrolling,
        }),
    }
  )
);
