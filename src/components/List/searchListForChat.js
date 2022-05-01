import React from "react";
import { SearchUserForChat } from "../Card/searchUserForChat";

export const SearchListForChat = ({ data, type, participants, setParticipants, addConversation }) => {
  return (
    <div className="w-full h-full">
      {data &&
        data.map((item) => (
          <SearchUserForChat
            key={item.createdAt}
            userId={item.id}
            name={item.name}
            username={item.username}
            profileImageId={item.cloudinaryId}
            type={type}
            participants={participants}
            setParticipants={setParticipants}
            addConversation={addConversation}
          />
        ))}
    </div>
  );
};
