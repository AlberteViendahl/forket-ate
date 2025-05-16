"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { createClient } from "@supabase/supabase-js";
import Link from "next/link";

// Supabase credentials direkte her
const supabaseUrl = "https://yoqpnnroaubeeaxnhrwh.supabase.co";
const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlvcXBubnJvYXViZWVheG5ocndoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDczMTIzNjEsImV4cCI6MjA2Mjg4ODM2MX0.AdsaDvaCTv-lUhulKbFMh9uHo3jy2dPgdFw8L4M-Zho";

const supabase = createClient(supabaseUrl, supabaseAnonKey);

const CarrouselCard = () => {
  const [cards, setCards] = useState([]);
  const [startIndex, setStartIndex] = useState(0);
  const visibleCards = 3;

  useEffect(() => {
    supabase
      .from("ate")
      .select("id, city, image")
      .then(({ data }) => setCards(data || []));
  }, []);

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
  <Link href={`/singleview/${card.id.toString()}`} key={card.id}>
    <div className="p-5 max-w-[300px] bg-white shadow rounded">
      <Image
        src={card.image}
        alt={card.city}
        width={300}
        height={200}
        className="object-cover w-full h-auto"
      />
      <h2 className="text-center mt-2">{card.city}</h2>
    </div>
  </Link>
))}
      </div>

      <button
        onClick={handleNext}
        disabled={startIndex >= cards.length - visibleCards}
      >
        <IoIosArrowForward size={30} color="white" />
      </button>
    </section>
  );
};

export default CarrouselCard;
