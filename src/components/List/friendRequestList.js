import React from "react";
import { FriendRequestCard } from "../Card/friendRequestCard";

export const FriendRequestList = ({ data, checkUserProfile }) => {
  return (
    <div className="relative w-full bg-white rounded overflow-y-scroll h-screen">
      <div className="sticky top-0 left-0 flex justify-between items-center p-5 py-6 bg-logo-orange rounded-t">
        <p className="font-bold text-white">Friend Request</p>
      </div>
      {data.map((item) => (
        <FriendRequestCard
          key={item.createdAt}
          id={item.id}
          userId={item.creator.id}
          name={item.creator.name}
          username={item.creator.username}
          profileImageId={item.creator.cloudinaryId}
          checkUserProfile={checkUserProfile}
        />
      ))}
    </div>
  );
};
