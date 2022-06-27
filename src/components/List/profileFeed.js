import React from "react";
import { PostContent } from "../Card/postContent";

export const ProfileFeed = ({ data, author }) => {
  return (
    <div className="w-full rounded">
      {data.map((item) => (
        <PostContent
          key={item.id}
          id={item.id}
          name={author.name}
          image={item.imageUrl ? item.imageUrl[0] : item.imageUrl}
          username={author.username}
          date={item.createdAt}
          content={item.content}
          profileImageId={author.cloudinaryId}
          comments={item.comments}
        />
      ))}
    </div>
  );
};
