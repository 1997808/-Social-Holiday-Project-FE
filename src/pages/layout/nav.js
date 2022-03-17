import React from "react";
import { Outlet } from "react-router-dom";
import { Sidenav } from "../../components/sidenav";

export const NavLayout = () => {
  return (
    <>
      <div className="grid grid-cols-3 lg:grid-cols-4 gap-4">
        <div className="col-span-1">
          <Sidenav />
        </div>
        <div className="col-span-3">
          <div className="flex flex-col justify-between min-h-screen bg-gray-100">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};
