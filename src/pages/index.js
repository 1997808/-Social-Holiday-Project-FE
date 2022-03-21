import React, { useState, useEffect } from "react";
import { SideProfile } from "../components/Card/sideProfile";
import { PostForm } from "../components/Form/postForm";
import { FriendActiveList } from "../components/List/friendActiveList";
import { NewsFeed } from "../components/List/newsfeed";
import { MyAxios } from "../utils/api";
import { useSelector } from "react-redux";

export const Home = () => {
  const user = useSelector((state) => state.user);
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const getPosts = async () => {
      await MyAxios.get("posts")
        .then((res) => {
          if (res.data) {
            setPosts(res.data);
          } else {
          }
        })
        .catch((error) => {
          // handle error
          console.log(error);
        });
    };
    getPosts();
  }, []);

  return (
    <>
      <div className="flex-grow border-l border-r border-solid border-gray-200 max-w-2xl sm:ml-[73px] xl:ml-[370px]">
        {/* <div className="hidden lg:block lg:col-span-1">
        <SideProfile name={user.name} username={user.username} />
      </div> */}
        <div className="w-full">
          <div className="mb-8">
            <PostForm />
          </div>
          <NewsFeed data={posts} />
        </div>
      </div>
      <div className="hidden lg:inline lg:ml-[745px] xl:ml-[1050px] w-full lg:max-w-[270px] xl:max-w-[320px] p-2 fixed h-full">
        <FriendActiveList />
      </div>
    </>
  );
};
