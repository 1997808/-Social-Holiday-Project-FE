import { MyAxios } from "../../utils/api";

const onSubmit = async (data, postid) => {
  await MyAxios.post(`comments`, { post: postid, ...data })
    .then((res) => {
      console.log(res)
      if (res.statusText === "Created") {
        // reset({ content: "" });
      } else {
        console.log("fail");
      }
    })
    .catch((error) => {
      console.log(error);
    });
};

const getComments = async (id) => {
  await MyAxios.post(`comments/post`, { postId: id })
    .then((res) => {
      if (res.data) {
        // setComments(res.data.data)
        // setCount(res.data.count)
      }
    })
    .catch((error) => {
      console.log(error);
    });
};