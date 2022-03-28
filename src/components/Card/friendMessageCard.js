import React from "react";
import profile from "../../assets/profile.jpg"

export const FriendMessageCard = ({ image, profileImage, name }) => {
  return (
    <div className="flex items-center bg-white rounded p-5">
      <img className="h-14 w-14 rounded object-cover" src={profile} alt="" />
      <div className="w-full pl-5 overflow-x-hidden">
        <p className="font-bold">Gamer123</p>
        <p className="text-xs text-gray-500 truncate">Hi what are you doing, kekw very long text Hi what are you doing, kekw very long text</p>
      </div>
    </div>
  )
}