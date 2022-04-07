import React from "react";
import logo from "../../assets/logo-2.svg"

export const NotificationCard = ({ image }) => {
  return (
    <>
      <div className="w-full h-auto flex bg-white rounded-t border-b border-solid border-gray-200 p-5">
        <img className="h-10 w-10 rounded object-cover mr-5" src={logo} alt="logo" />
        <div className="w-full flex flex-col">
          <p className="text-sm pb-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <p className="text-xs font-light">January 28 at 1:47 PM</p>
        </div>
      </div>
    </>
  );
};