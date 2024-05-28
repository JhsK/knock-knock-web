import Link from "next/link";

const menus = [
  {
    title: "지원관리",
    href: "/#",
  },
  {
    title: "내 목표",
    href: "/#",
  },
  {
    title: "캘린더",
    href: "/#",
  },
  {
    title: "북마크",
    href: "/#",
  },
  {
    title: "자소서",
    href: "/#",
  },
];

function Menu() {
  return (
    <nav>
      <ul className="flex items-center gap-4">
        {menus.map((menu, i) => (
          <li key={i} className="cursor-pointer">
            <Link href={menu.href}>{menu.title}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Menu;
