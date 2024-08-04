import DayPicker from "@/ui/organism/DayPicker";
import Header from "@/ui/organism/Header";
import { Sidebar } from "@/ui/organism/Sidebar";

export default function CalendarLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <Header />
      <div className="flex h-full">
        <Sidebar>
          <Sidebar.Header>내 일정 추가</Sidebar.Header>
          <Sidebar.Body>
            <DayPicker />
          </Sidebar.Body>
        </Sidebar>
        <section className="w-full h-without-header">{children}</section>
      </div>
    </div>
  );
}
