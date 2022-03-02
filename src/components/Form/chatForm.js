import React from "react";
import { useForm } from 'react-hook-form';
import { ButtonSmall } from "../Button/buttonSmall";

export const ChatForm = ({ image }) => {
  const { register, handleSubmit } = useForm();
  const onSubmit = data => console.log(data);

  return (
    <div className="w-full h-full flex items-center bg-white rounded p-5">
      <form onSubmit={handleSubmit(onSubmit)} className="w-full flex">
        <textarea
          type="text"
          placeholder="What is new?"
          {...register("content", { required: true })}
          className="resize-none text-sm w-full focus:outline-none border-none rounded mr-5"
        />

        <div className="flex items-center">
          <ButtonSmall text={"Upload"} type="submit" />
        </div>
      </form>
    </div>
  );
};