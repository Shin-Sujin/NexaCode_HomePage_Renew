"use client";

import { useEffect } from "react";
import feather from "feather-icons";

export default function FloatingLeft() {
  useEffect(() => {
    feather.replace();
  }, []);

  return (
    <aside className="floating left  max-pf_lg:hidden">
      <div className="buttons">
        <button className="button">
          <i data-feather="message-circle"></i>3
        </button>
        <button className="button">
          <i data-feather="heart"></i>9
        </button>
        <button className="button">
          <i data-feather="share-2"></i>
        </button>
      </div>
    </aside>
  );
}
