import React from "react";
import { useForm } from "react-hook-form";
import { Button } from "../Button/button";
import { data_limit, input_normal } from "../../utils/css";
import { Link, useNavigate } from "react-router-dom";
import { MyAxios } from "../../utils/api";

export const SignupForm = () => {
  const { register, handleSubmit, formState: { errors }, setError } = useForm();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      const res = await MyAxios.post(`auth/signup`, data)
      if (res.data.message === "SUCCESS") {
        setTimeout(() => {
          navigate("/auth/login", { replace: true });
        }, 500)
        setError("email", { type: "success", message: res.data.message });
      } else {
        setError("email", { type: "failed", message: res.data.message });
      }
    } catch (error) {
      console.log(error);
    }
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
              maxLength={data_limit}
              {...register("name", { required: true })}
              className={input_normal}
            />
          </div>

          <div className="w-full mb-4 lg:mb-6">
            <input
              type="text"
              placeholder="Username"
              maxLength={data_limit}
              {...register("username", { required: true })}
              className={input_normal}
            />
          </div>

          <div className="w-full mb-4 lg:mb-6">
            <input
              type="text"
              placeholder="Email"
              maxLength={data_limit}
              {...register("email", { required: true })}
              className={input_normal}
            />
          </div>
          <div className="w-full mb-4 lg:mb-6">
            <input
              type="password"
              placeholder="Password"
              maxLength={data_limit}
              {...register("password", { required: true })}
              className={input_normal}
            />
          </div>

          {errors.email && <p className={`${errors.email.type === "success" ? "text-green-500" : "text-red-500"} text-xs mb-4 lg:mb-6`}>{errors.email.message}</p>}

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
                <Link to="/auth/login">Login now</Link>
              </span>
            </p>
          </div>
        </form>
      </div>
    </>
  );
};
