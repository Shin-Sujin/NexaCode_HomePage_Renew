"use client";

import { useEffect } from "react";
import feather from "feather-icons";
import "@/src/styles/blog2.css"; // 스타일 분리해서 이 경로에 저장한다고 가정
// import Header from "@/src/components/blog2/Header";
import FloatingLeft from "@/src/components/blog2/FloatingLeft";
import Content from "@/src/components/blog2/Content";
import FloatingRight from "@/src/components/blog2/FloatingRight";
import Footer from "@/src/components/blog2/Footer";
import Title from "@/src/components/blog2/Title";

export const steps = [
  { id: "step1", label: "C2C 앱 고민이라면 꼭 읽어보세요" },
  { id: "step2", label: "C2C 앱 개발, 왜 어렵고 왜 실패할까?" },
  { id: "step3", label: "실패한 앱, 다시 시작할 수 있을까?" },
];

export default function Blog2Page() {
  useEffect(() => {
    feather.replace(); // feather 아이콘 초기화
  }, []);

  return (
    <div className="site__container">
      <Title />
      <main className="post">
        <div className="blog-container">
          <FloatingLeft />
          <Content />
          <FloatingRight steps={steps} />
        </div>
      </main>
      <Footer />
    </div>
  );
}
