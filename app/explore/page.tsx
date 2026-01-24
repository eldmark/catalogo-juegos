import Link from "next/link";
import { getGames } from "@/lib/gamesService";
import { filterSponsoredGames } from "@/lib/helpers";
import GameCard from "@/components/game/GameCard";

export default async function ExplorePage() {
  const games = await getGames();
  const orderedGames = filterSponsoredGames(games);

  const categories = Array.from(new Set(games.map(g => g.category)));
  const ages = Array.from(new Set(games.map(g => g.age)));

  return (
    <div className="mx-auto max-w-7xl px-4 py-8">
      <h1 className="mb-8 text-2xl font-bold">Explorar juegos</h1>

      {/* Sponsored */}
      <section className="mb-12">
        <h2 className="mb-4 text-xl font-semibold text-[#907E34]">
          Juegos patrocinados
        </h2>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {orderedGames

            .filter((g) => g.sponsored)
            .map((game) => (
              <GameCard
                key={game.id}
                id={game.id}
                name={game.name}
                category={game.category}
                age={game.age}
                image={game.image}
                sponsored
                variant="compact"
              />
            ))}
        </div>
      </section>

      {/* Categories */}
      <section className="mb-12">
        <h2 className="mb-4 text-xl font-semibold">Categorías</h2>
        <div className="flex flex-wrap gap-3">
          {categories.map(category => (
            <Link
              key={category}
              href={`/catalog?category=${encodeURIComponent(category)}`}
              className="rounded-full bg-[#005271] px-4 py-1 text-sm text-white"
            >
              {category}
            </Link>
          ))}
        </div>
      </section>

      {/* Ages */}
      <section>
        <h2 className="mb-4 text-xl font-semibold">Edades recomendadas</h2>
        <div className="flex flex-wrap gap-3">
          {ages.map(age => (
            <Link
              key={age}
              href={`/catalog?age=${encodeURIComponent(age)}`}
              className="rounded-full bg-[#091829] px-4 py-1 text-sm text-white"
            >
              {age}
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
