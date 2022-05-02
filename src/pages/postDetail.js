import React, { useState, useEffect } from "react";
import { PostForm } from "../components/Form/postForm";
import { FriendActiveList } from "../components/List/friendActiveList";
import { NewsFeed } from "../components/List/newsfeed";
import { MyAxios } from "../utils/api";

export const PostDetail = () => {
  const [posts, setPosts] = useState([]);
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    const getPosts = async () => {
      await MyAxios.get("posts/all")
        .then((res) => {
          if (res.data) {
            setPosts(res.data.data);
          }
        })
        .catch((error) => {
          console.log(error);
        });
    };
    getPosts();
  }, []);

  useEffect(() => {
    const getFriend = async () => {
      await MyAxios.get("friendships/friend")
        .then((res) => {
          if (res.data) {
            setFriends(res.data);
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
