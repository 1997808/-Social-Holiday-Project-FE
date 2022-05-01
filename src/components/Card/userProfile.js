import { PencilAltIcon } from "@heroicons/react/solid";
import { Image } from "cloudinary-react";
import React from "react";
import { Link } from "react-router-dom";
import bg2 from "../../assets/bg-1.jpg";
// import profileImage from "../../assets/profile.jpg";

export const UserProfile = ({ data, editable }) => {
  const { name, username, profile, cloudinaryId } = data
  return (
    <div className="w-full h-auto bg-white rounded-b">
      {/* <div className="w-full h-auto bg-white rounded-b border-b border-solid border-gray-200"></div> */}
      <img className="h-48 w-full rounded-b object-cover" src={bg2} alt="" />
      <div className="px-5">
        <div className="-mt-12 mb-2 flex justify-between items-end">
          <Image
            className="h-20 w-20 object-cover border-2 border-solid border-white rounded"
            cloudName={process.env.REACT_APP_CLOUDINARY_NAME}
            publicId={cloudinaryId}
            crop="scale"
          />
          {editable ?
            <Link to="/edit">
              <PencilAltIcon className="w-6 h-6 text-logo-orange" />
            </Link>
            : <></>
          }
        </div>
        <div className="pb-5">
          <p className="font-bold">{name}</p>
          <p className="text-xs text-gray-500 mb-2">@{username}</p>
          <p className="text-sm text-gray-500">
            {profile ? profile : "Official Twitter for #TheSimp. Season 33 airs Sundays at 8/7c on FOX."}
          </p>
        </div>
      </div>
    </div>
  );
};
