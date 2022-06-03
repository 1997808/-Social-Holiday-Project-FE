import React from "react";
import logo from "../../assets/logo-2.svg";
import { useForm } from "react-hook-form";
import { ButtonSmall } from "../Button/buttonSmall";
import { MyAxios } from "../../utils/api";
import { useSelector } from "react-redux";
import { Image } from "cloudinary-react";
import { text_limit } from "../../utils/css";

export const CommentForm = ({ postid }) => {
  const { register, handleSubmit, reset } = useForm();
  let user = useSelector((state) => state.user);

  const onSubmit = async (data) => {
    await MyAxios.post(`comments`, { post: postid, ...data })
      .then((res) => {
        console.log(res)
        if (res.statusText === "Created") {
          reset({ content: "" });
        } else {
          console.log("fail");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="w-full h-auto flex bg-white rounded border-b border-solid border-gray-200 p-5">
      {user.profileImageId ?
        <Image
          className="h-10 w-10 rounded object-cover mr-5"
          cloudName={process.env.REACT_APP_CLOUDINARY_NAME}
          publicId={user.profileImageId}
          crop="scale"
        />
        :
        <img
          className="h-10 w-10 rounded object-cover mr-5"
          src={logo}
          alt="logo"
        />
      }
      <form onSubmit={handleSubmit(onSubmit)} className="w-full flex flex-col">
        <textarea
          type="text"
          placeholder="Add a comment"
          maxLength={text_limit}
          {...register("content", { required: true })}
          className="h-28 text-sm w-full focus:outline-none border-none rounded mb-5"
        />

        <div className="flex justify-end">
          <ButtonSmall text={"Send"} type="submit" />
        </div>
      </form>
    </div>
  );
};
