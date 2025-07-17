"use client";

import "@/src/styles/blog.css"; // 스타일 분리해서 이 경로에 저장한다고 가정
// import Header from "@/src/components/blog/Header";
import Footer from "@/src/components/blog/Footer";
import { blogList } from "@/src/components/blog/blogItem";
import BlogListItem from "@/src/components/blog/BlogListItem";

export default function BlogListPage() {
  return (
    <div>
      <main className="max-w-5xl mx-auto px-4 py-48">
        <h1 className="text-6xl text-gray-800 font-600 mb-6 ">
          넥사코드 이야기
        </h1>
        <h2 className="text-xl text-gray-600 font-400 mb-20 ">
          넥사코드에서 세상의 변화를 만들어 가고 있는 사람들의 이야기입니다.
        </h2>
        <div className="space-y-6">
          <hr className="flex items-start justify-between border-[0.5px] border-gray-200 y-1" />

          {blogList.map((item, idx) => (
            <BlogListItem key={idx} {...item} />
          ))}
        </div>
      </main>{" "}
      <Footer />
    </div>
  );
}
