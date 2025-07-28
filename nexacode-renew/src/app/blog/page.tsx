"use client";

import { useState, useEffect } from "react";
import "@/src/styles/blog.css";

import Footer from "@/src/components/blog/Footer";
import { useBlogStore } from "@/src/stores/store";
import BlogListItem from "@/src/components/blog/BlogListItem";
import dynamic from "next/dynamic";
const TextEditor = dynamic(() => import("@/src/components/blog/TextEditor"), {
  ssr: false,
});
// import TextEditor from "@/src/components/blog/TextEditor";
import { Modal, Button, message } from "antd";
import { fetchPublicBlogs } from "@/src/apis";

// Define types for the blog list item and API response
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

export default function BlogListPage() {
  const [selectedPost, setSelectedPost] = useState<BlogListItem | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [resetEditorForm, setResetEditorForm] = useState(false);
  const [title, setTitle] = useState(""); // 제목 상태
  const [content, setContent] = useState(""); // 내용 상태
  const [thumbnailPath, setThumbnailPath] = useState("");
  const [description, setDescription] = useState("");
  const [keywords, setKeywords] = useState([]);
  const [blogStatus, setBlogStatus] = useState(null);

  const [prologueContent, setPrologueContent] = useState("");
  const [editorKey] = useState<number>(0); // 이걸 추가!
  const resetBlogList = useBlogStore((state) => state.resetBlogList);
  const [blogList, setBlogList] = useState<BlogListItem[]>([]);
  const [totalCount, setTotalCount] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 10;

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        console.log("API 요청 페이지:", currentPage);
        const res = (await fetchPublicBlogs(currentPage)) as {
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
    fetchData();
  }, [currentPage]);

  const totalPages = totalCount ? Math.ceil(totalCount / pageSize) : 7;

  const openModalToCreate = () => {
    console.log("작성하기 버튼 클릭됨, 모달 오픈 시도"); // 이 줄 추가
    // 새 게시물을 추가하기 위해 모달을 여는 함수
    setSelectedPost(null); // Clear the selected post
    clearModalData(); // Clear any existing modal data
    setIsModalOpen(true); // Open the modal
    setResetEditorForm(true); // Trigger a reset in the text editor component
  };
  const clearModalData = () => {
    // 입력 필드 상태 초기화 함수
    setTitle("");
    setContent("");
    setThumbnailPath("");
    setKeywords([]);
    setDescription("");

    setPrologueContent("");
    setBlogStatus(null);
  };
  const handleOk = async () => {
    try {
      const newBlog = {
        category: "Tech",
        title,
        desc: description,
        date: new Date().toLocaleDateString("ko-KR", {
          year: "numeric",
          month: "long",
          day: "numeric",
        }),
        author: "nexacode",
        thumbnailPath,
        content, // HTML string
        keywords,
        description,

        prologueContent,
      };
      console.log("[등록되는 블로그 데이터]", newBlog);
      // 실제 등록 로직: store에 추가
      useBlogStore.getState().addBlog(newBlog);
      message.success("등록이 완료되었습니다");
      setIsModalOpen(false);
      clearModalData();
    } catch (error) {
      console.error("Error adding post:", error);
      message.error("잠시 후 다시 시도해주세요");
    }
  };
  return (
    <div>
      <main className="w-full max-w-full overflow-x-hidden m-0 p-0">
        <main className="max-w-5xl mx-auto px-4 py-48 max-md:w-full max-md:pb-20">
          <div className="flex items-center justify-between mb-6 max-md:flex-col max-md:items-start max-md:gap-4">
            <h1 className="text-6xl text-gray-800 font-600 max-md:text-4xl max-md:px-2">
              넥사코드 이야기
            </h1>
            <div className="flex gap-2">
              <a
                href="#"
                onClick={openModalToCreate}
                className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg shadow hover:bg-blue-700 transition-colors font-semibold text-lg max-md:w-full max-md:text-base max-md:px-4 max-md:py-2"
              >
                작성하기
              </a>
              <button
                onClick={resetBlogList}
                className="inline-block bg-gray-200 text-gray-800 px-6 py-2 rounded-lg shadow hover:bg-gray-300 transition-colors font-semibold text-lg max-md:w-full max-md:text-base max-md:px-4 max-md:py-2"
              >
                블로그 초기화
              </button>
            </div>
          </div>
          <h2 className="text-xl text-gray-600 font-400 pl-2 mb-20 max-md:text-lg max-md:px-3 ">
            IT 외주, 개발 비즈니스 꿀팁 블로그 서비스{" "}
          </h2>
          <div className="space-y-6 max-md:space-y-2">
            <hr className="flex items-start justify-between border-[0.5px] border-gray-200 y-1 " />
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
          </div>
          {/* 페이지네이션 UI */}
          <div className="flex justify-center mt-8 gap-2">
            {/* 맨 처음으로 */}
            <button
              onClick={() => setCurrentPage(1)}
              disabled={currentPage === 1}
              className="w-8 h-8 flex items-center justify-center rounded-full text-gray-400 hover:text-gray-600 disabled:opacity-30"
              aria-label="맨 처음"
            >
              «
            </button>
            {/* 이전 */}
            <button
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className="w-8 h-8 flex items-center justify-center rounded-full text-gray-400 hover:text-gray-600 disabled:opacity-30"
              aria-label="이전"
            >
              ‹
            </button>
            {/* 페이지 번호 */}
            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i}
                onClick={() => setCurrentPage(i + 1)}
                className={`w-8 h-8 flex items-center justify-center rounded-full text-base font-semibold transition
                  ${
                    currentPage === i + 1
                      ? "bg-gray-400 text-white"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }
                `}
              >
                {i + 1}
              </button>
            ))}
            {/* 다음 */}
            <button
              onClick={() =>
                setCurrentPage((prev) => Math.min(prev + 1, totalPages))
              }
              disabled={currentPage === totalPages}
              className="w-8 h-8 flex items-center justify-center rounded-full text-gray-400 hover:text-gray-600 disabled:opacity-30"
              aria-label="다음"
            >
              ›
            </button>
            {/* 맨 끝으로 */}
            <button
              onClick={() => setCurrentPage(totalPages)}
              disabled={currentPage === totalPages}
              className="w-8 h-8 flex items-center justify-center rounded-full text-gray-400 hover:text-gray-600 disabled:opacity-30"
              aria-label="맨 끝"
            >
              »
            </button>
          </div>
        </main>
      </main>
      {/* ================================= 작성하기 모달 ================================= */}
      <Modal
        open={isModalOpen}
        onOk={handleOk}
        onCancel={() => {
          setIsModalOpen(false);
          setSelectedPost(null);
          setTitle("");
          setContent("");
          setThumbnailPath("");
          setResetEditorForm(true); // Add this line
          setBlogStatus(null);
        }} // 모달 닫기
        okText="등록" // 버튼 텍스트 변경
        cancelText="취소" // 버튼 텍스트 변경
        closable={false}
        width={1100}
        centered
        footer={[
          <Button key="submit" type="primary" onClick={handleOk}>
            {selectedPost ? "수정" : "등록"}
          </Button>,
          <Button
            className="mr-8"
            key="back"
            onClick={() => {
              setIsModalOpen(false);
              setSelectedPost(null);
              setTitle("");
              setContent("");
              setThumbnailPath("");
              setKeywords([]);
              setDescription("");

              setPrologueContent("");
              setResetEditorForm(true); // Add this line
              setBlogStatus(null);
            }}
          >
            취소
          </Button>,
        ]}
      >
        <div className="px-8 pt-8 max-h-[70vh] overflow-y-auto">
          <TextEditor
            contentType={"blog"}
            post={selectedPost?.id}
            setData={setContent}
            setTitle={setTitle}
            setThumbnailPath={setThumbnailPath}
            setKeywords={setKeywords}
            setDescription={setDescription}
            setPrologueData={setPrologueContent}
            resetEditorForm={resetEditorForm}
            setResetEditorForm={setResetEditorForm}
            editorKey={editorKey}
            blogStatus={blogStatus}
            setBlogStatus={setBlogStatus}
          />
        </div>
      </Modal>
      <Footer />
    </div>
  );
}
