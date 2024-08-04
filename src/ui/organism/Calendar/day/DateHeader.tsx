import { dayjs } from "@/lib/dayjs";
import { HeaderProps } from "react-big-calendar";

function DayDateHeader({ date }: HeaderProps) {
  const day = dayjs(date).format("ddd DD");

  return <div className="font-medium">{day}</div>;
}

export default DayDateHeader;
