import { Image } from "cloudinary-react";
import React from "react";
import profile from "../../assets/profile.jpg"

export const ChatCard = ({ profileImageId, name, content }) => {
  return (
    <div className="flex flex-start bg-white rounded p-5">
      {profileImageId ?
        <Image
          className="h-10 w-10 rounded object-cover"
          cloudName={process.env.REACT_APP_CLOUDINARY_NAME}
          publicId={profileImageId}
          crop="scale"
        />
        :
        <img className="h-10 w-10 rounded object-cover" src={profile} alt="" />
      }
      <div className="w-full pl-5 overflow-x-hidden">
        <p className="text-sm font-bold">{name ? name : 'User'}</p>
        <p className="text-sm text-gray-500">{content ? content : 'Reload message'}</p>
      </div>
    </div>
  )
}