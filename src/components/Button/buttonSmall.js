import React from "react";

export const ButtonSmall = ({ text, type, onClick, disable }) => {
  return (
    <>
      <button
        className={`px-5 py-2 flex items-center justify-center bg-logo-orange transition duration-300 ${disable && disable === true ? "bg-red-500" : "hover:bg-red-500"} rounded text-white`}
        type={type}
        onClick={onClick ? onClick : () => { }}
        disabled={disable ? disable : false}
      >
        <p className="text-sm">{text}</p>
      </button>
    </>
  );
};