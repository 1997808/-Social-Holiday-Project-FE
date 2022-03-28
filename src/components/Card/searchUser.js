import React, { useState } from "react";
import bg2 from "../../assets/bg-1.jpg";
import profile from "../../assets/profile.jpg";
import { ButtonSmall } from "../Button/buttonSmall";
import { ButtonInvert } from "../Button/buttonInvert";
import { MyAxios } from "../../utils/api";

export const SearchUser = ({ userId, name, username, image, profileImage }) => {
  const [friend, setFriend] = useState(false);
  const addFriend = async (id) => {
    await MyAxios.post(`friendships`, { receiver: id })
      .then((res) => {
        if (res.data.message === "success") {
          setFriend(true)
        } else {
          console.log(res.data.message);
          setFriend(true)
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="w-full h-auto flex flex-col bg-white rounded">
      <img className="h-20 w-full rounded-t object-cover" src={bg2} alt="" />
      <div className="flex flex-col justify-center items-center">
        <img
          className="h-16 w-16 rounded object-cover -mt-10"
          src={profile}
          alt=""
        />
        <div className="p-5 flex flex-col items-center">
          <p className="font-bold">{name}</p>
          <p className="text-xs text-gray-500 mb-5">@{username}</p>
          <div className="grid grid-cols-2 gap-4 mb-5">
            <ButtonSmall
              onClick={() => addFriend(userId)}
              text={friend ? "Pending" : "Add friend"}
              type="button"
              disable={friend ? true : false}
            />
            <ButtonInvert text={"Follow"} type="button" />
          </div>
          <p className="text-xs text-gray-500">View Profile</p>
        </div>
      </div>
    </div>
  );
};
