import LightModeIcon from "@mui/icons-material/LightMode";
import NightsStayIcon from "@mui/icons-material/NightsStay";
import NavLink from "./NavLink";
import Link from "next/link";

function Navbar() {
  return (
    <nav className="bg-gray-900 z-2 text-white flex justify-between px-8 items-center py-4 flex-wrap sticky top-0 ">
      <Link href={"/"} className="relative">
        <h1 className="text-2xl tracking-widest font-medium">
          <span className="text-blue-600">INDRA</span>
          <span>NIL</span>
          <span className="text-red-600">B</span>
          <span>ERA</span>
        </h1>
        <p className="absolute top-[90%] text-[10px] tracking-[2PX] w-full text-gray-400">
          FULLSTACK | DEVELOPMENT
        </p>
      </Link>
      <div className="w-[30%] border border-gray-500 hover:border-gray-200 rounded-xl">
        <input
          type="text"
          placeholder="search sections ..."
          className="w-full border-none outline-none hover:placeholder-gray-200 rounded-xl py-1 px-2"
        />
      </div>
      <div className="flex justify-center items-center gap-8 flex-wrap text-sm ">
        <NavLink href="/about">ABOUT ME</NavLink>
        <NavLink href="/skills">SKILLS</NavLink>
        <NavLink href="/projects">PROJECTS</NavLink>
        <NavLink href="/education">EDUCATION</NavLink>
        <NavLink href="/contacts">CONTACTS</NavLink>

        {/* <button>
            <LightModeIcon/>
            <NightsStayIcon/>
           </button> */}
      </div>
    </nav>
  );
}

export default Navbar;
