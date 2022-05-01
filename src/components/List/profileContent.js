import React from "react";

const style = "flex-grow text-center text-sm text-gray-500 p-4 transition duration-300 cursor-pointer border-b border-solid "

const ProfileContentCard = ({ content, setContent, text }) => {
  return (
    <p className={style + `${content === text ? "text-black font-semibold border-logo-orange" : "hover:bg-gray-100 border-white"}`} onClick={() => setContent(text)}>{text}</p>
  )
}

export const ProfileContent = ({ content, setContent }) => {
  return (
    <div className="flex justify-between items-center border-b border-solid border-gray-200">
      <ProfileContentCard content={content} setContent={setContent} text={"Posts"} />
      <ProfileContentCard content={content} setContent={setContent} text={"Friends"} />
      <ProfileContentCard content={content} setContent={setContent} text={"Media"} />
      <ProfileContentCard content={content} setContent={setContent} text={"Likes"} />
    </div>
  );
};
