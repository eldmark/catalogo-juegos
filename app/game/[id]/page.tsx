import React from "react";
import { getGameById } from "@/lib/gamesService";
import { notFound } from "next/navigation";

type GamePageProps = {
  params: {
    id: string;
  };
};

export default async function GamePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const game = await getGameById(id);

  if (!game) {
    notFound();
  }


  return (
    <div className="mx-auto max-w-5xl px-4 py-8">
      <div className="grid gap-8 md:grid-cols-2">
        {/* Image */}
        <div className="flex items-center justify-center rounded-xl bg-white p-6 shadow">
          {game.image ? (
            <img
              src={game.image}
              alt={game.name}
              className="max-h-80 object-contain"
            />
          ) : (
            <div className="text-sm text-gray-500">No image available</div>
          )}
        </div>

        {/* Info */}
        <div>
          <h1 className="mb-4 text-3xl font-bold">{game.name}</h1>

          {game.sponsored && (
            <span className="mb-4 inline-block rounded-full bg-[#907E34] px-3 py-1 text-sm text-white">
              Sponsored
            </span>
          )}

          <p className="mb-6 text-lg">{game.description}</p>

          <div className="mb-6 flex gap-4">
            <span className="rounded-full bg-[#005271] px-3 py-1 text-sm text-white">
              {game.category}
            </span>
            <span className="rounded-full bg-[#091829] px-3 py-1 text-sm text-white">
              {game.age}
            </span>
          </div>
        </div>
      </div>

      {/* Rules */}
      <section className="mt-12">
        <h2 className="mb-4 text-2xl font-semibold">How to play</h2>
        <ul className="list-disc space-y-2 pl-5">
          {game.rules.map((rule, index) => (
            <li key={index}>{rule}</li>
          ))}
        </ul>
      </section>
    </div>
  );
}
