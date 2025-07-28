"use client";

import { useBlogStore } from "@/src/stores/store";

import { useEffect } from "react";
import feather from "feather-icons";

import FloatingLeft from "@/src/components/blog/FloatingLeft";
import FloatingRight from "@/src/components/blog/FloatingRight";
import Footer from "@/src/components/blog/Footer";
import Title from "@/src/components/blog/Title";
import ScrollProgressBar from "@/src/components/blog/ScrollProgressBar";
import { steps } from "@/src/components/blog/blogSteps";

export default function BlogPage({ params }: { params: { id: string } }) {
  const blog = useBlogStore((state) => state.blogList[Number(params.id)]);

  useEffect(() => {
    feather.replace(); // feather 아이콘 초기화
  }, [blog]);

  // blog가 undefined일 수 있으니 예외처리 필요
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
              <div className="bg-gray-100 rounded-2xl p-12 mb-20 max-pf_md:mx-3">
                <h2 className="font-semibold text-2xl mb-6 text-gray-800">
                  {blog.prologueTitle}
                </h2>
                <p className="text-xl leading-relaxed text-gray-600">
                  {blog.prologueContent}
                </p>
              </div>
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
