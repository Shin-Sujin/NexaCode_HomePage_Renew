import React from "react";
// import Footer from "@/src/components/blog/Footer";
import Link from "next/link";

export default function ContactForm() {
  return (
    <div>
      <form className=" w-full pb-20  ">
        {/* 1. 개발 영역 선택 */}
        <div className="pt-10 pb-8">
          <div className="font-bold text-[1.2rem] mb-2">
            1. 개발 영역 선택 <span className="text-[#e53935]">*</span>
          </div>
          <div className="flex flex-col gap-2">
            <label>
              <input
                type="checkbox"
                name="area"
                value="앱 개발"
                defaultChecked
              />{" "}
              앱 개발
            </label>
            <label>
              <input type="checkbox" name="area" value="SEO" /> 검색 엔진
              최적화(SEO)
            </label>
            <label>
              <input type="checkbox" name="area" value="랜딩페이지" />{" "}
              랜딩페이지
            </label>
            <label>
              <input type="checkbox" name="area" value="홈페이지/웹페이지" />{" "}
              홈페이지/웹페이지
            </label>
          </div>
        </div>

        {/* 2. 준비 단계 */}
        <div className="mb-8">
          <div className="font-bold text-[1.2rem] mb-2">
            2. 준비 단계 <span className="text-[#e53935]">*</span>
          </div>
          <div className="flex flex-col gap-2">
            <label>
              <input
                type="checkbox"
                name="step"
                value="아이디어만 있음"
                defaultChecked
              />{" "}
              아이디어만 있음
            </label>
            <label>
              <input type="checkbox" name="step" value="요구사항 정리됨" />{" "}
              기능에 대한 요구사항이 정리됨
            </label>
            <label>
              <input
                type="checkbox"
                name="step"
                value="기획안/스토리보드 작성 완료"
              />{" "}
              기획안/스토리보드 작성 완료
            </label>
            <label>
              <input type="checkbox" name="step" value="기획+디자인 완료" />{" "}
              기획안/스토리보드와 디자인까지 완료
            </label>
            <label>
              <input type="checkbox" name="step" value="MVP 제작 완료" /> MVP
              제작이 완료됨
            </label>
            <label>
              <input type="checkbox" name="step" value="서비스 운영 중" />{" "}
              서비스 제작완료 및 운영 중
            </label>
          </div>
        </div>

        {/* 3. 작업물 개발팀의 페이지 수 */}
        <div className="mb-8">
          <div className="font-bold text-[1.2rem] mb-2">
            3. 작업물 개발팀의 페이지 수
          </div>
          <div className="flex flex-col gap-2">
            <label>
              <input type="radio" name="pageCount" value="1~2개" /> 1~2개
            </label>
            <label>
              <input type="radio" name="pageCount" value="3~5개" /> 3~5개
            </label>
            <label>
              <input type="radio" name="pageCount" value="6~10개" /> 6~10개
            </label>
            <label>
              <input type="radio" name="pageCount" value="11~" /> 11~
            </label>
            <label>
              <input
                type="radio"
                name="pageCount"
                value="모름"
                defaultChecked
              />{" "}
              모름
            </label>
          </div>
        </div>

        {/* 4. 개발할 서비스에 대해 한줄로 소개해주세요 */}
        <div className="mb-6">
          <div className="font-bold text-[1.1rem] mb-1">
            4. 개발할 서비스에 대해 한줄로 소개해주세요{" "}
            <span className="text-[#e53935]">*</span>
          </div>
          <input
            type="text"
            name="serviceIntro"
            required
            className="w-full p-2 border border-[#ccc] rounded"
          />
        </div>
        <div className="flex flex-row gap-4 w-full">
          {/* 5. 회사명 */}
          <div className="mb-6 w-1/2">
            <div className="font-bold text-[1.1rem] mb-1">
              5. 회사명 <span className="text-[#e53935]">*</span>
            </div>
            <input
              type="text"
              name="company"
              required
              className="w-full p-2 border border-[#ccc] rounded bg-[#f5f5f5]"
            />
          </div>

          {/* 6. 성함 */}
          <div className="mb-6 w-1/2">
            <div className="font-bold text-[1.1rem] mb-1">
              6. 성함 <span className="text-[#e53935]">*</span>
            </div>
            <input
              type="text"
              name="name"
              required
              className="w-full p-2 border border-[#ccc] rounded bg-[#f5f5f5]"
            />
          </div>
        </div>
        {/* 7. 이메일 주소 */}
        <div className="mb-6">
          <div className="font-bold text-[1.1rem] mb-1">
            7. 이메일 주소 <span className="text-[#e53935]">*</span>
          </div>
          <input
            type="email"
            name="email"
            required
            className="w-full p-2 border border-[#ccc] rounded bg-[#f5f5f5]"
          />
        </div>

        {/* 8. 답변 내용 */}
        <div className="mb-8">
          <div className="font-bold text-[1.1rem] mb-1">8. 답변 내용</div>
          <textarea
            name="answer"
            rows={6}
            className="w-full p-2 border border-[#ccc] rounded bg-[#f5f5f5]"
          />
        </div>

        {/* 제출 버튼 */}
        <div className="flex flex-col justify-center items-center">
          <button
            type="submit"
            className="bg-gradient-to-r from-[#6C47FF] to-[#7B3FE4] text-white border-none rounded-[6px] px-8 py-2 font-semibold text-[1rem]"
          >
            제출
          </button>
          <div className=" text-gray-600 my-5 font-medium text-[1rem] text-center">
            내 프로젝트에 대해 궁금한 점이 있으세요?
            <br />
            지금 문의하시면 48시간 내 답변을 드립니다.
          </div>
          <Link
            href="/contactList"
            className=" text-blue-700 my-5 font-medium text-[1.5rem] text-center underline "
          >
            문의하기 이동
          </Link>
        </div>
      </form>
    </div>
  );
}
