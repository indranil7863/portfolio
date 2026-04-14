
"use client";

import {ReactNode} from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation';

function NavLink({href, children}: {href: string, children:ReactNode}) {
    const pathname = usePathname()
    const isActive = pathname === href
  return (

    <Link className={`${isActive ? "text-gray-200 font-semibold border-b-2 pb-0.5 border-b-red-500" : "text-gray-500 hover:text-red-500"}`} href={href}>{children} </Link>
  )
}

export default NavLink