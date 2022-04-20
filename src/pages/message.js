import React, { useState, useEffect } from "react";
import { ChatBox } from "../components/List/chatBox";
import { FriendMessageActiveList } from "../components/List/friendMessageActiveList";
import { MyAxios } from "../utils/api"
import { ModalSearch } from "./layout/modalSearch";

export const Message = () => {
  const [open, setOpen] = useState(false)
  const [chat, setChat] = useState(null)
  const [conversations, setConversations] = useState([])
  useEffect(() => {
    const getFriend = async () => {
      await MyAxios.get("conversations")
        .then((res) => {
          if (res.data) {
            setConversations(res.data);
          }
        })
        .catch((error) => {
          console.log(error);
        });
    };
    getFriend();
  }, []);
  return (
    <>
      <div className="flex-grow border-l border-r border-solid border-gray-200 max-w-2xl sm:ml-[73px] xl:ml-[370px]">
        <div className="w-full">
          {chat ?
            <ChatBox />
            :
            <div className={`fixed ${open ? 'block' : 'hidden'} inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto overflow-x-hidden z-10 h-full w-full flex items-center`}>
              <div className="relative mx-auto w-full max-w-md">
                <ModalSearch setOpen={setOpen} setChat={setChat} />
              </div>
            </div>
          }
        </div>
      </div>
      <div className="hidden lg:inline lg:ml-[745px] xl:ml-[1050px] w-full lg:max-w-[270px] xl:max-w-[320px] px-2 fixed h-screen">
        <FriendMessageActiveList data={conversations} setOpen={setOpen} setChat={setChat} />
      </div>
    </>
  );
};
