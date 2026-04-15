import React from "react";
import Image from "next/image";
import { StaticImageData } from "next/image";

function ToolItem({ href, tagname }: { href: StaticImageData; tagname: string }) {
  return (
    <>
      <div className="flex items-center justify-center gap-2 bg-white text-black rounded-sm py-1 px-2">
        <Image
          src={href}
          width={20}
          height={20}
          alt="html"
          className="rounded-sm"
        />
        <span>{tagname}</span>
      </div>
    </>
  );
}

export default ToolItem;
