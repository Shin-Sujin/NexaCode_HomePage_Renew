export interface ContactItem {
  id: number;
  title: string;
  type:
    | "checkbox"
    | "radio"
    | "text"
    | "email"
    | "textarea"
    | "textServiceIntroArea";
  name: string;
  required?: boolean;
  options?: string[];
}

export const contactItems: ContactItem[] = [
  {
    id: 1,
    title: "개발 영역 선택",
    type: "checkbox",
    name: "area",
    required: true,
    options: [
      "앱 개발",
      "검색 엔진 최적화(SEO)",
      "랜딩페이지",
      "홈페이지/웹페이지",
    ],
  },
  {
    id: 2,
    title: "준비 단계",
    type: "checkbox",
    name: "step",
    required: true,
    options: [
      "아이디어만 있음",
      "기능에 대한 요구사항이 정리됨",
      "기획안/스토리보드 작성 완료",
      "기획안/스토리보드와 디자인까지 완료",
      "MVP 제작이 완료됨",
      "서비스 제작완료 및 운영 중",
    ],
  },
  {
    id: 3,
    title: "작업물 개발팀의 페이지 수",
    type: "radio",
    name: "pageCount",
    options: ["1~2개", "3~5개", "6~10개", "11~", "모름"],
  },
  {
    id: 4,
    title: "개발할 서비스에 대해 한줄로 소개해주세요",
    type: "textServiceIntroArea",
    name: "serviceIntro",
    required: true,
  },
  {
    id: 5,
    title: "회사명",
    type: "text",
    name: "company",
    required: true,
  },
  {
    id: 6,
    title: "성함",
    type: "text",
    name: "name",
    required: true,
  },
  {
    id: 7,
    title: "이메일 주소",
    type: "email",
    name: "email",
    required: true,
  },
  {
    id: 8,
    title: "답변 내용",
    type: "textarea",
    name: "answer",
  },
];
