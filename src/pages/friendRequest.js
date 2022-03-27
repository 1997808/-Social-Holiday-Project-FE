import React, { useEffect, useState } from "react";
import { UserProfile } from "../components/Card/userProfile";
import { FriendRequestList } from "../components/List/friendRequestList";
import { NewsFeed } from "../components/List/newsfeed";
import { MyAxios } from "../utils/api";

export const FriendRequest = () => {
  const [requests, setRequests] = useState([]);
  useEffect(() => {
    const getPending = async () => {
      await MyAxios.get("friendships/pending")
        .then((res) => {
          if (res.data) {
            setRequests(res.data);
          } else {
          }
        })
        .catch((error) => {
          console.log(error);
        });
    };
    getPending();
  }, []);

  return (
    <>
      <div className="flex-grow border-l border-r border-solid border-gray-200 max-w-2xl sm:ml-[73px] xl:ml-[370px]">
        <div className="mb-8">
          <UserProfile />
        </div>
        <NewsFeed data={[]} />
      </div>
      <div className="hidden lg:inline lg:ml-[745px] xl:ml-[1050px] w-full lg:max-w-[270px] xl:max-w-[320px] px-2 fixed h-full">
        <FriendRequestList data={requests} />
      </div>
    </>
  );
};
