"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-[#005271] to-[#091829]">
            <span className="text-xl font-bold text-white">BG</span>
          </div>
          <span className="text-xl font-bold text-[#091829]">Board Games</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          <Link 
            href="/explore" 
            className="text-[#1F2937] font-medium hover:text-[#005271] transition-colors duration-200"
          >
            Explorar
          </Link>
          <Link 
            href="/catalog" 
            className="text-[#1F2937] font-medium hover:text-[#005271] transition-colors duration-200"
          >
            Catálogo
          </Link>
          <Link
            href="/catalog"
            className="rounded-full bg-[#005271] px-6 py-2.5 text-white font-medium hover:bg-[#003d52] transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            Ver todos
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl text-[#091829] p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t shadow-lg">
          <div className="px-6 py-4 space-y-3">
            <Link 
              href="/explore" 
              className="block py-3 text-[#1F2937] font-medium hover:text-[#005271] transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              Explorar
            </Link>
            <Link 
              href="/catalog" 
              className="block py-3 text-[#1F2937] font-medium hover:text-[#005271] transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              Catálogo
            </Link>
            <Link
              href="/catalog"
              className="block text-center rounded-full bg-[#005271] px-6 py-3 text-white font-medium"
              onClick={() => setMenuOpen(false)}
            >
              Ver todos
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}