"use client";

import "./style.css";
import { DayPicker as ImportDayPicker } from "react-day-picker";
import { useState } from "react";
import { ko } from "date-fns/locale";
import DayPickerChevron from "./Chevron";

interface DayPickerProps {
  selected?: Date;
  handleChnageSelected?: () => void;
}

function DayPicker() {
  const [selected, setSelected] = useState<Date>();

  const currentMonth = new Date().getMonth();
  const disabledDays = (date: Date) => date.getMonth() !== currentMonth;

  return (
    <div className="w-full">
      <ImportDayPicker
        mode="single"
        locale={ko}
        components={{
          Chevron: (props) => <DayPickerChevron {...props} />,
        }}
        selected={selected}
        onSelect={setSelected}
        showOutsideDays
        disabled={disabledDays}
        styles={{
          nav: {
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          },
          month_caption: {
            justifyContent: "center",
          },
        }}
        footer={
          selected
            ? `Selected: ${selected.toLocaleDateString()}`
            : "Pick a day."
        }
      />
    </div>
  );
}

export default DayPicker;
