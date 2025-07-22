import { create } from "zustand";
import { persist } from "zustand/middleware";
import { BlogContent0 } from "@/src/components/blog/blogContents";

// 블로그 아이템 타입 정의
export interface BlogItem {
  category: string;
  title: string;
  desc: string;
  date: string;
  author: string;
  thumbnailPath: string;
  content: string | React.FC; // string 또는 컴포넌트
  keywords?: string[];
  description?: string;
}

interface BlogStore {
  blogList: BlogItem[];
  addBlog: (item: BlogItem) => void;
  resetBlogList: () => void;
}

export const useBlogStore = create<BlogStore>()(
  persist(
    (set) => ({
      blogList: [
        {
          category: "Teamstory",
          title: "하나의 답에서, 또 다른 질문으로",
          desc: "길을 만들어가는 사람들 시리즈 | 네 번째 이야기",
          date: "2025년 6월 30일",
          author: "nexacode",
          thumbnailPath: "/images/blog/image_01.jpg",
          content: BlogContent0,
        },
        {
          category: "Teamstory",
          title: "두개의 답에서, 또 다른 질문으로",
          desc: "길을 만들어가는 사람들 시리즈 | 다섯 번째 이야기",
          date: "2025년 7월 1일",
          author: "nexacode",
          thumbnailPath: "/images/blog/image_02.jpg",
          content: "<div>BlogContent1</div>",
        },
      ],
      addBlog: (item: BlogItem) =>
        set((state) => ({ blogList: [item, ...state.blogList] })),
      resetBlogList: () =>
        set(() => ({
          blogList: [
            {
              category: "Teamstory",
              title: "하나의 답에서, 또 다른 질문으로",
              desc: "길을 만들어가는 사람들 시리즈 | 네 번째 이야기",
              date: "2025년 6월 30일",
              author: "nexacode",
              thumbnailPath: "/images/blog/image_01.jpg",
              content: BlogContent0,
            },
            {
              category: "Teamstory",
              title: "두개의 답에서, 또 다른 질문으로",
              desc: "길을 만들어가는 사람들 시리즈 | 다섯 번째 이야기",
              date: "2025년 7월 1일",
              author: "nexacode",
              thumbnailPath: "/images/blog/image_02.jpg",
              content: "<div>BlogContent1</div>",
            },
          ],
        })),
    }),
    {
      name: "blog-storage",
    }
  )
);
