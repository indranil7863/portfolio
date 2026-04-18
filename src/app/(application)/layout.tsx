import React, { ReactNode } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

function layout({ children }: { children: ReactNode }) {
  return (
    <div className="bg-[#e0e0e0] dark:bg-gray-800">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}

export default layout;
