import React from "react";
import { PostContent } from "../Card/postContent";

export const NewsFeed = (data) => {
  //data have data and count
  return (
    <div className="w-full rounded">
      {data.data.map((item) => (
        <PostContent
          key={item.id}
          id={item.id}
          authorId={item.author.id}
          name={item.author.name}
          username={item.author.username}
          date={item.createdAt}
          content={item.content}
          profileImageId={item.author.cloudinaryId}
          comments={item.comments}
        // votes={item.votes}
        />
      ))}
    </div>
  );
};
