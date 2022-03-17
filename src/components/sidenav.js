import React from "react";
import { Link } from "react-router-dom";
import {
  UserIcon,
  BellIcon,
  ChatAlt2Icon,
  SearchIcon,
  HomeIcon,
  UserAddIcon,
} from "@heroicons/react/outline";
import logo from "../assets/logo-2.svg";
import { useDispatch } from "react-redux";
import { logOut } from "../app/auth";

export const Sidenav = () => {
  const dispatch = useDispatch();
  const logOutButton = () => {
    localStorage.clear();
    dispatch(logOut());
  };
  return (
    <div className="fixed z-10 w-64 h-screen top-0 left-0">
      <div className="h-screen bg-opacity-90 bg-gray-900"></div>
      <div className="absolute w-auto h-screen top-0 left-0">
        <div className="h-screen flex flex-col text-white">
          <Link to="/">
            <div className="flex items-center p-4">
              <img className="h-8 w-8 mx-3" src={logo} alt="icon" />
              <p className="text-base">Holsome</p>
            </div>
          </Link>

          <Link to="/">
            <div className="flex items-center p-4">
              <HomeIcon className="h-7 w-7 mx-3" />
              Home
            </div>
          </Link>

          <Link to="/friend">
            <div className="flex items-center p-4">
              <UserAddIcon className="h-7 w-7 mx-3" />
              Friend Request
            </div>
          </Link>

          <Link to="/search">
            <div className="flex items-center p-4">
              <SearchIcon className="h-7 w-7 mx-3" />
              Search
            </div>
          </Link>

          <Link to="/message">
            <div className="flex items-center p-4">
              <ChatAlt2Icon className="h-7 w-7 mx-3" />
              Message
            </div>
          </Link>

          <Link to="/notification">
            <div className="flex items-center p-4">
              <BellIcon className="h-7 w-7 mx-3" />
              Notification
            </div>
          </Link>

          <Link to="/user/1">
            <div className="flex items-center p-4">            <UserIcon className="h-7 w-7 mx-3" />
              Profile
            </div>
          </Link>

          <div onClick={() => logOutButton()}>
            <div className="flex items-center p-4">            <UserIcon className="h-7 w-7 mx-3" />
              Logout
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
