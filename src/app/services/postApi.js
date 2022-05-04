import { MyAxios } from "../../utils/api";

const onSubmit = async (user, data) => {
  await MyAxios.post(`posts`, { author: user.id, ...data })
    .then((res) => {
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

const getPosts = async () => {
  await MyAxios.get("posts/all")
    .then((res) => {
      if (res.data) {
        // setPosts(res.data.data);
      }
    })
    .catch((error) => {
      console.log(error);
    });
};

const getPost = async (id) => {
  await MyAxios.get(`posts/${id}`)
    .then((res) => {
      if (res.data) {
        // setPost(res.data);
      }
    })
    .catch((error) => {
      console.log(error);
    });
};