import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function StepTable() {
  const steps = [
    {
      id: 1,
      title: "상담 신청",
      description:
        "프로젝트 정보와 함께 문의를 남겨주시면 담당 매니저가 72시간 이내에 연락 드립니다.",
    },
    {
      id: 2,
      title: "미팅",
      description:
        "남겨주신 내용을 바탕으로 온/오프라인 미팅을 진행합니다.\n 프로젝트 일정, 예산, 범위 등을 이야기합니다.",
    },
    {
      id: 3,
      title: "계약 및 킥오프",
      description:
        "계약 성사 이후, 진행할 프로젝트에 대해 상세 일정을 안내드리고 기획을 시작합니다.",
    },
    {
      id: 4,
      title: "기획/스토리보드 작성",
      description:
        "상세 기획을 확정하고, 개발에 활용할 스토리보드를 작성합니다.\n 클라이언트 컨펌 후 개발에 착수합니다.",
    },
    {
      id: 5,
      title: "디자인",
      description:
        "직관적인 UI/UX 설계 및 디자인을 진행합니다.\n 클라이언트 컨펌까지 2-3회 수정을 진행합니다.",
    },
    {
      id: 6,
      title: "개발 착수",
      description: "본 개발을 진행합니다. 단계별로 클라이언트 컨펌을 받습니다.",
    },
    {
      id: 7,
      title: "QA",
      description:
        "클라이언트를 대상으로 QA(검수)를 진행합니다.\n 약 5-7일 정도 소요됩니다.",
    },
    {
      id: 8,
      title: "A/S",
      description:
        "프로젝트 종료 후 3개월 간 하자보수를 제공합니다.\n 문의 접수 후 최대한 빠른 대응으로 불편함을 처리합니다.",
    },
  ];

  useEffect(() => {
    const rows = document.querySelectorAll(".reveal-row");
    // GSAP 타임라인 생성
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: rows[0], // 첫 번째 행을 트리거로 설정
        start: "top 80%", // 뷰포트의 80% 지점에서 시작
        toggleActions: "play none none reset", // 스크롤 시 타임라인 재생
      },
    });
    // 모든 행을 타임라인에 순차적으로 추가
    rows.forEach((row, index) => {
      tl.fromTo(
        row,
        { opacity: 0, y: 30 }, // 시작 상태: 투명하고 아래로 이동
        {
          opacity: 1, // 최종 상태: 보이고 제자리로
          y: 0,
          duration: 1.5, // 애니메이션 지속 시간
          ease: "power2.out", // 부드러운 easing 효과
        },
        index * 0.2 // 각 행마다 0.1초 지연
      );
    });
  }, []);

  return (
    <div className="w-full px-0 lg:px-12 xxl:px-20 lg:pt-3 xxl:pt-0">
      <style>
        {`
          .reveal-row {
            opacity: 0;
            transform: translateY(30px);
          }
        `}
      </style>
      <table className="w-full border-collapse">
        <tbody>
          {steps.map((step, index) => (
            <tr
              key={step.id}
              className="reveal-row animated-border-b border-[#e5e5e5] flex max-md:flex-col"
            >
              <td className="text-left text-2xl font-semibold w-[180px] lg:w-[200px] xxl:py-7 lg:py-4 lg:text-lg xxl:text-xl xxl:w-[200px]">
                {index + 1}.&nbsp;{step.title}
              </td>
              <td className="px-6 text-left text-2xl xxl:py-7 lg:text-lg lg:py-4 xxl:text-xl max-xl:px-3 max-lg:whitespace-pre-line">
                {step.description}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
