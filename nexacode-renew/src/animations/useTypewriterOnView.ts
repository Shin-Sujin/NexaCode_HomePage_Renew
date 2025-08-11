// src/animations/useTypewriterOnView.ts
import { useEffect, useRef } from "react";

type Options = {
  speed?: number; // 글자 간 간격(ms)
  rootMargin?: string; // 뷰포트 여유
  threshold?: number; // 관찰 임계값
};

export function useTypewriterOnView<T extends HTMLElement>(
  options: Options = {}
) {
  const {
    speed = 24,
    rootMargin = "0px 0px -15% 0px",
    threshold = 0.1,
  } = options;

  const ref = useRef<T | null>(null);
  const ranOnce = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || ranOnce.current) return;

    const wrapTextNodesToSpans = (root: HTMLElement) => {
      const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
      const textNodes: Text[] = [];
      let n: Node | null;
      // 모아두고 나중에 교체(중간에 DOM 바꾸면 walker가 꼬일 수 있음)
      while ((n = walker.nextNode())) {
        const t = n as Text;
        // 공백만 있는 노드는 스킵 (선택)
        if ((t.nodeValue ?? "").length === 0) continue;
        textNodes.push(t);
      }

      textNodes.forEach((textNode) => {
        const frag = document.createDocumentFragment();
        const text = textNode.nodeValue ?? "";

        for (const ch of text) {
          const span = document.createElement("span");
          span.className = "type-char"; // 초기: opacity 0
          // 공백은 그대로, 나머지는 문자
          span.textContent = ch;
          frag.appendChild(span);
        }
        textNode.parentNode?.replaceChild(frag, textNode);
      });
    };

    const typewrite = (root: HTMLElement) => {
      const chars = Array.from(
        root.querySelectorAll<HTMLElement>(".type-char")
      );
      let i = 0;
      const timer = window.setInterval(() => {
        if (i < chars.length) {
          chars[i].classList.add("type-char--show"); // opacity 1
          i += 1;
        } else {
          clearInterval(timer);
        }
      }, speed);
    };

    const onEnter = (
      entry: IntersectionObserverEntry,
      obs: IntersectionObserver
    ) => {
      if (!entry.isIntersecting || ranOnce.current) return;
      ranOnce.current = true;
      obs.unobserve(entry.target);

      // 텍스트 노드만 span으로 감싸기 (BR, 다른 태그는 그대로 보존)
      wrapTextNodesToSpans(el);

      // 타이핑 시작
      typewrite(el);
    };

    const io = new IntersectionObserver(
      (entries, obs) => entries.forEach((e) => onEnter(e, obs)),
      { root: null, rootMargin, threshold }
    );

    io.observe(el);

    return () => io.disconnect();
  }, [rootMargin, threshold, speed]);

  return ref;
}
