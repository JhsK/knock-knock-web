"use client";

import dayjs from "dayjs";
import "dayjs/locale/ko";
import { useState } from "react";
import { Calendar, View, dayjsLocalizer } from "react-big-calendar";
import MonthEvent from "./month/Event";
import Toolbar from "./Toolbar";
import TimeGutterHeader from "./TimeGutterHeader";
import TimeSlotWrapper from "./TimeSlotWrapper";
import MonthDateHeader from "./month/DateHeader";
import WeekDateHeader from "./week/DateHeader";
import "./style/common.css";

dayjs.locale("ko");
const localizer = dayjsLocalizer(dayjs);

const mockEvent = [
  {
    id: 1,
    title: "Long Event",
    type: "test1",
    start: new Date(2024, 7, 3),
    end: new Date(2024, 7, 3),
  },
  {
    id: 2,
    title: "Long Event",
    type: "test1",
    start: new Date(2024, 7, 3),
    end: new Date(2024, 7, 3),
  },
  {
    id: 3,
    title: "Long Event",
    type: "test1",
    start: new Date(2024, 7, 3),
    end: new Date(2024, 7, 3),
  },
  {
    id: 4,
    title: "Long Event",
    type: "test1",
    start: new Date(2024, 7, 3),
    end: new Date(2024, 7, 3),
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
  const [date, setDate] = useState(dayjs().format());
  const [view, setView] = useState<View>("month");

  return (
    <div className="w-full h-full">
      <Calendar
        localizer={localizer}
        events={mockEvent}
        date={date}
        views={["week", "day", "month"]}
        defaultView={view}
        view={view}
        startAccessor="start"
        endAccessor="end"
        onView={(view) => setView(view)}
        onNavigate={(date) => setDate(dayjs(date).format())}
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
