import React, { useEffect, useState, useRef } from "react";
import { socket } from "../../app/services/socket";
import { MyAxios } from "../../utils/api";
import { DotPulse } from "../../utils/css";
import { ChatCard } from "../Card/chatCard";
import { ChatForm } from "../Form/chatForm";

export const ChatBox = ({ conversationId }) => {
  const [conversation, setConversation] = useState({})
  const [count, setCount] = useState(0)
  const [page, setPage] = useState(1)
  const [skip, setSkip] = useState(15)
  const [chats, setChats] = useState([])
  const [loading, setLoading] = useState(false)
  const listChatRef = useRef();

  useEffect(() => {
    socket.on('newMessage', (data) => {
      setChats((chats) => [data, ...chats])
      setCount((count) => count + 1)
      setSkip((skip) => skip + 1)
    })
  }, [])

  useEffect(() => {
    const getFriend = async () => {
      try {
        const res = await MyAxios.get(`conversations/${conversationId}`)
        if (res.data) {
          setConversation(res.data);
        }
      } catch (error) {
        console.log(error);
      }
    };
    getFriend();
  }, [conversationId]);

  useEffect(() => {
    const getMessage = async () => {
      try {
        const res = await MyAxios.post(`messages/conversation`, { conversationId })
        if (res.data) {
          setChats(res.data.data)
          setCount(res.data.count)
        }
      } catch (error) {
        console.log(error);
      }
    };
    getMessage();
  }, [conversationId]);

  const onScroll = async () => {
    if (listChatRef.current) {
      const { scrollTop, scrollHeight, clientHeight } = listChatRef.current;
      if (clientHeight - scrollTop + 2 >= scrollHeight && chats.length < count) {
        console.log(chats.length)
        // reached top of scroll
        try {
          setLoading(true)
          const res = await MyAxios.post(`messages/conversation`, { conversationId, page: page, skipSocket: skip })
          if (res.data) {
            console.log(res.data.data.length)
            if (res.data.data.length > 0) {
              setTimeout(() => {
                setLoading(false)
                setChats((chats) => [...chats, ...res.data.data])
                setPage(page + 1)
              }, 1500)
              // setSkip(skip + 15)
            }
          }
        } catch (error) {
          console.log(error);
        }
      }
    }
  };

  return (
    <div className="w-full bg-white flex flex-col rounded h-screen">
      <div className="flex justify-between items-center p-5 py-6 bg-logo-orange rounded-t" style={{ maxHeight: "10vh" }}>
        <p className="font-bold text-white">{conversation.title}</p>
      </div>
      <div className={`flex justify-center py-5 ${loading ? '' : 'hidden'}`}>
        <DotPulse />
      </div>
      <div
        className="w-full overflow-y-auto flex flex-col-reverse border-b border-solid border-gray-200 grow"
        style={{ minHeight: "75vh" }}
        onScroll={loading ? () => { } : onScroll} //if loading don't get more
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
