import React, { useContext } from "react";
import { useForm } from 'react-hook-form';
// import { MyAxios } from "../../utils/api";
import { text_limit } from "../../utils/css";
import { ButtonSmall } from "../Button/buttonSmall";
import { SocketContext } from "../../app/services/socket"
import { useSelector } from "react-redux";


export const ChatForm = ({ conversationId }) => {
  const { register, handleSubmit, reset } = useForm();
  const userId = useSelector(state => state.user.id)
  const socket = useContext(SocketContext);

  const onSubmit = async (data) => {
    socket.emit('handleMessage', { ...data, conversationId, userId }, (res) => {
      if (res.message === 'SUCCESS') {
        reset({ content: "" });
      }
    });
  };

  return (
    <div className="w-full h-full flex items-center bg-white rounded p-5">
      <form onSubmit={handleSubmit(onSubmit)} className="w-full flex">
        <textarea
          type="text"
          placeholder="What is new?"
          maxLength={text_limit}
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