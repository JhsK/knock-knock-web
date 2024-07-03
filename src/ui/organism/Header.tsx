import Menu from "../molecule/Menu";

function Header() {
  return (
    <div className="px-10 h-16 flex items-center justify-between border-b border-b-[#EAECF0]">
      <span>Logo</span>
      <Menu />
      <span>test</span>
    </div>
  );
}

export default Header;
