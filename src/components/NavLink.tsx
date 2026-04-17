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
        className={`text-center ${isActive ? " text-red-500 font-semibold border-b-2 pb-0.5 border-b-red-500" : "text-gray-200 font-semibold hover:text-red-500"}`}
        href={href}
      >
        {children}{" "}
      </Link>
    </>
  );
}

export default NavLink;
