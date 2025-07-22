"use client";

import { useState } from "react";
import "@/src/styles/blog.css";
import Footer from "@/src/components/blog/Footer";
import { blogList } from "@/src/components/blog/blogItem";
import BlogListItem from "@/src/components/blog/BlogListItem";
import TextEditor from "@/src/components/blog/TextEditor"; // 위치에 맞게 수정
import { Modal, Button, message } from "antd";
import { addBlog } from "@/src/apis/blog";
import { BlogContents } from "@/src/components/blog/blogContents";

// Define types for the blog list item and API response
type BlogListItem = {
  id: number;
  title: string;
  viewCount?: number; // Optional if not always present
  createdAt: string;
  status: string | null;
};

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
  const [editorKey] = useState<number>(0); // 이걸 추가!

  const openModalToCreate = () => {
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
    setBlogStatus(null);
  };
  const handleOk = async () => {
    // 등록 로직
    try {
      const response = await addBlog({
        title,
        content,
        thumbnailPath,
        keywords,
        description,
      });
      // BlogContents 배열의 마지막 인덱스 구하기

      // blogList에 새 글 추가
      blogList.unshift({
        category: "Tech",
        title,
        desc: description,
        date: "2025년 5월 23일",
        author: "nexacode",
        thumbnailPath,
        content: BlogContents[0], // 항상 0번 인덱스
      });
      message.success("등록이 완료되었습니다");
      setIsModalOpen(false); // 등록 후 모달 닫기
      clearModalData(); // 입력값 초기화
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
            <a
              href="#"
              onClick={openModalToCreate}
              className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg shadow hover:bg-blue-700 transition-colors font-semibold text-lg max-md:w-full max-md:text-base max-md:px-4 max-md:py-2"
            >
              작성하기
            </a>
          </div>
          <h2 className="text-xl text-gray-600 font-400 mb-20 max-md:text-lg max-md:px-3 ">
            넥사코드에서 세상의 변화를 <br className="max-md:block hidden" />
            만들어 가고 있는 사람들의 이야기입니다.
          </h2>
          <div className="space-y-6 max-md:space-y-2">
            <hr className="flex items-start justify-between border-[0.5px] border-gray-200 y-1 " />
            {blogList.map((item, idx) => {
              // console.log("BlogListItem index:", idx); // index 콘솔 출력
              return <BlogListItem key={idx} index={idx} {...item} />;
            })}
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
              setResetEditorForm(true); // Add this line
              setBlogStatus(null);
            }}
          >
            취소
          </Button>,
        ]}
      >
        <div className="px-8 pt-8">
          <TextEditor
            contentType={"blog"}
            post={selectedPost?.id}
            setData={setContent}
            setTitle={setTitle}
            setThumbnailPath={setThumbnailPath}
            setKeywords={setKeywords}
            setDescription={setDescription}
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
