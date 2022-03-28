import React, { useState } from "react";
import profile from "../../assets/profile.jpg";
import { ButtonSmall } from "../Button/buttonSmall";
import { ButtonInvert } from "../Button/buttonInvert";
import { MyAxios } from "../../utils/api";

export const FriendRequestCard = ({ id, image, name, username }) => {
  const [review, setReview] = useState(false);
  const acceptFriendRequest = async (id) => {
    await MyAxios.post(`friendships/acceptFriendRequest`, { id })
      .then((res) => {
        if (res.data.affected) {
          setReview(true);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const declineFriendRequest = async (id) => {
    await MyAxios.post(`friendships/declineFriendRequest`, { id })
      .then((res) => {
        if (res.data.affected) {
          setReview(true);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="w-full h-auto flex justify-center bg-white rounded p-5">
      <img className="h-14 w-14 rounded object-cover" src={profile} alt="" />
      <div className="pl-5 flex flex-col">
        <p className="font-bold">{name}</p>
        <p className="text-xs text-gray-500 mb-2">@{username}</p>
        <div className="grid grid-cols-2 gap-4">
          <ButtonSmall
            text={"Accept"}
            type="button"
            onClick={() => acceptFriendRequest(id)}
            disable={review ? true : false}
          />
          <ButtonInvert
            text={"Decline"}
            type="button"
            onClick={() => declineFriendRequest(id)}
            disable={review ? true : false}
          />
        </div>
      </div>
    </div>
  );
};
