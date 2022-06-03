import React from "react";
import { Button } from "../Button/button";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { data_limit, input_normal } from "../../utils/css";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../../app/auth";
import { setUser } from "../../app/user";
import { MyAxios } from "../../utils/api";

export const LoginForm = () => {
  const { register, handleSubmit, setError, formState: { errors } } = useForm();
  const dispatch = useDispatch();
  let navigate = useNavigate();

  const onSubmit = async (data) => {
    await MyAxios.post(`auth/login`, data)
      .then((res) => {
        if (res.data.accessToken) {
          dispatch(login());
          dispatch(setUser(res.data.user));
          localStorage.setItem("token", res.data.accessToken);
          // attach token to every axios call
          MyAxios.interceptors.request.use(function (config) {
            const token = localStorage.getItem("token");
            config.headers.Authorization = token ? `Bearer ${token}` : "";
            return config;
          });
          navigate("/");
        } else {
          setError("email", { type: "failed", message: res.data });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <div className="w-full p-8 rounded h-full flex justify-between items-center bg-white">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full flex flex-col justify-between items-center"
        >
          <div className="w-full mb-6">
            <input
              type="text"
              placeholder="Email"
              maxLength={data_limit}
              {...register("email", { required: true })}
              className={input_normal}
            />
          </div>
          <div className="w-full mb-6">
            <input
              type="password"
              placeholder="Password"
              maxLength={data_limit}
              {...register("password", { required: true })}
              className={input_normal}
            />
          </div>

          {errors.email && <p className={`${errors.email.type === "success" ? "text-green-500" : "text-red-500"} text-xs mb-4 lg:mb-6`}>{errors.email.message}</p>}

          <Button text={"Login"} type="submit" />

          <div className="mt-4">
            <p className="text-xs text-logo-orange">Forgot password?</p>
          </div>

          <div className="mt-8">
            <p className="text-xs">
              Don't have an account?{" "}
              <span className="text-logo-orange">
                <Link to="/auth/signup">Register now</Link>
              </span>
            </p>
          </div>
        </form>
      </div>
    </>
  );
};
