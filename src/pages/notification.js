import React from "react";
import { NotificationList } from "../components/List/notificationList";

export const Notification = () => {
  return (
    <div className="container mx-auto grid grid-cols-4 gap-8 mt-8">
      <div></div>
      <div className="col-span-2">
        <NotificationList />
      </div>
    </div>
  );
};