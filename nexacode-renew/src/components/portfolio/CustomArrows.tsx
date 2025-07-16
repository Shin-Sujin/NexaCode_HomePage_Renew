// components/CustomArrows.tsx
export const PrevArrow = ({ onClick }: { onClick?: () => void }) => (
  <button
    onClick={onClick}
    className="flex items-center gap-2 text-black text-base font-400  hover:opacity-70"
  >
    <span className="text-lg">←</span>
    PREV
  </button>
);

export const NextArrow = ({ onClick }: { onClick?: () => void }) => (
  <button
    onClick={onClick}
    className="flex items-center gap-2 text-black text-base font-400 hover:opacity-70"
  >
    NEXT
    <span className="text-lg">→</span>
  </button>
);
