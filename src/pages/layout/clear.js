import React from "react";
import { Outlet } from "react-router-dom";

export const ClearLayout = () => {
  return (
    <>
      <div className="flex flex-col justify-between min-h-screen bg-gray-100">
        <div className="flex flex-grow">
          <Outlet />
        </div>
      </div>
    </>
  );
};