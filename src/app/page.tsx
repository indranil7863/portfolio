import Galaxy from "@/components/Background";
import Link from "next/link";
import EastIcon from "@mui/icons-material/East";

export default function Home() {
  return (
    <div className="bg-black/30 h-full w-full relative">
      <div className="text-white absolute z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full flex justify-center items-center flex-col gap-6 ">
        <p className="flex lg:flex-row flex-col gap-4 lg:gap-0 items-center justify-center text-2xl">
          <span className="lg:text-6xl text-4xl text-blue-800 font-bold">
            Creative.
          </span>{" "}
          <span className="lg:text-6xl text-4xl text-red-800 font-bold">
            Efficient.
          </span>{" "}
          <span className="lg:text-6xl text-4xl text-white font-bold">
            Consistent.
          </span>
        </p>
        <p className="lg:tracking-[5px] tracking-[3px]">
          Full Stack Development
        </p>
        <div>
          <Link
            href={"/about"}
            className="flex justify-center items-center gap-2 py-2 px-6 border bg-gray-300  transition-transform hover:scale-105 rounded-2xl"
          >
            <span className="text-gray-900 font-semibold">Get Started</span>
            <EastIcon className="text-black" color="inherit" />
          </Link>
        </div>
      </div>
      <div className="w-full lg:h-[650px] h-screen relative">
        <Galaxy />
      </div>
    </div>
  );
}
