import React from "react";
import { useBlogStore } from "@/src/stores/store";

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

interface BlogTimeSelectProps {
  disabled?: boolean;
}
export default function BlogTimeSelect({
  disabled = false,
}: BlogTimeSelectProps) {
  // const [selected, setSelected] = useState<string | null>(null);
  const selected = useBlogStore((state) => state.selectedTime);
  const setSelectedTime = useBlogStore((state) => state.setSelectedTime);

  return (
    <div className="w-full max-w-xl mx-auto border border-gray-400 p-2">
      <h2 className="text-base font-bold mb-3 text-gray-700">시간 선택</h2>

      <div className="grid grid-cols-5 gap-4">
        {times.map((time) => {
          const isSelected = selected === time;
          return (
            <button
              key={time}
              type="button"
              disabled={disabled}
              onClick={disabled ? undefined : () => setSelectedTime(time)}
              className={`
                py-3 px-2 rounded-lg border
                text-xs font-semibold
                transition bg-white text-gray-700 border-gray-200 hover:border-gray-400
                ${disabled ? "opacity-50 cursor-not-allowed" : ""}
                ${
                  isSelected
                    ? "border-red-500 bg-red-200 text-gray-900 shadow bg-red-100"
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
