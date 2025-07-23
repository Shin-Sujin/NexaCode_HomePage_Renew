// BlogWriteModal.tsx (or BlogEditorModal.tsx)
"use client";
import { useState } from "react";
import TextEditor from "./TextEditor"; // 컴포넌트 위치에 맞게 수정
import { addBlog } from "@/src/apis/blog";

const BlogWriteModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [thumbnailPath, setThumbnailPath] = useState("");
  const [keywords, setKeywords] = useState([]);
  const [description, setDescription] = useState("");
  const [resetEditorForm, setResetEditorForm] = useState(false);
  // const [editorKey, setEditorKey] = useState<number>(0);

  const handleRegister = async () => {
    try {
      await addBlog({
        title,
        content,
        thumbnailPath,
        keywords,
        description,
      });
      alert("가짜 등록 완료됨 ✅");
      setIsOpen(false);
      resetForm();
    } catch (err) {
      alert("등록 실패!");
      console.error(err);
    }
  };

  const resetForm = () => {
    setTitle("");
    setContent("");
    setThumbnailPath("");
    setKeywords([]);
    setDescription("");
    setResetEditorForm(true);
  };

  return (
    <>
      <a
        href="#"
        onClick={(e) => {
          e.preventDefault();
          setIsOpen(true);
        }}
        className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg shadow hover:bg-blue-700 transition-colors font-semibold text-lg max-md:w-full max-md:text-base max-md:px-4 max-md:py-2"
      >
        작성하기
      </a>

      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white w-[80vw] max-w-[900px] rounded-xl p-6 relative">
            {/* 닫기 버튼 */}
            <button
              className="absolute top-4 right-4 text-xl"
              onClick={() => setIsOpen(false)}
            >
              ✕
            </button>

            {/* 에디터 삽입 */}
            <TextEditor
              contentType="blog"
              post={null}
              setData={setContent}
              setTitle={setTitle}
              setThumbnailPath={setThumbnailPath}
              setKeywords={setKeywords}
              setDescription={setDescription}
              resetEditorForm={resetEditorForm}
              setResetEditorForm={setResetEditorForm}
              // editorKey={editorKey}
              blogStatus={null}
              setBlogStatus={() => {}}
            />

            {/* 등록 버튼 */}
            <div className="text-right mt-6">
              <button
                className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700"
                onClick={handleRegister}
              >
                등록
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default BlogWriteModal;
