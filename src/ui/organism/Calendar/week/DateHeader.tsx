import { dayjs } from "@/lib/dayjs";
import { HeaderProps } from "react-big-calendar";

function WeekDateHeader({ date }: HeaderProps) {
  const dayNumber = dayjs(date).format("DD");
  const dayKr = dayjs(date).format("ddd");

  return (
    <div>
      <span className="mr-1">{dayNumber}</span>
      <span>{dayKr}</span>
    </div>
  );
}

export default WeekDateHeader;
