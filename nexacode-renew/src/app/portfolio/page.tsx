"use client";

import CardSlider from "../../components/portfolio/CardSlider";
import Image from "next/image";
import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { Modal, Button, message } from "antd";

const TextEditor = dynamic(() => import("@/src/components/blog/TextEditor"), {
  ssr: false,
});

// 포트폴리오 아이템 타입 정의
interface PortfolioItem {
  title: string;
  content: string;
  thumbnailPath: string;
  description: string;
  keywords: string[];

  prologueContent: string;
  blogStatus: string | null;
  date: string;
}

export default function PortfolioPage() {
  const [isSliderReady, setIsSliderReady] = useState(false);
  // 작성하기 모달 관련 상태
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [resetEditorForm, setResetEditorForm] = useState(false);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [thumbnailPath, setThumbnailPath] = useState("");
  const [description, setDescription] = useState("");
  const [keywords, setKeywords] = useState([]);

  const [prologueContent, setPrologueContent] = useState("");
  const [blogStatus, setBlogStatus] = useState(null);
  const [portfolioList, setPortfolioList] = useState<PortfolioItem[]>([]); // 타입 명시
  const [editorKey] = useState<number>(0);

  const openModalToCreate = () => {
    setTitle("");
    setContent("");
    setThumbnailPath("");
    setDescription("");
    setKeywords([]);

    setPrologueContent("");
    setBlogStatus(null);
    setIsModalOpen(true);
    setResetEditorForm(true);
  };
  const handleOk = () => {
    // 포트폴리오 데이터 저장 (임시 local state)
    const newPortfolio = {
      title,
      content,
      thumbnailPath,
      description,
      keywords,

      prologueContent,
      blogStatus,
      date: new Date().toLocaleDateString("ko-KR", {
        year: "numeric",
        month: "long",
        day: "numeric",
      }),
    };
    setPortfolioList([newPortfolio, ...portfolioList]);
    message.success("포트폴리오가 등록되었습니다");
    setIsModalOpen(false);
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsSliderReady(true); // 일정 시간 후 슬라이더 보여주기
    }, 100); // 0.5초 정도 기다렸다가 교체

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen">
      {/* 상단 작성하기 버튼 */}
      <div className="w-full max-w-[200rem] px-4 hidden justify-end mt-32">
        <a
          href="#"
          onClick={openModalToCreate}
          className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg shadow hover:bg-blue-700 transition-colors font-semibold text-lg"
        >
          작성하기
        </a>
      </div>
      <div className="w-full max-w-[200rem] px-4 flex-1 flex items-center justify-center">
        {isSliderReady ? (
          <CardSlider />
        ) : (
          <Image
            src="/images/portfolio/nextPortfoilo.webp"
            alt="헬스 친구 매칭, 커머스 앱"
            width={1}
            height={1}
            priority
            fetchPriority="high"
            loading="eager"
            draggable={false}
            style={{
              position: "absolute",
              width: "1px",
              height: "1px",
              opacity: 0,
              pointerEvents: "none",
            }}
          />
        )}
      </div>
      {/* 작성하기 모달 */}
      <Modal
        open={isModalOpen}
        onOk={handleOk}
        onCancel={() => setIsModalOpen(false)}
        okText="등록"
        cancelText="취소"
        closable={false}
        width={1100}
        centered
        footer={[
          <Button key="submit" type="primary" onClick={handleOk}>
            등록
          </Button>,
          <Button key="back" onClick={() => setIsModalOpen(false)}>
            취소
          </Button>,
        ]}
      >
        <div className="px-8 pt-8 max-h-[70vh] overflow-y-auto">
          <TextEditor
            contentType={"portfolio"}
            post={undefined}
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
    </div>
  );
}
