// src/components/Header.tsx

import Image from "next/image";

export default function Header() {
  return (
    <header
      className="flex items-center justify-between border-b px-8"
      style={{
        width: "100%",
        maxWidth: "107.875rem",
        height: "5.25rem",
        flexShrink: 0,
        margin: "0 auto",
        background: "#fff",
      }}
    >
      {/* 로고 */}
      <div className="flex items-center">
        <Image src="/images/siteLogo.png" alt="logo" width={120} height={36} />
      </div>
      {/* 네비게이션 */}
      <nav className="flex items-center gap-10">
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
      {/* Get started 버튼 */}
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
        Get started <span style={{ fontSize: "1.1em", marginLeft: 4 }}>→</span>
      </a>
    </header>
  );
}
