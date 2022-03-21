import React from "react";
import { ChatBox } from "../components/List/chatBox";
import { FriendMessageActiveList } from "../components/List/friendMessageActiveList";

export const Message = () => {
  return (
    <>
      <div className="flex-grow border-l border-r border-solid border-gray-200 max-w-2xl sm:ml-[73px] xl:ml-[370px]">
        <div className="w-full">
          <ChatBox />
        </div>
      </div>
      <div className="hidden lg:inline lg:ml-[745px] xl:ml-[1050px] w-full lg:max-w-[270px] xl:max-w-[320px] px-2 fixed h-screen">
        <FriendMessageActiveList />
      </div>
    </>
  );
};
