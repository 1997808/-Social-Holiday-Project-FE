import { MyAxios } from "../../utils/api";

const getFriend = async (conversationId) => {
  await MyAxios.get(`conversations/${conversationId}`)
    .then((res) => {
      if (res.data) {
        // setConversation(res.data);
      }
    })
    .catch((error) => {
      console.log(error);
    });
};

const addConversation = async (participants, type) => {
  await MyAxios.post(`conversations`, { userids: participants, type })
    .then((res) => {
      if (res.data) {
        // setOpen(false)
      }
    })
    .catch((error) => {
      console.log(error);
    });
};