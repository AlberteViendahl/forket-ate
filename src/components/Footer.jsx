import Link from "next/link";
import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-lightblue text-center mx-auto grid grid-cols-1 md:grid-cols-3">
      <Link href="/" className="md:col-start-2 md:row-start-1">
        <img
          src="/img/logo.svg"
          alt="logo ikon"
          className="mx-auto w-[150px] h-[150px] m-10 pt-5"
        />
      </Link>
      <div className="md:col-start-1 pt-10 leading-[2.5rem]  ">
        <h2>KONTAKT</h2>
        <p>Ankjær Total Entreprise</p>
        <p className="whitespace-pre-line">
          Lillevangsvej 218, 3480 Fredensborg
        </p>
        <p className="pb-10">ma@classichouse.dk</p>
      </div>
      <div className="md:col-start-3 self-end md:pb-10">
        <div className="flex justify-center ">
          <FaInstagramSquare className="text-lilla xs:h-25 xs:w-25 lg:h-50 lg:w-50" />
          <FaFacebookSquare className="text-lilla xs:h-25 xs:w-25 lg:h-50 lg:w-50" />
          <FaTwitterSquare className="text-lilla xs:h-25 xs:w-25 lg:h-50 lg:w-50 mb-10" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
