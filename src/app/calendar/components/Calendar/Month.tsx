import BigCalendar from "@/ui/organism/Calendar";
import "@/ui/organism/Calendar/style/month.css";
import { IDefaultBigCalendarProps } from "./types";

function MonthBigCalendar({ view, onView }: IDefaultBigCalendarProps) {
  return <BigCalendar view={view} onView={onView} />;
}

export default MonthBigCalendar;
