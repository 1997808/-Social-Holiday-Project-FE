import React from "react";
import { FriendRequestCard } from "../Card/friendRequestCard";

export const FriendRequestList = () => {
  return (
    <div className="w-full bg-white rounded">
      <div className="flex justify-between items-center p-5 py-6 bg-logo-orange rounded-t">
        <p className="text-lg font-bold text-white">Friend Request</p>
      </div>
      <div className="overflow-y-scroll" style={{ maxHeight: "80vh" }}>
        <FriendRequestCard />
        <FriendRequestCard />
        <FriendRequestCard />
        <FriendRequestCard />
        <FriendRequestCard />
        <FriendRequestCard />
        <FriendRequestCard />
        <FriendRequestCard />
        <FriendRequestCard />
        <FriendRequestCard />
        <FriendRequestCard />
        <FriendRequestCard />
      </div>
    </div>
  );
};