import Link from "next/link";
import { getSponsoredGames } from "@/lib/getSponsoredGames";

export default async function HomePage() {
  const sponsoredGames = await getSponsoredGames();

  return (
    <div className="mx-auto max-w-7xl px-4 py-12">

      <section className="mb-16 grid gap-8 md:grid-cols-2">
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
        <div className="flex items-center justify-center rounded-xl bg-white p-8 shadow">
          <span className="text-sm text-gray-500">
            Hero image / illustration
          </span>
        </div>
      </section>

      {/* Sponsored */}
      <section>
        <h2 className="mb-6 text-2xl font-semibold text-[#907E34]">
          Sponsored games
        </h2>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {sponsoredGames.map((game) => (
            <div
              key={game.id}
              className="rounded-lg text-black bg-white p-4 shadow"
            >
              <h3 className="mb-2 font-semibold">{game.name}</h3>
              <p className="mb-4 text-sm">{game.description}</p>
              <Link
                href={`/game/${game.id}`}
                className="text-sm text-[#005271]"
              >
                Learn more →
              </Link>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
