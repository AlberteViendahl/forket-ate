"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { PiHandSwipeLeftLight } from "react-icons/pi";
import { createClient } from "@supabase/supabase-js";
import Link from "next/link";
import { useSwipeable } from "react-swipeable";

// Supabase credentials
const supabaseUrl = "https://yoqpnnroaubeeaxnhrwh.supabase.co";
const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlvcXBubnJvYXViZWVheG5ocndoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDczMTIzNjEsImV4cCI6MjA2Mjg4ODM2MX0.AdsaDvaCTv-lUhulKbFMh9uHo3jy2dPgdFw8L4M-Zho";

const supabase = createClient(supabaseUrl, supabaseAnonKey);

const CarrouselCard = () => {
  const [cards, setCards] = useState([]);
  const [startIndex, setStartIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(3);
  const [hasSwiped, setHasSwiped] = useState(false);

  useEffect(() => {
    supabase
      .from("ate")
      .select("id, city, image")
      .then(({ data }) => setCards(data || []));
  }, []);

  useEffect(() => {
    const updateVisibleCards = () => {
      const width = window.innerWidth;
      if (width < 640) setVisibleCards(1);
      else if (width < 768) setVisibleCards(2);
      else setVisibleCards(3);
    };

    updateVisibleCards();
    window.addEventListener("resize", updateVisibleCards);
    return () => window.removeEventListener("resize", updateVisibleCards);
  }, []);

  // Stop animation efter 20 sekunder hvis brugeren ikke swiper
  useEffect(() => {
    const timer = setTimeout(() => setHasSwiped(true), 20000);
    return () => clearTimeout(timer);
  }, []);

  const handlePrev = () => {
    setStartIndex((prev) => Math.max(prev - visibleCards, 0));
  };

  const handleNext = () => {
    setStartIndex((prev) =>
      Math.min(prev + visibleCards, cards.length - visibleCards)
    );
  };

  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => {
      handleNext();
      setHasSwiped(true);
    },
    onSwipedRight: () => {
      handlePrev();
      setHasSwiped(true);
    },
    preventScrollOnSwipe: true,
    trackMouse: true,
  });

  return (
    <section className="flex flex-col items-center py-20 bg-brown w-full">
      <h2 className="text-center pb-10 text-white text-3xl font-bold">
        Se hvordan andres nybyg blev til drømmehus
      </h2>

      {/* Swipe hint - kun mobil og kun hvis brugeren ikke har swipet endnu */}
      {!hasSwiped && startIndex === 0 && (
        <div className="sm:hidden flex justify-center mb-4">
          <div className="relative w-12 h-12">
            <PiHandSwipeLeftLight
              className="text-white text-4xl animate-swipe"
              aria-label="swipe hand"
            />
          </div>
        </div>
      )}

      <div className="flex items-center justify-center w-full gap-4 px-4">
        {/* Pil venstre - skjult på mobil */}
        <button
          onClick={handlePrev}
          disabled={startIndex === 0}
          className="text-white disabled:opacity-30 hidden sm:block"
          aria-label="pil til venstre"
        >
          <IoIosArrowBack size={30} />
        </button>

        {/* Swipeable wrapper */}
        <div
          {...swipeHandlers}
          className="flex justify-center gap-4 overflow-hidden w-full max-w-screen-xl"
        >
          {cards.slice(startIndex, startIndex + visibleCards).map((card) => (
            <Link href={`/singleview/${card.id}`} key={card.id}>
              <div className="bg-white rounded shadow p-3 w-[250px] sm:w-[280px]">
                <Image
                  src={card.image}
                  alt={card.city}
                  width={300}
                  height={200}
                  className="object-cover w-full h-[180px] rounded"
                />
                <h2 className="text-center mt-2 font-semibold text-brown">
                  {card.city}
                </h2>
              </div>
            </Link>
          ))}
        </div>

        {/* Pil højre - skjult på mobil */}
        <button
          onClick={handleNext}
          disabled={startIndex >= cards.length - visibleCards}
          className="text-white disabled:opacity-30 hidden sm:block"
          aria-label="pil til højre"
        >
          <IoIosArrowForward size={30} />
        </button>
      </div>
    </section>
  );
};

export default CarrouselCard;
