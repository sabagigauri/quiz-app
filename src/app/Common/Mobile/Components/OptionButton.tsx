import React from "react";
import { ButtonProps } from "../../types";

const OptionButton: React.FC<ButtonProps> = ({
  text,
  bgImg,
  onClick,
  selected,
  correct,
  incorrect,
}) => {
  let borderColor = "border-gray-300"; 

  if (correct) {
    borderColor = "border-green-500"; 
  } else if (incorrect) {
    borderColor = "border-red-500"; 
  } else if (selected && !correct && !incorrect) {
    borderColor = "border-blue-500"; 
  }

  return (
    <button
      onClick={onClick}
      className={`flex py-3 px-16 items-center font-medium text-[#313E51] bg-[#FFF] ${borderColor} rounded-xl shadow-[0px 16px 40px 0px rgba(143, 160, 193, 0.14)] bg-no-repeat  md:w-auto lg:w-auto h-[64px] border-2 transition-all duration-300 ease-in-out hover:border-[#A729F5]`}
      style={{
        backgroundImage: `url(${bgImg})`,
        backgroundPosition: "12px 12px",
      }}
    >
      {text}
    </button>
  );
};

export default OptionButton;
