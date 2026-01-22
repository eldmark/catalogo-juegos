import Link from "next/link";
import { getGames } from "@/lib/gamesService";
import { filterSponsoredGames } from "@/lib/helpers";

export default async function ExplorarPage() {
  const games = await getGames();
  const filteredGames = filterSponsoredGames(games);

  const categorias = Array.from(new Set(games.map(j => j.category)));
  const edades = Array.from(new Set(games.map(j => j.age)));
  return (
    <div className="mx-auto max-w-7xl px-4 py-8">
      <h1 className="mb-8 text-2xl font-bold">Explorar juegos</h1>

      {/* Patrocinados */}
      <section className="mb-12">
        <h2 className="mb-4 text-xl font-semibold text-[#907E34]">
          Juegos patrocinados
        </h2>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {filteredGames
            .filter(j => j.sponsored)
            .map(game => (
              <div
                key={game.id}
                className="rounded-lg bg-white p-4 shadow"
              >
                <h3 className="font-semibold">{game.name}</h3>
                <p className="text-sm">{game.category}</p>
                <Link
                  href={`/catalogo?patrocinado=true`}
                  className="mt-2 inline-block text-sm text-[#005271]"
                >
                  Ver más similares →
                </Link>
              </div>
            ))}
        </div>
      </section>

      {/* Categorías */}
      <section className="mb-12">
        <h2 className="mb-4 text-xl font-semibold">Categorías</h2>
        <div className="flex flex-wrap gap-3">
          {categorias.map(cat => (
            <Link
              key={cat}
              href={`/catalogo?categoria=${encodeURIComponent(cat)}`}
              className="rounded-full bg-[#005271] px-4 py-1 text-sm text-white"
            >
              {cat}
            </Link>
          ))}
        </div>
      </section>

      {/* Edades */}
      <section>
        <h2 className="mb-4 text-xl font-semibold">Edades recomendadas</h2>
        <div className="flex flex-wrap gap-3">
          {edades.map(edad => (
            <Link
              key={edad}
              href={`/catalogo?edad=${encodeURIComponent(edad)}`}
              className="rounded-full bg-[#091829] px-4 py-1 text-sm text-white"
            >
              {edad}
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
