"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-[#091829]">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
        <Link href="/" className="text-lg font-bold text-white">
          Juegos de Mesa
        </Link>

        <div className="hidden items-center gap-6 md:flex">
          <Link href="/explore" className="text-white hover:text-[#005271]">
            Explorar
          </Link>
          <Link href="/catalog" className="text-white hover:text-[#005271]">
            Catálogo
          </Link>
          <input
            type="text"
            placeholder="Buscar juego..."
            className="rounded-md px-3 py-1 text-sm text-[#091829]"
          />
        </div>

        <button
          className="text-white md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </nav>

      {menuOpen && (
        <div className="bg-[#091829] px-4 pb-4 md:hidden">
          <Link
            href="/explorar"
            className="block py-2 text-white"
            onClick={() => setMenuOpen(false)}
          >
            Explorar
          </Link>
          <Link
            href="/catalogo"
            className="block py-2 text-white"
            onClick={() => setMenuOpen(false)}
          >
            Catálogo
          </Link>
          <input
            type="text"
            placeholder="Buscar juego..."
            className="mt-2 w-full rounded-md px-3 py-2 text-sm"
          />
        </div>
      )}
    </header>
  );
}
