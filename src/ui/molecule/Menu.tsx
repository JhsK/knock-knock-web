"use client";
import Link from "next/link";
import { Text } from "../atom/Text";
import { usePathname } from "next/navigation";

const menus = [
  {
    title: "지원 현황",
    href: "/register",
  },
  {
    title: "내 일정",
    href: "/calendar",
  },
  {
    title: "저장한 공고",
    href: "/bookmark",
  },
];

function Menu() {
  const pathname = usePathname();

  return (
    <nav>
      <ul className="flex items-center gap-4">
        {menus.map((menu, i) => (
          <li key={i} className="cursor-pointer">
            <Link href={menu.href}>
              <Text weight={menu.href === pathname ? "bold" : "regular"}>
                {menu.title}
              </Text>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Menu;
