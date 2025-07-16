import "../styles/globals.css";
import Header from "@/src/components/Header";
import Lenis from "./lenis";

// import DesignTrial from "@/components/DesignTrial";

export const metadata = {
  title: "Demo Project",
  description: "My first Next.js project",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard.css"
        />
      </head>
      <body>
        <Header />
        <main>
          {" "}
          <Lenis>{children}</Lenis>
        </main>
      </body>
    </html>
  );
}
