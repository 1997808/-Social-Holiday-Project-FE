import { MyAxios } from "../../utils/api";

const checkLogin = async () => {
  await MyAxios.get("auth/checkLogin")
    .then((res) => {
      if (res.data) {
        // dispatch(setUser(res.data.user));
        // dispatch(login());
      } else {
        // localStorage.removeItem("token");
        // dispatch(resetUser());
        // dispatch(logOut());
        // return (
        //   <Navigate to="/auth/login" replace={true} />
        // )
      }
    })
    .catch((error) => {
      console.log(error);
    })
}

const onSubmit = async (data) => {
  await MyAxios.post(`auth/login`, data)
    .then((res) => {
      if (res.data.accessToken) {
        // dispatch(login());
        // dispatch(setUser(res.data.user));
        localStorage.setItem("token", res.data.accessToken);
        // attach token to every axios call
        MyAxios.interceptors.request.use(function (config) {
          const token = localStorage.getItem("token");
          config.headers.Authorization = token ? `Bearer ${token}` : "";
          return config;
        });
        // navigate("/");
      } else {
        // setError("email", { type: "failed", message: res.data });
      }
    })
    .catch((error) => {
      console.log(error);
    });
};

const onSubmitSignup = async (data) => {
  await MyAxios.post(`auth/signup`, data)
    .then((res) => {
      if (res.data.message === "SUCCESS") {
        // setTimeout(() => {
        //   navigate("/auth/login", { replace: true });
        // }, 500)
        // setError("email", { type: "success", message: res.data.message });
      } else {
        // setError("email", { type: "failed", message: res.data.message });
      }
    })
    .catch((error) => {
      console.log(error);
    });
};