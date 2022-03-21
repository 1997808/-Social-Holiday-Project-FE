import React from "react";
import { FriendRequestCard } from "../Card/friendRequestCard";

export const FriendRequestList = () => {
  return (
    <div className="relative w-full bg-white rounded overflow-y-scroll h-screen">
      <div className="sticky top-0 left-0 flex justify-between items-center p-5 py-6 bg-logo-orange rounded-t">
        <p className="text-lg font-bold text-white">Friend Request</p>
      </div>
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
  );
};
