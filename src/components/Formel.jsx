"use client";
import { useForm } from "react-hook-form";
import { FaInstagramSquare, FaFacebookSquare } from "react-icons/fa";
import { createClient } from "@supabase/supabase-js";
import Knap from "@/components/Knap";

import { FaLinkedin } from "react-icons/fa6";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

const Formel = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const { error } = await supabase.from("kontakt_mig").insert([
      {
        fornavn: data.firstname,
        efternavn: data.lastname,
        telefon: data.phone,
        email: data.email,
        besked: data.message,
      },
    ]);

    if (error) {
      alert("Noget gik galt. Prøv igen.");
      console.error(error);
    } else {
      alert("Tak for din besked!");
      reset();
    }
  };

  return (
    <div className="bg-beige bg-image pb-20 px-20 pt-20 ">
      <section className=" bg-white rounded-15 shadow pt-5">
        <h1 className="text-brown font-extrabold text-center xs:text-2xl md:text-5xl pb-10 pt-5">
          BOOK ET MØDE
        </h1>
        <div className="sm:grid sm:grid-cols-3 pt-10">
          <div className="xs:text-center sm:ml-auto sm:text-left sm:col-span-1">
            <p className="font-extrabold text-brown">EMAIL</p>
            <p className="pb-7 text-brown">ma@classichouse.dk</p>

            <p className="font-extrabold text-brown">TLF NUMMER</p>
            <p className="pb-7 text-brown">(+45) 40 19 70 73</p>

            <p className="font-extrabold text-brown">ADRESSE</p>
            <p className="pb-7 text-brown">
              Lillevangsvej 218, 3480 Fredensborg
            </p>

            <p className="font-extrabold text-brown">SOCIAL</p>
            <div className="xs:flex xs:justify-center sm:justify-start gap-2">
              <FaInstagramSquare className="text-brown h-8 w-8" />
              <FaFacebookSquare className="text-brown h-8 w-8" />
              <FaLinkedin className="text-brown h-8 w-8" />
            </div>
          </div>
          <hr className="pb-10 mt-5 sm:hidden" />
          <form
            onSubmit={handleSubmit(onSubmit)}
            className=" xs:w-300 sm:w-500 mx-auto sm:col-span-2"
          >
            <input
              {...register("firstname", { required: "Fornavn er påkrævet" })}
              placeholder="Fornavn"
              className="bg-beige mb-2 rounded-12 w-300 h-40 sm:w-500 border-[1px] border-black p-5 "
            />
            {errors.firstname && (
              <p className="text-red-500">{errors.firstname.message}</p>
            )}

            <input
              {...register("lastname", { required: "Efternavn er påkrævet" })}
              placeholder="Efternavn"
              className="bg-beige mb-2 rounded-12 w-300 h-40 sm:w-500 border-[1px] border-black p-5"
            />
            {errors.lastname && (
              <p className="text-red-500">{errors.lastname.message}</p>
            )}

            <input
              {...register("phone", {
                required: "Telefonnummer er påkrævet",
                pattern: {
                  value: /^[0-9]+$/,
                  message: "Ugyldigt telefonnummer",
                },
              })}
              placeholder="Tlf nummer"
              className="bg-beige mb-2 rounded-12 w-300 sm:w-500 h-40 border-[1px] border-black p-5"
            />
            {errors.phone && (
              <p className="text-red-500">{errors.phone.message}</p>
            )}

            <input
              {...register("email", {
                required: "Email er påkrævet",
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: "Ugyldig email-adresse",
                },
              })}
              placeholder="Email"
              className="bg-beige mb-2 rounded-12 w-300 sm:w-500 h-40 border-[1px] border-black p-5"
            />
            {errors.email && (
              <p className="text-red-500">{errors.email.message}</p>
            )}

            <input
              {...register("message", { required: "Besked er påkrævet" })}
              placeholder="Besked"
              className="bg-beige mb-2 rounded-12 w-300 sm:w-500 h-40 border-[1px] border-black p-5"
            />
            {errors.message && (
              <p className="text-red-500">{errors.message.message}</p>
            )}

            {/*   <button
            type="submit"
            className="bg-orange text-white font-bold py-2 px-6 rounded hover:bg-lightblue mt-4"
          >
            Send
          </button> */}
            <Knap label="SEND" />
          </form>
        </div>
      </section>
    </div>
  );
};

export default Formel;
