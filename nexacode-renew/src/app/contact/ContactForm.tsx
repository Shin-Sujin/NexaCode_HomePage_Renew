import React from "react";

export default function ContactForm() {
  return (
    <form className="contact-form" style={{ maxWidth: 600 }}>
      {/* 1. 개발 영역 선택 */}
      <div style={{ marginBottom: 32 }}>
        <div style={{ fontWeight: 700, fontSize: "1.2rem", marginBottom: 8 }}>
          1. 개발 영역 선택 <span style={{ color: "#e53935" }}>*</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          <label>
            <input type="checkbox" name="area" value="앱 개발" defaultChecked />{" "}
            앱 개발
          </label>
          <label>
            <input type="checkbox" name="area" value="SEO" /> 검색 엔진
            최적화(SEO)
          </label>
          <label>
            <input type="checkbox" name="area" value="랜딩페이지" /> 랜딩페이지
          </label>
          <label>
            <input type="checkbox" name="area" value="홈페이지/웹페이지" />{" "}
            홈페이지/웹페이지
          </label>
        </div>
      </div>

      {/* 2. 준비 단계 */}
      <div style={{ marginBottom: 32 }}>
        <div style={{ fontWeight: 700, fontSize: "1.2rem", marginBottom: 8 }}>
          2. 준비 단계 <span style={{ color: "#e53935" }}>*</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
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
            <input type="checkbox" name="step" value="요구사항 정리됨" /> 기능에
            대한 요구사항이 정리됨
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
            <input type="checkbox" name="step" value="서비스 운영 중" /> 서비스
            제작완료 및 운영 중
          </label>
        </div>
      </div>

      {/* 3. 작업물 개발팀의 페이지 수 */}
      <div style={{ marginBottom: 32 }}>
        <div style={{ fontWeight: 700, fontSize: "1.2rem", marginBottom: 8 }}>
          3. 작업물 개발팀의 페이지 수
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
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
            <input type="radio" name="pageCount" value="모름" defaultChecked />{" "}
            모름
          </label>
        </div>
      </div>

      {/* 4. 개발할 서비스에 대해 한줄로 소개해주세요 */}
      <div style={{ marginBottom: 24 }}>
        <div style={{ fontWeight: 700, fontSize: "1.1rem", marginBottom: 4 }}>
          4. 개발할 서비스에 대해 한줄로 소개해주세요{" "}
          <span style={{ color: "#e53935" }}>*</span>
        </div>
        <input
          type="text"
          name="serviceIntro"
          required
          style={{
            width: "100%",
            padding: 8,
            border: "1px solid #ccc",
            borderRadius: 4,
          }}
        />
      </div>

      {/* 5. 회사명 */}
      <div style={{ marginBottom: 24 }}>
        <div style={{ fontWeight: 700, fontSize: "1.1rem", marginBottom: 4 }}>
          5. 회사명 <span style={{ color: "#e53935" }}>*</span>
        </div>
        <input
          type="text"
          name="company"
          required
          style={{
            width: "100%",
            padding: 8,
            border: "1px solid #ccc",
            borderRadius: 4,
            background: "#f5f5f5",
          }}
        />
      </div>

      {/* 6. 성함 */}
      <div style={{ marginBottom: 24 }}>
        <div style={{ fontWeight: 700, fontSize: "1.1rem", marginBottom: 4 }}>
          6. 성함 <span style={{ color: "#e53935" }}>*</span>
        </div>
        <input
          type="text"
          name="name"
          required
          style={{
            width: "100%",
            padding: 8,
            border: "1px solid #ccc",
            borderRadius: 4,
            background: "#f5f5f5",
          }}
        />
      </div>

      {/* 7. 이메일 주소 */}
      <div style={{ marginBottom: 24 }}>
        <div style={{ fontWeight: 700, fontSize: "1.1rem", marginBottom: 4 }}>
          7. 이메일 주소 <span style={{ color: "#e53935" }}>*</span>
        </div>
        <input
          type="email"
          name="email"
          required
          style={{
            width: "100%",
            padding: 8,
            border: "1px solid #ccc",
            borderRadius: 4,
            background: "#f5f5f5",
          }}
        />
      </div>

      {/* 8. 답변 내용 */}
      <div style={{ marginBottom: 32 }}>
        <div style={{ fontWeight: 700, fontSize: "1.1rem", marginBottom: 4 }}>
          8. 답변 내용
        </div>
        <textarea
          name="answer"
          rows={6}
          style={{
            width: "100%",
            padding: 8,
            border: "1px solid #ccc",
            borderRadius: 4,
            background: "#f5f5f5",
          }}
        />
      </div>

      <button
        type="submit"
        style={{
          background: "linear-gradient(90deg, #6C47FF 0%, #7B3FE4 100%)",
          color: "#fff",
          border: "none",
          borderRadius: "6px",
          padding: "10px 32px",
          fontWeight: 600,
          fontSize: "1rem",
        }}
      >
        제출
      </button>
    </form>
  );
}
