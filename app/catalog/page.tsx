"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { getGames } from "@/lib/gamesService";
import { filterGames } from "@/lib/helpers";
import CatalogFilters from "@/components/catalog/CatalogFilters";
import Link from "next/link";
import GameCard from "@/components/game/GameCard";

export default function CatalogPage() {
  const [games, setGames] = useState<any[]>([]);
  const searchParams = useSearchParams();

  const category = searchParams.get("category");
  const age = searchParams.get("age");
  const sponsored = searchParams.get("sponsored") === "true";
  const [search, setSearch] = useState(searchParams.get("search") ?? "");

  useEffect(() => {
    getGames().then(setGames);
  }, []);

  useEffect(() => {
    setSearch(searchParams.get("search") ?? "");
  }, [searchParams]);

  const filteredGames = filterGames(games, {
    category: category ?? undefined,
    age: age ?? undefined,
    sponsored,
    search,
  });

  const categories = Array.from(new Set(games.map((g) => g.category)));
  const ages = Array.from(new Set(games.map((g) => g.age)));

  return (
    <div className="mx-auto max-w-7xl px-4 py-8" style={{ backgroundColor: '#FFF7ED', minHeight: '100vh' }}>
      <h1 className="mb-6 text-2xl font-bold">Catalog</h1>

      <CatalogFilters categories={categories} ages={ages} search={search} setSearch={setSearch} />

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
