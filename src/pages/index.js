import React, { useState, useEffect } from "react";
import { socket } from "../app/services/socket";
import { PostForm } from "../components/Form/postForm";
import { FriendActiveList } from "../components/List/friendActiveList";
import { NewsFeed } from "../components/List/newsfeed";
import { MyAxios } from "../utils/api";

export const Home = () => {
  const [posts, setPosts] = useState([]);
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    const getPosts = async () => {
      try {
        const res = await MyAxios.get("posts/all")
        if (res.data) {
          setPosts(res.data.data);
        }
      } catch (error) {
        console.log(error);
      }
    };
    getPosts();
  }, []);

  useEffect(() => {
    const getFriend = async () => {
      try {
        const res = await MyAxios.get("friendships/friend")
        if (res.data) {
          setFriends(res.data);
        }
      } catch (error) {
        console.log(error);
      }
    };
    getFriend();
  }, []);

  useEffect(() => {
    socket.on('newGlobalPost', (data) => {
      setPosts((posts) => [data, ...posts])
      // setCount((count) => count + 1)
      // setSkip((skip) => skip + 1)
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      <div className="flex-grow border-l border-r border-solid border-gray-200 max-w-2xl sm:ml-[73px] xl:ml-[370px]">
        <div className="w-full">
          <PostForm />
          <NewsFeed data={posts} />
        </div>
      </div>
      <div className="hidden lg:inline lg:ml-[745px] xl:ml-[1050px] w-full lg:max-w-[270px] xl:max-w-[320px] px-2 fixed h-screen">
        <FriendActiveList data={friends} />
      </div>
    </>
  );
};
