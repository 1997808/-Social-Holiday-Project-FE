import React, { useEffect, useState } from "react";
import logo from "../../assets/default-icon.png";
import { ButtonSmall } from "../Button/buttonSmall";
import { ButtonInvert } from "../Button/buttonInvert";
import { MyAxios } from "../../utils/api";
import { Image } from "cloudinary-react";
import { FRIENDSHIP_STATUS } from "../../app/constant"

export const FriendProfile = ({ userId, name, username, image, profileImageId }) => {
  const [status, setStatus] = useState(FRIENDSHIP_STATUS.NULL);
  // const [addable, setAddable] = useState(false)
  const [confirm, setConfirm] = useState(false)
  const [id, setId] = useState(null)

  useEffect(() => {
    const findUserFriendRequest = async () => {
      await MyAxios.get(`friendships/find/${userId}`)
        .then((res) => {
          if (res.data) {
            setId(res.data.id)
            setStatus(res.data.status)
          }
        })
        .catch((error) => {
          console.log(error);
        });
    };
    findUserFriendRequest()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [status, userId])

  const removeFriend = async (id) => {
    await MyAxios.delete(`friendships/${id}`)
      .then((res) => {
        if (res.data) {
          setStatus(res.data.status)
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="w-full h-auto flex justify-between items-center bg-white rounded">
      <div className="p-5 flex items-center">
        {profileImageId ?
          <Image
            className="h-14 w-14 rounded object-cover"
            cloudName={process.env.REACT_APP_CLOUDINARY_NAME}
            publicId={profileImageId}
            crop="scale"
          />
          : <img src={logo} className="h-14 w-14 rounded object-cover" alt="img" />
        }
        <div className="px-5">
          <p className="font-bold">{name}</p>
          <p className="text-xs text-gray-500">@{username}</p>
        </div>
      </div>
      <div className="p-5 flex items-center">
        {confirm ?
          <div className="grid grid-cols-2 gap-4">
            <ButtonSmall
              onClick={() => removeFriend(id)}
              text={"Confirm"}
              type="button"
            />
            <ButtonInvert onClick={() => setConfirm(false)}
              text={"Cancel"} type="button" />
          </div>
          :
          <ButtonInvert
            onClick={() => setConfirm(true)}
            text={"Remove"}
            type="button"
          />
        }
      </div>
    </div>
  );
};
