import React from "react";
import { SignupForm } from "../components/Form/signupForm";
import bg from "../assets/bg.jpg"

export const Signup = () => {
  return (
    <>
      <div className="container mx-auto flex justify-center items-center">
        <div className="grid grid-cols-6">
          <div className="hidden lg:block lg:col-span-1">
          </div>
          <div className="col-span-3 lg:col-span-2">
            <SignupForm />
          </div>
          <div className="col-span-3 lg:col-span-2">
            <img className="w-full h-full object-cover" src={bg} alt="404" />
          </div>
        </div>
      </div>
    </>
  );
};