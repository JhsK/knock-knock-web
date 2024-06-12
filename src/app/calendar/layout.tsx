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
      <div className="flex h-full">
        <Sidebar />
        <section className="w-full h-without-header">{children}</section>
      </div>
    </div>
  );
}
