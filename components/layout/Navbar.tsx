"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-[#FFF9F2] border-b text-[#1F2937]">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
        <Link href="/" className="text-lg font-bold text-[#1F2937]">
          Board Games
        </Link>

        <div className="hidden items-center gap-6 md:flex">
          <Link href="/explore" className="hover:text-[#3B82F6]">
            Explore
          </Link>
          <Link href="/catalog" className="hover:text-[#3B82F6]">
            Catalog
          </Link>
        </div>

        <button
          className="md:hidden text-xl"
          onClick={() => setMenuOpen(!menuOpen)} 
        >
          ☰
        </button>
      </nav>

      {menuOpen && (
        <div className="px-4 pb-4 md:hidden">
          <Link href="/explore" className="block py-2">
            Explore
          </Link>
          <Link href="/catalog" className="block py-2">
            Catalog
          </Link>
        </div>
      )}
    </header>
  );
}
