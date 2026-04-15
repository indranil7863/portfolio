function Footer() {
  return (
    <div>
      <div className="bg-gray-900/30 w-full  border-t-dotted border-t border-t-gray-700 py-4 text-gray-400 flex flex-col justify-center items-center gap-3">
        <div className="flex flex-col items-center px-8 leading-loose lg:flex-row text-gray-600">
          <p>
            ©2026 <span className="lg:inline hidden pr-1">.</span>
          </p>
          <p>
            Built with{" "}
            <span className="text-gray-200">Next.js, reactBits/ui</span> and{" "}
            <span className="text-gray-200">Tailwind CSS</span>{" "}
            <span className="lg:inline hidden pr-1">.</span>
          </p>
          <p>
            <span>Coded in </span>Vs-code and deployed with{" "}
            <span className="text-gray-200">Vercel</span>
          </p>
        </div>
        <div className="flex flex-col lg:flex-row lg:justify-center text-gray-600 leading-loose">
          <p>
            Developed by <span className="text-blue-700">Indranil Bera</span>{" "}
            <span className="lg:inline  hidden pr-1">.</span>
          </p>
          <p className="">
            Source code available on{" "}
            <span className="text-blue-700">Github</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
