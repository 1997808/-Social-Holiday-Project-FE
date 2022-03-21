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
    <div className="container mx-auto grid grid-cols-3 lg:grid-cols-4 gap-8 mt-8">
      <div className="hidden lg:block lg:col-span-1">
        <SideProfile name={user.name} username={user.username} />
      </div>
      <div className="col-span-2">
        <div className="mb-8">
          <PostForm />
        </div>
        <NewsFeed data={posts} />
      </div>
      <div className="col-span-1">
        <FriendActiveList />
      </div>
    </div>
  );
};
