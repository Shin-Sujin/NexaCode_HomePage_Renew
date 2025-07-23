import React, { useCallback, useState, useEffect } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { useBlogStore } from "@/src/stores/store";

type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];
const BlogCalendar = () => {
  const [calendarValue, setCalendarValue] = useState<Value>(new Date());
  const setSelectedDate = useBlogStore((state) => state.setSelectedDate);

  // 마운트 시 오늘 날짜를 store에 저장
  useEffect(() => {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, "0");
    const day = String(today.getDate()).padStart(2, "0");
    setSelectedDate(`${year}년 ${month}월 ${day}일`);
  }, [setSelectedDate]);

  const onChangeCalendar = useCallback(() => {
    setCalendarValue(calendarValue);
  }, [calendarValue]);
  return (
    <div>
      <Calendar
        onChange={onChangeCalendar}
        value={calendarValue}
        onClickDay={(value) => {
          const year = value.getFullYear();
          const month = String(value.getMonth() + 1).padStart(2, "0");
          const day = String(value.getDate()).padStart(2, "0");
          setSelectedDate(`${year}년 ${month}월 ${day}일`);
        }}
      />
    </div>
  );
};

export default BlogCalendar;
