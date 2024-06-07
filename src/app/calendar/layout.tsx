import Header from "@/ui/organism/Header";
import Sidebar from "@/ui/organism/Sidebar";

export default function CalendarLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <Header />
      <div className="flex">
        <Sidebar />
        <section className="w-full">{children}</section>
      </div>
    </div>
  );
}
