import ToolItem from "../components/ToolItem";
import HTMLIMG from "../../../../public/images/html.png";
import CSSIMG from "../../../../public/images/CSS3_logo.svg.png";
import JSIMG from "../../../../public/images/images.png";
import TSIMG from "../../../../public/images/typescript.png";
import ReactImg from "../../../../public/images/React-icon.svg.png";
import NextImg from "../../../../public/images/nextjs.jpeg";
import ReactBitImg from "../../../../public/images/ReactBits.png";
import MatUIImg from "../../../../public/images/materialUI.png";
import PostmanIMG from "../../../../public/images/postman.png";
import VercelImg from "../../../../public/images/vercel.png";
import RenderImg from "../../../../public/images/render.png";

import ExpressImg from "../../../../public/images/expressjs.webp";
import NodeImg from "../../../../public/images/nodejs.png";
import MongoImg from "../../../../public/images/mongo.png";
import PostgresImg from "../../../../public/images/postgres.jpg";
import DockerImg from "../../../../public/images/docker.png";
import SocketImg from "../../../../public/images/socket.gif";
import WebRtcImg from "../../../../public/images/webRTC.jpeg";
import KubernetesImg from "../../../../public/images/Kubernetes-Logo.png";
import AwsImg from "../../../../public/images/aws.png";
import GitImg from "../../../../public/images/git.png";
import GitHubImg from "../../../../public/images/github.png";
import Image from "next/image";
import ExperienceImg from "../../../../public/images/experienceImg.jpg";
import BuildIcon from "@mui/icons-material/Build";

function page() {
  return (
    <div className="flex flex-col items-center justify-center gap-8 text-white w-[70%] mx-auto">
      <h1 className="text-5xl tracking-wide relative font-bold py-4 bg-linear-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
        Skills & Tools
        <span
          className="absolute inset-x-0 bottom-0 h-0.5 
              bg-linear-to-r from-transparent via-blue-500 to-transparent"
        ></span>
      </h1>
      <div>
        <p className="text-xl text-gray-300 tracking-wider">
          As a full-stack Software Engineer, I specialize in building scalable
          web applications using modern technologies such as Next.js, React, and
          Tailwind CSS. I'm also expanding my expertise into DevOps and cloud
          practices to create efficient, maintainable, robust web solutions.
        </p>
      </div>
      <div className="flex flex-col justify-center items-center gap-8 py-8">
        <div className="flex justify-center items-center gap-8">
          <section className="text-white flex justify-center flex-wrap items-center gap-2">
            <ToolItem href={HTMLIMG} tagname="HTML" />
            <ToolItem href={CSSIMG} tagname="CSS" />
            <ToolItem href={JSIMG} tagname="JavaScript" />
            <ToolItem href={TSIMG} tagname="TypeScript" />
            <ToolItem href={ReactImg} tagname="React" />
            <ToolItem href={NextImg} tagname="Next" />
            <ToolItem href={ReactBitImg} tagname="ReactBits/ui" />
            <ToolItem href={MatUIImg} tagname="Material/ui" />
            <ToolItem href={PostmanIMG} tagname="Postman" />
            <ToolItem href={VercelImg} tagname="Vercel" />
            <ToolItem href={RenderImg} tagname="Render" />
            <p>FRONTEND SYSTEMS</p>
          </section>
          <section className=" relative text-white flex justify-center items-center  flex-col px-8 py-8 gap-2  ">
            <div className="absolute border animate-spin animation-duration-[3s]  h-50 w-50  bg-gray-100/20 rounded-full text-center ">
              <div className="h-4 w-4 bg-amber-600 relative top-13.25 rounded-full">
                <div className="h-4 w-4 bg-amber-400 rounded-full animate-ping"></div>
              </div>
            </div>

            <span className="rounded-full overflow-hidden">
              <Image
                src={ExperienceImg}
                alt="experience"
                height={70}
                width={70}
              />
            </span>
            <span className="text-xl font-bold">EXPERIENCE</span>
            <span className="text-sm text-gray-400">DATABASE</span>
          </section>
          <section className="text-white flex justify-center flex-wrap items-center gap-2">
            <ToolItem href={ExpressImg} tagname="Express" />
            <ToolItem href={NodeImg} tagname="Nodejs" />
            <ToolItem href={MongoImg} tagname="MongoDB" />
            <ToolItem href={PostgresImg} tagname="Postgresql" />
            <ToolItem href={SocketImg} tagname="Socket.io" />
            <ToolItem href={WebRtcImg} tagname="WebRTC" />
            <ToolItem href={DockerImg} tagname="Docker" />
            <ToolItem href={KubernetesImg} tagname="Kubernetes" />
            <ToolItem href={AwsImg} tagname="AWS" />
            <ToolItem href={GitImg} tagname="git" />
            <ToolItem href={GitHubImg} tagname="github" />
            <p>BACKEND LOGIC</p>
          </section>
        </div>
        <p className="py-2 px-2  rounded-xl bg-gray-700">
          <span>
            <BuildIcon />
          </span>
          <span className=" px-1 text-gray-400">TOOLS INVENTORY</span>
        </p>
      </div>
    </div>
  );
}

export default page;
