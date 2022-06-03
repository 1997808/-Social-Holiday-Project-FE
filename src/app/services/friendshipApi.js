import { MyAxios } from "../../utils/api";

const checkUserFriendStatus = async (userId) => {
  await MyAxios.get(`friendships/check/${userId}`)
    .then((res) => {
      if (res.data) {
        // setStatus(res.data)
        // setAddable(canAddFriendByStatus(status))
      }
    })
    .catch((error) => {
      console.log(error);
    });
};

const addFriend = async (id) => {
  await MyAxios.post(`friendships`, { receiver: id })
    .then((res) => {
      if (res.data) {
        // setStatus(res.data.status)
      }
    })
    .catch((error) => {
      console.log(error);
    });
};

const acceptFriendRequest = async (id) => {
  await MyAxios.post(`friendships/acceptFriendRequest`, { id })
    .then((res) => {
      if (res.data.affected) {
        // setReview(true);
      }
    })
    .catch((error) => {
      console.log(error);
    });
};

const declineFriendRequest = async (id) => {
  await MyAxios.post(`friendships/declineFriendRequest`, { id })
    .then((res) => {
      if (res.data.affected) {
        // setReview(true);
      }
    })
    .catch((error) => {
      console.log(error);
    });
};

const getPending = async () => {
  await MyAxios.get("friendships/pending")
    .then((res) => {
      if (res.data) {
        // setRequests(res.data);
      }
    })
    .catch((error) => {
      console.log(error);
    });
};

const getFriend = async () => {
  await MyAxios.get("friendships/friend")
    .then((res) => {
      if (res.data) {
        // setFriends(res.data);
      }
    })
    .catch((error) => {
      console.log(error);
    });
};