import { getGames } from "@/lib/gamesService";

export default async function CatalogoPage() {
  const juegos = await getGames();

  return (
    <div className="mx-auto max-w-7xl px-4 py-8">
      <h1 className="mb-6 text-2xl font-bold">Catálogo</h1>
      <ul className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {juegos.map((juego) => (
          <li key={juego.id} className="rounded-lg bg-white p-4 shadow">
            <h2 className="font-semibold">{juego.name}</h2>
            <p>{juego.category}</p>
            <p>{juego.age}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
