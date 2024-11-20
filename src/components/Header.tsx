"use client";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-primary-red text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Escola concursos</h1>
        <button
          className="lg:hidden p-2 focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
        <nav className={`lg:flex ${isMenuOpen ? "block" : "hidden"} lg:block`}>
          <ul className=" flex flex-col lg:flex-row lg:space-x-4 space-y-4 lg:space-y-0">
            <li>
              <a
                href="#hero"
                className="hover:text-gray-800"
                onClick={toggleMenu}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#sobre"
                className="hover:text-gray-800"
                onClick={toggleMenu}
              >
                Sobre
              </a>
            </li>
            <li>
              <a
                href="#cursos"
                className="hover:text-gray-800"
                onClick={toggleMenu}
              >
                Cursos
              </a>
            </li>
            <li>
              <a
                href="#contato"
                className="hover:text-gray-800"
                onClick={toggleMenu}
              >
                Contato
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
