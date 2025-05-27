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
        <h2 className="text-darkblue font-semibold">KONTAKT</h2>
        <p className="text-darkblue">Ankjær Total Entreprise</p>
        <p className="whitespace-pre-line text-darkblue">
          Lillevangsvej 218, 3480 Fredensborg
        </p>
        <p className="pb-10 text-darkblue">ma@classichouse.dk</p>
      </div>
      <div className="md:col-start-3 flex justify-center">
  <div className="flex flex-row md:flex-col gap-2 justify-center">
    <a
      href="https://www.instagram.com/martinankjaer/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FaInstagramSquare className="text-darkblue h-10 w-10 md:h-12 md:w-12 lg:h-14 lg:w-14 transition-transform duration-200 hover:scale-110" />
    </a>
    <a
      href="https://www.facebook.com/profile.php?id=1513713345"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FaFacebookSquare className="text-darkblue h-10 w-10 md:h-12 md:w-12 lg:h-14 lg:w-14 transition-transform duration-200 hover:scale-110" />
    </a>
    <a
      href="https://www.linkedin.com/in/martin-ankj%C3%A6r-42a68051/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FaLinkedin className="text-darkblue h-10 w-10 md:h-12 md:w-12 lg:h-14 lg:w-14 transition-transform duration-200 hover:scale-110" />
    </a>
  </div>
</div>


    </div>
  );
};

export default Footer;
