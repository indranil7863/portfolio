import React, { ReactNode } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

function layout({ children }: { children: ReactNode }) {
  return (
    <div
      className="bg-[#e0e0e0] dark:bg-gray-800"
      style={{
        backgroundImage: `radial-gradient(circle at 0.5px 0.5px , rgba(6,182, 212, 0.2) 0.5px, transparent 0)`,
        backgroundSize: "8px 8px",
        backgroundRepeat: "repeat",
      }}
    >
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}

export default layout;
