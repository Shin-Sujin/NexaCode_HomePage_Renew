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
