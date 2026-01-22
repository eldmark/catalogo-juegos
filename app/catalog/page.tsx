import { getGames } from "@/lib/gamesService";
import { filterGames } from "@/lib/helpers";
import CatalogFilters  from "@/components/catalog/CatalogFilters";
import Link from "next/link";

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
        <ul className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {filteredGames.map((game) => (
            <li key={game.id} className="rounded-lg bg-white p-4 shadow">
              <h2 className="font-semibold text-black">{game.name}</h2>
              <p className="text-sm text-black">{game.category}</p>
              <p className="text-sm text-black">{game.age}</p>
              <Link
                href={`/game/${game.id}`}
                className="mt-2 inline-block text-sm text-[#005271]"
              >
                View details →
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
