import { getGameById, getGames } from "@/lib/gamesService";
import { notFound } from "next/navigation";
import GameClient from "@/components/game/GameClient";

export default async function GamePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const game = await getGameById((await params).id);
  if (!game) notFound();

  const allGames = await getGames();
  const relatedGames = allGames
    .filter(g => g.category === game.category && g.id !== game.id)
    .slice(0, 3);

  return (
    <GameClient
      game={game}
      relatedGames={relatedGames}
    />
  );
}
