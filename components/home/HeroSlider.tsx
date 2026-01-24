"use client";

import { useEffect, useState } from "react";

const slides = [
  {
    title: "Descubre juegos increíbles",
    description: "Explora juegos de mesa para toda la familia.",
    image: "/images/hero-1.jpg",
  },
  {
    title: "Aprende nuevas reglas",
    description: "Encuentra el juego perfecto para cada ocasión.",
    image: "/images/hero-2.jpg",
  },
  {
    title: "Juega y comparte",
    description: "Momentos únicos alrededor de la mesa.",
    image: "/images/hero-3.jpg",
  },
];

export default function HeroSlider() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  const slide = slides[index];

  return (
    <div className="relative h-full w-full overflow-hidden rounded-3xl bg-white shadow">
      <img
        src={slide.image}
        alt={slide.title}
        className="h-full w-full object-cover transition-opacity duration-500"
      />

      <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/60 to-transparent p-6 text-white">
        <h2 className="text-2xl font-bold">{slide.title}</h2>
        <p className="mt-1 text-sm">{slide.description}</p>
      </div>
    </div>
  );
}
