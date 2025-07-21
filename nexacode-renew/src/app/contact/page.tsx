"use client";

import "@/src/styles/blog.css"; // 스타일 분리해서 이 경로에 저장한다고 가정
// import Header from "@/src/components/blog/Header";

import ContactIntro from "./ContactIntro";
import ContactForm from "./ContactForm";

export default function ContactPage() {
  return (
    <div
      className="relative w-screen min-h-screen"
      style={{ width: "100vw", minHeight: "100vh", margin: 0, padding: 0 }}
    >
      {/* 배경 레이어 */}
      <div className="absolute top-0 left-0 w-full h-full flex z-0 pointer-events-none">
        <div className="w-[60vw] h-full bg-gradient-to-b from-[#23272f] via-[#23272b] to-[#18181b]"></div>
        <div className="w-[40vw] h-full bg-white"></div>
      </div>
      {/* 실제 콘텐츠 */}
      <div className="relative flex w-screen min-h-screen z-10">
        <div className="w-[60vw] flex items-center justify-center px-10">
          <ContactIntro />
        </div>
        <div className="w-[40vw] flex items-start justify-start px-10">
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
