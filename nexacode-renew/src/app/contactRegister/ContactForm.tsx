"use client";

import React, { useState } from "react";
// import Footer from "@/src/components/blog/Footer";
// import Link from "next/link";
import { Checkbox, Radio, Space, Input } from "antd";
import { registerInquiry } from "@/src/apis";
const { TextArea } = Input;
import { useRouter } from "next/navigation";

export default function ContactForm() {
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const router = useRouter();

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setSelectedFiles((prevFiles) => [
        ...prevFiles,
        ...Array.from(event.target.files!),
      ]);
    }
  };

  const handleRemoveFile = (index: number) => {
    setSelectedFiles((prevFiles) => {
      const updatedFiles = prevFiles.filter((_, i) => i !== index);
      return updatedFiles;
    });
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const formData = new FormData(event.target as HTMLFormElement);

    selectedFiles.forEach((file) => {
      formData.append("files", file);
    });

    const data = {
      companyName: formData.get("company"),
      name: formData.get("name"),
      phone: formData.get("phone"),
      email: formData.get("email"),
      serviceSummary: formData.get("serviceIntro"),
      serviceDescription: formData.get("serviceDetail"),
      benchmarkService: formData.get("benchmark"),
      files: selectedFiles,
      budgetId: parseInt(formData.get("budget") as string, 10),
      developmentAreaId: parseInt(formData.get("area") as string, 10),
      preparationStageId: parseInt(formData.get("step") as string, 10),
      workPageId: parseInt(formData.get("pageCount") as string, 10),
    };

    console.log("Request Data:", data);
    try {
      const response = await registerInquiry(data);
      console.log("문의 등록 성공:", response);
      alert("문의가 등록되었습니다!");
      router.push("/contact");
    } catch (error) {
      console.error("문의 등록 실패:", error);
    }
  };

  return (
    <div>
      <form className="w-full pb-20" onSubmit={handleSubmit}>
        {/* 1. 개발 영역 선택 */}
        <div className="pt-10 pb-10">
          <h3 className="mb-4 text-[#333333] font-bold">
            1. 개발 영역 선택 <span className="text-[#e53935]">*</span>
          </h3>
          <Checkbox.Group name="area">
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
          <Checkbox.Group name="step">
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
          <Radio.Group name="pageCount">
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

        {/* 4. 예산 */}
        <div className="mb-10">
          <div className="mb-4 font-bold text-[1.1rem]">
            4. 예산 <span className="text-[#e53935]">*</span>
          </div>
          <Radio.Group name="budget">
            <Space direction="vertical" size={12}>
              <Radio value={1} className="text-base  text-[#313131]">
                1,000만원 이하
              </Radio>
              <Radio value={2} className="text-base  text-[#313131]">
                1,000만원 ~ 2,000만원
              </Radio>
              <Radio value={3} className="text-base  text-[#313131]">
                2,000만원 ~ 3,000만원
              </Radio>
              <Radio value={4} className="text-base  text-[#313131]">
                3,000만원 ~
              </Radio>
              <Radio value={5} className="text-base  text-[#313131]">
                모름
              </Radio>
            </Space>
          </Radio.Group>
        </div>
        {/* 5. 개발할 서비스에 대해 한줄로 소개해주세요 */}
        <div className="mb-10">
          <div className="font-bold text-[1.1rem] mb-2">
            5. 개발할 서비스에 대해 한줄로 소개해주세요{" "}
            <span className="text-[#e53935]">*</span>
          </div>
          <TextArea
            name="serviceIntro"
            required
            placeholder="ex) 블루투스 기능으로 TV를 제어하는 앱, 쇼핑몰 기능이 있는 동호회 회원용 커뮤니티 웹, etc.."
            rows={5}
            className="!resize-none"
          />
        </div>

        {/* 6. 개발하고 싶은 서비스 내용을 상세히 설명해주세요 */}
        <div className="mb-10">
          <div className="font-bold text-[1.1rem] mb-2">
            6. 개발하고 싶은 서비스 내용을 상세히 설명해주세요{" "}
            <span className="text-[#e53935]">*</span>
          </div>
          <TextArea
            name="serviceDetail"
            required
            placeholder="개발하고 싶은 서비스 내용을 상세하게 설명해주세요"
            rows={5}
            className="!resize-none"
          />
        </div>

        {/* 7. 벤치마킹하는 타사의 서비스가 있으신가요? */}
        <div className="mb-10">
          <div className="font-bold text-[1.1rem] mb-2">
            7. 벤치마킹하는 타사의 서비스가 있으신가요?
          </div>
          <TextArea
            name="benchmark"
            placeholder="비슷한 서비스나 사례가 있으신가요?"
            rows={5}
            className="!resize-none"
          />
        </div>

        {/* 8. 참고자료 */}
        <div className="mb-10">
          <div className="font-bold text-[1.1rem] mb-2">8. 참고자료</div>
          <div className="border border-[#ccc] rounded p-6 flex flex-col items-center ">
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
                onChange={handleFileChange}
                multiple
              />
            </label>
            {selectedFiles.length > 0 && (
              <div className="mt-2">
                {selectedFiles.map((file, index) => (
                  <div
                    key={index}
                    className="text-sm text-gray-600 flex items-center"
                  >
                    {file.name}
                    <button
                      type="button"
                      onClick={() => handleRemoveFile(index)}
                      className="ml-2 text-red-500"
                    >
                      🗑️
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {/* 9. 회사명 */}
          <div className="mb-10">
            <div className="font-bold text-[1.1rem] mb-2">
              9. 회사명 <span className="text-[#e53935]">*</span>
            </div>
            <Input
              name="company"
              placeholder="ex) 넥사코드"
              required
              className="h-[40px]"
            />
          </div>

          {/* 10. 성함 */}
          <div className="mb-10">
            <div className="font-bold text-[1.1rem] mb-2">
              10. 성함 <span className="text-[#e53935]">*</span>
            </div>
            <Input
              name="name"
              placeholder="ex) 홍길동"
              required
              className="h-[40px]"
            />
          </div>

          {/* 11. 연락처 */}
          <div className="mb-10">
            <div className="font-bold text-[1.1rem] mb-2">
              11. 연락처 <span className="text-[#e53935]">*</span>
            </div>
            <Input
              name="phone"
              placeholder="ex) 010-0000-0000"
              required
              className="h-[40px]"
            />
          </div>

          {/* 12. 이메일 주소 */}
          <div className="mb-10">
            <div className="font-bold text-[1.1rem] mb-2">
              12. 이메일 주소 <span className="text-[#e53935]">*</span>
            </div>
            <Input
              name="email"
              type="email"
              placeholder="ex) nexacode@nexacode.co.kr"
              required
              className="h-[40px]"
            />
          </div>
        </div>

        {/* 제출 버튼 */}
        <div className="flex flex-col justify-center items-center">
          <button
            type="submit"
            className="bg-gradient-to-r from-[#6C47FF] to-[#7B3FE4] text-white border-none rounded-[6px] px-8 py-2 font-medium text-[1rem]"
          >
            문의하기
          </button>
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
