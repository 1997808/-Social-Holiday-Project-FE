import React, { useEffect, useState } from "react";
import { ChatAltIcon, ShareIcon, ThumbUpIcon, ThumbDownIcon } from "@heroicons/react/outline";
import { MyAxios } from "../../utils/api";

export const PostCommentStat = ({ votes, postid, comments }) => {
  const statStyle = "flex text-gray-500 hover:text-logo-orange transition duration-300"
  const [upvotes, setUpvotes] = useState({})
  const [downvotes, setDownvotes] = useState({})
  const [vote, setVote] = useState(null)

  const checkUserVotepost = async () => {
    await MyAxios.get(`voteposts/check/${postid}`)
      .then((res) => {
        if (res.data) {
          setVote(res.data.data)
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    const getPostvote = async () => {
      await MyAxios.get(`voteposts/post/${postid}`)
        .then((res) => {
          if (res.data) {
            setUpvotes(res.data.upvotes)
            setDownvotes(res.data.downvotes)
            checkUserVotepost()
          }
        })
        .catch((error) => {
          console.log(error);
        });
    }
    getPostvote()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [postid, vote])

  const handleVote = async (vote) => {
    await MyAxios.post("voteposts/handle", { postid, vote })
      .then((res) => {
        if (res.data) {
          checkUserVotepost()
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className={`w-full h-auto flex justify-between bg-white rounded-b pt-5 pb-3`}>
      <div className={statStyle}>
        <ChatAltIcon className="h-4 w-4" />
        <p className="text-sm ml-1">4</p>
      </div>

      <div className={statStyle} onClick={() => handleVote(1)}>
        <ThumbUpIcon className={`h-4 w-4 ${vote === 1 ? 'text-logo-orange' : ''}`} />
        <p className={`text-sm ml-1 ${vote === 1 ? 'text-logo-orange' : ''}`}>{upvotes.count}</p>
      </div>

      <div className={statStyle} onClick={() => handleVote(-1)}>
        { }
        <ThumbDownIcon className={`h-4 w-4 ${vote === -1 ? 'text-logo-blue' : ''}`} />
        <p className={`text-sm ml-1 ${vote === -1 ? 'text-logo-blue' : ''}`}>{downvotes.count}</p>
      </div>

      <div className={statStyle}>
        <ShareIcon className="h-4 w-4" />
      </div>
    </div>
  )
}