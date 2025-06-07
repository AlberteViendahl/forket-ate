"use client"
import { FaDownload } from "react-icons/fa";

const DownloadButton = () => {
  const handleClick = () => {
    window.open("https://issuu.com/ateeksamen/docs/eksamens_katalog", "_blank");
  };

  return (
    <button
      onClick={handleClick}
      className="flex items-center gap-2 bg-lightblue text-darkblue border-darkblue border hover:text-white px-4 py-2 rounded hover:bg-darkblue transition"
    >
      <FaDownload />
      Download katalog
    </button>
  );
};

export default DownloadButton;
