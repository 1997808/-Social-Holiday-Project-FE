import React from "react";
import { PostContent } from "../Card/postContent";

export const ProfileFeed = ({ data, author }) => {
  return (
    <div className="w-full rounded">
      {data.map((item) => (
        <PostContent
          key={item.createdAt}
          name={author.name}
          username={author.username}
          date={item.createdAt}
          content={item.content}
        />
      ))}
    </div>
  );
};
