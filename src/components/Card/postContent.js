import { ChatAltIcon, HeartIcon } from "@heroicons/react/solid";
import React from "react";
import logo from "../../assets/logo-2.svg"
import { PostStat } from "./postStat";

export const PostContent = ({ image }) => {
  return (
    <>
      <div className="w-full h-auto flex bg-white rounded-t border-b border-solid border-gray-200 p-5 mt-8">
        <img className="h-10 w-10 rounded object-cover mr-5" src={logo} alt="logo" />
        <div className="w-full flex flex-col">
          <p className="font-bold">Player1 <span className="text-xs font-light">@user_name</span></p>
          <p className="text-xs font-light pt-1">January 28 at 1:47 PM</p>
          <p className="text-sm pt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent laoreet, dolor ut mollis rutrum, mauris arcu mollis lacus, eget imperdiet neque neque eget nisl.</p>
        </div>
      </div>
      <PostStat radius={"rounded-b"} />
    </>
  );
};