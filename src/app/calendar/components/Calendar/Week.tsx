import BigCalendar from "@/ui/organism/Calendar";
import "@/ui/organism/Calendar/style/week.css";
import { IDefaultBigCalendarProps } from "./types";

function WeekBigCalendar({ view, onView }: IDefaultBigCalendarProps) {
  return <BigCalendar view={view} onView={onView} />;
}

export default WeekBigCalendar;
