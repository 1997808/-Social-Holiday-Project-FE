import React, { useEffect, useState } from "react";
import { ChatAltIcon, ShareIcon, ThumbUpIcon, ThumbDownIcon } from "@heroicons/react/outline";
import { MyAxios } from "../../utils/api";

export const PostCommentStat = ({ commentId, comments }) => {
  const statStyle = "flex text-gray-500 hover:text-logo-orange transition duration-300"
  const [upvotes, setUpvotes] = useState({})
  const [downvotes, setDownvotes] = useState({})
  const [vote, setVote] = useState(null)

  const checkUserVotecomment = async () => {
    await MyAxios.get(`votecomments/check/${commentId}`)
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
    const getCommentvote = async () => {
      await MyAxios.get(`votecomments/comment/${commentId}`)
        .then((res) => {
          if (res.data) {
            setUpvotes(res.data.upvotes)
            setDownvotes(res.data.downvotes)
            checkUserVotecomment()
          }
        })
        .catch((error) => {
          console.log(error);
        });
    }
    getCommentvote()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [commentId, vote])

  const handleCommentvote = async (vote) => {
    await MyAxios.post("votecomments/handle", { commentId, vote })
      .then((res) => {
        if (res.data) {
          checkUserVotecomment()
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className={`w-full h-auto flex justify-between bg-white rounded-b pt-5 pb-3`}>
      <div className={statStyle} onClick={() => handleCommentvote(1)}>
        <ThumbUpIcon className={`h-4 w-4 ${vote === 1 ? 'text-logo-orange' : ''}`} />
        <p className={`text-sm ml-1 ${vote === 1 ? 'text-logo-orange' : ''}`}>{upvotes.count}</p>
      </div>

      <div className={statStyle} onClick={() => handleCommentvote(-1)}>
        { }
        <ThumbDownIcon className={`h-4 w-4 ${vote === -1 ? 'text-logo-blue' : ''}`} />
        <p className={`text-sm ml-1 ${vote === -1 ? 'text-logo-blue' : ''}`}>{downvotes.count}</p>
      </div>

      <div className={`${statStyle} opacity-0 cursor-default`}>
        <ChatAltIcon className="h-4 w-4" />
        <p className="text-sm ml-1">4</p>
      </div>

      <div className={`${statStyle} opacity-0 cursor-default`}>
        <ShareIcon className="h-4 w-4" />
      </div>
    </div>
  )
}