import React from "react";
import { FriendActive } from "../Card/friendActive";

export const FriendActiveList = ({ data }) => {
  return (
    <div className="relative w-full bg-white rounded overflow-y-scroll h-screen">
      <div className="sticky top-0 left-0 flex justify-between items-center p-5 py-6 bg-logo-orange rounded-t">
        <p className="font-bold text-white">Conversation</p>
      </div>
      {data.map((item) => (
        <FriendActive key={item.id} profileImageId={item.cloudinaryId} name={item.name} />
      ))}
    </div>
  );
};
