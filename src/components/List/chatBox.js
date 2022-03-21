import React from "react";
import { ChatCard } from "../Card/chatCard";
import { ChatForm } from "../Form/chatForm";

export const ChatBox = () => {
  return (
    <div className="w-full bg-white rounded h-screen">
      <div className="flex justify-between items-center p-5 py-6 bg-logo-orange rounded-t">
        <p className="text-lg font-bold text-white">Gamer123</p>
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
