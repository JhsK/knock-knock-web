"use client";

import BigCalendar from "@/ui/organism/Calendar";
import DayPicker from "@/ui/organism/DayPicker";
import { Sidebar } from "@/ui/organism/Sidebar";
import CalendarCheckbox from "./components/CalendarCheckbox";
import { useState } from "react";
import Modal from "@/ui/organism/Modal";

function CalendarPage() {
  const [showModal, setShowModal] = useState(false);

  const handleSelectSlot = () => {
    setShowModal(true);
  };

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
        <BigCalendar handleSelectSlot={handleSelectSlot} />
      </section>
      <Modal show={showModal}>
        <form className="flex flex-col gap-2">
          <input type="text" placeholder="제목 입력" />
          <input type="text" placeholder="장소 입력" />
          <input type="text" placeholder="메모 입력" />
          <button type="submit">추가하기</button>
          <button onClick={() => setShowModal((prev) => !prev)}>
            취소하기
          </button>
        </form>
      </Modal>
    </div>
  );
}

export default CalendarPage;
