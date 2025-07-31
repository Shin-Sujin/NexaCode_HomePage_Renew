"use client";
import Footer from "@/src/components/blog/Footer";
import { Checkbox, Radio, Space, Input } from "antd";
import Link from "next/link";
const { TextArea } = Input;

interface InquiryDetail {
  files: [];
  id: number;
  companyName: string;
  name: string;
  email: string;
  serviceSummary: string;
  response: string;
  createdAt: string;
  developmentAreaId: number;
  preparationStageId: number;
  workPageId: number;
}
export function maskResponseText(response: string): string {
  const lines = response.split("\n");
  const firstLine = lines[0];
  const maskedLines = lines.slice(1).map((line) => line.replace(/./g, "*"));
  return [firstLine, ...maskedLines].join("\n");
}
export default function ContactComponent({
  inquiry,
}: {
  inquiry: InquiryDetail;
}) {
  if (!inquiry) return <div>존재하지 않는 글입니다.</div>;

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
        <form className="w-full pb-20">
          {/* 1. 개발 영역 선택 */}
          <div className="pt-10 pb-10">
            <h3 className="mb-4 text-[#333333] font-bold">
              1. 개발 영역 선택 <span className="text-[#e53935]">*</span>
            </h3>
            <Checkbox.Group
              name="area"
              value={[inquiry.developmentAreaId]}
              disabled
            >
              <Space direction="vertical" size={12}>
                <Checkbox value={1} className="text-base  text-[#313131]">
                  앱 개발
                </Checkbox>
                <Checkbox value={2} className="text-base  text-[#313131]">
                  검색 엔진 최적화(SEO)
                </Checkbox>
                <Checkbox value={3} className="text-base  text-[#313131]">
                  랜딩페이지
                </Checkbox>
                <Checkbox value={4} className="text-base  text-[#313131]">
                  홈페이지/웹페이지
                </Checkbox>
              </Space>
            </Checkbox.Group>
          </div>

          {/* 2. 준비 단계 */}
          <div className="mb-10">
            <div className="mb-4 font-bold text-[1.2rem]">
              2. 준비 단계 <span className="text-[#e53935]">*</span>
            </div>
            <Checkbox.Group
              name="step"
              value={[inquiry.preparationStageId]}
              disabled
            >
              <Space direction="vertical" size={12}>
                <Checkbox value={1} className="text-base  text-[#313131]">
                  아이디어만 있음
                </Checkbox>
                <Checkbox value={2} className="text-base  text-[#313131]">
                  기능에 대한 요구사항이 정리됨
                </Checkbox>
                <Checkbox value={3} className="text-base  text-[#313131]">
                  기획안/스토리보드 작성 완료
                </Checkbox>
                <Checkbox value={4} className="text-base  text-[#313131]">
                  기획안/스토리보드와 디자인까지 완료
                </Checkbox>
                <Checkbox value={5} className="text-base  text-[#313131]">
                  MVP 제작이 완료됨
                </Checkbox>
                <Checkbox value={6} className="text-base  text-[#313131]">
                  서비스 제작완료 및 운영 중
                </Checkbox>
              </Space>
            </Checkbox.Group>
          </div>

          {/* 3. 작업물 개발팀의 페이지 수 */}
          <div className="mb-10">
            <div className="mb-4 font-bold text-[1.2rem]">
              3. 작업물 개발팀의 페이지 수
            </div>
            <Radio.Group name="pageCount" value={inquiry.workPageId} disabled>
              <Space direction="vertical" size={12}>
                <Radio value={1} className="text-base  text-[#313131]">
                  1~2개
                </Radio>
                <Radio value={2} className="text-base  text-[#313131]">
                  3~5개
                </Radio>
                <Radio value={3} className="text-base  text-[#313131]">
                  6~10개
                </Radio>
                <Radio value={4} className="text-base  text-[#313131]">
                  11~
                </Radio>
                <Radio value={5} className="text-base  text-[#313131]">
                  모름
                </Radio>
              </Space>
            </Radio.Group>
          </div>

          {/* 4. 개발할 서비스에 대해 한줄로 소개해주세요 */}
          <div className="mb-10">
            <div className="font-bold text-[1.1rem] mb-2">
              4. 개발할 서비스에 대해 한줄로 소개해주세요{" "}
              <span className="text-[#e53935]">*</span>
            </div>
            <TextArea
              name="serviceIntro"
              required
              placeholder="ex) 블루투스 기능으로 TV를 제어하는 앱, 쇼핑몰 기능이 있는 동호회 회원용 커뮤니티 웹, etc.."
              rows={5}
              className="!resize-none"
              value={inquiry.serviceSummary}
              disabled
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            {/* 9. 회사명 */}
            <div className="mb-10">
              <div className="font-bold text-[1.1rem] mb-2">
                5. 회사명 <span className="text-[#e53935]">*</span>
              </div>
              <Input
                name="company"
                placeholder="ex) 넥사코드"
                required
                className="h-[40px]"
                value={inquiry.companyName}
                disabled
              />
            </div>

            {/* 6. 성함 */}
            <div className="mb-10">
              <div className="font-bold text-[1.1rem] mb-2">
                6. 성함 <span className="text-[#e53935]">*</span>
              </div>
              <Input
                name="name"
                placeholder="ex) 홍길동"
                required
                className="h-[40px]"
                value={inquiry.name}
                disabled
              />
            </div>

            {/* 7. 연락처 */}
            <div className="mb-10">
              <div className="font-bold text-[1.1rem] mb-2">
                7. 연락처 <span className="text-[#e53935]">*</span>
              </div>
              <Input
                name="phone"
                placeholder="ex) 010-0000-0000"
                required
                className="h-[40px]"
                value="***-****-****"
                disabled
              />
            </div>

            {/* 8. 이메일 주소 */}
            <div className="mb-10">
              <div className="font-bold text-[1.1rem] mb-2">
                8. 이메일 주소 <span className="text-[#e53935]">*</span>
              </div>
              <Input
                name="email"
                type="email"
                placeholder="ex) nexacode@nexacode.co.kr"
                required
                className="h-[40px]"
                value={inquiry.email}
                disabled
              />
            </div>
          </div>
          {/* 9. 답변 내용 */}
          <div className="mb-10">
            <div className="font-bold text-[1.1rem] mb-2">
              9. 답변 내용 <span className="text-[#e53935]">*</span>
            </div>
            <TextArea
              name="response"
              required
              placeholder="답변 내용"
              rows={5}
              className="!resize-none"
              value={inquiry.response ? maskResponseText(inquiry.response) : ""}
              disabled
            />
          </div>
          {/* 제출 버튼 */}
          <div className="flex flex-col justify-center items-center">
            <Link href={`/contact`}>
              <button
                type="submit"
                className="bg-gradient-to-r from-[#6C47FF] to-[#7B3FE4] text-white border-none rounded-[6px] px-8 py-2 font-medium text-[1rem]"
              >
                문의하기
              </button>
            </Link>
            <div className=" text-gray-600 my-5 font-medium text-[1rem] text-center">
              내 프로젝트에 대해 궁금한 점이 있으세요?
              <br />
              지금 문의하시면 48시간 내 답변을 드립니다.
            </div>
          </div>
        </form>
      </main>
      <Footer />
    </main>
  );
}
