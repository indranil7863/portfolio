"use client";
import PersonIcon from "@mui/icons-material/Person";
import ChatIcon from "@mui/icons-material/Chat";
import EmailIcon from "@mui/icons-material/Email";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import SmartphoneIcon from "@mui/icons-material/Smartphone";
import PlaceIcon from "@mui/icons-material/Place";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import SearchIcon from "@mui/icons-material/Search";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import TelegramIcon from "@mui/icons-material/Telegram";
import Link from "next/link";
import { useState } from "react";
import { ReactFormState } from "react-dom/client";

interface InputDataType {
  name: string;
  email: string;
  query: string;
  budget: number;
  message: string;
}

function page() {
  const [formData, setFormData] = useState<InputDataType>({
    name: "",
    email: "",
    query: "",
    budget: "" as unknown as number,
    message: "",
  });

  function HandleFormData(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    setFormData((prev: InputDataType) => ({
      ...prev,
      [e.target.name]:
        e.target.name === "budget" ? Number(e.target.value) : e.target.value,
    }));
  }

  function submitHandler(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log(formData);
  }

  return (
    <>
      <h1 className="min-w-[20%] lg:w-[20%] text-center mx-auto lg:text-5xl text-3xl tracking-wide relative font-bold py-4 bg-linear-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
        Contacts
        <span
          className="absolute inset-x-0 bottom-0 h-0.5 
              bg-linear-to-r from-transparent via-blue-500 to-transparent"
        ></span>
      </h1>
      <div className="dark:text-white text-[#333333] flex lg:flex-row flex-col justify-around items-center lg:gap-8 md:w-[60%]  lg:w-[90%] w-full mx-auto ">
        <section className=" flex flex-col justify-center lg:items-start items-center gap-6 flex-1">
          <h1 className="lg:text-4xl text-2xl font-bold bg-gradient-to-r from-[#00C9FF] to-[#92FE9D] bg-clip-text dark:text-transparent pt-4">
            Get In Touch
          </h1>
          <p className="lg:px-2  pl-4 pr-1 relative tracking-wider py-2 leading-relaxed">
            <span className="h-full absolute border border-pink-700 lg:-left-1 left-2 top-0"></span>
            I’m currently looking for new opportunities and would love to
            discuss how my problem-solving skills and development experience can
            add value to your team. Whether you have a question or just want to
            say hi, my inbox is always open!
          </p>
          <Link
            href={"mailto:indranilbera542@gmail.com"}
            target="_blank"
            className=" flex flex-row justify-around w-[80%] items-center py-2 lg:px-4 lg:gap-4 px-1 gap-1 bg-gray-800/30 rounded-sm hover:text-blue-800  border-2 border-dotted dark:hover:border-blue-600  hover:border-blue-800"
          >
            <span className="px-2 py-2 rounded-sm sm:block hidden text-blue-300 transition-colors duration-500 hover:bg-gray-700/50 bg-gray-700/40">
              <EmailIcon />
            </span>
            <div className="flex flex-col justify-center lg:px-4 px-1">
              <span className="text-gray-600 ">EMAIL</span>
              <span>indranilbera542@gmail.com</span>
            </div>
            <div className="hidden sm:block">
              <ChevronRightIcon />
            </div>
          </Link>
          <Link
            href={"tel:+917863934256"}
            className=" flex flex-row justify-around w-[80%] items-center py-2 lg:px-4 lg:gap-4 px-1 gap-1 bg-gray-800/30 rounded-sm dark:hover:text-blue-600  border-2 border-dotted hover:border-blue-800 "
          >
            <span className="px-2 py-2 rounded-sm sm:block hidden text-blue-300 transition-colors duration-500 hover:bg-gray-700/50 bg-gray-700/40">
              <SmartphoneIcon />
            </span>
            <div className="flex flex-col justify-center lg:pl-4 lg:pr-12 pr-22 pl-1">
              <span className="text-gray-600">PHONE</span>
              <span>+917863934256</span>
            </div>
            <div className="lg:pl-13 hidden sm:block">
              <ChevronRightIcon />
            </div>
          </Link>
          <Link
            href="https://goo.gl/maps/w3v16G44ACQd1b7v5?g_st=aw"
            target="_blank"
            className=" flex flex-row justify-around w-[80%] items-center py-2 lg:px-4 lg:gap-4 px-1 gap-1 bg-gray-800/30 rounded-sm dark:hover:text-blue-600 hover:text-blue-800  border-2 border-dotted hover:border-blue-800 "
          >
            <span className="px-2 py-2 rounded-sm sm:block hidden text-blue-300 transition-colors duration-500 hover:bg-gray-700/50 bg-gray-700/40">
              <PlaceIcon />
            </span>
            <div className="flex flex-col justify-center lg:px-4 pr-12 pl-1">
              <span className="text-gray-600">LOCATION</span>
              <span>Hooghly, West Bengal</span>
            </div>
            <div className="lg:pl-10 hidden sm:block">
              <ChevronRightIcon />
            </div>
          </Link>
          <div className="py-8 flex justify-center items-center gap-4 ">
            <Link
              href={"https://www.linkedin.com/in/indranil-bera-a12132256/"}
              target="_blank"
              title="Linkedin"
              className="border px-2 py-2 rounded-full dark:text-gray-500 text-white bg-gray-900/30 dark:hover:bg-blue-500  hover:bg-blue-700 dark:hover:text-white transition-transform hover:-translate-y-1"
            >
              <LinkedInIcon />
            </Link>
            <Link
              href={"https://github.com/indranil7863"}
              target="_blank"
              title="github"
              className="border px-2 py-2 rounded-full dark:text-gray-500 text-white bg-gray-900/30 hover:bg-green-300  dark:hover:text-white hover:text-black transition-transform hover:-translate-y-1"
            >
              <GitHubIcon />
            </Link>
          </div>
        </section>
        <section className="lg:px-4 flex-1 py-2 bg-gray-700/20 shadow-2xl rounded-xl md:w-[80%] sm:w-[80%] w-[90%] mb-4">
          <h1 className="text-center py-4 text-2xl font-bold bg-gradient-to-r from-[#d53369] to-[#daae51] bg-clip-text dark:text-transparent">
            Let's Connect!
          </h1>

          <form
            onSubmit={submitHandler}
            className="w-full grid lg:grid-cols-2 md:grid-cols-2 sm:col-span-2 grid-cols-1 items-start gap-x-4 gap-y-4 py-2 px-1"
          >
            <div className=" rounded-lg flex flex-row justify-between items-center bg-gray-600/50 ">
              <div className=" w-[80%] flex flex-col px-1 rounded-sm py-2">
                <label
                  htmlFor="name"
                  className=" text-sm text-center dark:text-gray-400 text-[#333333]"
                >
                  Identify Yourself
                </label>
                <input
                  className=" rounded-sm  outline-0 pl-2"
                  autoComplete="off"
                  id="name"
                  type="text"
                  onChange={HandleFormData}
                  name="name"
                  value={formData.name}
                  required
                />
              </div>
              <div className="flex-1 pr-1">
                <PersonIcon />
              </div>
            </div>
            <div className=" rounded-lg flex flex-row justify-between items-center bg-gray-600/50 ">
              <div className=" w-[80%] flex flex-col px-1 rounded-sm py-2">
                <label
                  htmlFor="email"
                  className=" text-sm text-center dark:text-gray-400 text-[#333333]"
                >
                  Email Address
                </label>
                <input
                  className="rounded-sm  outline-0 pl-2"
                  autoComplete="off"
                  type="email"
                  onChange={HandleFormData}
                  value={formData.email}
                  name="email"
                  id="email"
                  required
                />
              </div>
              <div className="flex-1 pr-1">
                <EmailIcon />
              </div>
            </div>
            <div className=" rounded-lg flex flex-row justify-between items-center bg-gray-600/50 ">
              <div className=" w-[80%] flex flex-col px-1 rounded-sm py-2">
                <label
                  htmlFor="query"
                  className=" text-sm text-center dark:text-gray-400 text-[#333333]"
                >
                  Query
                </label>
                <input
                  className=" rounded-sm  outline-0 pl-2"
                  autoComplete="off"
                  type="text"
                  onChange={HandleFormData}
                  value={formData.query}
                  name="query"
                  id="query"
                  required
                />
              </div>
              <div className="flex-1 pr-1">
                <SearchIcon />
              </div>
            </div>
            <div className=" rounded-lg flex flex-row justify-between items-center bg-gray-600/50 ">
              <div className=" w-[80%] flex flex-col px-1 rounded-sm py-2">
                <label
                  htmlFor="budget"
                  className=" text-sm text-center dark:text-gray-400 text-[#333333]"
                >
                  Est. Budget(USD)
                </label>
                <input
                  className=" rounded-sm  outline-0 pl-2"
                  autoComplete="off"
                  type="number"
                  onChange={HandleFormData}
                  value={formData.budget}
                  name="budget"
                  id="budget"
                />
              </div>
              <div className="flex-1 pr-1">
                <AttachMoneyIcon />
              </div>
            </div>
            <div className="lg:col-span-2 md:col-span-2 sm:col-span-2 rounded-lg flex flex-row justify-between items-center bg-gray-600/50 ">
              <div className=" w-[80%] flex flex-col px-1 rounded-sm py-2">
                <label
                  htmlFor="msg"
                  className=" text-sm text-center dark:text-gray-400 text-[#333333]"
                >
                  Message Payload
                </label>
                <textarea
                  className=" rounded-sm no-scrollbar overflow-auto outline-0 px-2  resize-none"
                  autoComplete="off"
                  value={formData.message}
                  onChange={HandleFormData}
                  name="message"
                  id="msg"
                />
              </div>
              <div className="flex-1 text-center">
                <ChatIcon />
              </div>
            </div>
            <button className=" lg:col-span-2 md:col-span-2 sm:col-span-2 rounded-lg py-2 bg-blue-700 text-white text-xl font-semibold hover:bg-blue-500">
              Submit
              <span className="px-2 ">
                <TelegramIcon />
              </span>
            </button>
          </form>
        </section>
      </div>
    </>
  );
}

export default page;
