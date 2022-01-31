import React from "react";
import { Link } from "react-router-dom";
import error from "../assets/error.png"

export const Page404 = () => {
  return (
    <div className="w-full">
      <div className="container mx-auto w-full py-40 flex flex-col justify-between items-center">
        <img className="pb-4" src={error} alt="404" />
        <div className="w-40 h-12 flex justify-center items-center bg-logo-orange rounded">
          <Link to="/"><p className="text-white">Trở về</p></Link>
        </div>
      </div>
    </div>
  );
};