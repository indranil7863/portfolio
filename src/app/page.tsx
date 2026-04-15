import Galaxy from "@/components/Background";
import Link from "next/link";
import EastIcon from "@mui/icons-material/East";

export default function Home() {
  return (
    <div className="bg-black/30 h-full w-full relative">
      <div className="text-white absolute z-2 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full flex justify-center items-center flex-col gap-6 ">
        <p className="flex lg:flex-row text-2xl">
          <span className="text-6xl text-blue-800 font-bold">Creative.</span>{" "}
          <span className="text-6xl text-red-800 font-bold">Efficient.</span>{" "}
          <span className="text-6xl text-white font-bold">Consistent.</span>
        </p>
        <p className="tracking-[5px]">Full Stack Development</p>
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
      <div style={{ width: "100%", height: "650px", position: "relative" }}>
        <Galaxy />
      </div>
    </div>
  );
}
