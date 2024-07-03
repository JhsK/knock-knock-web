import SidebarBody from "./Body";
import SidebarFooter from "./Footer";

const SidebarContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <aside className="px-4 py-8 bg-[##FCFCFD] border-r border-[#EAECF0] w-[256px]">
      {children}
    </aside>
  );
};

export const Sidebar = Object.assign(SidebarContainer, {
  Body: SidebarBody,
  Footer: SidebarFooter,
});
