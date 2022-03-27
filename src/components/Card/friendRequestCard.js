import React from "react";
import profile from "../../assets/profile.jpg";
import { ButtonSmall } from "../Button/buttonSmall";
import { ButtonInvert } from "../Button/buttonInvert";

export const FriendRequestCard = ({ id, image, name, username }) => {
  return (
    <div className="w-full h-auto flex justify-center bg-white rounded p-5">
      <img className="h-16 w-16 rounded object-cover" src={profile} alt="" />
      <div className="pl-5 flex flex-col">
        <p className="font-bold">{name}</p>
        <p className="text-xs text-gray-500 mb-2">@{username}</p>
        <div className="grid grid-cols-2 gap-4">
          <ButtonSmall text={"Accept"} type="button" />
          <ButtonInvert text={"Delete"} type="button" />
        </div>
      </div>
    </div>
  );
};
