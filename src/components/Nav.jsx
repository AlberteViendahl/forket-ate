"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import LoginForm from "./LoginForm";

function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showLogin, setShowLogin] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  return (
    <header className="relative">
      <nav className="flex justify-between items-center p-4 bg-lightblue text-brown">
        {/* Logo */}
        <Link href="/Forside">
          <img src="/img/logo.svg" alt="logo ikon" />
        </Link>

        {/* Burger/kryds ikon – kun mobil */}
        <button
          onClick={toggleMenu}
          className="md:hidden z-30"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2.5"
              viewBox="0 0 24 24"
              className="w-8 h-8"
            >
              <path d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2.5"
              viewBox="0 0 24 24"
              className="w-8 h-8"
            >
              <path d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>

        {/* Menu links */}
        <ul
          className={`fixed top-0 right-0 h-full w-80 bg-white shadow-lg transform transition-transform duration-300 ease-in-out flex-col gap-6 p-8
            ${isMenuOpen ? "translate-x-0" : "translate-x-full"}
            md:static md:flex md:flex-row md:gap-10 md:p-0 md:bg-transparent md:shadow-none md:translate-x-0
            flex z-20`}
        >
          <li>
            <Link
              href="/Kontakt"
              onClick={() => setIsMenuOpen(false)}
              className="hover:underline"
            >
              Kontakt
            </Link>
          </li>
          <li>
            <Link
              href="/Inspiration"
              onClick={() => setIsMenuOpen(false)}
              className="hover:underline"
            >
              Inspiration
            </Link>
          </li>
          <li>
            <Link
              href="/Service"
              onClick={() => setIsMenuOpen(false)}
              className="hover:underline"
            >
              Service
            </Link>
          </li>
        </ul>

        {/*       <img
          onClick={() => setShowLogin(true)}
          className="h-50 w-50 cursor-pointer"
          src="/img/person.svg"
          alt="person ikon"
        /> */}
      </nav>
      {/*       {showLogin && <LoginForm onClose={() => setShowLogin(false)} />}
       */}{" "}
    </header>
  );
}

export default Navigation;
