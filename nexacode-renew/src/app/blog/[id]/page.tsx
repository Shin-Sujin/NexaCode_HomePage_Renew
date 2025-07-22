"use client";

import { blogList } from "@/src/components/blog/blogItem";

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

export default function BlogPage({ params }: { params: { id: string } }) {
  const blog = blogList[Number(params.id)];

  useEffect(() => {
    feather.replace(); // feather 아이콘 초기화dkdk
    console.log("전달받은 블로그 index:", params.id); // index 콘솔 출력
  }, []);

  // blog가 undefined일 수 있으니 예외처리 필요
  if (!blog) return <div>존재하지 않는 글입니다.</div>;
  return (
    <div className="site__container">
      <ScrollProgressBar />
      <Title title={blog.title} date={blog.date} />

      <main className="post">
        <div className="blog-container">
          <FloatingLeft />
          <Content key={Number(params.id)} /> <FloatingRight steps={steps} />
        </div>
      </main>
      <Footer />
    </div>
  );
}
