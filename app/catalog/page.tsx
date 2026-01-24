import { getGames } from "@/lib/gamesService";
import { filterGames } from "@/lib/helpers";
import CatalogFilters from "@/components/catalog/CatalogFilters";
import Link from "next/link";
import GameCard from "@/components/game/GameCard";

export default async function CatalogPage({ searchParams }: any) {
  const games = await getGames();

  const filteredGames = filterGames(games, {
    category: searchParams.category,
    age: searchParams.age,
    sponsored: searchParams.sponsored === "true",
    search: searchParams.search,
  });

  const categories = Array.from(new Set(games.map((g) => g.category)));
  const ages = Array.from(new Set(games.map((g) => g.age)));

  return (
    <div className="mx-auto max-w-7xl px-4 py-8">
      <h1 className="mb-6 text-2xl font-bold">Catalog</h1>

      <CatalogFilters categories={categories} ages={ages} />

      {filteredGames.length === 0 ? (
        <p>No games found.</p>
      ) : (
        <ul >
          {
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filteredGames.map((game) => (
                <GameCard
                  key={game.id}
                  id={game.id}
                  name={game.name}
                  category={game.category}
                  age={game.age}
                  image={game.image}
                  sponsored={game.sponsored}
                />
              ))}
            </div>
          }
        </ul>
      )}
    </div>
  );
}
