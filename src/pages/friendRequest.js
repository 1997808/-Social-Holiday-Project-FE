import React from "react";
import { UserProfile } from "../components/Card/userProfile";
import { FriendRequestList } from "../components/List/friendRequestList";
import { NewsFeed } from "../components/List/newsfeed";

export const FriendRequest = () => {
  return (
    <div className="container mx-auto grid grid-cols-3 xl:grid-cols-4 gap-8 mt-8">
      <FriendRequestList />
      <div className="col-span-2 xl:col-span-2">
        <UserProfile />
      </div>
    </div>
  );
};