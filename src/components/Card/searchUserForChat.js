import React, { useState } from "react";
import logo from "../../assets/default-icon.png";
import { Image } from "cloudinary-react";

export const SearchUserForChat = ({ userId, type, name, username, profileImageId, participants, setParticipants, addConversation }) => {
  const [selected, setSelected] = useState(false);
  const handleSelect = () => {
    if (type === 1) {
      if (!participants.includes(userId)) {
        participants.push(userId)
        setSelected(true)
      } else {
        //deselect user
        let index = participants.indexOf(userId)
        participants.splice(index, 1);
        setSelected(false)
      }
    }
    if (type === 0) {
      participants.push(userId)
      addConversation()
      setParticipants([])
    }
  }

  return (
    <div className={`p-5 w-full h-auto flex bg-white rounded border-b border-solid border-gray-200 hover:bg-gray-100 cursor-pointer`} onClick={() => handleSelect()}>
      <div className="flex justify-center items-center">
        {profileImageId ?
          <Image
            className="h-10 w-10 rounded object-cover"
            cloudName={process.env.REACT_APP_CLOUDINARY_NAME}
            publicId={profileImageId}
            crop="scale"
          />
          : <img src={logo} className="h-10 w-10 rounded object-cover" alt="img" />
        }
        <div className="pl-5 flex flex-col items-left">
          <p className="font-bold">{name}</p>
          <p className="text-xs text-gray-500">@{username}</p>
        </div>
      </div>
    </div>
  );
};
