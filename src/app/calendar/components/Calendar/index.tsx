"use client";

import { Calendar, dayjsLocalizer } from "react-big-calendar";
import dayjs from "dayjs";
import "./index.css";
import "dayjs/locale/ko";
import MonthDateHeader from "@/ui/organism/Calendar/month/DateHeader";
import MonthEvent from "@/ui/organism/Calendar/month/Event";

dayjs.locale("ko");
const localizer = dayjsLocalizer(dayjs);

function BigCalendar() {
  return (
    <div className="w-full h-full">
      <Calendar
        localizer={localizer}
        events={[
          {
            id: 1,
            title: "Long Event",
            type: "test1",
            start: new Date(2024, 5, 7),
            end: new Date(2024, 5, 10),
          },
          {
            id: 2,
            title: "Long Even2",
            type: "test2",
            start: new Date(2024, 5, 13, 0, 0, 0),
            end: new Date(2024, 5, 13, 0, 0, 0),
          },
        ]}
        startAccessor="start"
        endAccessor="end"
        components={{
          event: MonthEvent,
          month: {
            dateHeader: MonthDateHeader,
          },
        }}
        // slotPropGetter={customSlotPropGetter}
      />
    </div>
  );
}

export default BigCalendar;
