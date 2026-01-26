import Link from "next/link";
import { getGames } from "@/lib/gamesService";
import { filterSponsoredGames } from "@/lib/helpers";
import GameCard from "@/components/game/GameCard";
import TopRatedSlider from "@/components/explore/TopRatedSlider";

export default async function ExplorePage() {
  const games = await getGames();
  const orderedGames = filterSponsoredGames(games);
  const topRatedGames = [...games]
    .filter(g => g.rating >= 4.5)
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 6);
  const budgetGames = games
    .filter(g => g.price <= 30)
    .slice(0, 6);

  const categories = Array.from(new Set(games.map(g => g.category)));
  const ages = Array.from(new Set(games.map(g => g.age)));

  return (
    <div className="mx-auto max-w-7xl px-4 py-8">
      <h1 className="mb-8 text-2xl font-bold">Explorar juegos</h1>


      <section className="mb-12">
        <h2 className="mb-4 text-xl font-semibold">Categorías</h2>
        <div className="flex flex-wrap gap-3 ">
          {categories.map(category => (
            <Link
              key={category}
              href={`/catalog?category=${encodeURIComponent(category)}`}
              className="rounded-full bg-[#005271] px-4 py-1 text-sm text-white  hover:-translate-y-1 hover:shadow-lg hover:bg-[#091829]"
            >
              {category}
            </Link>
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="mb-6 text-xl font-bold text-[#907E34]">
          Juegos patrocinados
        </h2>
        <div className="mb-2 mt-2  border-2 border-[#907E34] p-1 rounded-3xl bg-[#F8FAFC] hover:shadow-lg transition-shadow">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3 bg-[#F8FAFC] p-6 rounded-3xl border-2 border-[#907E34] ">
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
                rating={game.rating}
              />
            ))}
        </div>
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
              className="rounded-full bg-[#091829] px-4 py-1 text-sm text-white hover:-translate-y-1 hover:shadow-lg hover:bg-[#005271]"
            >
              {age}
            </Link>
          ))}
        </div>
      </section>
      <section className="mb-10 mt-12 bg-[#F8FAFC] p-6 rounded-2xl">
        <h2 className="mb-4 text-xl font-bold">
          ⭐ Mejor puntuados
        </h2>
        <TopRatedSlider games={topRatedGames} />
      </section>

      <section className="mb-10 p-6 rounded-2xl bg-[#F8FAFC] p-6">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-xl font-bold">
             Juegos por menos de $30
          </h2>
          <Link
            href="/catalog?maxPrice=30"
            className="text-sm font-semibold text-[#2563EB]"
          >
            Ver todos →
          </Link>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {budgetGames.map(game => (
            <GameCard
              key={game.id}
              id={game.id}
              name={game.name}
              category={game.category}
              age={game.age}
              image={game.image}
              rating={game.rating}
              variant="compact"
            />
          ))}
        </div>
      </section>

    </div>
  );
}
