import React from "react";
import logo from "../../assets/logo-2.svg";
import { useForm } from "react-hook-form";
import { ButtonSmall } from "../Button/buttonSmall";
import { MyAxios } from "../../utils/api";
import { useSelector } from "react-redux";

export const PostForm = ({ image }) => {
  const { register, handleSubmit, reset } = useForm();
  let user = useSelector((state) => state.user);
  const onSubmit = async (data) => {
    await MyAxios.post(`posts`, { author: user.id, ...data })
      .then((res) => {
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
      <img
        className="h-10 w-10 rounded object-cover mr-5"
        src={logo}
        alt="logo"
      />
      <form onSubmit={handleSubmit(onSubmit)} className="w-full flex flex-col">
        <textarea
          type="text"
          placeholder="What is new?"
          {...register("content", { required: true })}
          className="h-28 text-sm w-full focus:outline-none border-none rounded mb-5"
        />

        <div className="flex justify-end">
          <ButtonSmall text={"Upload"} type="submit" />
        </div>
      </form>
    </div>
  );
};
