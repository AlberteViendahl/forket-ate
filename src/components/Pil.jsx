import React from "react";
import { FaArrowCircleDown } from "react-icons/fa";

const Pil = ({ className = "" }) => {
  return (
    <div className={`flex justify-center items-center ${className}`}>
      <a href="#OmOs">
        <FaArrowCircleDown className="text-white animate-bounce w-10 h-10" />
      </a>
    </div>
  );
};

export default Pil;
