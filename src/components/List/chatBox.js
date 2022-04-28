import React, { useEffect, useState, useRef } from "react";
import { MyAxios } from "../../utils/api";
import { ChatCard } from "../Card/chatCard";
import { ChatForm } from "../Form/chatForm";

export const ChatBox = ({ conversationId }) => {
  const [conversation, setConversation] = useState({})
  const [count, setCount] = useState(0)
  const [chats, setChats] = useState([])
  // const [loadMore, setLoadMore] = useState(true);
  const listChatRef = useRef();

  // useEffect(() => {
  //   getMessage(loadMore);
  //   setLoadMore(false);
  // }, [loadMore]);

  useEffect(() => {
    const getFriend = async () => {
      await MyAxios.get(`conversations/${conversationId}`)
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
  }, [conversationId]);

  useEffect(() => {
    const getMessage = async () => {
      await MyAxios.post(`messages/conversation`, { conversationId })
        .then((res) => {
          if (res.data) {
            console.log(res.data)
            setChats(res.data.data)
            setCount(res.data.count)
          }
        })
        .catch((error) => {
          console.log(error);
        });
    };
    getMessage();
  }, [conversationId]);

  const onScroll = () => {
    if (listChatRef.current) {
      const { scrollTop, scrollHeight, clientHeight } = listChatRef.current;
      // console.log(clientHeight - scrollTop, scrollHeight)
      if (clientHeight - scrollTop + 1 === scrollHeight) {
        console.log("reached top");
      }
    }
  };

  return (
    <div className="w-full bg-white rounded h-screen">
      <div className="flex justify-between items-center p-5 py-6 bg-logo-orange rounded-t">
        <p className="font-bold text-white">{conversation.title}</p>
      </div>
      <div
        className="w-full overflow-y-auto flex flex-col-reverse border-b border-solid border-gray-200"
        style={{ height: "80vh" }}
        onScroll={onScroll}
        ref={listChatRef}
      >
        {chats && chats.map(item => {
          if (item.author) {
            return <ChatCard key={item.id} profileImageId={item.author.user.cloudinaryId} name={item.author.user.name} content={item.content} />
          } else {
            return <></>
          }
        })}
      </div>
      <div className="rounded-b" style={{ minHeight: "10vh" }}>
        <ChatForm conversationId={conversationId} />
      </div>
    </div>
  );
};
