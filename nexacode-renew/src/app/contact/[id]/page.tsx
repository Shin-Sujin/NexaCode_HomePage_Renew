import { contactItems } from "@/src/components/contact/contactItem";
import { contactSampleData } from "@/src/components/contact/contactSampleData";
import Link from "next/link";
import React from "react";

interface Props {
  params: { id: string };
}

export default function ContactAnswerPage({ params }: Props) {
  const answerData = contactSampleData.find((d) => d.id === Number(params.id));
  if (!answerData) return <div>존재하지 않는 문의입니다.</div>;

  return (
    <main className="w-full overflow-x-hidden m-0 p-0">
      <main className="max-w-5xl mx-auto px-4 pt-48 max-md:w-full max-md:pb-20">
        <div className="flex items-center justify-between mb-6 max-md:flex-col max-md:items-start max-md:gap-4">
          <h1 className="text-6xl text-gray-800 font-600 max-md:text-4xl max-md:px-2">
            문의상세
          </h1>
        </div>
        <h2 className="text-xl text-gray-600 font-400 max-md:text-lg max-md:px-3 ">
          무엇이든 물어보세요, 상세하게 답변하겠습니다.
        </h2>
        <hr className="flex items-start justify-between border-[0.5px] border-gray-200 y-1 my-10" />

        <form className="w-full space-y-8">
          {contactItems.map((item) => {
            const value = answerData.answers[item.name];
            return (
              <div key={item.id}>
                <div className="font-bold text-[1.1rem] mb-1">
                  {item.id}. {item.title}{" "}
                  {item.required && <span className="text-[#e53935]">*</span>}
                </div>
                {item.type === "checkbox" && item.options && (
                  <div className="flex flex-col gap-2">
                    {item.options.map((opt) => (
                      <label key={opt} className="flex items-center gap-2">
                        <input
                          type="checkbox"
                          name={item.name}
                          value={opt}
                          checked={Array.isArray(value) && value.includes(opt)}
                          readOnly
                          disabled
                        />
                        {opt}
                      </label>
                    ))}
                  </div>
                )}
                {item.type === "radio" && item.options && (
                  <div className="flex flex-col gap-2">
                    {item.options.map((opt) => (
                      <label key={opt} className="flex items-center gap-2">
                        <input
                          type="radio"
                          name={item.name}
                          value={opt}
                          checked={value === opt}
                          readOnly
                          disabled
                        />
                        {opt}
                      </label>
                    ))}
                  </div>
                )}
                {item.type === "text" && (
                  <input
                    type="text"
                    name={item.name}
                    value={typeof value === "string" ? value : ""}
                    readOnly
                    disabled
                    className="w-full p-2 border border-[#ccc] rounded bg-[#f5f5f5] auto-resize"
                  />
                )}
                {item.type === "email" && (
                  <input
                    type="email"
                    name={item.name}
                    value={typeof value === "string" ? value : ""}
                    readOnly
                    disabled
                    className="w-full p-2 border border-[#ccc] rounded bg-[#f5f5f5]"
                  />
                )}
                {item.type === "textServiceIntroArea" && (
                  <textarea
                    name={item.name}
                    value={typeof value === "string" ? value : ""}
                    readOnly
                    disabled
                    rows={2}
                    className="w-full p-2 border border-[#ccc] rounded bg-[#f5f5f5]"
                  />
                )}
                {item.type === "textarea" && (
                  <textarea
                    name={item.name}
                    value={typeof value === "string" ? value : ""}
                    readOnly
                    disabled
                    rows={6}
                    className="w-full p-2 border border-[#ccc] rounded bg-[#f5f5f5]"
                  />
                )}
              </div>
            );
          })}
          {/* 제출 버튼 */}
          <div className="flex flex-col justify-center items-center">
            <Link
              href="/contact"
              className="bg-gradient-to-r from-[#6C47FF] to-[#7B3FE4] text-white border-none rounded-[6px] px-8 py-2 font-semibold text-[1rem]"
            >
              확인
            </Link>
            <div className=" text-gray-600 my-5 font-medium text-[1rem] text-center">
              내 프로젝트에 대해 궁금한 점이 있으세요?
              <br />
              지금 문의하시면 48시간 내 답변을 드립니다.
            </div>
            <Link
              href="/contact"
              className=" text-blue-700 my-5 font-medium text-[1.2rem] text-center underline "
            >
              문의하기 이동
            </Link>
          </div>
        </form>
      </main>
    </main>
  );
}
