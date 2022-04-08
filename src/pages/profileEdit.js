import React from "react";
import { ProfileEditForm } from "../components/Form/profileEditForm";
import {
  ChevronLeftIcon,
} from "@heroicons/react/outline";
import { useNavigate } from 'react-router-dom';

export const ProfileEdit = () => {
  const navigate = useNavigate();

  return (
    <div className="flex-grow border-l border-r border-solid border-gray-200 max-w-2xl sm:ml-[73px] xl:ml-[370px]">
      <div className="w-full">
        <div className="sticky top-0 flex justify-between items-center p-5 py-6 bg-logo-orange rounded-t">
          <ChevronLeftIcon onClick={() => navigate(-1)} className="h-6 text-white cursor-pointer" />
          <p className="font-bold text-white">Edit Profile</p>
        </div>
        <ProfileEditForm />
      </div>
    </div>
  );
};