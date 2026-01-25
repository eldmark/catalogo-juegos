import Link from "next/link";
import { getSponsoredGames } from "@/lib/getSponsoredGames";
import GameCard from "@/components/game/GameCard";
import HeroSlider from "@/components/home/HeroSlider";
import Image from "next/image";
export default async function HomePage() {
  const sponsoredGames = await getSponsoredGames();

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 space-y-16">
      {/* Hero */}
      <HeroSlider
        slides={sponsoredGames.map((g) => ({
          id: g.id,
          name: g.name,
          description: g.description,
          image: g.image,
        }))}
      />

      <section className="mb-16 grid gap-8 md:grid-cols-2 p-8 rounded-xl bg-white border-2 border-[#907E34]" >
        <div>
          <h1 className="mb-6 text-4xl font-bold leading-tight">
            Descubre y explora juegos de mesa únicos
          </h1>
          <p className="mb-8 text-lg">
            Explora y descubre juegos de mesa únicos y emocionantes de
            desarrolladores independientes de todo el mundo. Encuentra tu
            próximo juego favorito hoy mismo.
          </p>

          <div className="flex gap-4">
            <Link
              href="/explore"
              className="rounded-lg bg-[#005271] px-6 py-3 text-white"
            >
              Explorar juegos
            </Link>
            <Link
              href="/catalog"
              className="rounded-lg bg-[#091829] px-6 py-3 text-white"
            >
              Ver el catálogo
            </Link>
          </div>
        </div>

        {/* Hero visual */}
        <div className="flex items-center justify-center rounded-xl bg-white p-8 shadow relative h-64 md:h-auto">
          <Image
            src="/images/boardgame.jpg"
            alt="Board games illustration"
            layout="fill"
          />
        </div>
      </section>

      {/* Sponsored */}
      <section>
        <h1 className="mb-10 text-4xl font-bold text-[#000000]">
          Prueba nuestra lista seleccionada
        </h1>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">

          {sponsoredGames.map((game) => (
            <GameCard
              key={game.id}
              id={game.id}
              name={game.name}
              category={game.category}
              age={game.age}
              image={game.image}
              sponsored
              variant="featured"
            />

          ))}
        </div>
      </section>
    </div>
  );
}
