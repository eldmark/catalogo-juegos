"use client";

type Props = {
  open: boolean;
  onClose: () => void;
};

export default function SponsorModal({ open, onClose }: Props) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4">
      <div className="w-full max-w-md rounded-xl bg-[#D8D9D4] p-6 shadow-lg">
        <h2 className="mb-4 text-xl font-bold text-[#091829]">
          Marcas patrocinadas
        </h2>
        <img
        src="/images/hasbro.jpg"
        alt="Sponsors"
        width={400}
        height={200}
        className="mb-4 rounded-lg object-cover"
        ></img>
        <p className="mb-6 text-sm">
          Descubre juegos increíbles gracias a nuestros patrocinadores.
        </p>

        <button
          onClick={onClose}
          className="w-full rounded-lg bg-[#8E382F] py-2 font-semibold text-white hover:opacity-90"
        >
          Continuar
        </button>
      </div>
    </div>
  );
}
