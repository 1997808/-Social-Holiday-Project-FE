import React from "react";
import { FriendMessageCard } from "../Card/friendMessageCard";

export const FriendMessageActiveList = () => {
  return (
    <div className="relative w-full bg-white rounded overflow-y-scroll h-screen">
      <div className="sticky top-0 left-0 flex justify-between items-center p-5 py-6 bg-logo-orange rounded-t">
        <p className="font-bold text-white">Chats</p>
      </div>
      <FriendMessageCard />
      <FriendMessageCard />
      <FriendMessageCard />
      <FriendMessageCard />
      <FriendMessageCard />
    </div>
  );
};
