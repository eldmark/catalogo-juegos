"use client";

import { useEffect, useState } from "react";

export default function SponsorModal() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const dismissed = localStorage.getItem("sponsorDismissed");
    if (!dismissed) {
      setIsOpen(true);
      document.body.style.overflow = "hidden";
    }
  }, []);

  const closeModal = () => {
    localStorage.setItem("sponsorDismissed", "true");
    document.body.style.overflow = "auto";
    setIsOpen(false);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4">
      <div className="w-full max-w-md rounded-xl bg-[#D8D9D4] p-6 shadow-lg">
        <h2 className="mb-4 text-xl font-bold text-[#091829]">
          Marcas patrocinadas
        </h2>
        <p className="mb-6 text-sm">
          Descubre juegos increíbles gracias a nuestros patrocinadores.
        </p>
        <button
          onClick={closeModal}
          className="w-full rounded-lg bg-[#8E382F] py-2 font-semibold text-white hover:opacity-90"
        >
          Continuar
        </button>
      </div>
    </div>
  );
}
