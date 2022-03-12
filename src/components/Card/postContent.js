import React from "react";
import logo from "../../assets/logo-2.svg";
import { PostStat } from "./postStat";
import { dateFormater } from "../../utils/formatData";

export const PostContent = ({ image, name, username, date, content }) => {
  return (
    <>
      <div className="w-full h-auto flex bg-white rounded-t border-b border-solid border-gray-200 p-5">
        <img
          className="h-10 w-10 rounded object-cover mr-5"
          src={logo}
          alt="logo"
        />
        <div className="w-full flex flex-col">
          <p className="font-bold">
            {name ? name : "Player1"}{" "}
            <span className="text-xs font-light">
              @{username ? username : "user1"}
            </span>
          </p>
          <p className="text-xs font-light pt-1">
            {date ? dateFormater(date) : "January 28 at 1:47 PM"}
          </p>
          <p className="text-sm pt-2">
            {content
              ? content
              : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent laoreet, dolor ut mollis rutrum, mauris arcu mollis lacus, eget imperdiet neque neque eget nisl."}
          </p>
        </div>
      </div>
      <div className="mb-8">
        <PostStat radius={"rounded-b"} />
      </div>
    </>
  );
};
