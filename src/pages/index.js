import React from "react";
import { PostForm } from "../components/Form/postForm";
import { FriendActiveList } from "../components/List/friendActiveList";

export const Home = () => {
  return (
    <div className="container mx-auto grid grid-cols-3 lg:grid-cols-4 gap-8 mt-8">
      <div className="hidden lg:block lg:col-span-1">
        <p>icon</p>
      </div>
      <div className="col-span-2">
        <PostForm />
      </div>
      <div className="col-span-1">
        <FriendActiveList />
      </div>
    </div>
  );
};