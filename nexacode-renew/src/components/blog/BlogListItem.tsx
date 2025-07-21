// components/BlogListItem.tsx
import Image from "next/image";
import React from "react";
import Link from "next/link";

type Props = {
  category: string;
  title: string;
  desc: string;
  date: string;
  author: string;
  thumbnail: string;
};

export const BlogListItem = ({
  category,
  title,
  desc,
  date,
  author,
  thumbnail,
}: Props) => {
  return (
    <Link href="/blog" className="block">
      <div className="flex items-start justify-between gap-6 border-b border-gray-200 py-8 cursor-pointer group md:flex-row flex-col max-md:gap-1 max-md:px-4 ">
        {/* category */}
        <span className="text-sm text-gray-500 font-medium mb-3 block md:order-1 order-1">
          {category}
        </span>
        {/* Image */}
        <div className="w-[300px] h-[187px] flex-shrink-0 relative overflow-hidden md:order-3 order-2 max-md:w-full max-md:h-[187px] max-lg:h-[500px] ">
          <Image
            src={thumbnail}
            alt={title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        {/* Texts */}
        <div className="flex-1 md:order-2 order-3 flex flex-col">
          <h3 className="text-3xl font-500 text-gray-900 mb-2 order-1 max-md:text-2xl max-md:mb-1 max-md:mt-2">
            {title}
          </h3>
          <p className="text-gray-500 text-lg order-2 max-md:text-base max-md:hidden">
            {desc}
          </p>
          <div className="text-sm text-gray-400 mt-5 order-3 max-md:text-xs max-md:mt-1">
            {date} &nbsp;·&nbsp; {author}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default BlogListItem;
