"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import LoginForm from "./LoginForm";

function NavigationApp() {
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
          <img className="h-75" src="/img/logo.svg" alt="logo ikon" />
        </Link>

              <img
          onClick={() => setShowLogin(true)}
          className="h-50 w-50 cursor-pointer"
          src="/img/person.svg"
          alt="person ikon"
        />
      </nav>
            {showLogin && <LoginForm onClose={() => setShowLogin(false)} />}
      {" "}
    </header>
  );
}

export default NavigationApp;
