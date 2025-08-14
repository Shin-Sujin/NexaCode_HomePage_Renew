"use client";

import { useCallback, useEffect, useRef } from "react";
import gsap from "gsap";
import { useStartPageStore } from "@/src/stores/startPageStore";

interface UseImageSliderProps {
  startIndex: number;
  slides: number;
}

export const useImageSlider = ({ startIndex, slides }: UseImageSliderProps) => {
  const trackRef = useRef<HTMLDivElement | null>(null);
  const pageCurrentRef = useRef<HTMLSpanElement | null>(null);

  const { currentIndex } = useStartPageStore();

  const animatingRef = useRef(false);
  const orderRef = useRef<number[]>(
    Array.from({ length: slides }, (_, i) => i)
  );
  const prevIndexRef = useRef<number | null>(null);

  const animatePageTo = useCallback((n: number) => {
    const el = pageCurrentRef.current;
    if (!el) return;
    const text = String(n).padStart(2, "0");
    gsap.to(el, {
      y: -8,
      opacity: 0,
      duration: 0.18,
      ease: "power2.out",
      onComplete: () => {
        el.textContent = text;
        gsap.fromTo(
          el,
          { y: 8, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.24, ease: "power2.out" }
        );
      },
    });
  }, []);

  const updatePageDisplay = useCallback(
    (animate = true) => {
      const currentPage = orderRef.current[0] + 1; // 1..slides
      if (!pageCurrentRef.current) return;
      if (animate) {
        animatePageTo(currentPage);
      } else {
        pageCurrentRef.current.textContent = String(currentPage).padStart(
          2,
          "0"
        );
      }
    },
    [animatePageTo]
  );

  const calcStep = useCallback(() => {
    const track = trackRef.current;
    if (!track) return 0;
    const a = track.children[0] as HTMLElement | undefined;
    const b = track.children[1] as HTMLElement | undefined;
    if (!a) return 0;
    const w = a.getBoundingClientRect().width;
    const gap = b ? parseFloat(getComputedStyle(b).marginLeft || "0") || 0 : 0;
    return w + gap;
  }, []);

  const rotateLeftNoAnim = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;
    const first = track.children[0];
    if (!first) return;
    track.appendChild(first);
    orderRef.current.push(orderRef.current.shift()!);
    gsap.set(track, { x: 0 });
  }, []);

  const nextSlide = useCallback(() => {
    const track = trackRef.current;
    if (!track || animatingRef.current) return;

    const step = calcStep();
    if (step === 0) return;

    const first = track.children[0] as HTMLElement | undefined;
    if (!first) return;

    const clone = first.cloneNode(true) as HTMLElement;
    track.appendChild(clone);
    gsap.set(clone, { opacity: 0, scale: 0.98 });

    animatingRef.current = true;

    const tl = gsap.timeline({
      defaults: { ease: "power3.inOut" },
      onComplete: () => {
        first.remove();
        gsap.set(track, { x: 0 });
        animatingRef.current = false;
        orderRef.current.push(orderRef.current.shift()!);
        updatePageDisplay(true);
      },
    });

    tl.to(track, { x: -step, duration: 0.35 }, 0).to(
      clone,
      { opacity: 1, scale: 1, duration: 0.35, ease: "power2.out" },
      0.05
    );
  }, [calcStep, updatePageDisplay]);

  const prevSlide = useCallback(() => {
    const track = trackRef.current;
    if (!track || animatingRef.current) return;

    const step = calcStep();
    if (step === 0) return;

    const children = track.children;
    const last = children[children.length - 1] as HTMLElement | undefined;
    if (!last) return;

    const clone = last.cloneNode(true) as HTMLElement;
    track.insertBefore(clone, children[0]);
    gsap.set(clone, { opacity: 0, scale: 0.98 });

    gsap.set(track, { x: -step });

    animatingRef.current = true;

    const tl = gsap.timeline({
      defaults: { ease: "power3.inOut" },
      onComplete: () => {
        last.remove();
        gsap.set(track, { x: 0 });
        animatingRef.current = false;
        orderRef.current.unshift(orderRef.current.pop()!);
        updatePageDisplay(true);
      },
    });

    tl.to(track, { x: 0, duration: 0.35 }, 0).to(
      clone,
      { opacity: 1, scale: 1, duration: 0.35, ease: "power2.out" },
      0.05
    );
  }, [calcStep, updatePageDisplay]);

  useEffect(() => {
    const now = currentIndex;
    const prev = prevIndexRef.current;
    prevIndexRef.current = now;

    const end = startIndex + slides - 1;
    const inRange = (i: number | null) =>
      i !== null && i >= startIndex && i <= end;

    // 최초 마운트 또는 섹션 범위 밖에서 안으로 들어올 때
    if ((prev === null || !inRange(prev)) && inRange(now)) {
      const want = now - startIndex;
      let guard = 0;
      while (orderRef.current[0] !== want && guard < slides + 1) {
        rotateLeftNoAnim();
        guard++;
      }
      gsap.set(trackRef.current, { x: 0 });
      updatePageDisplay(false);
      return;
    }

    // 섹션 범위 안에서 밖으로 나갈 때
    if (inRange(prev) && !inRange(now)) {
      return;
    }

    // 섹션 범위 내에서 움직일 때
    if (inRange(prev) && inRange(now)) {
      if (now === prev! + 1) return nextSlide();
      if (now === prev! - 1) return prevSlide();

      // 비인접 슬라이드 점프 (애니메이션 없이)
      if (now !== prev) {
        const want = now - startIndex;
        let guard = 0;
        while (orderRef.current[0] !== want && guard < slides + 1) {
          rotateLeftNoAnim();
          guard++;
        }
        gsap.set(trackRef.current, { x: 0 });
        updatePageDisplay(false);
      }
    }
  }, [
    currentIndex,
    startIndex,
    slides,
    rotateLeftNoAnim,
    nextSlide,
    prevSlide,
    updatePageDisplay,
  ]);

  useEffect(() => {
    const onResize = () => {
      gsap.set(trackRef.current, { x: 0 });
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return { trackRef, pageCurrentRef };
};
