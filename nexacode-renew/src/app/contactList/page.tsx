"use client";

import "@/src/styles/blog.css"; // 스타일 분리해서 이 경로에 저장한다고 가정
// import Header from "@/src/components/blog/Header";
import Footer from "@/src/components/blog/Footer";
import Link from "next/link";

export default function ContactListPage() {
  return (
    <div>
      <main className="max-w-5xl mx-auto pt-48 pb-20  px-10">
        <h1 className="text-6xl text-gray-800 font-600 mb-6 ">문의하기</h1>
        <h2 className="text-xl text-gray-600 font-400 mb-50 ">
          무엇이든 물어보세요, 상세하게 답변하겠습니다
        </h2>
        {/* 실제 콘텐츠 */}
        <div className="relative z-10 w-full max-w-6xl  mt-24 ">
          {/* 상단 제목 및 버튼 */}
          <div className="flex justify-end mb-8">
            <button className="bg-gray-800 text-white px-8 py-5 rounded-none text-lg font-medium hover:bg-gray-800 transition">
              무료 상담 신청
            </button>
          </div>
          {/* 문의 리스트 테이블 */}
          <div className="overflow-x-auto bg-white ">
            <table className="min-w-full text-left border-separate border-spacing-y-2 border-t-2 ">
              <thead>
                <tr>
                  <th className="py-4 font-semibold text-lg w-32 text-left ">
                    분류
                  </th>
                  <th className="py-4 font-semibold text-lg text-left">
                    서비스 요약
                  </th>
                  <th className="py-4 font-semibold text-lg w-24 text-left ">
                    성함
                  </th>
                  <th className="py-4 font-semibold text-lg w-32 text-left ">
                    답변 여부
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="py-4 text-base text-gray-800 align-middle ">
                    앱 개발
                  </td>
                  <td className="py-4 text-base text-gray-700 align-middle max-w-xl pr-10">
                    <Link
                      href="/contact"
                      className="cursor-pointer hover:underline block w-full h-full overflow-hidden whitespace-nowrap text-ellipsis"
                    >
                      AI 기반 이미지 분석으로 개인 맞춤형 스타일링 솔루션을
                      제공하는 전문가용 플랫폼 앱 이 앱은 전문가가 고객의 얼굴
                      및 전신 사진과 설문 데이터를 입력하면, AI가 이를 분석해
                      퍼스널컬러, 체형, 이미지 성향 등을 판단하고 그에 맞는
                      스타일링 및 제품 솔루션을 제시해주는 플랫폼입니다
                    </Link>
                  </td>
                  <td className="py-4 text-base text-gray-800 align-middle">
                    박**
                  </td>
                  <td className="py-4 text-base align-middle">
                    <span className="bg-gray-200 text-gray-700 px-3 py-1 rounded">
                      답변 완료
                    </span>
                  </td>
                </tr>
                <tr className="bg-white">
                  <td className="py-4 text-base text-gray-800 align-middle">
                    앱 개발
                  </td>
                  <td className="py-4 text-base text-gray-700 align-middle truncate max-w-xl">
                    <Link
                      href="/contact"
                      className="cursor-pointer hover:underline block w-full h-full"
                    >
                      방송 프로그램 기반의 방송국/제작사-광고주 간 광고 매칭
                      플랫폼 앱
                    </Link>
                  </td>
                  <td className="py-4 text-base text-gray-800 align-middle">
                    서**
                  </td>
                  <td className="py-4 text-base align-middle">
                    <span className="bg-gray-200 text-gray-700 px-3 py-1 rounded">
                      답변 완료
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          {/* 페이지네이션 */}
          <div className="flex justify-center items-center mt-40 gap-2">
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
