import React from "react";
import { FriendRequestList } from "../components/List/friendRequestList";

export const FriendRequest = () => {
  return (
    <div className="container mx-auto grid grid-cols-3 gap-8 mt-8">
      <FriendRequestList />
    </div>
  );
};