import React from "react";
import { UserProfile } from "../components/Card/userProfile";
import { NewsFeed } from "../components/List/newsfeed";

export const Profile = () => {
  return (
    <div className="w-full h-full">
      <div className="mb-8 bg-white">
        <div className="container mx-auto grid grid-cols-4 gap-8">
          <div></div>
          <div className="col-span-2">
            <UserProfile />
          </div>
        </div>
      </div>
      <div className="container mx-auto grid grid-cols-4 gap-8">
        <div></div>
        <div className="col-span-2">
          <NewsFeed data={[]} />
        </div>
      </div>
    </div>
  );
};
