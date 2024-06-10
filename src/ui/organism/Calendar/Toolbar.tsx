import { dayjs } from "@/lib/dayjs";
import { ToolbarProps } from "react-big-calendar";

function Toolbar({ date }: ToolbarProps) {
  const title = dayjs(date).format(`YYYY년 M월`);

  return (
    <div className="w-full flex items-center justify-between px-6 pb-[18px] pt-[34px]">
      <div>
        <span>{title}</span>
        <button>이전</button>
        <button>다움</button>
      </div>
      <div>
        <span>오늘</span>
        <span>월간</span>
        <input type="text" />
      </div>
    </div>
  );
}

export default Toolbar;
