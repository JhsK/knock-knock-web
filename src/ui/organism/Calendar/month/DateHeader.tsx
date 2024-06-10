import { dayjs } from "@/lib/dayjs";
import { cn } from "@/lib/utils";
import { DateHeaderProps } from "react-big-calendar";

function MonthDateHeader({ date, label }: DateHeaderProps) {
  const isToday = dayjs(date).isToday();
  return (
    <span
      className={cn(
        "",
        isToday &&
          "rounded-full bg-slate-500 text-white w-[22px] h-[22px] inline-flex items-center justify-center"
      )}
    >
      {label}
    </span>
  );
}

export default MonthDateHeader;
