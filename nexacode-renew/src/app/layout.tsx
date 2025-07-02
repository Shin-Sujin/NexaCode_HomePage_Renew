import "./globals.css";
import Header from "@/components/Header";

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
        <main>{children}</main>
      </body>
    </html>
  );
}
