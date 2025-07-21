// src/components/Header.tsx
"use client";

import Image from "next/image";
import { useState } from "react";

export default function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <header className="grid grid-cols-3 items-center w-full bg-white fixed top-0 left-0 right-0 z-50 h-[4.375rem] px-3 max-lg:px-2">
      {/* 로고 */}
      <a href="/" className="flex items-center">
        <Image src="/images/siteLogo.png" alt="logo" width={120} height={36} />
      </a>
      {/* 네비게이션 */}
      <nav className="hidden lg:flex justify-center items-center gap-10">
        <a href="/" className="nav-link">
          ABOUT
        </a>
        <a href="/portfolio" className="nav-link">
          PORTFOLIO
        </a>

        <a href="/blogList" className="nav-link">
          BLOG
        </a>
        <a href="/contactList" className="nav-link">
          CONTACT
        </a>
      </nav>
      {/* 오른쪽 버튼 그룹 */}
      <div className="flex items-center gap-2 justify-end absolute right-0 top-1/2 -translate-y-1/2 px-3">
        {/* 메뉴 버튼 (모바일용) */}
        <button
          className="block lg:hidden ml-3 p-2 rounded focus:outline-none focus:ring-2 focus:ring-gray-400"
          aria-label="메뉴 열기"
          onClick={() => setIsModalOpen(true)}
        >
          {/* 햄버거 아이콘 (SVG) */}
          <svg
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#121212"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
        </button>
      </div>
      {/* 전체화면 모달 */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[100] bg-white bg-opacity-95 flex flex-col items-center justify-center transition-all">
          <button
            className="absolute top-6 right-6 text-3xl font-bold"
            aria-label="메뉴 닫기"
            onClick={() => setIsModalOpen(false)}
          >
            ×
          </button>
          <nav className="flex flex-col gap-8 text-2xl font-bold items-center">
            <a
              href="/"
              className="nav-link"
              onClick={() => setIsModalOpen(false)}
            >
              ABOUT
            </a>
            <a
              href="/portfolio"
              className="nav-link"
              onClick={() => setIsModalOpen(false)}
            >
              PORTFOLIO
            </a>

            <a
              href="/blogList"
              className="nav-link"
              onClick={() => setIsModalOpen(false)}
            >
              BLOG
            </a>
            <a
              href="/contactList"
              className="nav-link"
              onClick={() => setIsModalOpen(false)}
            >
              CONTACT
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
