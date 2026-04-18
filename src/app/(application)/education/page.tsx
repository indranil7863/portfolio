import React from "react";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";

function page() {
  return (
    <div className="text-[#333333] bg-[#f5f5f5] dark:bg-gray-700 dark:text-[oklch(1.00 0 0)] flex justify-center items-center gap-12 flex-col lg:w-[70%] mb-4 rounded-sm lg:mx-auto">
      <h1 className="lg:text-5xl text-3xl tracking-wide relative font-bold py-4 bg-linear-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
        Education
        <span
          className="absolute inset-x-0 bottom-0 h-0.5 
              bg-linear-to-r from-transparent via-blue-500 to-transparent"
        ></span>
      </h1>
      <p className="lg:text-4xl text-2xl font-semibold text-[#333333] dark:text-white px-4 ">
        I learned a lot, but the real learning happens in the code editor!
      </p>
      <p className="text-xl  text-[#333333] dark:text-white px-4 ">
        Education has always been the cornerstone of my journey into the tech
        world. Pursuing a Bachelor's in Computer Science and Engineering (CSE)
        at Ramkrishna Mahato Government Engineering College, Purulia, has
        provided me a strong foundation in computer science and software
        development.
      </p>
      <p className="text-xl  text-[#333333] dark:text-white px-4 ">
        My academic journey has been complemented by hands-on projects and
        coursework, enabling me to build practical skills and a deep
        understanding of modern technological solutions.
      </p>
      <div className="flex justify-center items-start gap-6 flex-col w-[95%] relative px-1 pb-4 mb-2">
        <div className="absolute top-0 h-full border border-blue-700 left-4.5 lg:left-6"></div>
        <section className=" w-full relative flex just-center flex-row gap-2 rounded-sm">
          <span className=" h-6 w-6 lg:h-10 lg:w-[40px] px-2 rounded-full bg-blue-400/50 flex justify-center items-center">
            <span className="  bg-blue-200 rounded-full">
              <CalendarMonthIcon className="bg-blue-600 px-1 py-1 rounded-full" />
            </span>
          </span>
          <div className="py-2 flex flex-col justify-center gap-4  rounded-[5px]">
            <p className="font-semibold text-xl text-[#333333]  dark:text-white">
              Bachelor of Computer Science & Engineering, Ramkrishna Mahato
              Government Engineering College, West Bengal, India
              <span className="block text-sm text-gray-500 py-1">
                Sept. 2022 - June 2026
              </span>
            </p>
            <p className="dark:text-gray-300 text-[#333333] text-xl">
              Pursuing CSE with a focus on programming, web development, and
              software engineering. Current CGPA: 8.40.
            </p>
          </div>
        </section>
        <section className=" w-full relative flex just-center flex-row gap-2 rounded-sm">
          <span className="h-6 w-6 lg:h-10 lg:w-[40px] rounded-full bg-blue-400/50 flex justify-center items-center">
            <span className="  bg-blue-200 rounded-full">
              <CalendarMonthIcon className="bg-blue-600 px-1 py-1 rounded-full" />
            </span>
          </span>
          <div className="py-2 flex flex-col justify-center gap-4  rounded-[5px]">
            <p className="font-semibold text-xl dark:text-white text-[#333333]">
              Higher Secondary Education, Ramnagar N.B.P.C High school, Hooghly,
              West Bengal, India{" "}
            </p>
            <span className="block text-sm text-gray-500 py-1">
              April 2019 - June 2021
            </span>
            <p className="dark:text-gray-300 text-[#333333] text-xl">
              Completed 12th in Science, Overall Percentage: 89%.{" "}
            </p>
          </div>
        </section>
        <section className=" w-full relative flex just-center flex-row gap-2 rounded-sm">
          <span className="h-6 w-6 lg:h-10 lg:w-[40px] rounded-full bg-blue-400/50 flex justify-center items-center">
            <span className="  bg-blue-200 rounded-full">
              <CalendarMonthIcon className="bg-blue-600 px-1 py-1 rounded-full" />
            </span>
          </span>
          <div className="py-2 flex flex-col justify-center gap-4 rounded-[5px]">
            <p className="font-semibold text-xl dark:text-white text-[#333333]">
              Secondary Education, Ramnagar N.B.P.C High school, Hooghly, West
              Bengal, India
            </p>
            <span className="block text-sm text-gray-500 py-1">
              Jan. 2018 - Feb. 2019
            </span>
            <p className="dark:text-gray-300 text-[#333333] text-xl">
              Completed 10th grade with 86%.{" "}
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}

export default page;
