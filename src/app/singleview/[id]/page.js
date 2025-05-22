"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { createClient } from "@supabase/supabase-js";
import mockReviews from "@/data/mockReviews";
import KontaktOs from "@/components/KontaktOs";

const supabase = createClient(
  "https://yoqpnnroaubeeaxnhrwh.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlvcXBubnJvYXViZWVheG5ocndoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDczMTIzNjEsImV4cCI6MjA2Mjg4ODM2MX0.AdsaDvaCTv-lUhulKbFMh9uHo3jy2dPgdFw8L4M-Zho"
);

export default function SingleviewPage() {
  const { id } = useParams();
  const [data, setData] = useState(null);

  useEffect(() => {
    if (!id) return;
    const fetchData = async () => {
      const { data } = await supabase
        .from("ate")
        .select("*")
        .eq("id", id)
        .single();
      setData(data);
    };
    fetchData();
  }, [id]);

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <span
          key={i}
          className={i < rating ? "text-yellow-500" : "text-gray-300"}
        >
          ★
        </span>
      );
    }
    return stars;
  };

  if (!data) return <div>Loading...</div>;

  return (
    <div className="overflow-hidden bg-image bg-beige">
      <Nav />

      {/* Breadcrumb */}
      <section className="px-4 sm:px-6 pt-6 text-sm text-gray-600">
        <p>
          <a href="/Forside" className="underline hover:text-darkblue">
            Forside
          </a>{" "}
          / <span className="font-semibold text-darkblue">{data.city}</span>
        </p>
      </section>

      {/* Billede + tekst sektion */}
      <section className="flex flex-col md:flex-row justify-evenly items-center gap-5 p-4 sm:p-6 m-4 sm:m-5 bg-white text-darkblue rounded-12 shadow">
        <img
          src={data.image}
          alt={data.city}
          className="w-full max-w-xs md:max-w-md rounded-15 shadow"
        />
        <div className="flex flex-col gap-5 text-center md:text-left mt-4 md:mt-0 md:mr-[200px]">
          <h1 className="text-2xl md:text-3xl">{data.city}</h1>
          <h2 className="text-lg md:text-xl">{data.citat}</h2>
          <p className="text-sm md:text-base">{data.description}</p>
        </div>
      </section>

      <section className="p-4 sm:p-6 bg-lightgray text-darkblue">
        <h2 className="text-xl sm:text-2xl font-semibold mb-4">
          Kundeanmeldelser ({mockReviews.reviews.length})
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {mockReviews.reviews.map((review, index) => (
            <div key={index} className="bg-white p-4 rounded shadow">
              <div className="flex justify-center sm:justify-start text-lg mb-2">
                {renderStars(Math.round(review.rating))}
              </div>
              <p className="italic text-gray-700 mb-2">"{review.comment}"</p>
              <h3 className="font-bold text-gray-900">{review.reviewerName}</h3>
            </div>
          ))}
        </div>
      </section>
<KontaktOs/>
      <Footer />
    </div>
  );
}
