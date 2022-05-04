import { MyAxios } from "../../utils/api";

const getUser = async () => {
  await MyAxios.get(`users`)
    .then((res) => {
      if (res.data) {
        // reset({ ...res.data })
      }
    })
    .catch((error) => {
      console.log(error);
    });
};

const handleSubmission = async (selectedFile) => {
  const form = new FormData();
  form.append("file", selectedFile);
  await MyAxios.post(`users/profile/icon`, form)
    .then((res) => {
      if (res.data) {
        // setIsFilePicked(false);
        // // setSelectedFile(null);
        // setTimeout(() => {
        //   navigate("/profile", { replace: true });
        // }, 1000)
      }
    })
    .catch((error) => {
      console.log(error);
    });
};

const onSubmit = async (data) => {
  await MyAxios.post(`users/profile`, data)
    .then((res) => {
      if (res.data) {
        // setError("email", { type: "success", message: res.data.message });
      } else {
        // setError("email", { type: "failed", message: res.data.message });
      }
    })
    .catch((error) => {
      console.log(error);
    });
};

const getUserProfile = async (id) => {
  await MyAxios.get(`users/profile/${id}`)
    .then((res) => {
      if (res.data) {
        // setUser(res.data);
        // setPosts(res.data.posts);
      }
    })
    .catch((error) => {
      console.log(error);
    });
};

const getUsers = async (keyword) => {
  await MyAxios.post("users/search", { keyword })
    .then((res) => {
      if (res.data) {
        // setUsers(res.data.data);
      }
    })
    .catch((error) => {
      console.log(error);
    });
};

const getUsersFC = async (keyword) => {
  if (keyword !== "") {
    await MyAxios.post("users/search", { keyword })
      .then((res) => {
        if (res.data) {
          // setUsers(res.data.data);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  } else {
    await MyAxios.get("friendships/friend")
      .then((res) => {
        if (res.data) {
          // setUsers(res.data);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }
};