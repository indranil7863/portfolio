"use client";

import { useEffect, useRef } from "react";
import Typed from "typed.js";

export default function Typing() {
  const el = useRef<HTMLHeadingElement | null>(null);

  useEffect(() => {
    if (!el.current) return;

    const typed = new Typed(el.current, {
      strings: [
        "Hi, my name is <span style='color:red'>INDRANIL BERA.</span>",
        "I'm a <span style='color:blue'>Full Stack Web Developer.</span>",
        "Welcome to my portfolio! I'm glad you're here.",
      ],
      typeSpeed: 50,
      backSpeed: 30,
      backDelay: 1500,
      loop: true,
      showCursor: false,
    });

    return () => typed.destroy();
  }, []);

  return (
    <div className="w-full flex justify-center items-center">
      <h1
        ref={el}
        className="inline-block text-center
  text-white text-2xl md:text-4xl 
    min-h-[60px] 
      break-words"
      />
    </div>
  );
}
