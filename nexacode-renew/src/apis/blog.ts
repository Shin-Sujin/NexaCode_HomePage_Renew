// src/apis/blog.ts
// src/apis/mockBlog.ts

// 💾 썸네일 업로드 mock
export const mockAddThumbnailURL = async (file: File) => {
  console.log("🖼️ 가짜 썸네일 업로드 실행됨:", file.name);

  // 실제 서버에서 주는 것처럼 가짜 응답 구성
  return Promise.resolve({
    data: {
      fileName: URL.createObjectURL(file), // 파일 미리보기 URL로 대체
    },
  });
};

// 🖼️ 본문 이미지 업로드 mock
export const addTagImage = async (file: File) => {
  console.log("📷 가짜 이미지 업로드 실행됨:", file.name);

  return Promise.resolve({
    data: {
      url: URL.createObjectURL(file), // 본문 삽입용 미리보기 URL
    },
  });
};

// 📝 블로그 상세 조회 mock
export const getBlogDetail = async (id: number) => {
  console.log(`🔍 가짜 블로그 상세 불러오기 [ID: ${id}]`);

  return Promise.resolve({
    data: {
      id,
      title: `테스트 블로그 ${id}`,
      content: `<p>이것은 가짜 블로그 ${id}의 내용입니다.</p>`,
      description: "가짜 설명입니다.",
      keywords: ["모킹", "프론트엔드", "CKEditor"],
      thumbnailPath: "https://via.placeholder.com/300x200",
      status: "PUBLIC",
      prologueTitle: "Editor's Note",
      prologueContent: "Editor's Note",
    },
  });
};

// 📰 칼럼 상세 mock
export const getColumnDetail = async (id: number) => {
  console.log(`🔍 가짜 칼럼 상세 불러오기 [ID: ${id}]`);

  return Promise.resolve({
    data: {
      id,
      title: `가짜 칼럼 ${id}`,
      content: "<p>칼럼 내용입니다.</p>",
      description: "가짜 칼럼 설명",
      keywords: ["칼럼", "테스트"],
      thumbnailPath: "https://via.placeholder.com/300x200",
      status: "TEMP",
      prologueTitle: "Editor's Note",
      prologueContent: "Editor's Note",
    },
  });
};

// 🎨 포트폴리오 상세 mock
export const getPortfolioDetail = async (id: number) => {
  console.log(`🔍 가짜 포트폴리오 상세 불러오기 [ID: ${id}]`);

  return Promise.resolve({
    data: {
      id,
      title: `포트폴리오 ${id}`,
      content: "<p>포트폴리오 내용입니다.</p>",
      description: "가짜 포트폴리오 설명",
      keywords: [],
      thumbnailPath: "https://via.placeholder.com/300x200",
      status: null,
      prologueTitle: "Editor's Note",
      prologueContent: "Editor's Note",
    },
  });
};

// 📝 블로그 추가 mock
export const addBlog = async ({
  title,
  content,
  thumbnailPath,
  keywords,
  description,
  prologueTitle,
  prologueContent,
}: {
  title: string;
  content: string;
  thumbnailPath: string;
  keywords: string[];
  description: string;
  prologueTitle: string;
  prologueContent: string;
}): Promise<{ success: boolean; id: number }> => {
  console.log("[MOCK] addBlog 호출됨", {
    title,
    content,
    thumbnailPath,
    keywords,
    description,
    prologueTitle,
    prologueContent,
  });
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        success: true,
        id: Math.floor(Math.random() * 10000), // 임의의 id 반환
      });
    }, 800);
  });
};
