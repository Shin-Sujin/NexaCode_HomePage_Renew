"use client";

import { useEffect } from "react";
import feather from "feather-icons";

export default function FloatingRight() {
  useEffect(() => {
    feather.replace();
  }, []);

  return (
    <button className="floating right">
      <i data-feather="arrow-up"></i>
    </button>
  );
}
