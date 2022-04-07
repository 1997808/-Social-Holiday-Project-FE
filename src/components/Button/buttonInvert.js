import React from "react";

export const ButtonInvert = ({ text, type, onClick, disable }) => {
  return (
    <>
      <button
        className={`w-full py-2 flex items-center justify-center bg-white transition duration-300  rounded text-logo-orange border boder-solid border-logo-orange ${
          disable && disable === true
            ? ""
            : "hover:bg-logo-orange hover:text-white"
        }`}
        type={type}
        onClick={onClick ? onClick : () => {}}
        disabled={disable ? disable : false}
      >
        <p className="text-sm">{text}</p>
      </button>
    </>
  );
};
