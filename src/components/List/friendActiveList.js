import React from "react";
import { FriendActive } from "../Card/friendActive";

export const FriendActiveList = () => {
  return (
    <div className="w-full bg-white rounded">
      <div className="flex justify-between items-center p-5 py-6 bg-logo-orange rounded-t">
        <p className="text-lg font-bold text-white">Conversation</p>
      </div>
      <div className="overflow-y-scroll" style={{ maxHeight: "80vh" }}>
        <FriendActive />
        <FriendActive />
        <FriendActive />
        <FriendActive />
        <FriendActive />
        <FriendActive />
        <FriendActive />
        <FriendActive />
        <FriendActive />
        <FriendActive />
        <FriendActive />
        <FriendActive />
      </div>
    </div>
  );
};