"use client";
import NavLink from "./NavLink";
import Link from "next/link";
import ClearIcon from "@mui/icons-material/Clear";
import LaunchIcon from "@mui/icons-material/Launch";
import { useState, useEffect, Dispatch, SetStateAction } from "react";
import { ModeToggle } from "@/app/(application)/components/ModeToggle";

function Sidebar({
  setIsToggle,
}: {
  setIsToggle: Dispatch<SetStateAction<Boolean>>;
}) {
  const [currTime, setCurrTime] = useState<Date>(new Date());
  useEffect(() => {
    const timeout = setInterval(() => {
      setCurrTime(new Date());
    }, 1000);
    return () => {
      clearInterval(timeout);
    };
  }, []);

  const timeval: string = currTime.toLocaleTimeString("en-GB");

  function CancleHandler() {
    setIsToggle((prev) => !prev);
  }

  return (
    <>
      <button
        className="dark:text-white text-[#333333] flex flex-row justify-around  px-1"
        onClick={CancleHandler}
      >
        <ClearIcon />
        <ModeToggle />
      </button>
      <div className="flex just-center  flex-col w-[70%] mx-auto gap-4 ">
        <NavLink href="/about">ABOUT ME</NavLink>
        <NavLink href="/skills">SKILLS</NavLink>
        <NavLink href="/projects">PROJECTS</NavLink>
        <NavLink href="/education">EDUCATION</NavLink>
        <NavLink href="/contacts">CONTACTS</NavLink>
      </div>
      <div className="flex flex-col justify-evenly gap-4">
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
      <div className=" dark:bg-gray-200 bg-white dark:text-black flex flex-row justify-center items-center gap-2 py-2 rounded-xl">
        <div className="h-2 w-2  bg-green-600 rounded-full flex justify-center items-center relative">
          <div className="h-4 w-4 bg-green-600/80 rounded-full absolute z-5 animate-ping"></div>
        </div>
        <div>{timeval}</div>
      </div>
    </>
  );
}

export default Sidebar;
