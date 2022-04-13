import React from "react";
import { ChatAltIcon, ChevronUpIcon, ShareIcon, ChevronDownIcon } from "@heroicons/react/outline";
import { MyAxios } from "../../utils/api";

export const PostStat = ({ isLiked, votes, upvotes, downvotes, postid, comments, radius }) => {
  const statStyle = "flex text-gray-500 hover:text-logo-orange transition duration-300"
  const handleVote = async (vote) => {
    await MyAxios.post("voteposts/handle", { postid, vote })
      .then((res) => {
        if (res.data) {
          //react success, update number and color something
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className={`w-full h-auto flex justify-between bg-white rounded-b pt-5 pb-3`}>
      <div className={statStyle} onClick={() => handleVote(1)}>
        <ChevronUpIcon className="h-4 w-4" />
        <p className="text-sm ml-1">{votes.length}</p>
      </div>

      <div className={statStyle} onClick={() => handleVote(-1)}>
        <ChevronDownIcon className="h-4 w-4" />
        <p className="text-sm ml-1">{votes.length}</p>
      </div>

      <div className={statStyle}>
        <ChatAltIcon className="h-4 w-4" />
        <p className="text-sm ml-1">4</p>
      </div>

      <div className={statStyle}>
        <ShareIcon className="h-4 w-4" />
      </div>
    </div>
  )
}