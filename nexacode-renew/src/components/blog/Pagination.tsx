"use client";

import React from "react";
import { useRouter, useSearchParams } from "next/navigation";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  setCurrentPage: (page: number) => void;
}

const scrollToTop = () => {
  if (typeof window !== "undefined") {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
};

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  setCurrentPage,
}) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    scrollToTop();

    // 기존 쿼리스트링을 유지하면서 page만 교체
    const params = new URLSearchParams(searchParams.toString());
    params.set("page", String(page));

    router.push(`?${params.toString()}`);
  };

  return (
    <div className="flex justify-center mt-8 gap-2">
      {/* 맨 처음으로 */}
      <button
        onClick={() => handlePageChange(1)}
        disabled={currentPage === 1}
        className="w-8 h-8 flex items-center justify-center rounded-full text-gray-400 hover:text-gray-600 disabled:opacity-30"
        aria-label="맨 처음"
      >
        «
      </button>
      {/* 이전 */}
      <button
        onClick={() => handlePageChange(Math.max(currentPage - 1, 1))}
        disabled={currentPage === 1}
        className="w-8 h-8 flex items-center justify-center rounded-full text-gray-400 hover:text-gray-600 disabled:opacity-30"
        aria-label="이전"
      >
        ‹
      </button>
      {/* 페이지 번호 */}
      {Array.from({ length: totalPages }, (_, i) => (
        <button
          key={i}
          onClick={() => handlePageChange(i + 1)}
          className={`w-8 h-8 flex items-center justify-center rounded-full text-base font-semibold transition
            ${
              currentPage === i + 1
                ? "bg-gray-400 text-white"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }
          `}
        >
          {i + 1}
        </button>
      ))}
      {/* 다음 */}
      <button
        onClick={() => handlePageChange(Math.min(currentPage + 1, totalPages))}
        disabled={currentPage === totalPages}
        className="w-8 h-8 flex items-center justify-center rounded-full text-gray-400 hover:text-gray-600 disabled:opacity-30"
        aria-label="다음"
      >
        ›
      </button>
      {/* 맨 끝으로 */}
      <button
        onClick={() => handlePageChange(totalPages)}
        disabled={currentPage === totalPages}
        className="w-8 h-8 flex items-center justify-center rounded-full text-gray-400 hover:text-gray-600 disabled:opacity-30"
        aria-label="맨 끝"
      >
        »
      </button>
    </div>
  );
};

export default Pagination;
