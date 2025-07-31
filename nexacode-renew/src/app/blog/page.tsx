"use client";
import "@/src/styles/blog.css";
import { useState, useEffect } from "react";
import Footer from "@/src/components/blog/Footer";
import BlogListItem from "@/src/components/blog/BlogListItem";
import { fetchPublicBlogs } from "@/src/apis";
import Pagination from "@/src/components/blog/Pagination";
import SearchBar from "@/src/components/blog/SearchBar";

type BlogListItem = {
  id: number;
  title: string;
  thumbnailPath: string;
  content: string;
  createdAt: string;
  description: string;
};

interface BlogApiResponse {
  data: BlogListItem[];
  totalCount?: number;
}

// useDebounce 커스텀 훅 구현
function useDebounce<T>(value: T, delay: number): T {
  const [debouncedValue, setDebouncedValue] = useState(value);
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);
    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);
  return debouncedValue;
}

export default function BlogListPage() {
  const [blogList, setBlogList] = useState<BlogListItem[]>([]);
  const [totalCount, setTotalCount] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 10;
  const [search, setSearch] = useState("");
  const debouncedSearch = useDebounce(search, 500);
  const handleSearch = () => {
    setCurrentPage(1); // 검색 시 페이지를 1로 초기화
    fetchData(1, search);
  };

  // fetchData를 외부로 분리
  const fetchData = async (
    page = currentPage,
    searchValue = debouncedSearch
  ) => {
    setLoading(true);
    setError(null);
    try {
      const res = (await fetchPublicBlogs(page, searchValue)) as {
        data: BlogApiResponse;
      };
      const items = res.data?.data || [];
      setBlogList(items);
      if (typeof res.data?.totalCount === "number") {
        setTotalCount(res.data.totalCount);
      }
    } catch {
      setError("블로그 데이터를 불러오지 못했습니다.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData(currentPage, debouncedSearch);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage, debouncedSearch]);

  const totalPages = totalCount ? Math.ceil(totalCount / pageSize) : 7;

  return (
    <div>
      <main className="w-full overflow-x-hidden m-0 p-0 max-w-5xl mx-auto px-4 py-48 max-md:w-full max-md:pb-20">
        <div className="flex items-center justify-between mb-6 max-md:flex-col max-md:items-start max-md:gap-4">
          <h1 className="text-6xl text-gray-800 font-600 max-md:text-4xl max-md:px-2">
            넥사코드 이야기
          </h1>
        </div>
        <div className="text-xl text-gray-600 font-400 pl-2 mb-20 max-md:text-lg max-md:px-3 ">
          IT 외주, 개발 비즈니스 꿀팁 블로그 서비스{" "}
        </div>
        {/* 검색하기 컴포넌트 추가 */}
        <SearchBar
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onSearch={handleSearch}
        />
        {loading ? (
          <div className="text-center py-10 text-gray-400">로딩 중...</div>
        ) : error ? (
          <div className="text-center py-10 text-red-400">{error}</div>
        ) : blogList.length === 0 ? (
          <div className="text-center py-10 text-gray-400">
            블로그가 없습니다.
          </div>
        ) : (
          blogList.map((item: BlogListItem) => (
            <BlogListItem
              key={item.id}
              index={item.id}
              category="Tech"
              description={item.description}
              author="nexacode"
              date={item.createdAt}
              title={item.title}
              thumbnailPath={item.thumbnailPath}
            />
          ))
        )}
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          setCurrentPage={setCurrentPage}
        />
      </main>

      <Footer />
    </div>
  );
}
