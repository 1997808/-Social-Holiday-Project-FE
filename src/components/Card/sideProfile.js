import React from "react";
import bg2 from "../../assets/bg-1.jpg"
import profile from "../../assets/profile.jpg"

export const SideProfile = ({ image, profileImage, name }) => {
  return (
    <div className="w-full h-auto flex flex-col bg-white rounded">
      <img className="h-28 w-full rounded-t object-cover mr-5" src={bg2} alt="" />
      <div className="flex flex-col justify-center items-center">
        <img className="h-20 w-20 rounded object-cover -mt-10" src={profile} alt="" />
        <div className="pb-12 flex flex-col items-center">
          <p className="font-bold mt-2">Gamer123</p>
          <p className="text-sm text-gray-500">@Gamer_123</p>
        </div>
      </div>
    </div>
  )
}