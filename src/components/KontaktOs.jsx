"use client";

import { useState } from "react";
import FormelKontaktOs from "./FormelKontaktOs";

const KontaktOs = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button
        onClick={() => setIsOpen(true)}
        className="fixed right-4 top-1/3 bg-orange text-white px-4 py-2 rounded-[15px] hover:bg-lightblue z-50 rotate-90 translate-x-1/2"
      >
        Kontakt mig
      </button>

      {isOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="relative bg-orange p-6 rounded-xl w-full m-10">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-2 right-2 text-2xl text-black hover:text-lightblue"
              aria-label="Luk"
            >
              &times;
            </button>

            <FormelKontaktOs />
          </div>
        </div>
      )}
    </div>
  );
};

export default KontaktOs;
