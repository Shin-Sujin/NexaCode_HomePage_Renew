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

export function initSlides(): void {
  // ✅ SSR 가드: 서버에서는 DOM이 없으므로 조기 종료
  if (typeof window === "undefined" || typeof document === "undefined") return;

  console.clear();

  // 요소 수집 (타입 명시)
  const sections = $all<HTMLElement>(".slide"); // 각 슬라이드 섹션
  const images = $all<HTMLImageElement>(".image").reverse(); // 오버레이 큰 이미지(역순)
  const slideImages = $all<HTMLImageElement>(".slide__img"); // 슬라이드 내부(작은) 이미지
  const outerWrappers = $all<HTMLElement>(".slide__outer");
  const innerWrappers = $all<HTMLElement>(".slide__inner");
  const count = document.querySelector<HTMLElement>(".count"); // 0,1,2 표시 숫자

  if (sections.length === 0) return; // 안전장치

  let animating = false; // 중복 전환 방지
  let currentIndex = 0; // 현재 슬라이드 인덱스

  // 초기 세팅: 모든 슬라이드는 화면 밖(양쪽)에서 대기, 첫 슬라이드만 0%
  gsap.set(outerWrappers, { xPercent: 100 });
  gsap.set(innerWrappers, { xPercent: -100 });
  gsap.set(".slide:nth-of-type(1) .slide__outer", { xPercent: 0 });
  gsap.set(".slide:nth-of-type(1) .slide__inner", { xPercent: 0 });

  // 전환의 핵심
  function gotoSection(index: number, direction: 1 | -1): void {
    // 루프가 아니라 **끝에서 멈추기**를 원해서 clamp 사용
    // (루프 원하면 아래 두 줄을 주석 처리하고 wrap 사용)
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

    const heading =
      currentSection.querySelector<HTMLElement>(".slide__heading");
    const nextHeading =
      nextSection.querySelector<HTMLElement>(".slide__heading");

    // 레이어 가시성/쌓임순서 정리
    gsap.set([sections, images], { zIndex: 0, autoAlpha: 0 });
    gsap.set([sections[currentIndex], images[index]], {
      zIndex: 1,
      autoAlpha: 1,
    });
    gsap.set([sections[index], images[currentIndex]], {
      zIndex: 2,
      autoAlpha: 1,
    });

    // 타임라인 구성
    if (count) {
      // TextPlugin 사용 (문자열로 캐스팅해도 OK)
      tl.set(count, { text: String(index + 1) }, 0.32);
    }

    // 새 슬라이드 래퍼들 들어오기
    const outer = outerWrappers[index];
    const inner = innerWrappers[index];
    if (outer) {
      tl.fromTo(outer, { xPercent: 100 * direction }, { xPercent: 0 }, 0);
    }
    if (inner) {
      tl.fromTo(inner, { xPercent: -100 * direction }, { xPercent: 0 }, 0);
    }

    // 현재/다음 제목 타이포 효과(Variable Font wdth + 슬라이드)
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

    // 오버레이 큰 이미지 교차 전환(새 이미지 인, 이전 이미지 아웃)
    const nextImage = images[index];
    const currImage = images[currentIndex];

    if (nextImage) {
      tl.fromTo(
        nextImage,
        { xPercent: 125 * direction, scaleX: 1.5, scaleY: 1.3 },
        { xPercent: 0, scaleX: 1, scaleY: 1, duration: 1 },
        0
      );
    }
    if (currImage) {
      tl.fromTo(
        currImage,
        { xPercent: 0, scaleX: 1, scaleY: 1 },
        { xPercent: -125 * direction, scaleX: 1.5, scaleY: 1.3 },
        0
      );
    }

    // 슬라이드 내부 "작은" 이미지(figure 안) 살짝 줌아웃
    const smallImg = slideImages[index];
    if (smallImg) {
      tl.fromTo(smallImg, { scale: 2 }, { scale: 1 }, 0);
    }

    tl.timeScale(0.8); // 전체 타임라인 속도 80%

    currentIndex = index;
  }

  // 입력(스크롤/터치/포인터)
  Observer.create({
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

  // 선택: 언마운트/페이지 전환 시 정리 함수 반환하고 싶으면 여기서 반환 핸들러 구성
  // (이 파일을 React 훅에서 호출한다면, 훅의 cleanup에서 아래를 수행)
  // return () => {
  //   Observer.getAll().forEach(o => o.kill());
  //   document.removeEventListener("keydown", logKey);
  // };
}
