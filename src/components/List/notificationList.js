import React from "react";
import { NotificationCard } from "../Card/notificationCard";

export const NotificationList = () => {
  return (
    <div className="w-full bg-white rounded">
      <div className="flex justify-between items-center p-5 py-6 bg-logo-orange rounded-t">
        <p className="text-lg font-bold text-white">Notifications</p>
      </div>
      <div className="overflow-y-scroll" style={{ maxHeight: "80vh" }}>
        <NotificationCard />
        <NotificationCard />
        <NotificationCard />
        <NotificationCard />
        <NotificationCard />
        <NotificationCard />
      </div>
    </div>
  );
};