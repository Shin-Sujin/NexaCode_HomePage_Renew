"use client";

import "@/src/styles/blog.css"; // 스타일 분리해서 이 경로에 저장한다고 가정
// import Header from "@/src/components/blog/Header";
import Footer from "@/src/components/blog/Footer";
import ContactIntro from "./ContactIntro";
import ContactForm from "./ContactForm";

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col bg-green-200 justify-center w-full items-center pt-10">
      <div className="flex  gap-16 items-start  bg-blue-200  px-10 py-12 mb-10">
        <div className="w-1/2 h-full  bg-red-200 py-96 flex items-center justify-center px-10">
          <ContactIntro />
        </div>
        <div className="w-1/2 flex items-start bg-yellow-200 justify-start px-10">
          <ContactForm />
        </div>
      </div>
      <Footer />
    </div>
  );
}
