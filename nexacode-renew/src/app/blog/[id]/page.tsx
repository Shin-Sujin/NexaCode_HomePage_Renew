import { Metadata } from "next";
import { fetchPublicBlogDetail } from "@/src/apis";

import BlogComponent from "@/src/components/blog/BlogComponent";

interface BlogDetail {
  id: number;
  title: string;
  content: string;
  thumbnailPath: string;
  keywords: string[];
  description: string;
  viewCount: number;
  createdAt: string;
  date?: string;
  prologueContent?: string;
}

export async function generateMetadata({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> {
  const res = (await fetchPublicBlogDetail(Number(params.id))) as {
    data: BlogDetail;
  };
  const blog = res.data;
  console.log("메타 타이틀 확인:", blog?.title);
  return {
    title: blog.title,
    description: blog.description,
    keywords: blog.keywords,
    authors: [{ name: "nexacode" }],
  };
}

export default async function BlogPage({ params }: { params: { id: string } }) {
  const res = (await fetchPublicBlogDetail(Number(params.id))) as {
    data: BlogDetail;
  };
  const blog = res.data;

  return <BlogComponent blog={blog} />;
}
