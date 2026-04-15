import NotFound from "@/components/NotFound";
import Link from "next/link";
import EastIcon from "@mui/icons-material/East";

export default function notFound() {
  return (
    <div className="w-full h-screen flex flex-col justify-center gap-4 items-center text-2xl text-white">
      <NotFound />
      <Link
        href={"/"}
        className="bg-white text-xl font-semibold px-4 py-1 rounded-xl flex justify-center items-center transition-transform hover:scale-105"
      >
        <span className="text-gray-900 px-1">Back to Home</span>
        <EastIcon className="text-black" color="inherit" />
      </Link>
    </div>
  );
}
