"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

import SponsorModal from "@/components/layout/SponsorModal";
import HeroSlider from "@/components/home/HeroSlider";
import GameCard from "@/components/game/GameCard";
import GameLink from "@/components/navigation/GameLink";

import { Game } from "@/data/games";

type HomeClientProps = {
  sponsoredGames: Game[];
};

export default function HomeClient({
  sponsoredGames,
}: HomeClientProps) {
  const [showSponsor, setShowSponsor] = useState(false);

  useEffect(() => {
    setShowSponsor(true);
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 space-y-16">
      {/* Sponsor Modal */}
      <SponsorModal
        open={showSponsor}
        onClose={() => {
          setShowSponsor(false);
          document.body.style.overflow = "auto";
        }}
      />

      {/* Hero Slider */}
      <HeroSlider
        slides={sponsoredGames.map((g) => ({
          id: g.id,
          name: g.name,
          description: g.description ?? "",
          image: g.image,
        }))}
      />

      {/* Intro Section */}
      <section className="mb-16 grid gap-8 md:grid-cols-2 p-8 rounded-xl bg-white border-2 border-[#907E34]">
        <div>
          <h1 className="mb-6 text-4xl font-bold leading-tight">
            Descubre y explora juegos de mesa únicos
          </h1>

          <p className="mb-8 text-lg">
            Explora y descubre juegos de mesa únicos y emocionantes de
            desarrolladores independientes de todo el mundo.
          </p>

          <div className="flex gap-4">
            <Link
              href="/explore"
              className="rounded-lg bg-[#005271] px-6 py-3 text-white transition hover:scale-105"
            >
              Explorar juegos
            </Link>

            <Link
              href="/catalog"
              className="rounded-lg bg-[#091829] px-6 py-3 text-white transition hover:scale-105"
            >
              Ver el catálogo
            </Link>
          </div>
        </div>

        <div className="relative h-64 md:h-auto rounded-xl overflow-hidden">
          <Image
            src="/images/boardgame.jpg"
            alt="Board games illustration"
            fill
            className="object-cover"
          />
        </div>
      </section>

      {/* Sponsored Games */}
      <section className="mb-16 bg-[#F8FAFC] p-8 rounded-2xl">
        <h2 className="mb-10 text-4xl font-bold">
          Prueba nuestra lista seleccionada
        </h2>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {sponsoredGames.map((game) => (
            <GameLink key={game.id} href={`/game/${game.id}`}>
              <GameCard
                id={game.id}
                name={game.name}
                category={game.category}
                age={game.age}
                image={game.image}
                sponsored
                variant="featured"
                rating={game.rating}
              />
            </GameLink>
          ))}
        </div>
      </section>
    </div>
  );
}
