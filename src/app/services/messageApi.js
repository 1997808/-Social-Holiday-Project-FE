import { MyAxios } from "../../utils/api";

const getMessage = async (conversationId) => {
  await MyAxios.post(`messages/conversation`, { conversationId })
    .then((res) => {
      if (res.data) {
        // setChats(res.data.data)
        // setCount(res.data.count)
      }
    })
    .catch((error) => {
      console.log(error);
    });
};

// await MyAxios.post(`messages/conversation`, { conversationId, page: page, skipSocket: skip })
//   .then((res) => {
//     if (res.data) {
//       setChats((chats) => [...chats, ...res.data.data])
//     }
//   })
//   .catch((error) => {
//     console.log(error);
//   });