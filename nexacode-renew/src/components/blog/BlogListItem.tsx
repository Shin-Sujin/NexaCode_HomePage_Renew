// components/BlogListItem.tsx 아이템 컴포넌트
import Image from "next/image";
import React from "react";
import Link from "next/link";

interface BlogListItemProps {
  category: string;
  title: string;
  description: string;
  date: string;
  author: string;
  thumbnailPath: string;
  index: number;
}
export const BlogListItem = ({
  category,
  title,
  date,
  author,
  index,
  thumbnailPath,
  description,
}: BlogListItemProps) => {
  function formatKoreanDate(dateString: string) {
    // 이미 한글 형식이면 그대로 반환
    if (dateString.match(/년.*월.*일/)) return dateString;
    const date = new Date(dateString);
    if (isNaN(date.getTime())) return dateString;
    return `${date.getFullYear()}년 ${
      date.getMonth() + 1
    }월 ${date.getDate()}일`;
  }
  return (
    <Link
      href={`/blog/${index}`}
      className="block"
      onClick={() => console.log("클릭한 블로그 index:", index)}
    >
      <div className="flex flex-col md:flex-row items-start mx-auto justify-between gap-6 border-b border-gray-200 py-8 cursor-pointer group max-md:gap-1 max-md:px-4 ">
        {/* Image */}
        <div className="w-full md:w-[210px] h-[187px] max-w-[210px] max-h-[187px] flex-shrink-0 relative overflow-hidden md:order-2 order-1 max-md:w-full max-md:h-[187px] max-lg:h-[500px] ">
          <Image
            src={thumbnailPath}
            alt={title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        {/* Texts (category, title, desc, meta) */}
        <div className="flex-1 flex flex-col md:order-1 order-2 w-full">
          <span className="text-sm text-gray-500 font-medium mb-3 block">
            {category}
          </span>
          <h3 className="text-3xl font-500 break-keep leading-normal text-gray-900 mb-2 max-md:text-2xl max-md:mb-1 max-md:mt-2">
            {title}
          </h3>
          <p className="text-gray-500 text-lg pr-32 break-keep max-md:text-base max-md:hidden">
            {description}
          </p>
          <div className="text-sm text-gray-400 mt-5 max-md:text-xs max-md:mt-1">
            {formatKoreanDate(date)} &nbsp;·&nbsp; {author}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default BlogListItem;
