import React from "react";

export const ButtonSmall = ({ text, type, onClick }) => {
  return (
    <>
      <button
        className="px-5 py-3 flex items-center justify-center bg-logo-orange transition duration-300 hover:bg-red-500 rounded text-white"
        type={type}
        onClick={onClick ? onClick : () => { }}
      >
        <p className="text-sm lg:text-base">{text}</p>
      </button>
    </>
  );
};