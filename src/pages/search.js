import React, { useEffect, useState } from "react";
import { SearchUserForm } from "../components/Form/searchUserForm";
import { SearchList } from "../components/List/searchList";
import { MyAxios } from "../utils/api";

export const Search = () => {
  const [users, setUsers] = useState([]);
  const [keyword, setKeyword] = useState("");

  useEffect(() => {
    const getUsers = async () => {
      await MyAxios.post("users/search", { keyword })
        .then((res) => {
          if (res.data) {
            setUsers(res.data.data);
          }
        })
        .catch((error) => {
          console.log(error);
        });
    };
    getUsers();
  }, [keyword]);

  const setKeywordForm = (data) => {
    setKeyword(data);
  };

  return (
    <>
      <div className="flex-grow border-l border-r border-solid border-gray-200 max-w-2xl sm:ml-[73px] xl:ml-[370px]">
        <div className="w-full">
          <SearchUserForm
            setKeywordForm={(e) => {
              setKeywordForm(e);
            }}
          />
          <SearchList data={users} />
        </div>
      </div>
      {/* <div className="hidden lg:inline lg:ml-[745px] xl:ml-[1050px] w-full lg:max-w-[270px] xl:max-w-[320px] px-2 fixed h-screen">
        <FriendActiveList />
      </div> */}
    </>
  );
};
