import React from "react";

export const Button = ({ text, type, onClick }) => {
  return (
    <>
      <button
        className="w-full py-2 flex items-center justify-center bg-logo-orange transition duration-300 hover:bg-red-500 rounded text-white"
        type={type}
        onClick={onClick ? onClick : () => { }}
      >
        <p className="text-sm">{text}</p>
      </button>
    </>
  );
};