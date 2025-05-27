"use client";
import React from 'react';
import { useForm } from 'react-hook-form';

const Login = ({ onClose }) => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log("Formular indsendt:", data);
    if (typeof onClose === "function") {
      onClose(); // kun kald hvis det er en funktion
    }
  };

  return (
    <div className="fixed inset-0 backdrop-blur-lg flex justify-center items-center z-50">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="relative flex flex-col text-darkblue p-5 w-[300px] rounded-15 bg-lightblue border"
      >
        <label>Brugernavn</label>
        <input {...register("brugernavn", { required: true, minLength: 1, maxLength: 4, pattern: /^[A-Za-z]+$/i })} maxLength={4} className='border p-2 mb-2 mt-2 rounded-10' type="text" placeholder='brugernavn' />
        {errors.brugernavn && <span className='text-red mb-5'>Skriv 1-4 karaktere</span>}

        <label>Kode</label>
        <input {...register("kode", { required: true, minLength: 6 })} className='border p-2 mb-2 mt-2 rounded-10' type="password" placeholder='****' />
        {errors.kode && <span className='text-red mb-5'>Skriv mindst 6 karaktere</span>}

        <button type="submit" className='bg-darkblue text-lightblue px-4 mb-2 rounded-10 h-[40px]'>Login</button>
        <button type="reset" className='underline text-left'>Glemt kode?</button>
      </form>
    </div>
  );
};

export default Login;
