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
  prologueTitle?: string;
  prologueContent?: string;
}

interface BlogStore {
  blogList: BlogItem[];
  addBlog: (item: BlogItem) => void;
  resetBlogList: () => void;
  selectedTime: string | null; // 추가
  setSelectedTime: (time: string | null) => void; // 추가
  selectedDate: string | null; // 추가
  setSelectedDate: (date: string | null) => void; // 추가
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
          prologueTitle: "Editor's Note",
          prologueContent: "Editor's Note",
        },
        {
          category: "Teamstory",
          title: "두개의 답에서, 또 다른 질문으로",
          desc: "길을 만들어가는 사람들 시리즈 | 다섯 번째 이야기",
          date: "2025년 7월 1일",
          author: "nexacode",
          thumbnailPath: "/images/blog/image_02.jpg",
          content: "<div>BlogContent1</div>",
          prologueTitle: "Editor's Note",
          prologueContent: "Editor's Note",
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
              prologueTitle: "Editor's Note",
              prologueContent: "Editor's Note",
            },
            {
              category: "Teamstory",
              title: "두개의 답에서, 또 다른 질문으로",
              desc: "길을 만들어가는 사람들 시리즈 | 다섯 번째 이야기",
              date: "2025년 7월 1일",
              author: "nexacode",
              thumbnailPath: "/images/blog/image_02.jpg",
              content: "<div>BlogContent1</div>",
              prologueTitle: "Editor's Note",
              prologueContent: "Editor's Note",
            },
          ],
        })),
      selectedTime: null, // 추가
      setSelectedTime: (time: string | null) => set({ selectedTime: time }), // 추가
      selectedDate: null, // 추가
      setSelectedDate: (date: string | null) => set({ selectedDate: date }), // 추가
    }),
    {
      name: "blog-storage",
      partialize: (state) =>
        Object.fromEntries(
          Object.entries(state).filter(
            ([key]) =>
              key !== "selectedTime" &&
              key !== "setSelectedTime" &&
              key !== "selectedDate" &&
              key !== "setSelectedDate"
          )
        ),
    }
  )
);
