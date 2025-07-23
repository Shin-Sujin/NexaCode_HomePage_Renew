import React, { useState } from "react";

const times = [
  "10:00",
  "10:30",
  "11:00",
  "11:30",
  "12:00",
  "12:30",
  "13:00",
  "13:30",
  "14:00",
  "14:30",
  "15:00",
  "15:30",
  "16:00",
  "16:30",
  "17:00",
  "17:30",
  "18:00",
  "18:30",
  "19:00",
  "19:30",
];

export default function BlogTimeSelect() {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <div className="w-full max-w-xl mx-auto">
      <h2 className="text-lg font-bold mb-2 text-gray-700">시간 선택</h2>

      <div className="grid grid-cols-5 gap-4">
        {times.map((time) => {
          const isSelected = selected === time;
          return (
            <button
              key={time}
              type="button"
              onClick={() => setSelected(time)}
              className={`
                py-3 px-2 rounded-lg border
                text-xs font-semibold
                transition bg-white text-gray-700 border-gray-200 hover:border-gray-400
                   
                }
                ${
                  isSelected
                    ? "border-red-300 text-gray-900 shadow bg-red-100"
                    : ""
                }
              `}
            >
              {time}
            </button>
          );
        })}
      </div>
    </div>
  );
}
