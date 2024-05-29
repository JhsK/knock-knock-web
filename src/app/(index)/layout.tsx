import Header from "@/ui/organism/Header";
import Sidebar from "@/ui/organism/Sidebar";

export default function IndexLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <Header />
      <div className="flex">
        <Sidebar />
        <section>{children}</section>
      </div>
    </div>
  );
}
