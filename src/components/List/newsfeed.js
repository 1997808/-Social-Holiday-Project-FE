import React from "react";
import { PostContent } from "../Card/postContent";

export const NewsFeed = (data) => {
  //data have data and count
  console.log(data.data);
  return (
    <div className="w-full rounded">
      {data.data.map((item) => (
        <PostContent
          key={item.createdAt}
          name={item.author.name}
          username={item.author.username}
          date={item.createdAt}
          content={item.content}
        />
      ))}
    </div>
  );
};
