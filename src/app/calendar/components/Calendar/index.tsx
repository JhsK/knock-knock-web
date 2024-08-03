"use client";

import { useState } from "react";
import { View } from "react-big-calendar";
import MonthBigCalendar from "./Month";
import WeekBigCalendar from "./Week";
import DayBigCalendar from "./Day";

function IndexBigCalendar() {
  const [view, setView] = useState<View>("month");

  const handleChangeView = (view: View) => {
    setView(view);
  };

  const renderBigCalendarByView = () => {
    if (view === "month")
      return <MonthBigCalendar view={view} onView={handleChangeView} />;
    if (view === "week")
      return <WeekBigCalendar view={view} onView={handleChangeView} />;
    if (view === "day")
      return <DayBigCalendar view={view} onView={handleChangeView} />;

    return <></>;
  };

  return <>{renderBigCalendarByView()}</>;
}

export default IndexBigCalendar;
