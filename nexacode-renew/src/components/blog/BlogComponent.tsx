import "@/src/styles/blog.css"; // 스타일 분리해서 이 경로에 저장한다고 가정
import FloatingLeft from "@/src/components/blog/FloatingLeft";
import Footer from "@/src/components/blog/Footer";
import Title from "@/src/components/blog/Title";
import ScrollProgressBar from "@/src/components/blog/ScrollProgressBar";

interface BlogDetail {
  id: number;
  title: string;
  content: string;
  thumbnailPath: string;
  keywords: string[];
  description: string;
  viewCount: number;
  createdAt: string;
  prologueContent?: string;
  date?: string;
}

// keywords를 배열로 변환
export function ensureArray(keywords: string | string[]): string[] {
  if (Array.isArray(keywords)) {
    return keywords.flatMap((keyword) =>
      typeof keyword === "string" ? keyword.split(/[# ,]+/).filter(Boolean) : []
    );
  } else if (typeof keywords === "string") {
    return keywords.split(/[# ,]+/).filter(Boolean);
  }
  return [];
}

export default function BlogComponent({ blog }: { blog: BlogDetail }) {
  if (!blog) return <div>존재하지 않는 글입니다.</div>;
  console.log("프로로그 데이터 확인:", blog.prologueContent);

  return (
    <div className="site__container">
      <ScrollProgressBar />
      <Title title={blog.title} date={blog.createdAt} />
      <FloatingLeft />

      <main className="post">
        <div className="blog-container">
          <div style={{ flex: 1 }}>
            <div className="content">
              {blog.prologueContent &&
              blog.prologueContent !== "<p>&nbsp;</p>" &&
              blog.prologueContent !== "<div></div>" ? (
                <div className="bg-gray-100 rounded-2xl p-12 mb-10 max-sm:mx-3 prologue-content">
                  <div
                    dangerouslySetInnerHTML={{
                      __html: blog.prologueContent,
                    }}
                  />
                </div>
              ) : null}
              <article className="post-content">
                <div dangerouslySetInnerHTML={{ __html: blog.content }} />
                <div className="hashtag">
                  <ul>
                    {ensureArray(blog.keywords).map((keyword, idx) => (
                      <li className="hashtag__item" key={idx}>
                        #{keyword.trim()}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
