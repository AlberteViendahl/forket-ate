"use client";
import Link from "next/link";
const FooterApp = () => {
  return (
    <div className=" text-center mx-auto grid grid-cols-1 bg-lightblue ">
      <Link href="/Chat">
        <img
          src="/img/love_mail.svg"
          alt="logo ikon"
          className="mx-auto w-[75px] h-[75px] m-10 pt-5"
        />
      </Link>
    </div>
  );
};

export default FooterApp;
