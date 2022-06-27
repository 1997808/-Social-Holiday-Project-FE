import { Image } from "cloudinary-react";
import React from "react";
import profile from "../../assets/profile.jpg"

export const FriendMessageCard = ({ id, profileImageId, title, chat, setChat }) => {
  return (
    <div className={`flex items-center bg-white rounded p-5 transition duration-300 ${chat === id ? 'disable bg-gray-200' : 'block hover:bg-gray-100'}`} onClick={() => setChat(id)}>
      {profileImageId ?
        <Image
          className="h-12 w-12 rounded object-cover"
          cloudName={process.env.REACT_APP_CLOUDINARY_NAME}
          publicId={profileImageId}
          crop="scale"
        />
        :
        <img className="h-12 w-12 rounded object-cover" src={profile} alt="" />
      }
      <div className="w-full pl-5 overflow-x-hidden">
        <p className="text-sm font-bold">{title ? title : 'User'}</p>
      </div>
    </div>
  )
}