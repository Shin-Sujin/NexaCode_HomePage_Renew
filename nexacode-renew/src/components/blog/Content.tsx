"use client";

import { useEffect } from "react";
import feather from "feather-icons";
import { blogList } from "./blogItem";

export default function Content() {
  useEffect(() => {
    feather.replace();
  }, []);

  const ContentComponent = blogList[0].content;
  return <ContentComponent />;
}
