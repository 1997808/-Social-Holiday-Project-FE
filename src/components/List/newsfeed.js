import React from "react";
import { PostContent } from "../Card/postContent";

export const NewsFeed = () => {
  return (
    <div className="w-full rounded">
      <div className="flex flex-col">
        <PostContent />
        <PostContent />
        <PostContent />
        <PostContent />
        <PostContent />
        <PostContent />
      </div>
    </div>
  );
};