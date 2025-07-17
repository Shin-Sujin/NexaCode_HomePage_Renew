"use client";

import { useEffect } from "react";
import feather from "feather-icons";
import "@/src/styles/blog.css"; // 스타일 분리해서 이 경로에 저장한다고 가정
// import Header from "@/src/components/blog/Header";
import FloatingLeft from "@/src/components/blog/FloatingLeft";
import Content from "@/src/components/blog/Content";
import FloatingRight from "@/src/components/blog/FloatingRight";
import Footer from "@/src/components/blog/Footer";
import Title from "@/src/components/blog/Title";
import ScrollProgressBar from "@/src/components/blog/ScrollProgressBar";
import { steps } from "@/src/components/blog/blogSteps";

export default function BlogPage() {
  useEffect(() => {
    feather.replace(); // feather 아이콘 초기화dkdk
  }, []);

  return (
    <div className="site__container">
      <ScrollProgressBar />
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
