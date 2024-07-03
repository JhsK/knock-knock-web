import Header from "@/ui/organism/Header";
import { Sidebar } from "@/ui/organism/Sidebar";

export default function IndexLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <Header />
      <div className="flex">
        <Sidebar>
          <Sidebar.Body>지원한 공고 추가</Sidebar.Body>
        </Sidebar>
        <section>{children}</section>
      </div>
    </div>
  );
}
