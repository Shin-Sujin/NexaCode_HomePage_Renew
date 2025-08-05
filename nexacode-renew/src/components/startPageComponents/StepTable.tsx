import React from "react";

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

  return (
    <div className="w-full px-24 max-xxxl:px-32 max-xl:px-10 max-md:px-0">
      <table className="w-full border-collapse">
        <tbody>
          {steps.map((step, index) => (
            <tr
              key={step.id}
              className="border-b border-[#e5e5e5]  flex max-md:flex-col"
            >
              <td className="py-7 pr-32 text-left text-2xl font-semibold max-xxxl:py-5 max-xxxl:pr-16 max-xxxl:text-xl max-xl:text-lg max-xl:py-5 max-xl:pr-24 w-[300px]">
                {index + 1}.&nbsp;{step.title}
              </td>
              <td className="px-6 text-left text-2xl max-xxxl:py-5 max-xxxl:text-xl max-xl:text-lg max-xl:px-3 max-lg:whitespace-pre-line max-md:text-base max-md:pb-3">
                {step.description}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
