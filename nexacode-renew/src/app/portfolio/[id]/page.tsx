import { Metadata } from "next";

import "@/src/styles/blog.css"; // 스타일 분리해서 이 경로에 저장한다고 가정
import PortfolioComponent from "@/src/components/portfolio/PortfolioComponent";
import { fetchPortfolioDetail } from "@/src/apis";
import Lenis from "@/src/app/lenis";
interface PortfolioDetail {
  id: number;
  title: string;
  thumbnailPath: string;
  createdAt: string;
}

export async function generateMetadata({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> {
  const res = (await fetchPortfolioDetail(Number(params.id))) as {
    data: PortfolioDetail;
  };
  const portfolio = res.data;
  console.log("메타 타이틀 확인:", portfolio?.title);
  return {
    title: portfolio.title,
    authors: [{ name: "nexacode" }],
  };
}

export default async function ContactPage({
  params,
}: {
  params: { id: string };
}) {
  const res = (await fetchPortfolioDetail(Number(params.id))) as {
    data: PortfolioDetail;
  };
  const portfolio = res.data;

  return (
    <Lenis>
      <PortfolioComponent portfolio={portfolio} />
    </Lenis>
  );
}
