import React from "react";
import { Outlet } from "react-router-dom";
import { Sidenav } from "../../components/sidenav";

export const NavLayout = () => {
  return (
    <>
      <div className="min-h-screen flex max-w-[1500px] mx-auto">
        <Sidenav />
        {/* <div className="flex flex-col justify-between min-h-screen bg-gray-100"> */}
        <Outlet />
        {/* </div> */}
      </div>
    </>
  );
};
