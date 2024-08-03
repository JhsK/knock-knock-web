import { dayjs } from "@/lib/dayjs";
import { Icon } from "@/ui/atom/Icon";
import { ToolbarProps } from "react-big-calendar";

function Toolbar({ date, onNavigate, onView }: ToolbarProps) {
  const title = dayjs(date).format(`YYYY년 M월`);

  return (
    <div className="w-full flex items-center justify-between px-6 pb-[18px] pt-[34px]">
      <div className="flex items-center gap-2">
        <span className="font-medium text-2xl">{title}</span>
        <div className="flex items-center gap-1">
          <Icon
            id="chevronLeft"
            cursor="pointer"
            onClick={() => onNavigate("PREV")}
          />
          <Icon
            id="chevronRight"
            cursor="pointer"
            onClick={() => onNavigate("NEXT")}
          />
        </div>
      </div>
      <div>
        <span onClick={() => onNavigate("PREV")}>오늘</span>
        <span onClick={() => onView("month")}>월간</span>
        <span onClick={() => onView("week")}>주간</span>
        <input type="text" />
      </div>
    </div>
  );
}

export default Toolbar;
