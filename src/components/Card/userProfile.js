import { PencilAltIcon } from "@heroicons/react/solid";
import React from "react";
import bg2 from "../../assets/bg-1.jpg"
import profile from "../../assets/profile.jpg"

export const UserProfile = ({ image, profileImage, name }) => {
  return (
    <div className="w-full h-auto bg-white rounded-b">
      <img className="h-48 w-full rounded-b object-cover" src={bg2} alt="" />
      <div className="px-5">
        <div className="-mt-12 mb-2 flex justify-between items-end">
          <img className="h-24 w-24 object-cover border-2 border-solid border-white rounded" src={profile} alt="" />
          <PencilAltIcon className="w-5 h-5 text-logo-orange" />
        </div>
        <div className="pb-5">
          <p className="font-bold">Gamer123</p>
          <p className="text-xs text-gray-500 mb-2">@Gamer_123</p>
          <p className="text-sm text-gray-500">Official Twitter for #TheSimp. Season 33 airs Sundays at 8/7c on FOX. Watch anytime on FOX NOW & Hulu.</p>
        </div>
      </div>
    </div>
  )
}