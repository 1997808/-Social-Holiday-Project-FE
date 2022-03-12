import React from "react";
import { PostContent } from "../Card/postContent";

export const NewsFeed = (data) => {
  console.log(data.data);
  return (
    <div className="w-full rounded">
      {data.data.map((item) => (
        <PostContent
          key={item.createdAt}
          name={item.name}
          username={item.username}
          date={item.createdAt}
          content={item.content}
        />
      ))}
      {/* <PostContent />
      <PostContent />
      <PostContent />
      <PostContent />
      <PostContent />
      <PostContent /> */}
    </div>
  );
};
