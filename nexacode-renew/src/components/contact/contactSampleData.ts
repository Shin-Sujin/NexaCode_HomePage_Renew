export interface ContactAnswer {
  id: number;
  answers: {
    [key: string]: string | string[];
  };
}

export const contactSampleData: ContactAnswer[] = [
  {
    id: 1,
    answers: {
      area: ["앱 개발"],
      step: ["기능에 대한 요구사항이 정리됨"],
      pageCount: "11~",
      serviceIntro:
        "이 앱은 전문가가 고객의 얼굴 및 전신 사진과 설문 데이터를 입력하면, AI가 이를 분석해 퍼스널컬러, 체형, 이미지 성향 등을 판단하고 그에 맞는 스타일링 및 제품 솔루션을 제시해주는 플랫폼입니다",
      company: "아*****",
      name: "박**",
      email: "i*******",
      answer: "안녕하세요, (주)넥사코드입니다.",
    },
  },
  {
    id: 2,
    answers: {
      area: ["랜딩페이지"],
      step: ["MVP 제작이 완료됨"],
      pageCount: "1~2개",
      serviceIntro: "랜딩페이지 제작 문의",
      company: "테스트회사",
      name: "김철수",
      email: "test2@example.com",
      answer: "랜딩페이지 견적 문의합니다.",
    },
  },
];
