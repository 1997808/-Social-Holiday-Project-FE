import React from "react";
import { Link } from "react-router-dom";
import error from "../assets/error.png"

export const Page404 = () => {
  return (
    // <div className="w-full">
    <div className="flex-grow border-l border-r border-solid border-gray-200 max-w-2xl sm:ml-[73px] xl:ml-[370px]">

      <div className="w-full py-40 flex flex-col justify-between items-center">
        <img className="p-10" src={error} alt="404" />
        <div className="px-10 py-2 flex justify-center items-center bg-logo-orange rounded">
          <Link to="/"><p className="text-white">Trở về</p></Link>
        </div>
      </div>
    </div>
  );
};