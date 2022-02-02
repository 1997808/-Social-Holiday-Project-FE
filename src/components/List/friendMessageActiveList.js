import React from "react";
import { FriendMessageCard } from "../Card/friendMessageCard";

export const FriendMessageActiveList = () => {
  return (
    <div className="w-full bg-white rounded">
      <div className="flex justify-between items-center p-5 py-6 bg-logo-orange rounded-t">
        <p className="text-lg font-bold text-white">Chats</p>
      </div>
      <div className="overflow-y-scroll" style={{ maxHeight: "80vh" }}>
        <FriendMessageCard />
        <FriendMessageCard />
        <FriendMessageCard />
        <FriendMessageCard />
        <FriendMessageCard />
        <FriendMessageCard />
        <FriendMessageCard />
        <FriendMessageCard />
        <FriendMessageCard />
        <FriendMessageCard />
        <FriendMessageCard />
        <FriendMessageCard />
      </div>
    </div>
  );
};