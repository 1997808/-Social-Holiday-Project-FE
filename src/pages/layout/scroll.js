import React from "react";
import { Outlet } from "react-router-dom";
import { Header } from "../../components/header";

export const ScrollLayout = () => {
  return (
    <>
      <div className="flex flex-col justify-between min-h-screen">
        <Header />
        <div className="flex flex-grow">
          <Outlet />
        </div>
      </div>
    </>
  );
};