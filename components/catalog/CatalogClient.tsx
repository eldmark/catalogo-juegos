"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

import { getGames } from "@/lib/gamesService";
import { filterGames } from "@/lib/helpers";

import CatalogFilters from "@/components/catalog/CatalogFilters";
import GameCard from "@/components/game/GameCard";
import GameLink from "@/components/navigation/GameLink";

import { sponsorBrands } from "@/data/sponsors";
import { injectSponsors } from "@/components/algorithm/sponsorPlacement";
import { SponsorBanner } from "@/components/SponsorBanner";
import { Game } from "@/data/games";

/* ---------------------------------- */
/* Types */
/* ---------------------------------- */

type CatalogItem =
  | { type: "game"; data: Game }
  | { type: "sponsor"; data: any };

/* ---------------------------------- */
/* Component */
/* ---------------------------------- */

export default function CatalogClient() {
  const searchParams = useSearchParams();

  const [games, setGames] = useState<Game[]>([]);
  const [search, setSearch] = useState(
    searchParams.get("search") ?? ""
  );

  const category = searchParams.get("category") ?? undefined;
  const age = searchParams.get("age") ?? undefined;
  const sponsored = searchParams.get("sponsored") === "true";
  const maxPrice = searchParams.get("maxPrice") ?? undefined;
  const rating = searchParams.get("rating") ?? undefined;
  const sort = searchParams.get("sort") ?? undefined;

  /* ---------------------------------- */
  /* Fetch games (client-side) */
  /* ---------------------------------- */
  useEffect(() => {
    getGames().then(setGames);
  }, []);

  /* ---------------------------------- */
  /* Sync search param */
  /* ---------------------------------- */
  useEffect(() => {
    setSearch(searchParams.get("search") ?? "");
  }, [searchParams]);

  /* ---------------------------------- */
  /* Filtering */
  /* ---------------------------------- */
  const filteredGames = filterGames(games, {
    category,
    age,
    sponsored,
    search,
    maxPrice,
    rating,
    sort,
  });

  /* ---------------------------------- */
  /* Filters data */
  /* ---------------------------------- */
  const categories = Array.from(
    new Set(games.map((g) => g.category))
  );

  const ages = Array.from(
    new Set(games.map((g) => g.age))
  );

  /* ---------------------------------- */
  /* Inject sponsors */
  /* ---------------------------------- */
  const catalogItems: CatalogItem[] = injectSponsors(
    filteredGames,
    sponsorBrands,
    4
  );

  /* ---------------------------------- */
  /* Render */
  /* ---------------------------------- */
  return (
    <div className="mx-auto max-w-7xl px-4 py-8 min-h-screen">
      <h1 className="mb-6 text-5xl font-bold">
        Catálogo
      </h1>

      <CatalogFilters
        categories={categories}
        ages={ages}
        search={search}
        setSearch={setSearch}
      />

      {catalogItems.length === 0 ? (
        <p>No games found.</p>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {catalogItems.map((item, index) => {
            if (item.type === "game") {
              const game = item.data;

              return (
                <GameLink
                  key={game.id}
                  href={`/game/${game.id}`}
                >
                  <GameCard
                    id={game.id}
                    name={game.name}
                    category={game.category}
                    age={game.age}
                    image={game.image}
                    sponsored={game.sponsored}
                    rating={game.rating}
                  />
                </GameLink>
              );
            }

            return (
              <SponsorBanner
                key={`sponsor-${index}`}
                sponsor={item.data}
              />
            );
          })}
        </div>
      )}
    </div>
  );
}
