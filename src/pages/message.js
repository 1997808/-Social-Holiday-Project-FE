import React, { useState, useEffect } from "react";
import { socket } from "../app/services/socket";
import { ChatBox } from "../components/List/chatBox";
import { FriendMessageActiveList } from "../components/List/friendMessageActiveList";
import { MyAxios } from "../utils/api"
import { ModalSearch } from "./layout/modalSearch";

export const Message = () => {
  const [open, setOpen] = useState(false)
  const [prevChat, setPrevChat] = useState(null)
  const [chat, setChat] = useState(null)
  const [conversations, setConversations] = useState([])

  useEffect(() => {
    const getFriend = async () => {
      try {
        const res = await MyAxios.get("conversations")
        if (res.data) {
          setConversations(res.data);
        }
      } catch (error) {
        console.log(error);
      }
    };
    getFriend();
  }, []);

  useEffect(() => {
    if (prevChat == null && chat == null) {
    } else if (prevChat == null && chat !== null) {
      setPrevChat(chat)
      socket.emit("conversationSwitch", { conversation: chat });
    } else if (prevChat !== null && chat !== null) {
      setPrevChat(chat)
      socket.emit("conversationSwitch", { prevConversation: prevChat, conversation: chat });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [chat]);

  return (
    <>
      <div className="flex-grow border-l border-r border-solid border-gray-200 max-w-2xl sm:ml-[73px] xl:ml-[370px]">
        <div className="w-full">
          {chat ?
            <ChatBox conversationId={chat} />
            :
            <></>
          }
          <div className={`fixed ${open ? 'block' : 'hidden'} inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto overflow-x-hidden z-10 h-full w-full flex items-center`}>
            <div className="relative mx-auto w-full max-w-md">
              <ModalSearch setOpen={setOpen} setChat={setChat} />
            </div>
          </div>
        </div>
      </div>
      <div className="hidden lg:inline lg:ml-[745px] xl:ml-[1050px] w-full lg:max-w-[270px] xl:max-w-[320px] px-2 fixed h-screen">
        <FriendMessageActiveList data={conversations} setOpen={setOpen} chat={chat} setChat={setChat} />
      </div>
    </>
  );
};
