import React, { useEffect, useState } from "react";
import { MyAxios } from "../../utils/api";
import { SearchUserForm } from "../../components/Form/searchUserForm"
import { SearchListForChat } from "../../components/List/searchListForChat";
import { XIcon } from "@heroicons/react/outline";

export const ModalSearch = ({ setOpen, setChat }) => {
  const [users, setUsers] = useState([]);
  const [keyword, setKeyword] = useState("");
  const [type, setType] = useState(0);
  const [participants, setParticipants] = useState([])

  useEffect(() => {
    const getUsers = async () => {
      if (keyword !== "") {
        await MyAxios.post("users/search", { keyword })
          .then((res) => {
            if (res.data) {
              setUsers(res.data.data);
            }
          })
          .catch((error) => {
            console.log(error);
          });
      } else {
        await MyAxios.get("friendships/friend")
          .then((res) => {
            if (res.data) {
              console.log(res.data)
              setUsers(res.data);
            }
          })
          .catch((error) => {
            console.log(error);
          });
      }
    };
    getUsers();
  }, [keyword]);

  const setKeywordForm = (data) => {
    setKeyword(data);
  };

  const addConversation = async () => {
    await MyAxios.post(`conversations`, { participants, type })
      .then((res) => {
        if (res.data) {
          setOpen(false)
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <div className="bg-white rounded">
        <div className="flex items-center justify-between">
          <SearchUserForm
            setKeywordForm={(e) => {
              setKeywordForm(e);
            }}
          />
          <XIcon className="h-6 text-gray-500 pr-4 cursor-pointer" onClick={() => setOpen(false)} />
        </div>
        <div className="h-[490px] overflow-y-scroll">
          <SearchListForChat data={users} type={type} participants={participants} setParticipants={setParticipants} addConversation={addConversation} />
        </div>
      </div>
    </>
  );
};
