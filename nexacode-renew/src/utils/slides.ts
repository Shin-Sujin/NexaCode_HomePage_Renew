// slides.ts
// text 페이지에 들어가는 자바스크립트들
// ✅ Next.js(브라우저)에서만 실행되도록 보호 + GSAP 타입 안전 적용

import gsap from "gsap";
import Observer from "gsap/Observer";
import TextPlugin from "gsap/TextPlugin";

// 플러그인 등록
gsap.registerPlugin(Observer, TextPlugin);

// 유틸: toArray 제네릭으로 타입 안전하게
const $all = <T extends Element = HTMLElement>(selector: string): T[] =>
  gsap.utils.toArray<T>(selector);

// 유틸: 범위 클램프(루프를 원하면 wrap로 바꿔도 됨)
const clamp = (val: number, min: number, max: number) =>
  Math.min(Math.max(val, min), max);

export function initSlides(): (() => void) | void {
  // ✅ SSR 가드: 서버에서는 DOM이 없으므로 조기 종료
  if (typeof window === "undefined" || typeof document === "undefined") return;

  console.clear();

  // 요소 수집 (타입 명시)
  const sections = $all<HTMLElement>(".slide"); // 각 슬라이드 섹션
  const outerWrappers = $all<HTMLElement>(".slide__outer");
  const innerWrappers = $all<HTMLElement>(".slide__inner");

  if (sections.length === 0) return; // 안전장치

  let animating = false; // 중복 전환 방지
  let currentIndex = 0; // 현재 슬라이드 인덱스

  // 초기 세팅: 모든 슬라이드는 화면 밖(양쪽)에서 대기, 첫 슬라이드만 0%
  gsap.set(outerWrappers, { xPercent: 100 });
  gsap.set(innerWrappers, { xPercent: -100 });
  gsap.set(".slide:nth-of-type(1) .slide__outer", { xPercent: 0 });
  gsap.set(".slide:nth-of-type(1) .slide__inner", { xPercent: 0 });

  // 1번 슬라이드를 제외한 나머지 슬라이드의 리뷰/카운트 초기에 숨기기
  sections.forEach((section, index) => {
    if (index > 0) {
      gsap.set(
        section.querySelectorAll(".overlay__count, .overlay__img-cont"),
        {
          autoAlpha: 0,
        }
      );
    }
  });

  // 전환의 핵심
  function gotoSection(index: number, direction: 1 | -1): void {
    index = clamp(index, 0, sections.length - 1);
    if (index === currentIndex) return;

    animating = true;

    const tl = gsap.timeline({
      defaults: { duration: 1, ease: "expo.inOut" },
      onComplete: () => {
        animating = false;
      },
    });

    const currentSection = sections[currentIndex];
    const nextSection = sections[index];

    // 레이어 가시성/쌓임순서 정리
    gsap.set(sections, { zIndex: 0, autoAlpha: 0 });
    gsap.set(currentSection, { zIndex: 1, autoAlpha: 1 });
    gsap.set(nextSection, { zIndex: 2, autoAlpha: 1 });

    const heading =
      currentSection.querySelector<HTMLElement>(".slide__heading");
    const nextHeading =
      nextSection.querySelector<HTMLElement>(".slide__heading");

    // 새 슬라이드 래퍼들 들어오기
    tl.fromTo(
      outerWrappers[index],
      { xPercent: 100 * direction },
      { xPercent: 0 },
      0
    );
    tl.fromTo(
      innerWrappers[index],
      { xPercent: -100 * direction },
      { xPercent: 0 },
      0
    );

    // 현재/다음 제목 타이포 효과
    if (heading) {
      tl.to(heading, { "--width": 800, xPercent: 30 * direction }, 0);
    }
    if (nextHeading) {
      tl.fromTo(
        nextHeading,
        { "--width": 800, xPercent: -30 * direction },
        { "--width": 200, xPercent: 0 },
        0
      );
    }
    // 리뷰 이미지와 카운트 애니메이션
    const currentReviewElements = currentSection.querySelectorAll(
      ".overlay__count, .overlay__img-cont"
    );
    const nextReviewElements = nextSection.querySelectorAll(
      ".overlay__count, .overlay__img-cont"
    );

    if (currentIndex > 0) {
      tl.to(
        currentReviewElements,
        {
          xPercent: -125 * direction,
          scale: 1.5,
          autoAlpha: 0,
        },
        0
      );
    }

    if (index > 0) {
      tl.fromTo(
        nextReviewElements,
        { xPercent: 125 * direction, scale: 1.5, autoAlpha: 0 },
        { xPercent: 0, scale: 1, autoAlpha: 1, duration: 1, stagger: 0.1 },
        0
      );
    }

    // "photo" 이미지 (slide__img)
    const smallImg = nextSection.querySelector(".slide__img");
    if (smallImg) {
      tl.fromTo(smallImg, { scale: 2 }, { scale: 1 }, 0);
    }

    tl.timeScale(0.8);

    currentIndex = index;
  }

  // 입력(스크롤/터치/포인터)
  const observer = Observer.create({
    type: "wheel,touch,pointer",
    preventDefault: true,
    wheelSpeed: -1,
    onUp: () => {
      if (animating) return;
      gotoSection(currentIndex + 1, +1);
    },
    onDown: () => {
      if (animating) return;
      gotoSection(currentIndex - 1, -1);
    },
    tolerance: 10,
  });

  // 키보드 입력
  const logKey = (e: KeyboardEvent) => {
    if ((e.code === "ArrowUp" || e.code === "ArrowLeft") && !animating) {
      gotoSection(currentIndex - 1, -1);
    }
    if ((e.code === "ArrowDown" || e.code === "ArrowRight") && !animating) {
      gotoSection(currentIndex + 1, +1);
    }
  };

  document.addEventListener("keydown", logKey);

  // 선택: 언마운트/페이지 전환 시 정리 함수 반환
  return () => {
    observer.kill();
    document.removeEventListener("keydown", logKey);
  };
}
