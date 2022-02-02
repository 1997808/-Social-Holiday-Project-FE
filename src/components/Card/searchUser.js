import React from "react";
import bg2 from "../../assets/bg-1.jpg"
import profile from "../../assets/profile.jpg"
import { ButtonSmall } from "../Button/buttonSmall";
import { ButtonInvert } from "../Button/buttonInvert"

export const SearchUser = ({ image, profileImage, name }) => {
  return (
    <div className="w-full h-auto flex flex-col bg-white rounded">
      <img className="h-20 w-full rounded-t object-cover" src={bg2} alt="" />
      <div className="flex flex-col justify-center items-center">
        <img className="h-16 w-16 rounded object-cover -mt-10" src={profile} alt="" />
        <div className="p-5 flex flex-col items-center">
          <p className="font-bold">Gamer123</p>
          <p className="text-xs text-gray-500 mb-5">@Gamer_123</p>
          <div className="grid grid-cols-2 gap-4 mb-5">
            <ButtonSmall text={"Message"} type="button" />
            <ButtonInvert text={"Follow"} type="button" />
          </div>
          <p className="text-xs text-gray-500">View Profile</p>
        </div>
      </div>
    </div>
  )
}