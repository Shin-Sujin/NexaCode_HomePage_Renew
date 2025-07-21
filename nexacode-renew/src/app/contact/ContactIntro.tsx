import React from "react";
import Image from "next/image";
export default function ContactIntro() {
  return (
    <div>
      <div className="flex flex-col items-center">
        <h2 className="text-9xl font-bold mb-3 mt-[60%] text-gray-100">
          Contact us
        </h2>
        <p className="ml-12 text-2xl text-gray-200 mb-[40%]">
          무엇이든 물어보세요,상세하게 답변하겠습니다.
        </p>
      </div>
      <div className="flex flex-col items-center space-y-2">
        <Image
          src="/images/nexacode_logo_white.webp"
          alt="NexaCode Logo"
          width={128}
          height={128}
          className="w-32 mb-4"
        />
        <div className="text-center space-y-1 text-gray-100">
          <div>(주)넥사코드</div>
          <div>사업자등록번호 : 326-87-03313</div>
          <div>대표 김남정</div>
        </div>
        <div className="pt-8 text-center space-y-1 text-gray-100">
          <div>서울시 금천구 디지털로 178 가산 퍼블릭 A동 1515~1516호</div>
          <div>M : nexacode@nexacode.co.kr, C : 010-4009-2398</div>
        </div>
      </div>
    </div>
  );
}
