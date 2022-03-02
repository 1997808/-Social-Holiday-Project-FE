import React from "react";
import { useForm } from "react-hook-form";
import { Button } from "../Button/button";
import { input_normal } from "../../utils/css";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../../app/auth";
import { MyAxios } from "../../utils/api";

export const SignupForm = () => {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();
  let navigate = useNavigate();

  const onSubmit = async (data) => {
    await MyAxios.post(`auth/signup`, data)
      .then((res) => {
        if (res.data.accessToken) {
          localStorage.setItem("token", res.data.accessToken);
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
          <div className="w-full mb-4 lg:mb-6">
            <input
              type="text"
              placeholder="Name"
              {...register("name", { required: true })}
              className={input_normal}
            />
          </div>

          <div className="w-full mb-4 lg:mb-6">
            <input
              type="text"
              placeholder="Username"
              {...register("username", { required: true })}
              className={input_normal}
            />
          </div>

          <div className="w-full mb-4 lg:mb-6">
            <input
              type="text"
              placeholder="Email"
              {...register("email", { required: true })}
              className={input_normal}
            />
          </div>
          <div className="w-full mb-4 lg:mb-6">
            <input
              type="password"
              placeholder="Password"
              {...register("password", { required: true })}
              className={input_normal}
            />
          </div>

          <div className="mb-4">
            <p className="text-xs">
              By clicking Sign Up, you agree to our Terms, Data Policy and
              Cookie Policy. You may receive Email notifications from us and can
              opt out at any time.
            </p>
          </div>

          <Button text={"Register"} type="submit" />
          <div className="mt-8">
            <p className="text-xs">
              If you have an account?{" "}
              <span className="text-logo-orange">
                <Link to="/login">Login now</Link>
              </span>
            </p>
          </div>
        </form>
      </div>
    </>
  );
};
