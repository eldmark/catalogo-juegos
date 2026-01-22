import { games, Game } from "@/data/games";
import { fetchSimulated } from "./fetchSimulated";

export async function getGames(): Promise<Game[]> {
  return fetchSimulated(() => games);
}

export async function getGameById(id: string): Promise<Game | null> {
  return fetchSimulated(() => {
    const juego = games.find((j) => j.id === id);
    return juego ?? null;
  });
}
