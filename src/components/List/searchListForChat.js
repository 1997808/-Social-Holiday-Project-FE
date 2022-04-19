import React from "react";
import { SearchUserForChat } from "../Card/searchUserForChat";

export const SearchListForChat = ({ data, type }) => {
  return (
    <div className="w-full h-full">
      {data &&
        data.map((item) => (
          <SearchUserForChat
            key={item.createdAt}
            userId={item.id}
            name={item.name}
            username={item.username}
            profileImageId={item.cloudinaryId}
            user={item}
            type={type}
          />
        ))}
    </div>
  );
};
