"use client";

import LightModeIcon from "@mui/icons-material/LightMode";
import NightsStayIcon from "@mui/icons-material/NightsStay";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import LaunchIcon from "@mui/icons-material/Launch";
import Sidebar from "./Sidebar";

import NavLink from "./NavLink";
import Link from "next/link";
import { useState } from "react";
import { ModeToggle } from "@/app/(application)/components/ModeToggle";

function Navbar() {
  const [isToggle, setIsToggle] = useState<Boolean>(false);

  function toggleBtnHandler() {
    setIsToggle((prev) => !prev);
  }

  return (
    <nav className="dark:bg-gray-900 bg-[#ffffff] z-5 text-white flex lg:flex-row  gap-4 justify-between px-8 items-center py-4 flex-wrap sticky top-0 ">
      <Link href={"/"} className="relative order-1 lg:order-1">
        <h1 className="text-2xl tracking-widest font-medium">
          <span className="text-blue-600">INDRA</span>
          <span className="text-[#1e1b18] dark:text-white">NIL</span>
          <span className="text-red-600">B</span>
          <span className="text-[#1e1b18] dark:text-white">ERA</span>
        </h1>
        <p className="absolute top-[90%] text-[10px] tracking-[2PX] w-full dark:text-gray-400 text-[#1e1b18]">
          FULLSTACK | DEVELOPMENT
        </p>
      </Link>

      <div className="hidden lg:flex order-2 lg:order-2 flex-row justify-evenly gap-8  text-gray-500">
        <div className="flex flex-row justify-center items-center gap-2 group">
          <Link
            href={"https://www.linkedin.com/in/indranil-bera-a12132256/"}
            target="_blank"
            className="text-xl font-light group-hover:text-blue-600"
          >
            Linkedin
          </Link>
          <LaunchIcon
            className="text-sm group-hover:text-blue-500 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
            fontSize="inherit"
          />
        </div>
        <div className="flex flex-row justify-center items-center gap-2 group">
          <Link
            href={
              "https://drive.google.com/file/d/1M9yiSvqmmInon36nhFi_SxfXiT60mu4r/view?usp=drivesdk"
            }
            target="_blank"
            className="text-xl font-light group-hover:text-blue-600"
          >
            Resume
          </Link>
          <LaunchIcon
            className="text-sm group-hover:text-blue-500 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
            fontSize="inherit"
          />
        </div>
        <div className="flex flex-row justify-center items-center gap-2 group">
          <Link
            target="_blank"
            href={"https://github.com/indranil7863"}
            className="text-xl font-light group-hover:text-blue-600"
          >
            gitHub
          </Link>

          <LaunchIcon
            className="text-sm  group-hover:text-blue-500 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
            fontSize="inherit"
          />
        </div>
      </div>
      <div className="lg:flex justify-center items-center gap-8 flex-wrap text-sm  hidden order-3 lg:order-3 ">
        <NavLink href="/about">ABOUT ME</NavLink>
        <NavLink href="/skills">SKILLS</NavLink>
        <NavLink href="/projects">PROJECTS</NavLink>
        <NavLink href="/education">EDUCATION</NavLink>
        <NavLink href="/contacts">CONTACTS</NavLink>
      </div>
      <div className="order-4 hidden  lg:flex">
        <ModeToggle />
      </div>
      <div
        className="lg:hidden block order-2 text-black dark:text-white lg:order-4"
        onClick={toggleBtnHandler}
      >
        <span>
          <MenuOpenIcon />
        </span>
      </div>
      {isToggle && (
        <div className="absolute right-0 top-0 flex flex-col w-[200px] gap-4 h-screen dark:text-white  text-[#333333] dark:bg-gray-700 bg-[#e0e0e0] border-l-4 border-l-gray-300 px-3 py-6">
          <Sidebar setIsToggle={setIsToggle} />
        </div>
      )}
    </nav>
  );
}

export default Navbar;
