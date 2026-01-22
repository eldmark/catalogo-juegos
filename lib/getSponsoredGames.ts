import { Game } from "@/data/games";
import { getGames } from "./gamesService";

export async function getSponsoredGames(): Promise<Game[]> {
  const games = await getGames();
  return games.filter((g) => g.sponsored);
}
