import React from "react";
import { PostComment } from "../Card/postComment";

export const PostCommentList = (data) => {
  //data have data and count
  return (
    <div className="w-full rounded">
      {data.data.map((item) => (
        <PostComment
          key={item.id}
          id={item.id}
          authorId={item.author.id}
          name={item.author.name}
          username={item.author.username}
          date={item.createdAt}
          content={item.content}
          profileImageId={item.author.cloudinaryId}
        />
      ))}
    </div>
  );
};