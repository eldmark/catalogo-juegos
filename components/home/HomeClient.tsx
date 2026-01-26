"use client";

import { Key, useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import SponsorModal from "@/components/layout/SponsorModal";
import HeroSlider from "@/components/home/HeroSlider";
import GameCard from "@/components/game/GameCard";
import GameLink from "../navigation/GameLink";


export default function HomeClient({ sponsoredGames }) {
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
      <SponsorModal
        open={showSponsor}
        onClose={() => {
          setShowSponsor(false);
          document.body.style.overflow = "auto";
        }}
      />

      <HeroSlider
        slides={sponsoredGames.map((g: { id: any; name: any; description: any; image: any; }) => ({
          id: g.id,
          name: g.name,
          description: g.description,
          image: g.image,
        }))}
      />

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

      <section className="mb-16 bg-[#F8FAFC] p-8 rounded-2xl">
        <h1 className="mb-10 text-4xl font-bold">
          Prueba nuestra lista seleccionada
        </h1>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {sponsoredGames.map((game: { id: Key | null | undefined; name: string; category: string; age: string; image: string | undefined; rating: number | undefined; }) => (
                
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
