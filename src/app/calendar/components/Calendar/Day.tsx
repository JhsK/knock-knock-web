import BigCalendar from "@/ui/organism/Calendar";
import "@/ui/organism/Calendar/style/day.css";
import { IDefaultBigCalendarProps } from "./types";

function DayBigCalendar({ view, onView }: IDefaultBigCalendarProps) {
  return <BigCalendar view={view} onView={onView} />;
}

export default DayBigCalendar;
