// src/components/Navbar.jsx
"use client";

import { useState } from "react";
import Link from "next/link";
import { FiMenu, FiX } from "react-icons/fi";

const navLinks = [
  { href: "#inicio", label: "Inicio" },
  { href: "#clases", label: "Clases" },
  { href: "#sobre-mi", label: "Sobre Mí" },
  { href: "#testimonios", label: "Testimonios" },
  { href: "#contacto", label: "Contacto" },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMenu = () => setMobileMenuOpen(!mobileMenuOpen);
  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <div className="h-[80px]">
      <nav className="fixed top-4 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm shadow-sm md:rounded-full max-w-7xl mx-auto px-6">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-xl font-serif font-medium text-indigo-500">
            Melina Khalil
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-stone-600 hover:text-indigo-600 hover:bg-zinc-200/50 px-4 py-2 rounded-full transition-all duration-100 ease-in-out"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-stone-600 focus:outline-none"
            onClick={toggleMenu}
            aria-label="Abrir menú"
          >
            {mobileMenuOpen ? (
              <FiX className="w-6 h-6" />
            ) : (
              <FiMenu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-stone-200 p-4 absolute w-full">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-stone-600 hover:text-indigo-600 transition-colors"
                  onClick={closeMenu}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </div>
  );
}
