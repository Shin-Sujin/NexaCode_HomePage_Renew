import "../styles/globals.css";
import Header from "@/src/components/Header";
import Lenis from "./lenis";
import { Montserrat } from "next/font/google";
import localFont from "next/font/local";
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const ibm = localFont({
  src: [
    {
      path: "./fonts/local/IBMPlexSansKR-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "./fonts/local/IBMPlexSansKR-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/local/IBMPlexSansKR-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/local/IBMPlexSansKR-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-ibm",
  display: "swap",
});

export const chiron = localFont({
  src: [
    {
      path: "./fonts/local/ChironHeiHK-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "./fonts/local/ChironHeiHK-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/local/ChironHeiHK-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/local/ChironHeiHK-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "./fonts/local/ChironHeiHK-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "./fonts/local/ChironHeiHK-ExtraBold.ttf",
      weight: "800",
      style: "normal",
    },
    {
      path: "./fonts/local/ChironHeiHK-Black.ttf",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-chiron",
  display: "swap",
});

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
    <html lang="en" className={`${ibm.variable} ${chiron.variable}`}>
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard.css"
        />
      </head>
      <body className={`${ibm.className} ${montserrat.className}`}>
        <Header />
        <main>
          <Lenis>{children}</Lenis>
        </main>
      </body>
    </html>
  );
}
