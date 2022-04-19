import React from "react";
// import React, { useEffect, useState } from "react";
import logo from "../../assets/default-icon.png";
// import { ButtonSmall } from "../Button/buttonSmall";
// import { ButtonInvert } from "../Button/buttonInvert";
import { MyAxios } from "../../utils/api";
import { Image } from "cloudinary-react";

export const SearchUserForChat = ({ userId, user, type, name, username, profileImageId }) => {
  const addConversation = async () => {
    await MyAxios.post(`conversations`, { participants: [user], type })
      .then((res) => {
        if (res.data) {
          // setStatus(res.data.status)
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="p-5 w-full h-auto flex bg-white rounded border-b border-solid border-gray-200 hover:bg-gray-100 cursor-pointer" onClick={() => addConversation()}>
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
