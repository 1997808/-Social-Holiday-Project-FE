import React from "react";
import { NotificationCard } from "../Card/notificationCard";

export const NotificationList = () => {
  return (
    <div className="relative w-full bg-white rounded overflow-y-scroll h-screen">
      <div className="sticky top-0 flex justify-between items-center p-5 py-6 bg-logo-orange rounded-t">
        <p className="text-lg font-bold text-white">Notifications</p>
      </div>
      <NotificationCard />
      <NotificationCard />
      <NotificationCard />
      <NotificationCard />
      <NotificationCard />
      <NotificationCard />
    </div>
  );
};
