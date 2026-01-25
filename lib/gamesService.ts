import { games, Game } from "@/data/games";
import { fetchSimulated } from "./fetchSimulated";

function randomDelay(min = 400, max = 1200) {
  const time = Math.floor(Math.random() * (max - min + 1)) + min;
  return new Promise((res) => setTimeout(res, time));
}

export async function getGameById(id: string) {
  await randomDelay();

  const game = games.find((g) => g.id === id);
  return game ?? null;
}
export async function getGames(): Promise<Game[]> {
  return fetchSimulated(() => games);
}


