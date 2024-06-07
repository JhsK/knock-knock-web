"use client";

import { Calendar, dayjsLocalizer } from "react-big-calendar";
import dayjs from "dayjs";
import "./index.css";
import "dayjs/locale/ko";

dayjs.locale("ko");
const localizer = dayjsLocalizer(dayjs);

function BigCalendar() {
  return (
    <div className="w-full h-full">
      <Calendar
        localizer={localizer}
        //   events={myEventsList}
        startAccessor="start"
        endAccessor="end"
        // components={{
        //   month: {
        //     header: MonthHeader,
        //   },
        // }}
        // slotPropGetter={customSlotPropGetter}
      />
    </div>
  );
}

export default BigCalendar;
