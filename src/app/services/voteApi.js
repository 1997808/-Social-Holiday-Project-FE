import { MyAxios } from "../../utils/api";

const checkUserVotepost = async (postid) => {
  await MyAxios.get(`voteposts/check/${postid}`)
    .then((res) => {
      if (res.data) {
        // setVote(res.data.data)
      }
    })
    .catch((error) => {
      console.log(error);
    });
};

const getPostvote = async (postid) => {
  await MyAxios.get(`voteposts/post/${postid}`)
    .then((res) => {
      if (res.data) {
        // setUpvotes(res.data.upvotes)
        // setDownvotes(res.data.downvotes)
        checkUserVotepost()
      }
    })
    .catch((error) => {
      console.log(error);
    });
}

const handleVote = async (postid, vote) => {
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

const checkUserVotecomment = async (commentId) => {
  await MyAxios.get(`votecomments/check/${commentId}`)
    .then((res) => {
      if (res.data) {
        // setVote(res.data.data)
      }
    })
    .catch((error) => {
      console.log(error);
    });
};

const getCommentvote = async (commentId) => {
  await MyAxios.get(`votecomments/comment/${commentId}`)
    .then((res) => {
      if (res.data) {
        // setUpvotes(res.data.upvotes)
        // setDownvotes(res.data.downvotes)
        checkUserVotecomment()
      }
    })
    .catch((error) => {
      console.log(error);
    });
}

const handleCommentvote = async (commentId, vote) => {
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