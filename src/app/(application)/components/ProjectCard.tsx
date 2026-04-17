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
      <div className="group  text-white bg-gray-600/50 relative max-w-[350px] flex flex-col items-center gap-2 rounded-xl overflow-hidden mx-1 transition-transform lg:hover:scale-105">
        <Link
          href={srcLink}
          target={newTab}
          className="border-x-4 z-2 w-full absolute h-full  left-0 lg:hidden lg:group-hover:inline   [border-image:linear-gradient(to_bottom,rgba(28,181,224,1),rgba(28,181,224,0))_1] "
        ></Link>
        <Image
          src={srcImg}
          alt="img"
          className="  lg:opacity-50 lg:transition-opacity lg:duration-200 lg:group-hover:scale-105 lg:group-hover:opacity-100"
        />
        <p className="text-2xl text-gray-300 font-semibold  px-2">
          {projectTitle}
        </p>
        <p className="px-2 text-sm  text-gray-400  pb-2">{projectDesc}</p>
      </div>
    </>
  );
}

export default ProjectCard;
