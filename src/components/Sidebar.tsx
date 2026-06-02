"use client";

import Link from "next/link";
import ClearIcon from "@mui/icons-material/Clear";
import LaunchIcon from "@mui/icons-material/Launch";
import { useState, useEffect, Dispatch, SetStateAction, useRef } from "react";
import { ModeToggle } from "@/app/(application)/components/ModeToggle";
import { usePathname } from "next/navigation";

function Sidebar({
  setIsToggle,
}: {
  setIsToggle: Dispatch<SetStateAction<Boolean>>;
}) {
  const pathname = usePathname()
  const [currTime, setCurrTime] = useState<Date>(new Date());
  useEffect(() => {
    const timeout = setInterval(() => {
      setCurrTime(new Date());
    }, 1000);
    return () => {
      clearInterval(timeout);
    };
  }, []);

  const sidebarRef = useRef<HTMLInputElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);
  useEffect(()=>{

    function clickOutsideHandler(event: MouseEvent){
      if(event.target instanceof Node && buttonRef.current?.contains(event.target)){
        return;
      }
      if(event.target instanceof Node && sidebarRef.current?.contains(event.target))return;

      if(sidebarRef.current && event.target instanceof Node && !sidebarRef.current.contains(event.target)){
          setIsToggle(prev => !prev);
      }
    }

    document.addEventListener('click', clickOutsideHandler);
    return ()=> {
      document.removeEventListener('click', clickOutsideHandler);
    }
  }, [])

  const timeval: string = currTime.toLocaleTimeString("en-GB");

  function CancleHandler() {
    setIsToggle((prev) => !prev);
  }

  return (
    <div ref={sidebarRef} className="flex flex-col gap-6">
      <div className="flex justify-around">
      <button
        className="dark:text-white text-[#333333] flex flex-row justify-around  px-1"
        onClick={CancleHandler}
      >
        <ClearIcon />
       
      </button>
      <div ref={buttonRef}>
         <ModeToggle />
      </div>
      </div>
      <div className="flex just-center items-center flex-col w-[70%] mx-auto gap-4 ">
        <Link onClick={()=> setIsToggle(prev => !prev)} className={pathname === '/about'? "dark:text-blue-400 text-red-400": ""} href="/about">ABOUT ME</Link>
        <Link onClick={()=> setIsToggle(prev => !prev)} className={pathname === '/skills'? "dark:text-blue-400 text-red-400": ""} href="/skills">SKILLS</Link>
        <Link onClick={()=> setIsToggle(prev => !prev)} className={pathname === '/projects'? "dark:text-blue-400 text-red-400": ""} href="/projects">PROJECTS</Link>
        <Link onClick={()=> setIsToggle(prev => !prev)} className={pathname === '/education'? "dark:text-blue-400 text-red-400": ""} href="/education">EDUCATION</Link>
        <Link onClick={()=> setIsToggle(prev => !prev)} className={pathname === '/contacts'? "dark:text-blue-400 text-red-400": ""} href="/contacts">CONTACTS</Link>
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
              "https://drive.google.com/file/d/1MuS5i7UudcDp95TAIDvIyzX4ag7TK0Vr/view?usp=drivesdk"
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
    </div>
  );
}

export default Sidebar;
