"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import GameLink from "../navigation/GameLink";

type Slide = {
  id: string;
  name: string;
  description: string;
  image?: string;
};

type Props = {
  slides: Slide[];
};

export default function HeroSlider({ slides }: Props) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (slides.length === 0) return;

    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 4500);

    return () => clearInterval(timer);
  }, [slides.length]);

  const slide = slides[index];

  if (!slide) return null;

  return (
    <div className="relative h-[360px] w-full overflow-hidden rounded-3xl bg-white shadow">
      <img
        src={slide.image ?? "/images/placeholder.jpg"}
        alt={slide.name}
        className="h-full w-full object-cover transition-opacity duration-500"
      />

      <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/70 to-transparent p-6 text-white">
        <h2 className="text-3xl font-bold">{slide.name}</h2>
        <p className="mt-2 max-w-md text-sm opacity-90">
          {slide.description}
        </p>

        <GameLink href={`/game/${slide.id}`}>
          <button className="mt-4 inline-block w-fit rounded-lg bg-[#FACC15] px-5 py-2 text-sm font-semibold text-black transition hover:scale-105">
            Ver Juego →
          </button>
        </GameLink>
      </div>
    </div>
  );
}
