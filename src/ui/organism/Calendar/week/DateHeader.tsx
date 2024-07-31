import { dayjs } from "@/lib/dayjs";
import { HeaderProps } from "react-big-calendar";

function WeekDateHeader({ date }: HeaderProps) {
  const dayNumber = dayjs(date).format("DD");
  const dayKr = dayjs(date).format("ddd");

  return (
    <div>
      <span className="mr-1 text-[#98A2B3]">{dayKr}</span>
      <span className="text-black">{dayNumber}</span>
    </div>
  );
}

export default WeekDateHeader;
