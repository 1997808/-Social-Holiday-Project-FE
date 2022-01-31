import React from "react";
import { LoginForm } from "../components/Form/loginForm";
import bg from "../assets/bg.jpg"

export const Login = () => {
  return (
    <>
      <div className="container mx-auto flex justify-center items-center">
        <div className="grid grid-cols-6">
          <div className="hidden lg:block lg:col-span-1">

          </div>
          <div className="col-span-3 lg:col-span-2">
            <img className="w-full h-full object-cover" src={bg} alt="404" />
          </div>
          <div className="col-span-3 lg:col-span-2">
            <LoginForm />
          </div>
        </div>
      </div>
    </>
  );
};
