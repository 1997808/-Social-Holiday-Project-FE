import React, { useEffect, useState } from "react";
import { MyAxios } from "../../utils/api";
import { ChatCard } from "../Card/chatCard";
import { ChatForm } from "../Form/chatForm";

export const ChatBox = ({ id }) => {
  const [conversation, setConversation] = useState({})

  useEffect(() => {
    const getFriend = async () => {
      await MyAxios.get(`conversations/${id}`)
        .then((res) => {
          if (res.data) {
            setConversation(res.data);
          }
        })
        .catch((error) => {
          console.log(error);
        });
    };
    getFriend();
  }, [id]);

  return (
    <div className="w-full bg-white rounded h-screen">
      <div className="flex justify-between items-center p-5 py-6 bg-logo-orange rounded-t">
        <p className="font-bold text-white">{conversation.title}</p>
      </div>
      <div
        className="w-full overflow-y-scroll flex flex-col-reverse border-b border-solid border-gray-200"
        style={{ height: "80vh" }}
      >
        <ChatCard />
        <ChatCard />
        <ChatCard />
        <ChatCard />
        <ChatCard />
        <ChatCard />
        <ChatCard />
        <ChatCard />
        <ChatCard />
        <ChatCard />
        <ChatCard />
        <ChatCard />
        <ChatCard />
        <ChatCard />
        <ChatCard />
        <ChatCard />
        <ChatCard />
        <ChatCard />
      </div>
      <div className="rounded-b" style={{ minHeight: "10vh" }}>
        <ChatForm />
      </div>
    </div>
  );
};
