import React from "react";

function loading() {
  return (
    <div className="text-white w-full h-screen flex justify-center items-center ">
      <div className="h-7.5 w-7.5 border-green-600 font-bold border-l-3 border-r-3 border-b-3 border-dotted rounded-full animate-spin "></div>
      <p className="px-2 text-gray-500">fetching the data...</p>
    </div>
  );
}

export default loading;
