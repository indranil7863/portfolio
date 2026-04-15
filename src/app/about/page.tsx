function page() {
  return (
    <div className="text-white mx-auto w-[70%] flex flex-col gap-8 pb-16 justify-center items-center">
      <h1 className="text-5xl tracking-wide relative font-bold py-4 bg-linear-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
        About Indranil
        <span
          className="absolute inset-x-0 bottom-0 h-0.5 
              bg-linear-to-r from-transparent via-blue-500 to-transparent"
        ></span>
      </h1>

      {/* content */}
      <div className="flex justify-center items-center flex-col gap-5 text-xl border-x border-x-gray-300 rounded-2xl px-6 py-6">
        <p className="[word-spacing:0.1rem] tracking-[2px]">
          I am a passionate Software Engineer with a knack for building
          full-stack web applications using modern technologies like React.js,
          Next.js, Tailwind CSS, Node.js, PostgresSQL. My journey in tech began
          with a curiosity for solving real-world problems through innovative
          solutions, which evolved into a love for crafting user-centric digital
          experiences.
        </p>
        <p className="[word-spacing:0.1rem] tracking-[2px]">
          With a strong foundation in JavaScript frameworks, I focus on creating
          scalable, efficient, and visually appealing applications. Currently, I
          am diving deeper into backend development with Node.js and Express to
          expand my skill set and deliver powerful, server-side solutions.
        </p>
        <p className="[word-spacing:0.1rem] tracking-[2px]">
          Alongside my development work, I have solved 500+ LeetCode problems
          and 100+ gfg problems to build a strong foundation in data structures
          and algorithms.
        </p>
        <p className="[word-spacing:0.1rem] tracking-[2px]">
          Beyond coding, I thrive in collaborative environments and enjoy
          tackling challenging problems with creative solutions. I aim to
          contribute to impactful projects that make a difference in users'
          lives.
        </p>
      </div>
    </div>
  );
}

export default page;
