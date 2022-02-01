import React from "react";
import bg2 from "../../assets/bg-1.jpg"
import profile from "../../assets/profile.jpg"
import { ButtonSmall } from "../Button/buttonSmall";
import { ButtonInvert } from "../Button/buttonInvert"

export const FriendRequestCard = ({ image, profileImage, name }) => {
  return (
    <div className="w-full h-auto flex justify-center items-center bg-white rounded p-5">
      <img className="h-20 w-20 rounded object-cover" src={profile} alt="" />
      <div className="pl-5 flex flex-col">
        <p className="font-bold">Gamer123</p>
        <p className="text-xs text-gray-500 mb-2">@Gamer_123</p>
        <div className="grid grid-cols-2 gap-4">
          <ButtonSmall text={"Accept"} type="button" />
          <ButtonInvert text={"Delete"} type="button" />
        </div>
      </div>
    </div>
  )
}