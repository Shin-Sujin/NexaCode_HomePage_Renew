// components/BlogListItem.tsx 아이템 컴포넌트
import Image from "next/image";
import React from "react";
import Link from "next/link";

interface BlogListItemProps {
  category: string;
  title: string;
  desc: string;
  date: string;
  author: string;
  thumbnailPath: string;
  index: number;
}
export const BlogListItem = ({
  category,
  title,
  desc,
  date,
  author,
  index,
  thumbnailPath,
}: BlogListItemProps) => {
  return (
    <Link
      href={`/blog/${index}`}
      className="block"
      onClick={() => console.log("클릭한 블로그 index:", index)}
    >
      <div className="flex flex-col md:flex-row items-start mx-auto justify-between gap-6 border-b border-gray-200 py-8 cursor-pointer group max-md:gap-1 max-md:px-4 ">
        {/* Image */}
        <div className="w-full md:w-[300px] h-[187px] max-w-[500px] max-h-[187px] flex-shrink-0 relative overflow-hidden md:order-2 order-1 max-md:w-full max-md:h-[187px] max-lg:h-[500px] ">
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
          <h3 className="text-3xl font-500 text-gray-900 mb-2 max-md:text-2xl max-md:mb-1 max-md:mt-2">
            {title}
          </h3>
          <p className="text-gray-500 text-lg max-md:text-base max-md:hidden">
            {desc}
          </p>
          <div className="text-sm text-gray-400 mt-5 max-md:text-xs max-md:mt-1">
            {date} &nbsp;·&nbsp; {author}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default BlogListItem;
