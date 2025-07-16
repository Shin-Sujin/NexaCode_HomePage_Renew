"use client";

import { useEffect } from "react";
import feather from "feather-icons";
import "@/src/styles/blog2.css"; // 스타일 분리해서 이 경로에 저장한다고 가정
import Header from "@/src/components/blog2/Header";
import FloatingLeft from "@/src/components/blog2/FloatingLeft";
import Content from "@/src/components/blog2/Content";
import FloatingRight from "@/src/components/blog2/FloatingRight";
import Footer from "@/src/components/blog2/Footer";

export default function Blog2Page() {
  useEffect(() => {
    feather.replace(); // feather 아이콘 초기화
  }, []);

  return (
    <div className="site__container">
      <Header />
      <main className="post">
        <div className="blog-container">
          <FloatingLeft />
          <Content />
          <FloatingRight />
        </div>
      </main>
      <Footer />
    </div>
  );
}
