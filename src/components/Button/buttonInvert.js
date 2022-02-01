import React from "react";

export const ButtonInvert = ({ text, type, onClick }) => {
  return (
    <>
      <button
        className="w-full py-2 flex items-center justify-center bg-white transition duration-300 hover:bg-logo-orange rounded text-logo-orange hover:text-white border boder-solid border-logo-orange"
        type={type}
        onClick={onClick ? onClick : () => { }}
      >
        <p className="text-sm">{text}</p>
      </button>
    </>
  );
};