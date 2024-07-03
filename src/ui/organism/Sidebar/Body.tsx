import { Button } from "@/ui/atom/Button";

function SidebarBody({ children }: { children: string }) {
  return (
    <div className="w-full">
      <Button className="w-full">{children}</Button>
    </div>
  );
}

export default SidebarBody;
