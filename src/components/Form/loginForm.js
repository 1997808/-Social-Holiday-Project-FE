import React from "react";
import { Button } from "../Button/button";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { input_normal } from "../../utils/css";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../../app/auth";
import { setUser } from "../../app/user";
import { MyAxios } from "../../utils/api";

export const LoginForm = () => {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();
  let navigate = useNavigate();

  const onSubmit = async (data) => {
    await MyAxios.post(`auth/login`, data)
      .then((res) => {
        if (res.data.accessToken) {
          localStorage.setItem("token", res.data.accessToken);
          dispatch(setUser(res.data.user));
          dispatch(login());
          navigate("../", { replace: true });
        } else {
          console.log("fail");
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
              {...register("email", { required: true })}
              className={input_normal}
            />
          </div>
          <div className="w-full mb-6">
            <input
              type="password"
              placeholder="Password"
              {...register("password", { required: true })}
              className={input_normal}
            />
          </div>
          <Button text={"Login"} type="submit" />

          <div className="mt-4">
            <p className="text-xs text-logo-orange">Forgot password?</p>
          </div>

          <div className="mt-8">
            <p className="text-xs">
              Don’t have an account?{" "}
              <span className="text-logo-orange">
                <Link to="/signup">Register now</Link>
              </span>
            </p>
          </div>
        </form>
      </div>
    </>
  );
};
