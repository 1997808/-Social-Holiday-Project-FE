import { Image } from "cloudinary-react";
import React from "react";
import logo from "../../assets/logo-2.svg";

export const FriendActive = ({ profileImageId, name }) => {
  return (
    <div className="flex items-center border-t border-gray-200 border-solid p-5">
      <Image
        className="h-10 w-10 rounded object-cover"
        cloudName={process.env.REACT_APP_CLOUDINARY_NAME}
        publicId={profileImageId}
        crop="scale"
      />
      {/* <img className="h-10 w-10 rounded object-cover" src={logo} alt="logo" /> */}
      <p className="ml-3 text-sm truncate">{name}</p>
    </div>
  );
};
