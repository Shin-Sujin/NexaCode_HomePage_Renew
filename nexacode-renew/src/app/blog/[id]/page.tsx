"use client";

import { useState, useEffect } from "react";
import feather from "feather-icons";
import "@/src/styles/blog.css"; // 스타일 분리해서 이 경로에 저장한다고 가정
import FloatingLeft from "@/src/components/blog/FloatingLeft";
import FloatingRight from "@/src/components/blog/FloatingRight";
import Footer from "@/src/components/blog/Footer";
import Title from "@/src/components/blog/Title";
import ScrollProgressBar from "@/src/components/blog/ScrollProgressBar";
import { steps } from "@/src/components/blog/blogSteps";
import { fetchPublicBlogDetail } from "@/src/apis";

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

export default function BlogPage({ params }: { params: { id: string } }) {
  const [blog, setBlog] = useState<BlogDetail | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    console.log("params.id:", params.id);
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const res = (await fetchPublicBlogDetail(Number(params.id))) as {
          data: BlogDetail;
        };
        console.log("API 응답:", res);
        const data = res.data;
        if (data) {
          setBlog({
            ...data,
            date: data.createdAt,

            prologueContent: data.prologueContent,
          });
        } else {
          setBlog(null);
        }
      } catch (e) {
        setError("블로그 데이터를 불러오지 못했습니다.");
        console.log("API 에러:", e);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [params.id]);

  useEffect(() => {
    if (blog) feather.replace(); // feather 아이콘 초기화
  }, [blog]);

  useEffect(() => {
    if (blog) {
      console.log("BlogDetail:", blog);
    }
  }, [blog]);

  if (loading) return <div>로딩 중...</div>;
  if (error) return <div>{error}</div>;
  if (!blog) return <div>존재하지 않는 글입니다.</div>;

  return (
    <div className="site__container">
      <ScrollProgressBar />
      <Title title={blog.title} date={blog.date} />

      <main className="post">
        <div className="blog-container">
          <FloatingLeft />
          <div style={{ flex: 1 }}>
            <div className="content">
              {blog.prologueContent ? (
                <div className="bg-gray-100 rounded-2xl p-12 mb-20 max-pf_md:mx-3">
                  <p className="leading-relaxed text-gray-800">
                    <div
                      dangerouslySetInnerHTML={{
                        __html: blog.prologueContent,
                      }}
                    />
                  </p>
                </div>
              ) : null}
              <article className="post-content">
                <div dangerouslySetInnerHTML={{ __html: blog.content }} />
                {/* 해시태그 */}
                <div className="hashtag">
                  <i data-feather="hash"></i>
                  <ul>
                    {(blog.keywords && blog.keywords.length > 0
                      ? blog.keywords[0].split("#").filter(Boolean)
                      : []
                    ).map((keyword, idx) => (
                      <li className="hashtag__item" key={idx}>
                        #{keyword.trim()}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </div>
          </div>
          <FloatingRight steps={steps} />
        </div>
      </main>
      <Footer />
    </div>
  );
}
