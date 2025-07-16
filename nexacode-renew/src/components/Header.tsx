// src/components/Header.tsx

import Image from "next/image";

export default function Header() {
  return (
    <header className="relative grid grid-cols-3 items-center w-full bg-white fixed top-0 left-0 right-0 z-50 h-[4.375rem] px-3 max-lg:px-20">
      {/* 로고 */}
      <div className="flex items-center">
        <Image src="/images/siteLogo.png" alt="logo" width={120} height={36} />
      </div>
      {/* 네비게이션 */}
      <nav className="hidden lg:flex justify-center items-center gap-10">
        <a href="#" className="nav-link">
          DEMOS
        </a>
        <a href="#" className="nav-link">
          ABOUT
        </a>
        <a href="#" className="nav-link">
          PORTFOLIO
        </a>
        <a href="#" className="nav-link">
          PAGES
        </a>
        <a href="#" className="nav-link">
          BLOG
        </a>
        <a href="#" className="nav-link">
          CONTACT
        </a>
      </nav>
      {/* 오른쪽 버튼 그룹 */}
      <div className="flex items-center gap-2 justify-end absolute right-0 top-1/2 -translate-y-1/2 px-3">
        <a
          href="#"
          className="flex items-center gap-2"
          style={{
            color: "#121212",
            fontFamily: "Kanit",
            fontSize: "0.875rem",
            fontStyle: "normal",
            fontWeight: 800,
            lineHeight: "0.875rem",
            borderBottom: "2px solid #121212",
            paddingBottom: 2,
            textDecoration: "none",
          }}
        >
          Get started{" "}
          <span style={{ fontSize: "1.1em", marginLeft: 4 }}>→</span>
        </a>
        {/* 메뉴 버튼 (모바일용) */}
        <button
          className="block lg:hidden ml-3 p-2 rounded focus:outline-none focus:ring-2 focus:ring-gray-400"
          aria-label="메뉴 열기"
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
    </header>
  );
}
