import React from "react";
import { SearchUserForm } from "../components/Form/searchUserForm";
import { SearchList } from "../components/List/searchList";

export const Search = () => {
  return (
    <div className="container mx-auto mt-8">
      <SearchUserForm />
      <SearchList />
    </div>
  );
};