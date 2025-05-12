"use client";
import { useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const cards = [
  { id: 1, title: "Vedbæk", img: "/img/vedbaek.svg" },
  { id: 2, title: "Vedbæk", img: "/img/vedbaek2.svg" },
  { id: 3, title: "Fredensborg", img: "/img/fredensborg.svg" },
  { id: 4, title: "Holte", img: "/img/holte.svg" },
  { id: 5, title: "Rungsted", img: "/img/rungsted.svg" },
];

const CarrouselCard = () => {
  const [startIndex, setStartIndex] = useState(0);
  const visibleCards = 3;

  const handlePrev = () => {
    setStartIndex((prev) => Math.max(prev - visibleCards, 0));
  };

  const handleNext = () => {
    setStartIndex((prev) =>
      Math.min(prev + visibleCards, cards.length - visibleCards)
    );
  };

  return (
    <section className="flex items-center justify-center space-x-6 py-6 bg-brown">
      <button onClick={handlePrev} disabled={startIndex === 0}>
        <IoIosArrowBack size={30} color="white" />
      </button>

      <div className="flex justify-center gap-8">
        {cards.slice(startIndex, startIndex + visibleCards).map((card) => (
          <div
            key={card.id}
            className="p-5 max-w-[300px] bg-white shadow rounded"
          >
            <img src={card.img} alt={card.title} />
            <h2 className="text-center mt-2">{card.title}</h2>
          </div>
        ))}
      </div>
      <button
        className="bg-brown"
        onClick={handleNext}
        disabled={startIndex >= cards.length - visibleCards}
      >
        <IoIosArrowForward size={30} color="white" />
      </button>
    </section>
  );
};

export default CarrouselCard;
