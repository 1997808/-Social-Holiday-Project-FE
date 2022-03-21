import React from "react";
import { NotificationList } from "../components/List/notificationList";

export const Notification = () => {
  return (
    <>
      <div className="flex-grow border-l border-r border-solid border-gray-200 max-w-2xl sm:ml-[73px] xl:ml-[370px]">
        <div className="w-full">
          <NotificationList />
        </div>
      </div>
    </>
  );
};
