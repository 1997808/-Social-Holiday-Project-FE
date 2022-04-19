import React from "react";
import { FriendMessageCard } from "../Card/friendMessageCard";
import { PlusIcon } from "@heroicons/react/outline"

export const FriendMessageActiveList = ({ data, setChat, setOpen }) => {
  return (
    <div className="relative w-full bg-white rounded overflow-y-scroll h-screen">
      <div className="sticky top-0 left-0 flex justify-between items-center p-5 py-6 bg-logo-orange rounded-t">
        <p className="font-bold text-white">Messages</p>
        <PlusIcon className="h-6 text-white cursor-pointer" onClick={() => setOpen(true)} />
      </div>
      <FriendMessageCard />
      <FriendMessageCard />
      <FriendMessageCard />
      <FriendMessageCard />
      <FriendMessageCard />
    </div>
  );
};
