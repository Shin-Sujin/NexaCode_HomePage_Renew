"use client";

// import Header from "@/src/components/blog/Header";
import FloatingLeft from "@/src/components/blog/FloatingLeft";
import FloatingRight from "@/src/components/blog/FloatingRight";
import Title from "@/src/components/blog/Title";
import ScrollProgressBar from "@/src/components/blog/ScrollProgressBar";
import { steps } from "@/src/components/blog/blogSteps";
import { BlogContent0 } from "@/src/components/blog/blogContents";

import "@/src/styles/blog_copy.css";
export default function BlogDesignPage() {
  return (
    <div className="site__container">
      <ScrollProgressBar />
      <Title
        title={"두개의 답에서, 또 다른 질문으로"}
        date={"2025년 7월 1일"}
      />

      <main className="post">
        <div className="blog-container">
          <FloatingLeft />
          <div style={{ flex: 1, padding: "2rem" }}>
            <BlogContent0 />
          </div>
          <FloatingRight steps={steps} />
        </div>
      </main>
    </div>
  );
}
