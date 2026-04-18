"use client";

import { ReactNode, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

function NavLink({ href, children }: { href: string; children: ReactNode }) {
  const pathname = usePathname();
  const isActive = pathname === href;

  const [isClicked, setIsClicked] = useState<boolean>(false);

  return (
    <>
      <Link
        className={`text-center text-[#333333] ${isActive ? " text-[#d97757] font-semibold border-b-2 pb-0.5 border-b-[#d97757]" : "dark:text-gray-200 font-semibold hover:text-red-500"}`}
        href={href}
      >
        {children}{" "}
      </Link>
    </>
  );
}

export default NavLink;
