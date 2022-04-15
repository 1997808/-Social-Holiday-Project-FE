import React, { useEffect, useState } from "react";
import bg2 from "../../assets/bg-1.jpg";
import logo from "../../assets/default-icon.png";
import { ButtonSmall } from "../Button/buttonSmall";
import { ButtonInvert } from "../Button/buttonInvert";
import { MyAxios } from "../../utils/api";
import { Image } from "cloudinary-react";
import { FRIENDSHIP_STATUS } from "../../app/constant"

export const SearchUser = ({ userId, name, username, image, profileImageId }) => {
  const [status, setStatus] = useState(FRIENDSHIP_STATUS.NULL);
  const [addable, setAddable] = useState(false)

  useEffect(() => {
    const checkUserFriendStatus = async () => {
      await MyAxios.get(`friendships/check/${userId}`)
        .then((res) => {
          if (res.data) {
            setStatus(res.data)
            setAddable(canAddFriend())
          }
        })
        .catch((error) => {
          console.log(error);
        });
    };
    checkUserFriendStatus()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [status, userId])

  const canAddFriend = () => {
    switch (status) {
      case FRIENDSHIP_STATUS.NULL:
        return true
      case FRIENDSHIP_STATUS.PENDING:
        return false
      case FRIENDSHIP_STATUS.ACCEPTED:
        return false
      case FRIENDSHIP_STATUS.DECLINED:
        return true
      case FRIENDSHIP_STATUS.CANCEL:
        return true
      default:
        return false
    }
  }

  const addFriend = async (id) => {
    await MyAxios.post(`friendships`, { receiver: id })
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
    <div className="w-full h-auto flex flex-col bg-white rounded">
      <img className="h-20 w-full rounded-t object-cover" src={bg2} alt="" />
      <div className="flex flex-col justify-center items-center">
        {profileImageId ?
          <Image
            className="h-16 w-16 rounded object-cover -mt-10"
            cloudName={process.env.REACT_APP_CLOUDINARY_NAME}
            publicId={profileImageId}
            crop="scale"
          />
          : <img src={logo} className="h-16 w-16 rounded object-cover -mt-10" alt="img" />
        }
        <div className="p-5 flex flex-col items-center">
          <p className="font-bold">{name}</p>
          <p className="text-xs text-gray-500 mb-5">@{username}</p>
          <div className="grid grid-cols-2 gap-4 mb-5">
            <ButtonSmall
              onClick={() => addFriend(userId)}
              text={addable ? "Add friend" : status}
              type="button"
              disable={addable ? false : true}
            />
            <ButtonInvert text={"Follow"} type="button" />
          </div>
          <p className="text-xs text-gray-500">View Profile</p>
        </div>
      </div>
    </div>
  );
};
