// src/components/Header.tsx

import Image from "next/image";

export default function Header() {
  return (
    <header
      className="flex items-center justify-between border-b px-8"
      style={{
        width: "100%",
        maxWidth: "107.875rem",
        height: "6.25rem",
        flexShrink: 0,
        margin: "0 auto",
        background: "#fff",
      }}
    >
      {/* 로고 */}
      <div className="flex items-center">
        <Image src="/images/siteLogo.png" alt="logo" width={160} height={48} />
      </div>
      {/* 네비게이션 */}
      <nav className="flex items-center gap-10">
        <a
          href="#"
          style={{
            color: "#121212",
            fontFamily: "Kanit",
            fontSize: "1rem",
            fontStyle: "normal",
            fontWeight: 600,
            lineHeight: "1rem",
            textTransform: "uppercase",
          }}
        >
          DEMOS
        </a>
        <a
          href="#"
          style={{
            color: "#121212",
            fontFamily: "Kanit",
            fontSize: "1rem",
            fontStyle: "normal",
            fontWeight: 600,
            lineHeight: "1rem",
            textTransform: "uppercase",
          }}
        >
          ABOUT
        </a>
        <a
          href="#"
          style={{
            color: "#121212",
            fontFamily: "Kanit",
            fontSize: "1rem", // 16px
            fontStyle: "normal",
            fontWeight: 600,
            lineHeight: "1rem",
            textTransform: "uppercase",
          }}
        >
          PORTFOLIO
        </a>
        <a
          href="#"
          style={{
            color: "#121212",
            fontFamily: "Kanit",
            fontSize: "1rem",
            fontStyle: "normal",
            fontWeight: 600,
            lineHeight: "1rem",
            textTransform: "uppercase",
          }}
        >
          PAGES
        </a>
        <a
          href="#"
          style={{
            color: "#121212",
            fontFamily: "Kanit",
            fontSize: "1rem",
            fontStyle: "normal",
            fontWeight: 600,
            lineHeight: "1rem",
            textTransform: "uppercase",
          }}
        >
          BLOG
        </a>
        <a
          href="#"
          style={{
            color: "#121212",
            fontFamily: "Kanit",
            fontSize: "1rem",
            fontStyle: "normal",
            fontWeight: 600,
            lineHeight: "1rem",
            textTransform: "uppercase",
          }}
        >
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
          fontWeight: 500,
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
