import React from "react";
import { ChatBox } from "../components/List/chatBox";
import { FriendMessageActiveList } from "../components/List/friendMessageActiveList";

export const Message = () => {
  return (
    <div className="container mx-auto grid grid-cols-3 xl:grid-cols-4 gap-8 mt-8">
      <div className="col-span-1">
        <FriendMessageActiveList />
      </div>
      <div className="col-span-2">
        <ChatBox />
      </div>
    </div>
  );
};