"use client";

import "@/src/styles/blog.css"; // 스타일 분리해서 이 경로에 저장한다고 가정
import Footer from "@/src/components/blog/Footer";

import ContactIntro from "./ContactIntro";
import ContactForm from "./ContactForm";

export default function ContactPage() {
  return (
    <div
      className="relative w-screen min-h-screen  overflow-hidden"
      style={{ margin: 0, padding: 0 }}
    >
      {/* 배경 레이어 */}
      <div className="absolute top-0 left-0 w-full h-full flex z-0 pointer-events-none">
        <div className="w-[55vw] h-full bg-gradient-to-b from-[#23272f] via-[#23272b] to-[#18181b] max-md:bg-white max-md:bg-none max-md:w-full"></div>
        <div className="w-[45vw] h-full bg-white max-md:bg-none max-md:w-full"></div>
      </div>
      {/* 실제 콘텐츠 */}
      <div className="relative flex w-screen min-h-screen z-10 max-md:flex-col">
        <div
          className="w-[55vw] flex items-center justify-center px-10 max-md:w-full max-md:bg-black overflow-hidden max-md:overflow-y-scroll max-md:h-[50vh]"
          style={{ overflowY: "hidden" }}
        >
          <ContactIntro />
        </div>
        <div
          className="w-[45vw] flex items-start justify-start px-10 max-md:w-full overflow-y-scroll  max-md:overflow-y-auto"
          style={{ overflowY: "scroll", height: "100vh" }}
          onWheel={(e) => {
            e.currentTarget.scrollTop += e.deltaY;
            e.preventDefault();
          }}
        >
          <ContactForm />
        </div>
      </div>
      <div className="hidden max-md:block">
        <Footer />
      </div>
    </div>
  );
}
