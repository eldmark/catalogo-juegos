"use client"

import { useState, useEffect } from "react"
import { useSearchParams } from "next/navigation"
import { getGames } from "@/lib/gamesService"
import { filterGames } from "@/lib/helpers"
import CatalogFilters from "@/components/catalog/CatalogFilters"
import GameCard from "@/components/game/GameCard"

import { sponsorBrands } from "@/data/sponsors"
import { injectSponsors } from "@/components/algorithm/sponsorPlacement"
import { SponsorBanner } from "@/components/SponsorBanner"

export default function CatalogPage() {
  const [games, setGames] = useState<any[]>([])
  const searchParams = useSearchParams()

  const category = searchParams.get("category")
  const age = searchParams.get("age")
  const sponsored = searchParams.get("sponsored") === "true"
  const maxPrice = searchParams.get("maxPrice");
  const rating = searchParams.get("rating");
  const sort = searchParams.get("sort");

  const [search, setSearch] = useState(searchParams.get("search") ?? "")

  useEffect(() => {
    getGames().then(setGames)
  }, [])

  useEffect(() => {
    setSearch(searchParams.get("search") ?? "")
  }, [searchParams])

const filteredGames = filterGames(games, {
  category: category ?? undefined,
  age: age ?? undefined,
  sponsored,
  search,
  maxPrice: maxPrice ?? undefined,
  rating: rating ?? undefined,
  sort: sort ?? undefined,
});


  const categories = Array.from(new Set(games.map(g => g.category)))
  const ages = Array.from(new Set(games.map(g => g.age)))

  const catalogItems = injectSponsors(filteredGames, sponsorBrands, 4)

  return (
    <div
      className="mx-auto max-w-7xl px-4 py-8"
      style={{ minHeight: "100vh" }}
    >
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
              const game = item.data
              return (
                <GameCard
                  key={game.id}
                  id={game.id}
                  name={game.name}
                  category={game.category}
                  age={game.age}
                  image={game.image}
                  sponsored={game.sponsored}
                  rating={game.rating}
                />
              )
            }

            return (
              <SponsorBanner
                key={`sponsor-${index}`}
                sponsor={item.data}
              />
            )
          })}
        </div>
      )}
    </div>
  )
}
