import React from "react";
import { Link } from "react-router-dom";
import {
  UserIcon,
  BellIcon,
  ChatAlt2Icon,
  SearchIcon,
  HomeIcon,
  UserAddIcon,
  LogoutIcon,
} from "@heroicons/react/outline";
import logo from "../assets/logo-2.svg";
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../app/auth";
import { SidebarLink } from "./Button/sidebarLink";

export const Sidenav = () => {
  const dispatch = useDispatch();
  let userId = useSelector((state) => state.user.id);
  const logOutButton = () => {
    localStorage.clear();
    dispatch(logOut());
    setTimeout(() => {
      window.location.reload()
    }, 500)
  };
  return (
    <div className="hidden sm:flex flex-col items-center xl:items-start xl:w-[340px] p-2 fixed h-full">
      <Link to="/">
        <div className="flex items-center justify-center w-14 h-14 hoverAnimation p-0 xl:ml-24">
          <img className="h-8 w-8" src={logo} alt="icon" />
        </div>
      </Link>
      <div className="flex flex-col justify-between h-full">
        <div className="space-y-2.5 mt-4 mb-2.5 xl:ml-24">
          <SidebarLink Icon={HomeIcon} text={"Home"} link={"/"} />
          <SidebarLink Icon={SearchIcon} text={"Search"} link={"/search"} />
          <SidebarLink Icon={ChatAlt2Icon} text={"Message"} link={"/message"} />
          <SidebarLink
            Icon={BellIcon}
            text={"Notification"}
            link={"/notification"}
          />
          <SidebarLink
            Icon={UserAddIcon}
            text={"Friend Request"}
            link={"/friend"}
          />
          <SidebarLink Icon={UserIcon} text={"Profile"} link={`/profile/${userId}`} />
        </div>
        <div
          className="space-y-2.5 mt-4 mb-2.5 xl:ml-24"
          onClick={() => logOutButton()}
        >
          <SidebarLink Icon={LogoutIcon} text={"Logout"} link={"/"} />
        </div>
      </div>
    </div>
  );
};
