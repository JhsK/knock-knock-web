"use client";

import { Calendar, dayjsLocalizer } from "react-big-calendar";
import dayjs from "dayjs";
import "./index.css";
import "dayjs/locale/ko";
import MonthDateHeader from "@/ui/organism/Calendar/month/DateHeader";
import MonthEvent from "@/ui/organism/Calendar/month/Event";
import Toolbar from "@/ui/organism/Calendar/Toolbar";
import WeekDateHeader from "@/ui/organism/Calendar/week/DateHeader";
import TimeGutterHeader from "@/ui/organism/Calendar/TimeGutterHeader";
import TimeSlotWrapper from "@/ui/organism/Calendar/TimeSlotWrapper";

dayjs.locale("ko");
const localizer = dayjsLocalizer(dayjs);

const mockEvent = [
  {
    id: 1,
    title: "Long Event",
    type: "test1",
    start: new Date(2024, 5, 9),
    end: new Date(2024, 5, 9),
  },
  // {
  //   id: 2,
  //   title: "Long Even2",
  //   type: "test2",
  //   start: new Date(2024, 5, 13, 0, 0, 0),
  //   end: new Date(2024, 5, 13, 0, 0, 0),
  // },
];

function BigCalendar() {
  return (
    <div className="w-full h-full">
      <Calendar
        localizer={localizer}
        events={mockEvent}
        views={["week", "day", "month"]}
        defaultView="week"
        startAccessor="start"
        endAccessor="end"
        formats={{
          timeGutterFormat: (date, culture, localizer) => {
            if (localizer) {
              return localizer.format(date, `A h시`, culture);
            }
            return dayjs().format("A h시");
          },
        }}
        components={{
          event: MonthEvent,
          toolbar: Toolbar,
          timeGutterHeader: TimeGutterHeader,
          timeGutterWrapper: TimeSlotWrapper,
          month: {
            dateHeader: MonthDateHeader,
          },
          week: {
            header: WeekDateHeader,
          },
        }}
        // slotPropGetter={customSlotPropGetter}
      />
    </div>
  );
}

export default BigCalendar;
