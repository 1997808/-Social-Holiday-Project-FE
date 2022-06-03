import React, { useEffect, useState } from "react";
import { UserProfile } from "../components/Card/userProfile";
import { FriendRequestList } from "../components/List/friendRequestList";
import { ProfileFeed } from "../components/List/profileFeed";
import { MyAxios } from "../utils/api";

export const FriendRequest = () => {
  const [requests, setRequests] = useState([]);
  const [userId, setUserId] = useState(null)
  const [user, setUser] = useState({});
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getPending = async () => {
      await MyAxios.get("friendships/pending")
        .then((res) => {
          if (res.data) {
            setRequests(res.data);
          }
        })
        .catch((error) => {
          console.log(error);
        });
    };
    getPending();
  }, []);

  const getUserProfile = async (id) => {
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

  const getUserPost = async (id) => {
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

  const checkUserProfile = (id) => {
    if (userId !== id) {
      //less reload
      getUserProfile(id);
      getUserPost(id)
      setUserId(id);
    }
  }

  return (
    <>
      <div className="flex-grow border-l border-r border-solid border-gray-200 max-w-2xl sm:ml-[73px] xl:ml-[370px]">
        {userId === null ? <></> : <>
          <UserProfile data={user} />
          <ProfileFeed data={posts} author={user} />
        </>
        }
      </div>
      <div className="hidden lg:inline lg:ml-[745px] xl:ml-[1050px] w-full lg:max-w-[270px] xl:max-w-[320px] px-2 fixed h-full">
        <FriendRequestList data={requests} checkUserProfile={checkUserProfile} />
      </div>
    </>
  );
};
