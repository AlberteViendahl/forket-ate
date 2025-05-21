import Link from "next/link";
import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="bg-lightblue text-center mx-auto grid grid-cols-1 md:grid-cols-3">
      <Link href="/Forside" className="md:col-start-2 md:row-start-1">
        <img
          src="/img/logo.svg"
          alt="logo ikon"
          className="mx-auto w-[150px] h-[150px] m-10 pt-5"
        />
      </Link>
      <div className="md:col-start-1 pt-10 leading-[2.5rem]  ">
        <h2 className="text-brown font-semibold">KONTAKT</h2>
        <p className="text-brown">Ankjær Total Entreprise</p>
        <p className="whitespace-pre-line text-brown">
          Lillevangsvej 218, 3480 Fredensborg
        </p>
        <p className="pb-10 text-brown">ma@classichouse.dk</p>
      </div>
      <div className="md:col-start-3 self-end md:pb-5">
        <div className="flex justify-center ">
          <FaInstagramSquare className="text-brown xs:h-35 xs:w-35 lg:h-50 lg:w-50" />
          <FaFacebookSquare className="text-brown xs:h-35 xs:w-35 lg:h-50 lg:w-50" />
          <FaLinkedin className="text-brown xs:h-35 xs:w-35 lg:h-50 lg:w-50" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
