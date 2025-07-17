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
      <div className="flex items-start justify-between gap-6 border-b border-gray-200 py-8 cursor-pointer group">
        <div className="flex-1">
          <span className="text-sm text-gray-500 font-medium mb-3 block">
            {category}
          </span>
          <h3 className="text-3xl font-500 text-gray-900 mb-2">{title}</h3>
          <p className="text-gray-500 text-lg">{desc}</p>
          <div className="text-sm text-gray-400 mt-5">
            {date} &nbsp;·&nbsp; {author}
          </div>
        </div>
        <div className="w-[300px] h-[187px] flex-shrink-0 relative overflow-hidden">
          <Image
            src={thumbnail}
            alt={title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
      </div>
    </Link>
  );
};

export default BlogListItem;
