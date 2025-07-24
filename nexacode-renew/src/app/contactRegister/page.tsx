"use client";

"use client";

import "@/src/styles/blog.css"; // 스타일 분리해서 이 경로에 저장한다고 가정

import ContactForm from "./ContactForm";

export default function ContactPage() {
  return (
    <main className="w-full overflow-x-hidden m-0 p-0">
      <main className="max-w-5xl mx-auto px-4 pt-48 max-md:w-full max-md:pb-20">
        <div className="flex items-center justify-between mb-6 max-md:flex-col max-md:items-start max-md:gap-4">
          <h1 className="text-6xl text-gray-800 font-600 max-md:text-4xl max-md:px-2">
            문의작성
          </h1>
        </div>
        <h2 className="text-xl text-gray-600 font-400 mb-10 max-md:text-lg max-md:px-3 ">
          무엇이든 물어보세요, 상세하게 답변하겠습니다.
        </h2>
        <div className="space-y-6 max-md:space-y-2">
          <hr className="flex items-start justify-between border-[0.5px] border-gray-200 y-1 " />
          <ContactForm />
        </div>
      </main>
    </main>
  );
}
