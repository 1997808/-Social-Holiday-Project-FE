import React, { useEffect, useState, useRef } from "react";
import { socket } from "../../app/services/socket";
import { MyAxios } from "../../utils/api";
import { ChatCard } from "../Card/chatCard";
import { ChatForm } from "../Form/chatForm";

export const ChatBox = ({ conversationId }) => {
  const [conversation, setConversation] = useState({})
  const [count, setCount] = useState(0)
  const [page, setPage] = useState(2)
  const [skip, setSkip] = useState(15)
  const [chats, setChats] = useState([])
  // const [loadMore, setLoadMore] = useState(true);
  const listChatRef = useRef();

  // useEffect(() => {
  //   getMessage(loadMore);
  //   setLoadMore(false);
  // }, [loadMore]);

  useEffect(() => {
    socket.on('newMessage', (data) => {
      setChats((chats) => [data, ...chats])
      setCount((count) => count + 1)
      setSkip((skip) => skip + 1)
    })
  }, [])

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

  const onScroll = async () => {
    if (listChatRef.current) {
      const { scrollTop, scrollHeight, clientHeight } = listChatRef.current;
      // console.log("reached top");
      if (clientHeight - scrollTop + 2 >= scrollHeight && chats.length < count) {
        await MyAxios.post(`messages/conversation`, { conversationId, page: page, skipSocket: skip })
          .then((res) => {
            if (res.data) {
              setChats((chats) => [...chats, ...res.data.data])
            }
          })
          .catch((error) => {
            console.log(error);
          });
        setPage(page + 1)
        setSkip(skip + 15)
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
