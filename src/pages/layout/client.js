import React from "react";
import { Outlet } from "react-router-dom";
import { Header } from "../../components/header";
// import { Footer } from "../../components/footer";

export const ClientLayout = () => {
  return (
    <>
      <div className="flex flex-col justify-between min-h-screen bg-gray-100">
        <Header />
        <div className="flex flex-grow mt-16">
          <Outlet />
        </div>
      </div>
    </>
  );
};