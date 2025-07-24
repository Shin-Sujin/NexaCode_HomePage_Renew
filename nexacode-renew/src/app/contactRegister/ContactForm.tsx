import React from "react";
// import Footer from "@/src/components/blog/Footer";
import Link from "next/link";

export default function ContactForm() {
  return (
    <div>
      <form className=" w-full pb-20 ">
        {/* 1. 개발 영역 선택 */}
        <div className="pt-10 pb-10">
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
        <div className="mb-10">
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
        <div className="mb-10">
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

        {/* 4. 예산 */}
        <div className="mb-10">
          <div className="font-bold text-[1.1rem] mb-2">
            4. 예산 <span className="text-[#e53935]">*</span>
          </div>
          <div className="flex flex-col gap-2 pl-2">
            <label>
              <input
                type="radio"
                name="budget"
                value="1000만원 이하"
                required
              />{" "}
              1,000만원 이하
            </label>
            <label>
              <input type="radio" name="budget" value="1000~2000만원" />{" "}
              1,000만원 ~ 2,000만원
            </label>
            <label>
              <input type="radio" name="budget" value="2000~3000만원" />{" "}
              2,000만원 ~ 3,000만원
            </label>
            <label>
              <input type="radio" name="budget" value="3000만원 이상" />{" "}
              3,000만원 ~
            </label>
            <label>
              <input type="radio" name="budget" value="모름" /> 모름
            </label>
          </div>
        </div>

        {/* 5. 개발할 서비스에 대해 한줄로 소개해주세요 */}
        <div className="mb-10">
          <div className="font-bold text-[1.1rem] mb-2">
            5. 개발할 서비스에 대해 한줄로 소개해주세요{" "}
            <span className="text-[#e53935]">*</span>
          </div>
          <textarea
            name="serviceIntro"
            required
            placeholder="ex) 블루투스 기능으로 TV를 제어하는 앱, 쇼핑몰 기능이 있는 동호회 회원용 커뮤니티 웹, etc.."
            rows={5}
            className="w-full p-2 border border-[#ccc] rounded"
          />
        </div>

        {/* 6. 개발하고 싶은 서비스 내용을 상세히 설명해주세요 */}
        <div className="mb-10">
          <div className="font-bold text-[1.1rem] mb-2">
            6. 개발하고 싶은 서비스 내용을 상세히 설명해주세요{" "}
            <span className="text-[#e53935]">*</span>
          </div>
          <textarea
            name="serviceDetail"
            required
            placeholder="개발하고 싶은 서비스 내용을 상세하게 설명해주세요"
            rows={5}
            className="w-full p-2 border border-[#ccc] rounded"
          />
        </div>

        {/* 7. 벤치마킹하는 타사의 서비스가 있으신가요? */}
        <div className="mb-10">
          <div className="font-bold text-[1.1rem] mb-2">
            7. 벤치마킹하는 타사의 서비스가 있으신가요?
          </div>
          <textarea
            name="benchmark"
            placeholder="비슷한 서비스나 사례가 있으신가요?"
            rows={5}
            className="w-full p-2 border border-[#ccc] rounded"
          />
        </div>

        {/* 8. 참고자료 */}
        <div className="mb-10">
          <div className="font-bold text-[1.1rem] mb-2">8. 참고자료</div>
          <div className="border border-[#ccc] rounded p-6 flex flex-col items-center bg-[#fafafa]">
            <label
              htmlFor="referenceFile"
              className="flex flex-col items-center cursor-pointer"
            >
              <span className="text-3xl mb-2">📁</span>
              <span className="font-medium text-gray-600">참고자료 추가</span>
              <span className="text-sm text-gray-400 mt-1">
                참고자료가 있으시다면 파일 첨부 부탁드립니다
              </span>
              <input
                id="referenceFile"
                name="referenceFile"
                type="file"
                className="hidden"
              />
            </label>
          </div>
        </div>

        {/* 9. 회사명 */}
        <div className="mb-10">
          <div className="font-bold text-[1.1rem] mb-2">
            9. 회사명 <span className="text-[#e53935]">*</span>
          </div>
          <input
            type="text"
            name="company"
            required
            placeholder="ex) 넥사코드"
            className="w-full p-2 border border-[#ccc] rounded bg-[#f5f5f5]"
          />
        </div>

        {/* 10. 성함 */}
        <div className="mb-10">
          <div className="font-bold text-[1.1rem] mb-2">
            10. 성함 <span className="text-[#e53935]">*</span>
          </div>
          <input
            type="text"
            name="name"
            required
            placeholder="ex) 홍길동"
            className="w-full p-2 border border-[#ccc] rounded bg-[#f5f5f5]"
          />
        </div>

        {/* 11. 연락처 */}
        <div className="mb-10">
          <div className="font-bold text-[1.1rem] mb-2">
            11. 연락처 <span className="text-[#e53935]">*</span>
          </div>
          <input
            type="text"
            name="phone"
            required
            placeholder="ex) 010-0000-0000"
            className="w-full p-2 border border-[#ccc] rounded bg-[#f5f5f5]"
          />
        </div>

        {/* 12. 이메일 주소 */}
        <div className="mb-10">
          <div className="font-bold text-[1.1rem] mb-2">
            12. 이메일 주소 <span className="text-[#e53935]">*</span>
          </div>
          <input
            type="email"
            name="email"
            required
            placeholder="ex) nexacode@nexacode.co.kr"
            className="w-full p-2 border border-[#ccc] rounded bg-[#f5f5f5]"
          />
        </div>

        {/* 제출 버튼 */}
        <div className="flex flex-col justify-center items-center">
          <Link
            href="/contact"
            type="submit"
            className="bg-gradient-to-r from-[#6C47FF] to-[#7B3FE4] text-white border-none rounded-[6px] px-8 py-2 font-medium text-[1rem]"
          >
            문의하기
          </Link>
          <div className=" text-gray-600 my-5 font-medium text-[1rem] text-center">
            내 프로젝트에 대해 궁금한 점이 있으세요?
            <br />
            지금 문의하시면 48시간 내 답변을 드립니다.
          </div>
        </div>
      </form>
    </div>
  );
}
