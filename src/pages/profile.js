import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { UserProfile } from "../components/Card/userProfile";
import { FriendListProfile } from "../components/List/friendListProfile";
import { ProfileContent } from "../components/List/profileContent";
import { ProfileFeed } from "../components/List/profileFeed";
import { MyAxios } from "../utils/api";

export const Profile = () => {
  const [user, setUser] = useState({});
  const [posts, setPosts] = useState([]);
  const [friends, setFriends] = useState([]);
  const [content, setContent] = useState("Posts")
  let userId = useSelector((state) => state.user.id);
  let { id } = useParams();
  let editable = +id === userId;

  useEffect(() => {
    const getUserProfile = async () => {
      await MyAxios.get(`users/profile/${id}`)
        .then((res) => {
          if (res.data) {
            setUser(res.data);
          }
        })
        .catch((error) => {
          console.log(error);
        });
    };
    getUserProfile();
  }, [id]);

  useEffect(() => {
    const getUserPost = async () => {
      await MyAxios.get(`posts/profile/${id}`)
        .then((res) => {
          if (res.data) {
            setPosts(res.data.data);
          }
        })
        .catch((error) => {
          console.log(error);
        });
    };
    getUserPost();
  }, [id]);

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
          <UserProfile data={user} editable={editable} />
          <ProfileContent content={content} setContent={setContent} />
          {content === "Posts" ?
            <ProfileFeed data={posts} author={user} /> :
            <FriendListProfile data={friends} />
          }
        </div>
      </div>
      {/* <div className="hidden lg:inline lg:ml-[745px] xl:ml-[1050px] w-full lg:max-w-[270px] xl:max-w-[320px] px-2 fixed h-screen">
        <FriendActiveList />
      </div> */}
    </>
  );
};
