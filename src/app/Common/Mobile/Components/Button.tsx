import React from "react";

interface ButtonProps {
  text: string;
  bgImg: string;
  onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({ text, bgImg, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="flex py-3 px-16 items-center font-medium text-[#313E51] bg-[#FFF] rounded-xl shadow-[0px 16px 40px 0px rgba(143, 160, 193, 0.14)] bg-no-repeat w-[327px] md:w-auto lg:w-[564px] h-[64px] border-2 border-transparent transition-all duration-300 ease-in-out hover:border-[#A729F5]"
      style={{
        backgroundImage: `url(${bgImg})`,
        backgroundPosition: `12px 12px`,
      }}
    >
      {text}
    </button>
  );
};

export default Button;
