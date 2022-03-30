import React from "react";
import { ChatAltIcon, HeartIcon } from "@heroicons/react/solid";

export const PostStat = ({ isLiked, likes, comments, radius }) => {
  return (
    <div className={`w-full h-auto flex justify-between bg-white ${radius} px-5 pb-5`}>
      <div className="flex text-gray-500 hover:text-logo-orange transition duration-300">
        <HeartIcon className="h-4 w-4" />
        <p className="text-sm ml-1">Like</p>
        <p className="text-sm ml-1">2</p>
      </div>

      <div className="flex text-gray-500 hover:text-logo-orange transition duration-300">
        <ChatAltIcon className="h-4 w-4" />
        <p className="text-sm ml-1">Comment</p>
        <p className="text-sm ml-1">4</p>
      </div>
    </div>
  )
}