import React, { useCallback, useState, useEffect } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { useBlogStore } from "@/src/stores/store";

type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];
const BlogCalendar = () => {
  const [calendarValue, setCalendarValue] = useState<Value>(null);
  const setSelectedDate = useBlogStore((state) => state.setSelectedDate);

  // 마운트 시 오늘 날짜를 store에 저장
  useEffect(() => {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, "0");
    const day = String(today.getDate()).padStart(2, "0");
    setSelectedDate(`${year}. ${month}. ${day}.`);
  }, [setSelectedDate]);

  const onChangeCalendar = useCallback((value: Value) => {
    setCalendarValue(value);
  }, []);
  return (
    <div>
      <Calendar
        onChange={onChangeCalendar}
        value={calendarValue}
        onClickDay={(value) => {
          if (
            calendarValue instanceof Date &&
            value.getFullYear() === calendarValue.getFullYear() &&
            value.getMonth() === calendarValue.getMonth() &&
            value.getDate() === calendarValue.getDate()
          ) {
          } else {
            setCalendarValue(value); // 새로 선택
            const year = value.getFullYear();
            const month = String(value.getMonth() + 1).padStart(2, "0");
            const day = String(value.getDate()).padStart(2, "0");
            setSelectedDate(`${year}. ${month}. ${day}.`);
          }
        }}
        tileClassName={({ date, view }) => {
          if (
            view === "month" &&
            calendarValue instanceof Date &&
            date.getFullYear() === calendarValue.getFullYear() &&
            date.getMonth() === calendarValue.getMonth() &&
            date.getDate() === calendarValue.getDate()
          ) {
            return "selected-red";
          }
          return null;
        }}
      />
    </div>
  );
};

export default BlogCalendar;
