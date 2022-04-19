import React, { useEffect, useState } from "react";
import { MyAxios } from "../../utils/api";
import { SearchUserForm } from "../../components/Form/searchUserForm"
import { SearchListForChat } from "../../components/List/searchListForChat";

export const ModalSearch = ({ setOpen, setChat }) => {
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
      <div class="relative bg-white rounded-lg shadow  dark:bg-gray-700">
        <SearchUserForm
          setKeywordForm={(e) => {
            setKeywordForm(e);
          }}
        />
        <SearchListForChat data={users} />
      </div>
    </>
  );
};
