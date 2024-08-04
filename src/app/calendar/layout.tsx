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
      {children}
    </div>
  );
}
