"use client";

import { useEffect, useState } from "react";
import feather from "feather-icons";

export default function FloatingLeft() {
  const [showAlert, setShowAlert] = useState(false);

  useEffect(() => {
    feather.replace();
  }, []);

  const handleShareClick = async () => {
    try {
      const url = window.location.href;
      await navigator.clipboard.writeText(url);
      console.log("복사된 링크:", url);
      setShowAlert(true);
      setTimeout(() => setShowAlert(false), 2000);
    } catch {
      alert("클립보드 복사에 실패했습니다.");
    }
  };

  return (
    <>
      <aside className="floating left  max-lg:hidden">
        <div className="buttons" style={{ position: "relative" }}>
          <button
            className="button"
            onClick={handleShareClick}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              // 필요하다면 width, height, padding, background 등도 조정
            }}
          >
            <i data-feather="share-2"></i>
          </button>
        </div>
      </aside>
      {showAlert && (
        <div className="fixed top-20 left-1/2 -translate-x-1/2 bg-white text-[#222] px-6 pt-8 pb-7 rounded-lg shadow-2xl z-[9999] min-w-[340px] max-w-[90vw] flex flex-col items-center text-xl font-medium text-center">
          <svg
            width="64"
            height="64"
            viewBox="0 0 64 64"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ marginBottom: "16px" }}
          >
            <circle
              cx="32"
              cy="32"
              r="30"
              stroke="#A3E635"
              strokeWidth="4"
              fill="#F7FEE7"
            />
            <path
              d="M20 34L29 43L44 25"
              stroke="#65A30D"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          페이지 URL이 복사되었습니다.
        </div>
      )}
    </>
  );
}
