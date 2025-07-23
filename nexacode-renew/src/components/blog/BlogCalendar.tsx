import React, { useCallback, useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];
const BlogCalendar = () => {
  const [calendarValue, setCalendarValue] = useState<Value>(new Date());

  const onChangeCalendar = useCallback(() => {
    setCalendarValue(calendarValue);
  }, [calendarValue]);
  return (
    <div>
      <Calendar onChange={onChangeCalendar} value={calendarValue} />
    </div>
  );
};

export default BlogCalendar;
