import React from "react";
import bg2 from "../../assets/bg-1.jpg";
import profile from "../../assets/profile.jpg";

export const SideProfile = ({ image, profileImage, name, username }) => {
  return (
    <div className="w-full h-auto flex flex-col bg-white rounded">
      <img className="h-20 w-full rounded-t object-cover" src={bg2} alt="" />
      <div className="flex flex-col justify-center items-center">
        <img
          className="h-16 w-16 rounded object-cover -mt-10"
          src={profile}
          alt=""
        />
        <div className="p-5 pt-0 flex flex-col items-center">
          <p className="font-bold mt-2">{name}</p>
          <p className="text-xs text-gray-500">@{username}</p>
          <p className="text-sm text-gray-500 mt-2">
            Official Twitter for #TheSimp. Season 33 airs Sundays at 8/7c on
            FOX. Watch anytime on FOX NOW & Hulu.
          </p>
        </div>
      </div>
    </div>
  );
};
