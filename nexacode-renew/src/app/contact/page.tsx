"use client";

// import "@/src/styles/blog.css";
import Footer from "@/src/components/blog/Footer";
import Link from "next/link";
import { contactSampleData } from "@/src/components/contact/contactSampleData";
import "@/src/styles/blog.css";

export default function ContactPage() {
  return (
    <div>
      <main className="max-w-5xl mx-auto pt-48 pb-20  px-10 max-md:pt-36 max-md:pb-10">
        <h1 className="text-6xl text-gray-800 font-600 mb-6 max-md:text-4xl max-md:px-2 ">
          문의하기
        </h1>
        <h2 className="text-xl text-gray-600 font-400 mb-50 max-md:text-lg max-md:px-3 max-md:mb-0">
          무엇이든 물어보세요, 상세하게 답변하겠습니다
        </h2>
        {/* 실제 콘텐츠 */}
        <div className="relative z-10 w-full max-w-6xl  mt-24 ">
          {/* 상단 제목 및 버튼 */}
          <div className="flex justify-end mb-8">
            <Link href="/contactRegister">
              <button className="bg-gray-800 text-white px-8 py-5 rounded-none text-lg font-medium hover:bg-gray-800 transition max-md:w-full max-md:mb-10">
                무료 상담 신청
              </button>
            </Link>
          </div>
          {/* 문의 리스트 테이블 */}
          <div className="overflow-x-auto bg-white max-md:hidden">
            <table className="min-w-full text-left border-separate border-spacing-y-2  ">
              <thead>
                <tr>
                  <th className="pl-4 py-4 font-semibold text-lg w-32 text-left border-b-2 border-t-2 border-gray-500">
                    분류
                  </th>
                  <th className="py-4 font-semibold text-lg text-left border-b-2 border-t-2 border-gray-500">
                    서비스 요약
                  </th>
                  <th className="py-4 font-semibold text-lg w-24 text-center border-b-2 border-t-2 border-gray-500">
                    성함
                  </th>
                  <th className="py-4 font-semibold text-lg w-32 text-center border-b-2 border-t-2 border-gray-500">
                    답변여부
                  </th>
                </tr>
              </thead>
              <tbody>
                {contactSampleData
                  .slice()
                  .reverse()
                  .map((item) => (
                    <tr key={item.id}>
                      <td className="pl-4 py-4 text-base text-gray-800 align-middle ">
                        {Array.isArray(item.answers.area)
                          ? item.answers.area.join(", ")
                          : item.answers.area}
                      </td>
                      <td className="py-4 text-base text-gray-700 align-middle max-w-xl pr-10">
                        <Link
                          href={`/contact/${item.id}`}
                          className="cursor-pointer hover:underline block w-full h-full overflow-hidden whitespace-nowrap text-ellipsis"
                        >
                          {item.answers.serviceIntro}
                        </Link>
                      </td>
                      <td className="py-4 text-base text-gray-800 align-middle text-center">
                        {item.answers.name}
                      </td>
                      <td className="py-4 text-sm align-middle text-center">
                        <div>
                          {item.status === "답변 완료" ? (
                            <span className="bg-gray-300 text-black px-1 py-1">
                              답변 완료
                            </span>
                          ) : (
                            <span className="bg-gray-700 text-gray-200 px-3 py-1 ">
                              대기중
                            </span>
                          )}
                        </div>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
        {/* 모바일 버전 */}
        <div className="max-md:block hidden">
          <h3 className="text-2xl text-gray-700 font-semibold mt-10 mb-5">
            문의사항
          </h3>
          <hr className="border-t-1 border-gray-200 my-5" />
          <div className="flex flex-col gap-4 text-gray-800">
            {contactSampleData.map((item) => (
              <div key={item.id} className="flex flex-col gap-2">
                <h3 className="text-lg font-semibold mt-2">
                  {Array.isArray(item.answers.area)
                    ? item.answers.area.join(", ")
                    : item.answers.area}
                </h3>
                <p className="text-gray-700">
                  <Link
                    href={`/contact/${item.id}`}
                    className="cursor-pointer hover:underline block w-full h-full overflow-hidden whitespace-nowrap text-ellipsis"
                  >
                    {item.answers.serviceIntro}
                  </Link>
                </p>
                <div className="flex justify-end gap-2 mt-2">
                  <a className="text-gray-700 mt-1">{item.answers.name}</a>
                  <Link
                    href={`/contact/${item.id}`}
                    className="text-gray-100 ml-3 bg-gray-400 p-2 text-xs rounded-lg"
                  >
                    상세보기
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="max-md:block hidden">
          {/* 페이지네이션 */}
          <div className="flex justify-center items-center mt-40 gap-2 max-md:mt-20">
            <button
              className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-200 text-gray-700 font-semibold"
              disabled
            >
              1
            </button>
            <button
              className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 text-gray-400 font-semibold"
              disabled
            >
              &gt;
            </button>
          </div>
        </div>
      </main>{" "}
      <Footer />
    </div>
  );
}
