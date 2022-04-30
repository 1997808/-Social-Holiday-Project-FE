import React from "react";
import { FriendMessageCard } from "../Card/friendMessageCard";
import { PlusIcon } from "@heroicons/react/outline"
import { useSelector } from "react-redux";

export const FriendMessageActiveList = ({ data, chat, setChat, setOpen }) => {
  const userId = useSelector(state => state.user.id)
  return (
    <div className="relative w-full bg-white rounded overflow-y-scroll h-screen">
      <div className="sticky top-0 left-0 flex justify-between items-center p-5 py-6 bg-logo-orange rounded-t">
        <p className="font-bold text-white">Messages</p>
        <PlusIcon className="h-6 text-white cursor-pointer" onClick={() => setOpen(true)} />
      </div>
      {data && data.map(item => {
        if (item.type === 0) {
          //direct message
          const users = item.participants.filter(item => item.userId !== userId)
          const user = users[0].user
          return <FriendMessageCard key={item.id} id={item.id} profileImageId={user.cloudinaryId} title={user.name} setChat={setChat} chat={chat} />
        } else {
          return <FriendMessageCard />
        }
      })}
    </div>
  );
};
