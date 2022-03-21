import React from "react";
import { SearchUser } from "../Card/searchUser";

export const SearchList = () => {
  return (
    <div className="w-full h-full">
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-8">
        <SearchUser />
        <SearchUser />
        <SearchUser />
        <SearchUser />
        <SearchUser />
      </div>
    </div>
  );
};
