"use client";

import { Icon } from "@/ui/atom/Icon";
import BigCalendar from "@/ui/organism/Calendar";
import DayPicker from "@/ui/organism/DayPicker";
import { Sidebar } from "@/ui/organism/Sidebar";
import CalendarCheckbox from "./components/CalendarCheckbox";

function CalendarPage() {
  return (
    <div className="flex">
      <Sidebar>
        <Sidebar.Header>내 일정 추가</Sidebar.Header>
        <Sidebar.Body>
          <DayPicker />
        </Sidebar.Body>
        <Sidebar.Hr />
        <Sidebar.Body>
          <CalendarCheckbox />
        </Sidebar.Body>
      </Sidebar>
      <section className="w-full h-without-header">
        <BigCalendar />
      </section>
    </div>
  );
}

export default CalendarPage;
