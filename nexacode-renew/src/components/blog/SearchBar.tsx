import React from "react";

interface SearchBarProps {
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSearch?: () => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ value, onChange, onSearch }) => {
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && onSearch) {
      onSearch();
    }
  };

  return (
    <div
      className="w-full flex items-center border border-gray-300 rounded-full px-6 py-3 mb-8"
      style={{ background: "#fff" }}
    >
      <input
        type="text"
        className="flex-1 outline-none bg-transparent text-lg text-gray-500 placeholder-gray-400"
        placeholder="제목 & 키워드를 검색해 주세요"
        value={value}
        onChange={onChange}
        onKeyDown={handleKeyDown}
      />
      <button
        type="button"
        className="ml-2 focus:outline-none"
        onClick={onSearch}
        aria-label="검색"
      >
        <svg
          width="24"
          height="24"
          fill="none"
          stroke="#888"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <circle cx="11" cy="11" r="8" />
          <line x1="21" y1="21" x2="16.65" y2="16.65" />
        </svg>
      </button>
    </div>
  );
};

export default SearchBar;
