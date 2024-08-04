"use client";

import { Icon } from "@/ui/atom/Icon";
import { Checkbox } from "@/ui/molecule/Checkbox";

const CHECK_FILTER_LIST = [
  {
    name: "내 일정",
    value: "private",
  },
  {
    name: "목표 캘린더",
    value: "goals",
  },
  {
    name: "대한민국 공휴일",
    value: "holiday",
  },
];

function CalendarCheckbox() {
  return (
    <>
      <div className="w-full flex items-center justify-between mb-3">
        <span>전체 캘린더</span>
        <Icon id="plus" size="md" fill="#98A2B3" stroke="transparent" />
      </div>
      <div className="pl-2 py-2">
        {CHECK_FILTER_LIST.map((checkFilter) => (
          <div key={checkFilter.value}>
            <Checkbox
              id={checkFilter.name}
              name={checkFilter.name}
              value={checkFilter.value}
            />
            <label className="select-none" htmlFor={checkFilter.name}>
              {checkFilter.name}
            </label>
          </div>
        ))}
      </div>
    </>
  );
}

export default CalendarCheckbox;
