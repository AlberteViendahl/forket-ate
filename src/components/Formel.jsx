"use client";
import { useState } from "react";
import {
  FaInstagramSquare,
  FaFacebookSquare,
  FaTwitterSquare,
} from "react-icons/fa";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  "https://xqyzgtfbeqewiqxklugh.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhxeXpndGZiZXFld2lxeGtsdWdoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDY0NDEzNjcsImV4cCI6MjA2MjAxNzM2N30.r7-NWct6hmvWJZ-UeD-TU4y67FbhArhoEjcWkqHU4HM"
);

const Formel = () => {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { error } = await supabase.from("kontakt_mig").insert([
      {
        fornavn: formData.firstname,
        efternavn: formData.lastname,
        telefon: formData.phone,
        email: formData.email,
        besked: formData.message,
      },
    ]);

    if (error) {
      alert("Noget gik galt. Prøv igen.");
      console.error(error);
    } else {
      alert("Tak for din besked!");
      setFormData({
        firstname: "",
        lastname: "",
        phone: "",
        email: "",
        message: "",
      });
    }
  };

  return (
    <div className="bg-beige">
      <h1 className="text-darkblue font-extrabold text-center text-6xl pb-10 pt-10">
        BOOK ET <span className="italic">møde</span>
      </h1>
      <div className="sm:grid sm:grid-cols-3 pb-20">
        <div className="xs:text-center sm:ml-auto sm:text-left sm:col-span-1">
          <p className="font-extrabold">EMAIL</p>
          <p className="pb-7">info@AnkjærEnterprise.com</p>

          <p className="font-extrabold">TLF NUMMER</p>
          <p className="pb-7">(+45) 12 34 56 78</p>

          <p className="font-extrabold">ADRESSE</p>
          <p className="pb-7">1234 Bueager Helsingør, Kbh, DK</p>

          <p className="font-extrabold">SOCIAL</p>
          <div className="xs:flex xs:justify-center sm:justify-start gap-2">
            <FaInstagramSquare className="text-lilla h-8 w-8" />
            <FaFacebookSquare className="text-lilla h-8 w-8" />
            <FaTwitterSquare className="text-lilla h-8 w-8 mb-5" />
          </div>
        </div>

        <hr className="pb-10 sm:hidden" />

        <form
          onSubmit={handleSubmit}
          className="xs:w-300 sm:w-500 mx-auto sm:col-span-2"
        >
          <input
            name="firstname"
            value={formData.firstname}
            onChange={handleChange}
            placeholder="Fornavn"
            className="bg-beige mb-5 rounded-12 w-300 h-40 sm:w-500 border-[1px] border-black p-5"
          />
          <input
            name="lastname"
            value={formData.lastname}
            onChange={handleChange}
            placeholder="Efternavn"
            className="bg-beige mb-5 rounded-12 w-300 sm:w-500 h-40 border-[1px] border-black p-5"
          />
          <input
            name="phone"
            value={formData.telefon}
            onChange={handleChange}
            placeholder="Tlf nummer"
            className="bg-beige mb-5 rounded-12 w-300 sm:w-500 h-40 border-[1px] border-black p-5"
          />
          <input
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            className="bg-beige mb-5 rounded-12 w-300 sm:w-500 h-40 border-[1px] border-black p-5"
          />
          <input
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Besked"
            className="bg-beige mb-5 rounded-12 w-300 sm:w-500 h-40 border-[1px] border-black p-5"
          />

          {/* Submit button */}
          <button
            type="submit"
            className="bg-orange text-white font-bold py-2 px-6 rounded hover:bg-lightblue"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default Formel;
