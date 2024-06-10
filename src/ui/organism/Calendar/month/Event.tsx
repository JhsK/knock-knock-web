import { EventProps } from "react-big-calendar";

interface ICustomEvent {
  id: number;
  title: string;
  start: Date;
  end: Date;
}

interface IMonthEventProps extends EventProps<ICustomEvent> {}

function MonthEvent({ title, event }: IMonthEventProps) {
  return (
    <div className="w-full border-l-4 border-blue-600 bg-blue-100 p-1.5">
      <span className="text-xs text-blue-800">{title}</span>
    </div>
  );
}

export default MonthEvent;
