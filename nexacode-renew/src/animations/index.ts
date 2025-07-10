// 스크롤 기반 애니메이션 훅들을 내보냅니다
export { useFadeInOnScroll } from "./fadeInOnScroll";
export { useSlideInFromLeft } from "./slideInFromLeft";
export { useSlideInFromRight } from "./slideInFromRight";
export { useSlideInFromBottom } from "./slideInFromBottom";
export { useScaleInOnScroll } from "./scaleInOnScroll";
export { useTextSlide } from "./textSlide";

// 기존 StartPage 애니메이션들도 내보냅니다
export {
  useStartPageAnimations,
  useScrollClippingEffect,
  useFooterTitleAnimation,
} from "./animations_StartPage";
