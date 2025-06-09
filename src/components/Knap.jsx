import React from "react";

const BookButton = ({ label }) => {
  return (
    <div className="flex justify-center items-center w-full">
      <button
        className="px-4 py-2 my-8 rounded-[12px] text-[18px] font-sans border 
                   bg-white text-brown border-brown
                   hover:bg-lightblue hover:text-darkblue hover:border-darkblue
                   transition-all duration-300 cursor-pointer"
      >
        {label}
      </button>
    </div>
  );
};

export default BookButton;
