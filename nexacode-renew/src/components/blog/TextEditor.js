// <path-to-your-build>/src/ckeditor.ts or file containing editor configuration if you are integrating an editor from source.
/* eslint-disable */
"use client";

// The editor creator to use.
import { useEffect, useState } from "react";
import Editor from "ckeditor5-custom-build/build/ckeditor";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import { Button, Upload, message, Select } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import { Col, Form, Input } from "antd";
import BlogCalendar from "@/src/components/blog/BlogCalendar";
import BlogTimeSelect from "@/src/components/blog/BlogTimeSelect";
import {
  addTagImage,
  // addThumbnailURL,
  mockAddThumbnailURL,
  getBlogDetail,
  getColumnDetail,
  getPortfolioDetail,
} from "@/src/apis/blog";
import { useBlogStore } from "@/src/stores/store";

const { Option } = Select;

const TextEditor = ({
  editorKey = 0,
  contentType,
  setData,
  setTitle,
  setDescription,
  setKeywords,
  post,
  setThumbnailPath,
  resetEditorForm,
  setResetEditorForm,
  blogStatus: blogStatus,
  setBlogStatus: setBlogStatus,
}) => {
  const edrtorConfiguration = {
    extraPlugins: [MyCustomUploadAdapterPlugin, AbsoluteLinkPlugin],
    mediaEmbed: {
      previewsInData: true,
    },
    toolbar: {
      items: [
        "heading",
        "|",
        "style",
        "|",
        "alignment",
        "fontFamily",
        "fontSize",
        "fontColor",
        "fontBackgroundColor",
        "highlight",
        "|",
        "underline",
        "bold",
        "italic",
        "blockQuote",
        "specialCharacters",
        "|",
        "bulletedList",
        "numberedList",
        "todoList",
        "|",
        "outdent",
        "indent",
        "|",
        "-",
        "imageUpload",
        "link",
        "|",
        "insertTable",
        "mediaEmbed",
        "|",
        "code",
        "codeBlock",
        "htmlEmbed",
        "|",
        "undo",
        "redo",
      ],
      shouldNotGroupWhenFull: true,
    },
    heading: {
      options: [
        {
          model: "paragraph",
          title: "Paragraph",
          class: "ck-heading_paragraph",
        },
        {
          model: "heading1",
          view: "h1",
          title: "Heading 1",
          class: "ck-heading_heading1",
        },
        {
          model: "heading2",
          view: "h2",
          title: "Heading 2",
          class: "ck-heading_heading2",
        },
        {
          model: "heading3",
          view: "h3",
          title: "Heading 3",
          class: "ck-heading_heading3",
        },
      ],
    },
    language: "ko",
    image: {
      toolbar: [
        "imageTextAlternative",
        "toggleImageCaption",
        "imageStyle:inline",
        "imageStyle:block",
        "imageStyle:side",
        "linkImage",
      ],
    },
    table: {
      contentToolbar: [
        "tableColumn",
        "tableRow",
        "mergeTableCells",
        "tableCellProperties",
        "tableProperties",
      ],
    },
  };

  const [form] = Form.useForm();
  // const [editorData, setEditorData] = useState("");
  const [content, setContent] = useState(""); // Add this line
  const [thumbnail, setThumbnail] = useState(null);

  const onReadyEditor = (editor) => {
    if (!editor) {
      console.error("Editor 인스턴스가 없습니다.");
      return;
    }
    // editor.setData(content);
    if (content && typeof editor.setData === "function") {
      editor.setData(content);
    }
    editor.plugins.get("FileRepository").createUploadAdapter = (loader) => {
      return new MyUploadAdapter(loader);
    };
  };
  const clearModalData = () => {
    setTitle(""); // Assuming setTitle is a prop function or useState function
    setContent(""); // Assuming setContent is a prop function or useState function
    setThumbnailPath(""); // Assuming setThumbnailPath is a prop function or useState function
    setThumbnail(null); // If setThumbnail is a state setter for thumbnail, you'll want to nullify it
    setKeywords([]);
    setDescription("");
    setBlogStatus(null);
  };

  useEffect(() => {
    const fetchDetail = async () => {
      let data;
      try {
        // Call the appropriate API based on the content type
        if (contentType === "blog" && post) {
          data = await getBlogDetail(post);
        } else if (contentType === "portfolio" && post) {
          // Add this condition when you have a `getPortfolioDetail` function
          data = await getPortfolioDetail(post);
        } else if (contentType === "column" && post) {
          data = await getColumnDetail(post);
        }

        if (data) {
          console.log(data);
          const { title, content, description, keywords } = data.data;

          setTitle(title);
          setData(content);
          setContent(content);
          setDescription(description);
          setKeywords(keywords);

          if (contentType !== "portfolio") {
            form.setFieldsValue({
              title,
              description,
              keyword: keywords.join(", "),
            });
          } else {
            form.setFieldsValue({
              title,
              description,
            });
          }

          if (data.data.thumbnailPath) {
            // console.log(data.data);
            // console.log(data.data.thumbnailPath);
            // Here, you convert the thumbnailPath to the format that Upload component expects
            const thumbnailFile = {
              uid: "-1", // The id can be negative to indicate it is not a new file
              name: "Thumbnail", // Name of the file
              status: "done", // Status should be 'done' to indicate a successfully uploaded file
              url: data.data.thumbnailPath, // URL of the uploaded file
            };
            setThumbnail([thumbnailFile]); // Set this array to the state
          }
        } else {
          form.resetFields(); // Reset the form
          setContent(""); // Clear the content state if necessary
          setResetEditorForm(false); // Reset the trigger
        }

        const status = data.data.status ?? null;

        setBlogStatus(status === null ? "TEMP" : status);
      } catch (error) {
        console.error(`Failed to fetch ${contentType} detail:`, error);
      }
    };

    if (post) {
      fetchDetail();
    } else {
      clearModalData(); // This will clear all fields if there's no post to edit
    }
  }, [post, form, resetEditorForm, editorKey]);

  const onThumbnailCustomRequest = async (options) => {
    const { onSuccess, onError, file } = options;

    try {
      // const response = await addThumbnailURL(file);
      const response = await mockAddThumbnailURL(file);
      console.log(response, "response!!");
      // 응답에서 파일 URL을 추출하고 상태에 저장합니다.
      const fileUrl = URL.createObjectURL(file);

      console.log(fileUrl, "!!!!!!!!!!!");

      const fileObj = {
        uid: "-1", // The id can be negative to indicate it is not a new file
        name: file.name, // The file name
        status: "done", // Status should be 'done' to indicate a successfully uploaded file
        url: fileUrl, // URL of the uploaded file
      };
      setThumbnail([fileObj]);
      // setThumbnail(response.data.fileName);
      setThumbnailPath(response.data.fileName); // 실제 업로드 경로 대신 mock URL

      setThumbnailPath(response.data.fileName);
      onSuccess(null, file); // Upload 컴포넌트에 업로드 성공을 알립니다.
      message.success("썸네일이 업로드 되었습니다");
    } catch (error) {
      console.error("Upload error:", error);
      message.error(`${file.name} file upload failed.`);
      onError(error); // Upload 컴포넌트에 업로드 실패를 알립니다.
    }
  };

  const onRemoveThumbnail = () => {
    setThumbnail(null);
    setThumbnailPath("");
  };

  class MyUploadAdapter {
    constructor(loader) {
      this.loader = loader;
    }

    async upload() {
      const file = await this.loader.file;
      try {
        const response = await addTagImage(file);
        message.success("이미지가 업로드 되었습니다");
        return {
          default: response.data.url, // The URL returned by your API.
        };
      } catch (error) {
        console.error("There was an error uploading the file:", error);
        throw error;
      }
    }

    abort() {
      // Handle the abort operation
    }
  }

  function MyCustomUploadAdapterPlugin(editor) {
    editor.plugins.get("FileRepository").createUploadAdapter = (loader) => {
      return new MyUploadAdapter(loader);
    };
  }

  function AbsoluteLinkPlugin(editor) {
    editor.conversion.for("downcast").attributeToElement({
      model: "linkHref",
      view: (href, { writer }) => {
        if (!href) return;
        // Ensure the link is absolute
        const absoluteHref = href.startsWith("http") ? href : `https://${href}`;
        return writer.createAttributeElement(
          "a",
          { href: absoluteHref },
          { priority: 5 }
        );
      },
      converterPriority: "high",
    });
  }

  const handleStatusChange = (value) => {
    setBlogStatus(value);
  };

  useEffect(() => {
    if (resetEditorForm) {
      // form.resetFields(); // Reset the form
      form.setFieldsValue({ title: "", keyword: "", description: "" });
      setTitle("");
      setContent(""); // Clear the content state
      setThumbnail(null); // Clear thumbnail
      setKeywords([]);
      setDescription("");
      setResetEditorForm(false); // Prevents infinite loop
    }
  }, [resetEditorForm, form]);

  const handleKeywordsChange = (e) => {
    // Split the keywords by commas, trim whitespace, and update the state
    const keywordsArray = e.target.value.split(",").map((kw) => kw.trim());
    setKeywords(keywordsArray);
  };

  // 예약 발행 버튼 핸들러 추가 (컴포넌트 내에)
  const handleReservePublish = () => {
    // TODO: 실제 예약 발행 로직 구현
    console.log("예약 발행 버튼 클릭됨");
  };

  // 시간 값 가져오기
  const selectedTime = useBlogStore((state) => state.selectedTime);
  const selectedDate = useBlogStore((state) => state.selectedDate);

  return (
    <div className="modal-form form-inline">
      <Form layout="horizontal" form={form}>
        <Col md={24}>
          <h3 className="mb-2 text-base font-bold">제목</h3>
          <Form.Item name="title">
            <Input onChange={(e) => setTitle(e.target.value)} />
          </Form.Item>
        </Col>
        {contentType !== "portfolio" && (
          <Col md={24}>
            <h3 className="mb-2 text-base font-bold">키워드</h3>
            <Form.Item name="keyword">
              <Input
                placeholder="#키워드1, #키워드2, #키워드3"
                onChange={handleKeywordsChange}
              />
            </Form.Item>
          </Col>
        )}

        {contentType !== "portfolio" && (
          <Col md={24}>
            <h3 className="mb-2 text-base font-bold">설명</h3>
            <Form.Item name="description">
              <Input
                placeholder="설명"
                onChange={(e) => setDescription(e.target.value)}
              />
            </Form.Item>
          </Col>
        )}
        <Col md={24}>
          <h3 className="mb-2 text-base font-bold">썸네일</h3>
          <Form.Item name="thumbnail">
            <Upload
              name="thumbnail"
              listType="picture"
              customRequest={onThumbnailCustomRequest}
              onRemove={onRemoveThumbnail}
              showUploadList={{
                showRemoveIcon: true,
                showPreviewIcon: true, // 미리보기 아이콘을 보여주지 않습니다.
                showDownloadIcon: true, // 다운로드 아이콘을 보여주지 않습니다.
              }}
              fileList={thumbnail}
            >
              <Button icon={<UploadOutlined />}>Upload</Button>
            </Upload>
          </Form.Item>
        </Col>
        {contentType === "blog" && (
          <Col md={30}>
            <Select
              style={{ width: 200, marginBottom: 30 }}
              placeholder={"공개 여부"}
              value={blogStatus}
              onChange={handleStatusChange}
            >
              <Option value="TEMP">임시 저장</Option>
              <Option value="PUBLIC">공개</Option>
            </Select>
          </Col>
        )}
        <Col md={24}>
          <h3 className="mb-2 text-base font-bold">예약 발행</h3>
          <div
            style={{
              display: "flex",
              alignItems: "end",
              gap: 15,
              marginBottom: 20,
            }}
          >
            <Form.Item name="title" style={{ marginBottom: 0 }}>
              <BlogCalendar />
            </Form.Item>
            <Form.Item name="title" style={{ marginBottom: 0 }}>
              <BlogTimeSelect />
            </Form.Item>
            <div className="flex flex-col gap-2">
              <div>
                {selectedTime
                  ? `${selectedDate} ${selectedTime}`
                  : "시간을 선택하세요."}
              </div>
              <Button type="primary" onClick={handleReservePublish}>
                예약 발행 하기
              </Button>
            </div>
          </div>
        </Col>
        <Col>
          <Form.Item name="content">
            <CKEditor
              editor={Editor}
              config={edrtorConfiguration}
              data={content}
              onReady={onReadyEditor}
              onChange={(event, editor) => {
                const data = editor.getData();
                setContent(data); // 에디터에서의 변경사항을 상태에 저장
                setData(data); // 상위 컴포넌트에 에디터 데이터 전달
              }}
            />
          </Form.Item>
        </Col>
      </Form>
    </div>
  );
};

export default TextEditor;
