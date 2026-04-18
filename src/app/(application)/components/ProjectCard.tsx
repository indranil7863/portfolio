import Image, { StaticImageData } from "next/image";
import Link from "next/link";

function ProjectCard({
  srcImg,
  projectTitle,
  projectDesc,
  srcLink,
  newTab = "_self",
}: {
  srcImg: StaticImageData;
  projectTitle: string;
  projectDesc: string;
  srcLink: string;
  newTab?: string;
}) {
  return (
    <>
      <div className="group  dark:text-white text-[#333333] dark:bg-gray-600/50 bg-[#f5f5f5] shadow-2xl  relative max-w-[350px] flex flex-col items-center gap-2 rounded-xl overflow-hidden mx-1 transition-transform lg:hover:scale-105">
        <Link
          href={srcLink}
          target={newTab}
          className="border-x-4 z-2 w-full absolute h-full  left-0 lg:hidden lg:group-hover:inline   [border-image:linear-gradient(to_bottom,rgba(28,181,224,1),rgba(28,181,224,0))_1] "
        ></Link>
        <Image src={srcImg} alt="img" />
        <p className="text-2xl dark:text-gray-300 text-[#333333] font-semibold  px-4">
          {projectTitle}
        </p>
        <p className="px-4 text-sm  dark:text-gray-400 text-[#333333]  pb-2">
          {projectDesc}
        </p>
      </div>
    </>
  );
}

export default ProjectCard;
