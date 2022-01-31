import React from "react";
import logo from "../../assets/logo-2.svg"
import { useForm } from 'react-hook-form';
import { ButtonSmall } from "../Button/buttonSmall";

export const PostForm = ({ image }) => {
  const { register, handleSubmit } = useForm();
  const onSubmit = data => console.log(data);

  return (
    <div className="w-full h-auto flex bg-white rounded p-5">
      <img className="h-10 w-10 rounded object-cover mr-5" src={logo} alt="logo" />
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