import Sidebar from "@/ui/organism/Sidebar";

export default function IndexLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex">
      <Sidebar />
      <section>{children}</section>
    </div>
  );
}
