import React, { useState, useEffect } from "react";
import Image from "next/image";

export default function Header() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [darkMode]);

  return (
    <div className="flex justify-end pt-4 pr-6 gap-2">
      <Image src="/sun.svg" alt="sun image" width={16} height={16} priority />
      <button
        className="bg-[#A729F5] rounded-full w-8 h-5 p-1"
        onClick={toggleDarkMode} 
      >
        <Image
          src="/Ellipse.svg"
          alt="ellipse image"
          width={12}
          height={12}
          priority
        />
      </button>
      <Image src="/moon.svg" alt="moon image" width={16} height={16} priority />
    </div>
  );
}
