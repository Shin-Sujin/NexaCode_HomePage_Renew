// src/components/Header.tsx
"use client";

import Image from "next/image";
import { useState } from "react";

export default function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
  const menuItems = [
    { label: "서비스 특징", href: "/" },
    { label: "강점", href: "/" },
    { label: "진행과정", href: "/" },
    { label: "서비스 특징", href: "/" },
    { label: "포트폴리오", href: "/portfolio" },
    { label: "블로그", href: "/blog" },
    { label: "문의하기", href: "/contact" },
  ];
  return (
    <header className="grid grid-cols-3 items-center w-full bg-white fixed top-0 left-0 right-0 z-50 h-[4.375rem] px-3 max-lg:px-2">
      {/* 로고 */}
      <a href="/" className="flex items-center ml-2">
        <Image
          src="/images/nexacode_logo.webp"
          alt="logo"
          width={120}
          height={36}
        />
      </a>
      {/* 네비게이션 */}
      <nav className="hidden lg:flex justify-center items-center gap-10">
        {menuItems.map((item, idx) => (
          <a
            key={item.label}
            href={item.href}
            className={`nav-link nav-underline transition-opacity duration-200 ${
              hoveredIdx !== null && hoveredIdx !== idx ? "opacity-50" : ""
            } ${hoveredIdx === idx ? "nav-underline-hovered" : ""}`}
            onMouseEnter={() => setHoveredIdx(idx)}
            onMouseLeave={() => setHoveredIdx(null)}
          >
            {item.label}
          </a>
        ))}
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
            {menuItems.map((item, idx) => (
              <a
                key={item.label}
                href={item.href}
                className={`nav-link nav-underline transition-opacity duration-200 ${
                  hoveredIdx !== null && hoveredIdx !== idx ? "opacity-50" : ""
                } ${hoveredIdx === idx ? "nav-underline-hovered" : ""}`}
                onClick={() => setIsModalOpen(false)}
                onMouseEnter={() => setHoveredIdx(idx)}
                onMouseLeave={() => setHoveredIdx(null)}
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
